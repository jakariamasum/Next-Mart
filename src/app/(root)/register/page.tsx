"use client";
import { FieldValues } from "react-hook-form";

import Image from "next/image";
import Link from "next/link";
import registerImage from "../../../assets/register.jpg";
import UXForm from "@/components/form/UXForm";
import UXInput from "@/components/form/UXInput";
import UXImage from "@/components/form/UXImage";
import Button from "@/components/ui/Button";
import { useUserRegistration } from "@/hooks/auth.hooks";
import UXSelect from "@/components/form/UXSelect";

const Register = () => {
  const { mutate: handleRegister } = useUserRegistration();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    handleRegister(data);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full mt-4">
      <div className="hidden sm:block">
        <Image
          className="max-w-[600px] mx-auto mt-16"
          src={registerImage}
          alt=""
        />
      </div>

      <div className="bg-white mx-auto md:mx-0 flex flex-col justify-center max-w-[300px] md:max-w-[500px]">
        <UXForm onSubmit={onSubmit}>
          <h2 className="text-4xl text-gray-800 font-bold text-center">
            Register
          </h2>
          <div className="flex flex-col text-gray-800 py-2">
            <UXInput
              type="text"
              label="Name"
              name="name"
              placeholder="John Doe"
            />
            <UXInput
              type="email"
              label="Email"
              name="email"
              placeholder="john@doe.com"
            />
            <UXInput
              type="password"
              label="Password"
              name="password"
              placeholder="*****"
            />
            <UXImage
              name="image"
              label="Profile Photo (optional)"
              required={false}
            />
            <UXSelect
              name="role"
              label="Select Role"
              options={[
                { value: "USER", label: "User" },
                { value: "ADMIN", label: "Admin" },
                { value: "VENDOR", label: "Vendor" },
              ]}
            />
          </div>

          <Button>Register</Button>
          <p className="text-gray-800 text-center">
            Already have an account? Please
            <Link href="/login" className="text-primary ml-2">
              Log In
            </Link>
          </p>
        </UXForm>
      </div>
    </div>
  );
};

export default Register;
