import { useEffect } from 'react'
import { NavigateOptions, URLSearchParamsInit, useSearchParams } from 'react-router-dom'

type SetURLSearchParams = (
  nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit),
  navigateOpts?: NavigateOptions,
) => void

const useQueryParams = (querystring?: string): [URLSearchParams, SetURLSearchParams] => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!querystring) return
    setSearchParams(querystring)
  }, [querystring, setSearchParams])

  return [searchParams, setSearchParams]
}

export default useQueryParams
