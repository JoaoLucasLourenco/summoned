import { loggedIn } from "@/constants";
import { redirect } from "next/navigation";


export default function Dashboard(){
    
    return(
        <>
        {
            loggedIn?<h1>Dashboard</h1>:redirect('/login')
        }
        </>
        
    );
}
