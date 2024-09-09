'use client';
import { useRef, useState } from "react";

export default function SingUpForm(){
    const email = useRef<HTMLInputElement>(null);
    const senha = useRef<HTMLInputElement>(null);
    const confirmaSenha = useRef<HTMLInputElement>(null);
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
            <form action=''  className="

            ">

                

                <label htmlFor={'email'}>Email: </label>
                <input
                className="
                textInput-singInUp
                "
                ref={email}
                type='email'
                id='email'
                placeholder='Digite seu email aqui'
                />

                <label htmlFor={'senha'}>Senha: </label>
                <input
                className="
                textInput-singInUp
                "
                ref={senha}
                type='password'
                id='senha'
                placeholder='Digite sua senha aqui'
                />
                
                <label htmlFor={'confirma-senha'}>Confirmar senha: </label>
                <input
                className="
                textInput-singInUp
                "
                ref={senha}
                type='password'
                id='confirma-senha'
                placeholder='Repita sua senha aqui'
                />

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
