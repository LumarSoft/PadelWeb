import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DarkModeSwitch from "@/shared/components/switchMode/DarkModeSwitch";
import Link from "next/link";
import React from "react";

export const LoginCard = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/6 border flex flex-col px-4 rounded-md py-6 gap-8">
        <h3 className="text-center text-2xl font-semibold">Iniciar sesion</h3>
        <Label className="flex flex-col gap-2">
          Correo Electronico
          <Input />
        </Label>
        <Label className="flex flex-col gap-2">
          Contraseña
          <Input />
        </Label>
        <p>
          Todavia no tienes una cuenta?{" "}
          <Link href={"asd"} className="font-bold">
            Registrate
          </Link>
        </p>
        <Button>Iniciar Sesion</Button>
      </div>
      <DarkModeSwitch style={"absolute right-10 top-10"}/>
    </div>
  );
};
