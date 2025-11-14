import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LandingPage from "../views/LandingPage";
import NotFound from "../views/NotFound";
import { useEffect } from "react";

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Navigate to="" replace />} /> */}
        <Route path="" element={<LandingPage />} />
        
        {/* Route wildcard untuk 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;