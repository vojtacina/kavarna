import useSWR from 'swr'
import Loader from 'react-loader-spinner';
import utilStyles from '../styles/utils.module.scss';
import { Textfit } from 'react-textfit';
import ExampleEvent from '../components/ExampleEvent';

function Loading() {
    return (<div className={utilStyles.facesContainer}>
        <div className={utilStyles.facesFace}>
            <Loader type="TailSpin" color="black" height={64} width={64}/>
            <div class={utilStyles.text}>
                <Textfit max="20" mode="single">
                    ...
                </Textfit>
            </div>
        </div>

    </div>)
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
        <div onClick={ExampleEvent} key={name} className="block p-2 text-center hover:bg-white cursor-pointer hover:bg-opacity-30 rounded-lg duration-200">
            <img className={utilStyles.line} src={img_url}></img>
            <div class={utilStyles.text}>
                <Textfit max="20" mode="single">
                    {name}
                </Textfit>
            </div>
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

export default PeopleBlock