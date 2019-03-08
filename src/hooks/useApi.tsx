import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import React from 'react'

const ApiContext = React.createContext('')
const ApiContextProvider = ({ children, baseURL }) => {
    React.useEffect(() => {
        axios.defaults = {
            baseURL
        }
    }, [baseURL])
    return <ApiContext.Provider value={baseURL}>{children}</ApiContext.Provider>
}

const useGet = (url: string) => {
    const [result, setResult] = React.useState<AxiosResponse<any> | undefined>(
        undefined
    )
    const [loading, setLoading] = React.useState<Boolean | undefined>(undefined)
    const baseURL = React.useContext(ApiContext)

    const call = async <Response extends {}>(config: AxiosRequestConfig) => {
        setLoading(true)
        const response: AxiosResponse<Response | any> = await axios.get(
            `${baseURL}${url}`,
            config
        )
        setResult(response)
        setLoading(false)
    }

    return [call, loading, result]
}

const usePost = (url: string) => {
    const [result, setResult] = React.useState<AxiosResponse<any> | undefined>(
        undefined
    )
    const [loading, setLoading] = React.useState<Boolean | undefined>(undefined)
    const baseURL = React.useContext(ApiContext)
    const call = async <D, Response extends {}>(data: D, config: AxiosRequestConfig) => {
        setLoading(true)
        const response: AxiosResponse<Response | any> = await axios.post(
            `${baseURL}${url}`,
            data,
            config
        )
        setResult(response)
        setLoading(false)
    }

    return [call, loading, result]
}
