'use client';
import { useRouter } from "next/navigation";
import { usePagination } from "@/hooks/usePagination";
import { useForm } from "react-hook-form";
import SingUpForm from "@/components/register/singupForm";

export default function Register(){
        return <SingUpForm/>;
}
