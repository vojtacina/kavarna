import useSWR from "swr";
export default async (req, res) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error, isValidating} = useSWR('https://www.instagram.com/' + req + '/?__a=1', fetcher)
    return res.json(data)
}