import NavbarComponent from "@/shared/components/navbar/NavbarComponent";

export default function HeaderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
