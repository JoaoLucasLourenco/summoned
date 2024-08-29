import { useNavigation } from "@/hooks/useNavigation";

export default function Header(){
    const links = useNavigation();
    return(
        <>
            <header
            className="
            p-4
            bg-secondary
            w-full
            "
            >
                    <nav className="
                    flex
                    items-center
                    ">
                        <a href="/"
                        className="
                        px-10
                        py-4
                        bg-paper
                        m-0
                        "
                        >
                            Home
                        </a>
                        <ul className="
                        flex
                        gap-6
                        w-full
                        justify-end
                        ">
                            {
                                links.map((link)=>(
                                    <li key={link.id}
                                    className={
                                        link.id===1?'hidden sm:block float-right':'float-right block'
                                    }
                                    >
                                        <a href={link.route}
                                        className={
                                            link.id===2?'px-6 py-4 rounded-full bg-primary hover:bg-primary-contrast'
                                            :'px-6 py-4 rounded-full text-white border border-secondary'+
                                            ' hover:border-primary'
                                        }
                                        >{link.name}</a>
                                    </li>
                                ))  
                            }
                            
                            
                        </ul>
                    </nav>
                </header>
        </>
    );
}
