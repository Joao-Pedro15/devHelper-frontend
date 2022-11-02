import { Switch } from "react-router-dom";
import { Route } from "./route";

import { Login } from '../pages/Login'

const Routes: React.FC = () => {
  return (  
    <Switch>
      <Route exact path="/" component={Login} />

      {/* ==================== INÍCIO ==================== */}
      {/* <Route isPrivate path="/home" component={Feed} /> */}

      {/* ==================== ERRO ==================== */}
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  );
};

export { Routes };
