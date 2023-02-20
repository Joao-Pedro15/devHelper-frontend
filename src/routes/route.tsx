import { useContext, useEffect, useState } from "react";
import {
  Route as RouteReact,
  RouteProps as ReactRouterProps,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  ...rest
}: RouteProps) => {
  const { user } = useContext(AuthContext)  

  if (isPrivate && !user) return <Redirect to="/login" />;

  // if (isPrivate && user) return <Redirect to="/home" />;

  return <RouteReact {...rest} />;
};

export { Route };
