export enum ERoutes {
  HOME = "/",
  LOGIN = "/login",
  REGISTRO = "/registro",
  TIENDA = "/tienda",
  RESERVA = "/reserva",
  PRODUCTO = "/tienda/:id",
}

export type TActualRoutes =
  | "Home"
  | "Login"
  | "Registro"
  | "Tienda"
  | "Reserva"
  | "Producto";

export interface IRoute {
  name: TActualRoutes;
  path: string;
  subRoutes?: IRoute[];
}

export const ROUTES: IRoute[] = [
  {
    name: "Home",
    path: ERoutes.HOME,
  },
  {
    name: "Login",
    path: ERoutes.LOGIN,
  },
  {
    name: "Reserva",
    path: ERoutes.RESERVA,
  },
  {
    name: "Tienda",
    path: ERoutes.TIENDA,
    subRoutes: [
      {
        name: "Producto",
        path: ERoutes.PRODUCTO,
      },
    ],
  },
];
