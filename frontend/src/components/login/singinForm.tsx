'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function SingInForm(){
    const {register} = useForm();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
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
            
            <form action="" className="

            ">
                <label htmlFor="email">Email: </label>

                <input type="email"
                id="email"
                className="
                textInput-singInUp
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
                textInput-singInUp
                "
                value={senha}
                placeholder={"Digite sua senha aqui"}
                onChange={(e)=>setSenha(e.target.value)}
                />
                
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
