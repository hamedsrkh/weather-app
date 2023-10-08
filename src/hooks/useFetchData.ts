import { useState, useEffect } from 'react'

interface useFetchDataProps<T> {
  data: T | null
  loading: boolean
  error: string | null
}

interface UseFetchDataConfig<T, R> {
  transformResponse?: (data: T) => R
}

export function useFetchData<T, R = T>(
  url: string,
  { transformResponse }: UseFetchDataConfig<T, R> = {}
): useFetchDataProps<R> {
  const [data, setData] = useState<R | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network Error')
      }
      const data = await response.json()
      setData(transformResponse ? transformResponse(data) : data)
    } catch (error: any) {
      setError(error?.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error }
}
