'use client';

import { useNavigation } from "@/hooks/useNavigation";
import { usePathname } from "next/navigation";

export default function Header(){
    const links = useNavigation();
    const currentPath = usePathname();
    return(
        <>
            <header
            className="
            p-4
            w-full
            "
            >
                    <nav className="
                    flex
                    items-center
                    ">
                        <a href="/"
                        className="
                        sm:px-10
                        px-6
                        py-4
                        m-0
                        "
                        >
                            Home
                        </a>
                        <ul className="
                        flex
                        gap-3
                        w-full
                        justify-end
                        ">
                            {
                                links.map((link)=>(
                                    <li key={link.id}
                                    className={
                                        'float-right'
                                    }
                                    >
                                        <a href={link.route}
                                        data-active={currentPath !== '/'}
                                        className={
                                            'data-[active=true]:hidden '+
                                            'rounded-full py-4 px-10 border border-secondary hover:bg-secondary hover:text-white'
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
