import { useContext, useEffect, useState } from "react";
import {
  Route as RouteReact,
  RouteProps as ReactRouterProps,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  ...rest
}: RouteProps) => {
  const { userLogged } = useContext(AuthContext)  
  console.log(userLogged, 'eoijfeoifje', isPrivate);
  

  if (isPrivate && !userLogged) return <Redirect to="/login" />;

  // if (!isPrivate && isUser) return <Redirect to="/home" />;

  return <RouteReact {...rest} />;
};

export { Route };
