'use client';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userLoginValidatorSchema } from '@/types/validation/validation';
import InputSingUpInForm from "../register/inputSingUp";
export default function SingInForm(){
    const { reset, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userLoginValidatorSchema)
    });

    function submit(data: object) {
        console.log(data);
    }
    return(
        <main className="
        main-singInUp
        ">
            
        <div className="
        div-singInUp
        ">

            <h1 className="
            p-10
            text-center
            text-xl
            ">
                Login
            </h1>
            
            <form action="" onSubmit={handleSubmit(submit)} className="

            ">
                <InputSingUpInForm
                        label='Email'
                        name='email'
                        placeholder='seu@email.aqui'
                        type='text'
                        register={register}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        }
                    />
                    <div className="error-div">
                        {errors.email?.message}
                    </div>

                    <InputSingUpInForm
                        label='Senha'
                        name='senha'
                        placeholder='Digite sua senha aqui'
                        type='password'
                        register={register}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-lock">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        }
                    />
                    <div className='error-div'>
                        {errors.senha?.message}
                    </div>
                <a 
                href=""
                
                className="
                float-right
                mr-2
                text-secondary
                font-bold       
                ">
                    Esqueceu a senha? </a>

                
                
                <button
                className="
                button-singIn
                "
                >
                    Entrar
                </button>
            </form>
            <p
            className="
            text-center
            mt-10
            "
            >
                Ainda não tem conta? 
                
                <a 
                href={'/register'}
                className="
                text-secondary
                font-bold
                mx-1
                hover:text-secondary-light
                "> 
                 Cadastrar-se
                </a>
            </p>
        </div>

        </main>
    );
}
