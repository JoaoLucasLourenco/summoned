import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface InputSingUpInFormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  icon: ReactNode;
}

const InputSingUpInForm: React.FC<InputSingUpInFormProps> = ({
  label,
  name,
  type,
  placeholder,
  register,
  icon
}) => {
  return (
    <>
      <label htmlFor={name}>{label} </label>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          {icon}
        </div>
        <input type={type}
          id={name}
          className="block w-full p-4 ps-10 text-sm text-text border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none focus:ring-secondary"
          placeholder={placeholder}
          {...register(name)}
        />

      </div>
    </>
  );
};

export default InputSingUpInForm;
