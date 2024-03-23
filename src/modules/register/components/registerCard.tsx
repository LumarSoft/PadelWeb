"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DarkModeSwitch from "@/shared/components/switchMode/DarkModeSwitch";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useFormInput } from "@/shared/hooks/useFormInput";
import {
  registerUser,
  registerUserWithGoogle,
} from "@/shared/services/firebase/auth/register/register";
import Image from "next/image";
import { googleLogo } from "@/shared/providers/ImageLocalProvider";

export const RegisterCard = () => {
  const loginRoute = useRouterHelper().getOneRoute("Login");

  const name = useFormInput("");
  const email = useFormInput("");
  const password = useFormInput("");
  const phoneNumber = useFormInput("");
  const document = useFormInput("");

  const handleSubmit = () => {
    registerUser({
      name: name.value,
      email: email.value,
      password: password.value,
      phoneNumber: phoneNumber.value,
      document: document.value,
    });
  };

  const handleGoogle = () => {
    registerUserWithGoogle();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 sm:w-9/12 lg:w-4/6 border flex flex-col px-4 rounded-md py-6 gap-2">
        <h3 className="text-center text-2xl font-semibold">Registrarse</h3>
        <div className="w-full flex gap-4">
          <Image
            src={googleLogo}
            width={40}
            height={40}
            alt="Inicio de sesion con google"
            onClick={() => handleGoogle()}
          />
        </div>
        <Label className="flex flex-col gap-1">
          Nombre Completo
          <Input {...name} />
        </Label>
        <Label className="flex flex-col gap-1">
          Correo Electronico
          <Input {...email} />
        </Label>
        <Label className="flex flex-col gap-1">
          Contraseña
          <Input type="password" {...password} />
        </Label>
        <Label className="flex flex-col gap-1">
          Numero de telefono
          <Input {...phoneNumber} />
        </Label>
        <Label className="flex flex-col gap-1">
          Documento
          <Input {...document} />
        </Label>
        <p>
          Ya tienes una cuenta?{" "}
          {loginRoute && (
            <Link href={loginRoute.path} className="font-bold">
              Inicia sesion aqui
            </Link>
          )}
        </p>
        <Button onClick={() => handleSubmit()}>Registrarse</Button>
      </div>
      <DarkModeSwitch style={"absolute left-10 top-10"} />
    </div>
  );
};
