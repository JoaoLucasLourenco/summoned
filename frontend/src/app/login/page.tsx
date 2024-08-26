'use client';
import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <main className="
        flex
        min-h-screen
        flex-col 
        items-center 
        justify-between 
        py-24
        ">
            
        <div className="
        flex
        flex-col
        lg:w-1/3
        w-10/12
        ">

            <h1 className="
            p-10
            text-center
            text-xl
            ">
                Login {email} {senha}
            </h1>
            
            <form action="" className="

            ">
                <label htmlFor="email">Email: </label>

                <input type="email"
                id="email"
                className="
                w-full
                rounded-lg
                p-2
                text-text
                border
                my-4
                "
                value={email}
                placeholder={"Digite seu email aqui"}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <label htmlFor="senha" className="
                
                ">
                    Senha: </label>
                <a 
                href=""
                
                className="
                float-right
                mr-2
                text-secondary
                font-bold       
                ">
                    Esqueceu a senha? </a>

                <input type="password"
                id="senha"
                className="
                w-full
                rounded-lg
                p-2
                text-text
                border
                my-4
                "
                value={senha}
                placeholder={"Digite sua senha aqui"}
                onChange={(e)=>setSenha(e.target.value)}
                />
                
                <button
                className="
                bg-secondary
                w-full
                p-2
                rounded-md
                text-white
                text-lg
                mt-6
                hover:bg-secondary-light
                hover:shadow-md
                "
                >
                    Entrar
                </button>
            </form>
            <p
            className="
            text-center
            my-10
            "
            >
                Ainda não tem conta? 
                
                <a 
                href=""
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