'use client';
import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
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
                Cadastro {nome}
            </h1>
            
            <form action="" className="

            ">
                <label htmlFor="name">Nome: </label>

                <input type="text"
                id="name"
                className="
                w-full
                rounded-lg
                p-2
                text-text
                border
                my-4
                "
                value={nome}
                placeholder={"Digite seu nome aqui"}
                onChange={(e)=>setNome(e.target.value)}
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
                    Próximo
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
                href=""
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