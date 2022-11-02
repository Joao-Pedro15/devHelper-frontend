import {
  Route as RouteReact,
  RouteProps as ReactRouterProps,
  Redirect,
} from "react-router-dom";

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  ...rest
}: RouteProps) => {
  // const { userLogged } = useAuthenticateUser();
  const userLogged = false

  if (isPrivate && !userLogged) return <Redirect to="/" />;

  if (!isPrivate && userLogged) return <Redirect to="/home" />;

  return <RouteReact {...rest} />;
};

export { Route };
