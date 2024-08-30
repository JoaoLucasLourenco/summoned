export function useNavigation(){

    const links = [
        {
            id: 1,
            name: 'Entrar',
            route: '/login',
            userAllowed: [1,2,3]
        }
    ];
    return links;
}