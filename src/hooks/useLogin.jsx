import { useEffect, useState } from "react"
import { getMe } from "../services/auth/AuthServices"

export const useLogin = () => {
    const [name, setName] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            getMe((data) => {
                setName(data.name)
            })
        }else{
            window.location.href = '/login'
        }
    }, [])
    return name
}