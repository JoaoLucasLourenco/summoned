import { useState } from "react";
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
  const [inputType, setInputType] = useState(type); // Gerencia o tipo de input (password/text)

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          {icon}
        </div>
        <input
          type={inputType}  // Usa o estado 'inputType'
          id={name}
          className="block w-full p-4 ps-10 text-sm text-text border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none focus:ring-secondary"
          placeholder={placeholder}
          {...register(name)}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
            onClick={togglePasswordVisibility}
          >
            {inputType === 'password' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                <path d="m2 2 20 20" />
              </svg>
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default InputSingUpInForm;
