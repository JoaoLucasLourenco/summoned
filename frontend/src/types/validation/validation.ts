import * as yup from 'yup';

export const userValidatorSchema = yup.object().shape({
    email: yup.string().email('Insira um email válido!').required('O campo email é obrigatório!'),
    senha: yup.string().min(6,'A senha deve ter pelo menos 6 caracteres!')
    .required('O campo senha é obrigatório!')
    .max(20,'A senha deve ter no máximo 10 caracteres!'),
    confirmaSenha: yup.string()
    .required('É necessário confirmar a senha!')
    .oneOf([yup.ref('senha')], 'As senhas não são iguais!')
});