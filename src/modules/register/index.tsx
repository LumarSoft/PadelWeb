import { CarouselPlugin } from "../login/components/carrousel";
import { RegisterCard } from "./components/registerCard";

export const RegisterModule = () => {
  return (
    <main className="w-screen h-screen max-h-screen flex">
      <RegisterCard />
      <CarouselPlugin />
    </main>
  );
};
