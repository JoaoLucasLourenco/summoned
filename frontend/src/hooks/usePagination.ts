import { useState } from "react";

export function usePagination () : any {
    
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
        {
            id : 4,
            name:'senha',
            nome : 'Confirmar senha',
            placeholder: 'Confirme sua senha',
            tipo:'password',
            value:senha,
            setState:setSenha
        }
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

    return {indice,
        proximo,
        atualStep,
        anterior
    }
    ;
}