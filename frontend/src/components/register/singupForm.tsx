'use client';
import { useRouter } from "next/navigation";
import { usePagination } from "@/hooks/usePagination";
import { useForm } from "react-hook-form";

export default function SingUpForm(){
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const {indice,
        proximo,
        atualStep,
        anterior} = usePagination();

    function handleSingup(data:any):any{

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
            <form action=''  className="

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

                {
                    indice?
                    <button
                    type="button"
                    className="
                    button-singUp-back
                    "
                    onClick={()=>{anterior();}}
                    >
                        Voltar  
                    </button>:
                    <>  </>
                }
                
                
                <button
                type='button'
                className="
                button-singUp-next
                "
                onClick={()=>{proximo();}}
                >
                    {atualStep.nome!=='Confirmar senha'?'Avançar':'Criar conta'}
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
