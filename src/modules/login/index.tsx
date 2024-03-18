import { CarouselPlugin } from "./components/carrousel";
import { LoginCard } from "./components/loginCard";

export const LoginModule = () => {
  return (
    <main className="w-screen h-screen max-h-screen flex">
      <CarouselPlugin />
      <LoginCard />
    </main>
  );
};
