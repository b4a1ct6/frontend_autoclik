'use server'
import axios from "axios"
import { cookies } from 'next/headers'
import { setCookie, deleteCookie, hasCookie, getCookie, getCookies } from 'cookies-next';

export async function Login(prevState:any, formData:any) {
    try {
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/auth/local`,{
                identifier: email,
                password
            }
        )
        setCookie('token',response.data.jwt,{ cookies})
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            let errorMessage = ''
            if(error.response && error.response.data.error.message){
                errorMessage = error.response.data.error.message
            }
            return { message: errorMessage || 'Login fail' };
        } else {
            // Handling other types of errors
            console.log('non-axios error', error);
            return { message: 'Login fail' };
        }
    }

    // redirect('/')
}