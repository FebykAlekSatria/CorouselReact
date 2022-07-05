import React from "react";
import Carousel from "../../components/carousel/Index";
import Kategori from "../../components/kategori/Index";
import NavbarMain from "../../components/navbar/NavbarMain";

export default function LandingPage() {
  return (
    <div>
      <NavbarMain />
      <Carousel />
      <Kategori />
    </div>
  );
}
