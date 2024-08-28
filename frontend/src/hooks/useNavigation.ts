export function useNavigation(){

    const links = [
        {
            id: 1,
            name: 'Entrar',
            route: '/login',
            userAllowed: [1,2,3]
        },
        {
            id: 2,
            name: 'Criar conta',
            route: '/register',
            userAllowed: [1,2,3]
        }
    ];
    return links;
}