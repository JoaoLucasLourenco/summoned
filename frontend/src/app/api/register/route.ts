import IUserRegisterProps from "@/types/userRegister";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const body = (await request.json()) as IUserRegisterProps;
    const {email, password, password2} = body;
    const emailReg = RegExp('^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$');
    if(!email || !password || !password2){
        return NextResponse.json({error: 'Missing required fields'}, {status: 400});
    }
    if(password!==password2){
        return NextResponse.json({error: 'Diferent passwords'}, {status: 400});
    }
    if(!emailReg.test(email)){
        return NextResponse.json({error: 'Invalid email'}, {status: 400});
    }
    
}