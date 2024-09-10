import { UseFormRegister } from "react-hook-form";

interface InputSingUpInFormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
}

const InputSingUpInForm: React.FC<InputSingUpInFormProps> = ({
  label,
  name,
  type,
  placeholder,
  register
}) => {
  return (
    <>
      <label htmlFor={name}>{label} </label>
      <input
        className="textInput-singInUp"
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />

    </>
  );
};

export default InputSingUpInForm;
