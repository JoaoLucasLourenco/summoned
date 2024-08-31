'use client';
import { useRouter } from "next/navigation";
import { usePagination } from "@/hooks/usePagination";

export default function Register(){
    
    const router = useRouter();
    const {indice,
        proximo,
        atualStep,
        anterior} = usePagination();

    
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