'use client';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import { userValidatorSchema } from '@/types/validation/validation';

export default function SingUpForm(){
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(userValidatorSchema)
    });
    
    function submit(data:object){
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
                Cadastro
            </h1>
            <form onSubmit={handleSubmit(submit)}  className="

            ">

                

                <label htmlFor={'email'}>Email: </label>
                <input
                className="
                textInput-singInUp
                "
                type='email'
                id='email'
                placeholder='Digite seu email aqui'
                {...register('email')}
                required
                />
                <p className='text-error'>
                    {errors.email?.message}
                </p>
                <label htmlFor={'senha'}>Senha: </label>
                <input
                className="
                textInput-singInUp
                "
                type='password'
                id='senha'
                placeholder='Digite sua senha aqui'
                {...register('senha')}
                required
                />
                <p className='text-error'>
                    {errors.senha?.message}
                </p>
                <label htmlFor={'confirma-senha'}>Confirmar senha: </label>
                <input
                className="
                textInput-singInUp
                "
                type='password'
                id='confirma-senha'
                placeholder='Repita sua senha aqui'
                
                {...register('confirmaSenha')}
                required
                />
                <p className='text-error'>
                    {errors.confirmaSenha?.message}
                </p>
                <button
                type='submit'
                className="
                button-singIn
                "
                >
                    Criar conta
                </button>

            </form>
            <p
            className="
            text-center
            my-10
            "
            >
                Já tem tem conta?
                <a 
                href={'/login'}
                className="
                text-secondary
                font-bold
                mx-1
                hover:text-secondary-light
                "> 
                Entrar
                </a>
            </p>
        </div>
        </main>
        
    );
}
