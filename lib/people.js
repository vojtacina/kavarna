import {stringify} from "gray-matter";
import utilStyles from "../styles/utils.module.scss";

export function PeopleService() {
    if (service == null) {
        return <div>Loading</div>
    }
    else {service.map(({photo_url}) => (
        <div className={utilStyles.facesFace}>
            <img className={utilStyles.line} src={photo_url}></img>
        </div>
    ))}

}

export function ActivePeopleAPI(what) {

    const json = {
        "service": [
            {
                name: 'Klára',
                photo_url: '/images/service/klara.jpg'
            },
            {
                name: 'Bety',
                photo_url: '/images/service/bety.jpg'
            }],
        "customers": [
            {
                name: 'Jiří',
                photo_url: '/images/profile.jpg'
            },
            {
                name: 'Pája',
                photo_url: '/images/profile.jpg'
            }]
    }

    return json[what]

}