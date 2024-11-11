import { Routes, Route } from "react-router-dom";
import { UseCallbackHook } from "../components/UseCallbackHook";
import { UseEffectHook } from "../components/UseEffectHook";
import { UseMemoHook } from "../components/UseMemoHook";
import { UseContextHook } from "../components/UseContextHook";
import { UseStateHook } from "../components/UseStateHook";
import { Home } from "../components/Home";

const routeConfig = [
  { path: "/", element: <Home /> },
  { path: "/useState", element: <UseStateHook /> },
  { path: "/useMemo", element: <UseMemoHook /> },
  { path: "/useEffect", element: <UseEffectHook /> },
  { path: "/useCallback", element: <UseCallbackHook /> },
  { path: "/useContext", element: <UseContextHook /> },
];

const AppRoutes = () => (
  <Routes>
    {routeConfig.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </Routes>
);

export default AppRoutes;
