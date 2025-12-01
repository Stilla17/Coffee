import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { handleSubmit, register, reset } = useForm()
    const [registerData, setRegisterData] = useState()

    const onSubmit = (data) => {

        reset()
    }

    return (
        <div className='h-screen flex items-center'>
            <div className='p-12 text-center shadow w-2/5 mx-auto rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='block mx-auto border border-gray-400 px-2 py-1 rounded-md mb-2'
                        type="text"
                        placeholder='Enter your login'
                        {...register("login", { required: true })} />
                    <input
                        className='block mx-auto border border-gray-400 px-2 py-1 rounded-md mb-2'
                        type="password"
                        placeholder='Enter your password'
                        {...register("password", { required: true })} />
                    <button className='bg-sky-500 text-white p-2 rounded-md'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login