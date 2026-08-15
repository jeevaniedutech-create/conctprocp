import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Verify from "@/pages/Verify";
import Admin from "@/pages/Admin";
import SmartSwitch from "@/pages/SmartSwitch";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/smart-switch" element={<SmartSwitch />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
