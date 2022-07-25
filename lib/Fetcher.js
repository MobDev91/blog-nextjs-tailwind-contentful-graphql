import useSWR from 'swr'

const baseURL = process.env.NEXT_PUBLIC_Base_URL;
console.log(baseURL)
const response = (...args) => fetch(...args).then(res => res.json())
export default function Fetcher(endpoint) {
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)
    return {
      data,
      isLoading: !error && !data,
      isError: error
    }
  }