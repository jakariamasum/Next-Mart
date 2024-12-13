import { IInput } from "@/types/form.types";
import { useFormContext } from "react-hook-form";

const UXInput = ({
  name,
  label,
  type,
  required = true,
  placeholder,
  ...props
}: IInput) => {
  const { register } = useFormContext();

  return (
    <div className="mt-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        required={required}
        {...props}
      />
    </div>
  );
};

export default UXInput;
