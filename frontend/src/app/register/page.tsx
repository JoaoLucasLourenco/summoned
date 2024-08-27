'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [indice, setIndice] = useState(0);
    const pagination = [
        {
            id : 1,
            name:'name',
            nome : 'Nome',
            placeholder: 'Digite seu nome aqui',
            tipo:'text',
            value:nome,
            setState:setNome
        },
        {
            id : 2,
            name:'email',
            nome : 'Email',
            placeholder: 'Digite seu email aqui',
            tipo:'email',
            value:email,
            setState:setEmail
        },
        {
            id : 3,
            name:'senha',
            nome : 'Senha',
            placeholder: 'Digite sua senha aqui',
            tipo:'password',
            value:senha,
            setState:setSenha
        },
    ];

    const proximo = () =>{
        if(indice<pagination.length-1){;
            setIndice(indice+1);
        }
    };

    const anterior = () =>{
        if(indice>0){
            setIndice(indice-1);
        }
    };
    const atualStep = pagination[indice];
    const router = useRouter();




    
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
            
            <form action="" className="

            ">
                
                
                <label htmlFor={atualStep.name}>{atualStep.nome}: </label>
                <input
                className="
                textInput-singInUp
                "
                type={atualStep.tipo}
                id={atualStep.name}
                value={atualStep.value}
                placeholder={atualStep.placeholder}
                onChange={(e)=>atualStep.setState(e.target.value)}
                />


                <button
                type="button"
                className="
                button-singUp-back
                "
                onClick={()=>{anterior();}}
                >
                    Voltar  
                </button>
                
                <button
                type="button"
                className="
                button-singUp-next
                "
                onClick={()=>{proximo();}}
                >
                    Avançar
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
        </main>
        
    );
}