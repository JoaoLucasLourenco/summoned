'use client';
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [singPage, setSingPage] = useState('Nome');
    const router = useRouter();



    const handleNext = () =>{
        switch(singPage){
            case 'Nome':
                nome!= 'Joj'?
                toast.error("Nome inválido!"):
                setSingPage('Email');
                break;
            case 'Email':
                setSingPage('Senha');
                break;
            case 'Senha':
                setSingPage('Nome');
                break;
        }
    };
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
                <label htmlFor="name">{singPage}: </label>

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
                value={singPage=='Nome'?nome:singPage=='senha?'?senha:email}
                placeholder={`Digite o ${singPage!='Senha'?'seu':'sua'} ${singPage.toLowerCase()} aqui`}
                onChange={(e)=>{
                    singPage=='Nome'?setNome(e.target.value):
                    singPage=='senha?'?setSenha(e.target.value):
                    setEmail(e.target.value);
                }}
                />



                
                <button
                type="button"
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
                onClick={()=>{handleNext();}}
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
                
                <button 
                onClick={()=>router.push('/login')}
                className="
                text-secondary
                font-bold
                mx-1
                hover:text-secondary-light
                "> 
                Entrar
                </button>
            </p>
        </div>
        <ToastContainer
        stacked
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        /> 
        </main>
        
    );
}