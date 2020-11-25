import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../components/date'
import {getSortedPostsData} from '../lib/posts'
import {ActivePeopleAPI} from "../lib/people";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import useSWR from 'swr'
import {stringify} from "gray-matter";


export default function Home({allPostsData, customers, service}) {


    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/*Sekce Obsluhuje*/}

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Obsluhuje</h2>
                <ul className={utilStyles.list}>
                    <div className={utilStyles.facesContainer}>


                        <PeopleBlock type="service"/>

                    </div>

                </ul>
            </section>

            {/*Sekce Hosté*/}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Hosté</h2>
                <ul className={utilStyles.list}>
                    <div className={utilStyles.facesContainer}>
                        <PeopleBlock type="customers"/>
                    </div>
                </ul>
            </section>

            {/*Sekce Novinky*/}

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Novinky</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}

export async function getStaticProps() {

    const allPostsData = getSortedPostsData()
    const customers = null
    const service = null


    // const service = await (JSON.stringify(RenderCustomers)).json()


    return {
        props: {
            allPostsData,
            customers,
            service
        },
    }
}

// export async function getServerSideProps() {
//
//     const allPostsData = getSortedPostsData()
//     const customers =  await ActivePeopleAPI("customers")
//     const service =  await ActivePeopleAPI("service")
//
//
//     // const service = await (JSON.stringify(RenderCustomers)).json()
//
//
//
//     return {
//         props: {
//             allPostsData,
//             customers,
//             service
//         },
//     }
// }

function Service() {
    const { data, error } = useSWR('/api/service', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>success!</div>
}



function PeopleBlock(props) {

    const what = props.type

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isValidating } = useSWR('/api/'+what, fetcher, { refreshInterval: 5000 })

    if (error) return <div>failed to load</div>
    if (!data) return <Loading/>
    console.log(isValidating)
    // return <div>great</div>

    return (<div className={utilStyles.facesContainer}>{data.map(({img_url, name}) => (
        <div key={name} className={utilStyles.facesFace}>
            <img className={utilStyles.line} src={img_url}></img>
            <div class={utilStyles.text}>{name}</div>
        </div>
    ))}</div>)


    /*if (props.data !== null && props.data !== undefined) {

        return (<div className={utilStyles.facesContainer}>{props.data.map(({photo_url, name}) => (
            <div className={utilStyles.facesFace}>
                <img className={utilStyles.line} src={photo_url}></img>
                <div class={utilStyles.text}>{name}</div>
            </div>
        ))}</div>)
    } else return <Loading/>*/

}

function Loading() {
    return (<div className={utilStyles.facesContainer}>
        <div className={utilStyles.facesFace}>
            <Loader type="TailSpin" color="white" height={64} width={64}/>
        </div>

    </div>)
}