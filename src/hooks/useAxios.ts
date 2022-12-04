import axios, { AxiosRequestConfig } from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface UseAxiosParams<T> {
  config?: AxiosRequestConfig<UseAxiosConfigType>
  loadOnStart?: boolean
  delay?: number
  onSuccess?: (data: T) => void
}
interface UseAxiosReturnType<T> {
  loading: boolean
  data: T | undefined
  error: string
  refetch: (refetchConfig: AxiosRequestConfig<UseAxiosConfigType>) => void
}

interface UseAxiosConfigType {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete'
  url: string
  data?: Record<string, any>
  params?: Record<string, any>
}

export const useAxios = <ResponseData>({
  config,
  loadOnStart = true,
  delay = 1500,
  onSuccess,
}: UseAxiosParams<ResponseData>): UseAxiosReturnType<ResponseData> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ResponseData>()
  const [error, setError] = useState('')

  const refetch = (refetchConfig: AxiosRequestConfig<UseAxiosConfigType>) => {
    sendRequest(refetchConfig)
  }

  const sendRequest = useCallback(
    async (config: AxiosRequestConfig<UseAxiosConfigType>) => {
      setLoading(true)

      axios(config)
        .then((response) => {
          setError('')
          const data = response.data
          setData(data)
          if (onSuccess) onSuccess(data)
        })
        .catch((error) => {
          setError(error.message)
        })
        .finally(() => {
          setTimeout(() => setLoading(false), delay)
        })
    },
    [delay, onSuccess]
  )

  useEffect(() => {
    if (loadOnStart && config) sendRequest(config)
    else setLoading(false)
  }, [config, loadOnStart, sendRequest])

  return { loading, data, error, refetch }
}
