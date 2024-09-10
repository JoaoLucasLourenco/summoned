'use client';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userValidatorSchema } from '@/types/validation/validation';
import InputSingUpInForm from './inputSingUp';
export default function SingUpForm() {
    const { reset, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userValidatorSchema)
    });

    function submit(data: object) {
        console.log(data);
    }
    return (
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
                <form onSubmit={handleSubmit(submit)} className="

            ">
                    <InputSingUpInForm
                        label='Email'
                        name='email'
                        placeholder='seu@email.aqui'
                        type='text'
                        register={register}
                    />
                    <div className="error-div">
                        {errors.email?.message}
                    </div>

                    <InputSingUpInForm
                        label='Senha'
                        name='senha'
                        placeholder='Digite sua senha aqui'
                        type='password'
                        register={register}
                    />
                    <div className='error-div'>
                        {errors.senha?.message}
                    </div>


                    <InputSingUpInForm
                        label='Confirme sua senha'
                        name='confirmaSenha'
                        placeholder='Repita sua senha aqui'
                        type='password'
                        register={register}
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
                    <button
                        type='button'
                        onClick={() => reset()}
                        className="
                button-reset
                "
                    >
                        Limpar campos
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
