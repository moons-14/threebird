import { Route, Routes } from "react-router-dom";

import { ConnectWallet } from "@/components/auth";
import { lazyImport } from "@/utils";

const { HomeLayout } = lazyImport(
  () => import("@/components/Layout/HomeLayout"),
  "HomeLayout"
);

const { AuthLayout } = lazyImport(
  () => import("@/components/Layout/AuthLayout"),
  "AuthLayout"
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth" element={<ConnectWallet />} />
      </Route>
      <Route path="/" element={<HomeLayout />}/>
    </Routes>
  );
};
