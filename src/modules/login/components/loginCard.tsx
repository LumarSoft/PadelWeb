"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DarkModeSwitch from "@/shared/components/switchMode/DarkModeSwitch";
import { useFormInput } from "@/shared/hooks/useFormInput";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import {
  facebookLogo,
  googleLogo,
} from "@/shared/providers/ImageLocalProvider";
import {
  loginUserWhitEmailAndPassword,
  loginUserWithGoogle,
} from "@/shared/services/firebase/auth/login/login";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const LoginCard = () => {
  const registerRoute = useRouterHelper().getOneRoute("Registro");
  const router = useRouter();

  const email = useFormInput("");
  const password = useFormInput("");

  const handleLogin = async () => {
    await loginUserWhitEmailAndPassword(email.value, password.value);
    router.push("/");
  };

  const handleGoogle = async () => {
    await loginUserWithGoogle();
    router.push("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 sm:w-9/12 lg:w-4/6 border flex flex-col px-4 rounded-md py-6 gap-8">
        <h3 className="text-center text-2xl font-semibold">Iniciar sesion</h3>
        <div className="w-full flex items-center gap-4">
          <Image
            src={googleLogo}
            alt="Inicio de sesion con Google"
            width={40}
            height={40}
            onClick={handleGoogle}
          />
        </div>
        <Label className="flex flex-col gap-2">
          Correo Electronico
          <Input {...email} />
        </Label>
        <Label className="flex flex-col gap-2">
          Contraseña
          <Input {...password} />
        </Label>
        <p>
          Todavia no tienes una cuenta?{" "}
          {registerRoute && (
            <Link href={registerRoute.path} className="font-bold">
              Registrate
            </Link>
          )}
        </p>
        <Button onClick={handleLogin}>Iniciar Sesion</Button>
      </div>
      <DarkModeSwitch style={"absolute right-10 top-10"} />
    </div>
  );
};
