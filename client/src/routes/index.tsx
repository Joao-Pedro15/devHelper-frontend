import { Switch } from "react-router-dom";
import { Route } from "./route";

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Resize } from '../pages/Resize'

const Routes: React.FC = () => {
  return (  
    <Switch>
      <Route path="/login" component={Login} />

      {/* ==================== INÍCIO ==================== */}
      <Route isPrivate path="/home" component={Home} />

      <Route isPrivate path={"/module/resize"} component={Resize} />

      {/* ==================== ERRO ==================== */}
      {/* <Route component={NotFoundPage} /> */}

    </Switch>
  );
};

export { Routes };
