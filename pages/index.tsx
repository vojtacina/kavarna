import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import PeopleBlock from '../components/PeopleBlock'
import Date from '../components/date'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {getSortedPostsData} from "../lib/posts";
import utilStyles from '../styles/utils.module.scss';


export default function Home({allPostsData, customers, service}) {   

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/*Sekce Obsluhuje*/}

            <section className="p-2 mt-4">
                <h2 className="text-xl font-bold">Obsluhuje</h2>
                <ul className="list-none p-0 m-0">
                    <div className="flex items-start wrap mt-8">
                        <PeopleBlock type="service"/>
                    </div>
                </ul>
            </section>

            {/*Sekce Hosté*/}
            <section className="p-2 mt-4">
                <h2 className="text-xl font-bold">Hosté</h2>
                <ul className="list-none p-0 m-0">
                    <div className="flex items-start wrap mt-8">
                        <PeopleBlock type="customers"/>
                    </div>
                </ul>
            </section>

            {/*Sekce Novinky*/}

            <section className="p-2 mt-4">
                <h2 className="text-xl font-bold mb-4">Novinky</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a className="hover:underline">{title}</a>
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