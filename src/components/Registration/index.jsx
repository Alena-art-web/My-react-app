import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import s from './index.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const Registration = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        }
    } = useForm({
        mode: 'onBlur',
    })

    // if (isAuth) {
    //     return <Navigate to='/' />
    // }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    const onSubmit = async (data) => {
        console.log(data)
        //const values = await dispatch(fetchUserData(data))

        const { email, password } = data
        const values = await firebase.auth().createUserWithEmailAndPassword(email, password) 

        reset()
    }



    return (
        <div className={s.page_login}>
            <div className={s.container}>
                <div className={s.login_block}>
                    <div className={s.title}>
                        <span>Welcome</span>
                        <h1>Create an account</h1>
                    </div>
                    <div className={s.input_block}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p className={s.input_title}>Email</p>
                                {errors?.email &&
                                    <div className={s.error}>{errors?.email?.message || "Error"}</div>
                                }
                                <input
                                    {...register("email", {
                                        required: "Это поле обязательное для заполнения",
                                        pattern: {
                                            value: emailRegex,
                                            message: "Некорректный email"
                                        }
                                    })}
                                />
                            </div>
                            <div>
                                <p className={s.input_title}>Password</p>
                                {errors?.password &&
                                    <div className={s.error}>{errors?.password?.message || "Error"}</div>
                                }
                                <input type="password"
                                    {...register("password", {
                                        required: "Это поле обязательное для заполнения",
                                        minLength: {
                                            value: 5,
                                            message: "Минимум 5 символов"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Максимум 10 символов"
                                        }
                                    })}
                                />
                            </div>

                            <div className={s.button_container}>
                                <button
                                    type='submit'
                                    className={s.button}
                                    disabled={!isValid}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    <p>Do you have an account? <Link to='/login'>Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Registration