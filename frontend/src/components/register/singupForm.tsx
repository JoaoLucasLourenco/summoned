'use client';
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import { userValidatorSchema } from '@/types/validation/validation';
import TextField from '@mui/material/TextField';

export default function SingUpForm(){
    const {control, register, handleSubmit, formState:{errors}} = useForm({
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
                type='text'
                id='email'
                placeholder='Digite seu email aqui'
                {...register('email')}
                />
                <div className='error-div'>
                    {errors.email?.message}
                </div>


                <label htmlFor={'senha'}>Senha: </label>
                <input
                className="
                textInput-singInUp
                "
                type='password'
                id='senha'
                placeholder='Digite sua senha aqui'
                {...register('senha')}
                />
                <div className='error-div'>
                    {errors.senha?.message}
                </div>


                <label htmlFor={'confirma-senha'}>Confirmar senha: </label>
                <input
                className="
                textInput-singInUp
                "
                type='password'
                id='confirma-senha'
                placeholder='Repita sua senha aqui'
                
                {...register('confirmaSenha')}
                />
                <div className='error-div'>
                    {errors.confirmaSenha?.message}
                </div>


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
