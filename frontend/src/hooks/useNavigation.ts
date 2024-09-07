export function useNavigation(){

    const links = [
        {
            id: 1,
            name: 'Dashboard',
            route: '/dashboard',
            userAllowed: [1,2,3]
        },
        {
            id: 2,
            name: 'Amigos',
            route: '/dashboard',
            userAllowed: [1,2,3]
        },
        {
            id: 3,
            name: 'Fichas',
            route: '/dashboard',
            userAllowed: [1,2,3]
        },
    ];
    return links;
}