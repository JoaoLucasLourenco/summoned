'use client';

import { useNavigation } from "@/hooks/useNavigation";
import { usePathname } from "next/navigation";
import { MedievalSharp } from "next/font/google";

const medievalSharp = MedievalSharp({ weight: "400" , subsets:["latin"]});
export default function Header(){
    
    const links = useNavigation();
    const currentPath = usePathname();
    return(
        <>
            <header
            className="
            p-4
            "
            >
                    <nav className="
                    text-sm
                    flex
                    items-center
                    ">
                        <a href="/"
                        className={"sm:px-10 px-4 py-4 m-0 "+medievalSharp.className}
                        >
                        SUMMODED
      
                        </a>
                        <ul
                        className="
                        flex
                        justify-center
                        w-full
                        gap-4
                        m-auto
                        "
                        >
                            {
                                links.map((link)=>(
                                    <li key={link.id}>
                                        <a href={link.route}
                                        data-hidden={currentPath!=='/dashboard'}
                                        data-active={currentPath==link.route}
                                        className={
                                            'data-[hidden=true]:hidden data-[active=true]:border-b-secondary'+
                                            ' rounded py-4 px-10 hover:bg-secondary '
                                        }
                                        
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div
                        className="
                        flex
                        justify-end
                        "
                        >
                            <a href={'/login'}
                                    data-active={currentPath !== '/'}
                                    className={
                                        'data-[active=true]:hidden '+
                                        'rounded-full py-4 px-10 border border-secondary hover:bg-secondary hover:text-white'
                                    }
                            >Entrar</a>
                        </div>
                        
                    </nav>
                </header>
        </>
    );
}
