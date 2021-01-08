import useSWR from "swr";

export function FetchIg(username) {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isValidating } = useSWR('https://www.instagram.com/'+username+'/?__a=1', fetcher)
    return data
}