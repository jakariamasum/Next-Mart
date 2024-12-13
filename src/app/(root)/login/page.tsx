"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import loginImage from "../../../assets/login.png";
import UXForm from "@/components/form/UXForm";
import UXInput from "@/components/form/UXInput";
import Button from "@/components/ui/Button";
import { FieldValues } from "react-hook-form";
import { useUserLogin } from "@/hooks/auth.hooks";

const Login = () => {
  const { mutate: handleLogin } = useUserLogin();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    handleLogin(data);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block md:mt-28">
        <Image
          className="w-full h-96 object-cover"
          src={loginImage}
          alt="login"
        />
      </div>

      <div className=" flex flex-col justify-center ">
        <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 shadow-2xl px-8">
          <UXForm onSubmit={onSubmit}>
            <h2 className="text-4xl text-gray-800 font-bold text-center">
              Welcome Back!!
            </h2>
            <div className="flex flex-col black py-2">
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
                placeholder="******"
              />
            </div>

            <Button>Log In</Button>
          </UXForm>
          <p className="text-gray-800 text-center">
            Don&lsquo;t have an account? Please
            <Link href="/register" className="ml-2 text-primary">
              Register
            </Link>
          </p>
          <div className="divider text-center my-1">OR</div>
          <button className="w-full flex justify-center items-center py-2 border  bg-success text-white hover:bg-primary">
            <span className="mr-4 text-green-600">
              <FaGoogle />
            </span>
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
