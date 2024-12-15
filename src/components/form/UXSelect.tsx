import { ISelect } from "@/types/form.types";
import { useFormContext } from "react-hook-form";

const UXSelect = ({
  label,
  name,
  options,
  required = true,
  ...props
}: ISelect) => {
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
      <select
        {...register(name)}
        id={name}
        required={required}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UXSelect;
