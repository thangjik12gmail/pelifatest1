import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeturedRooms from "../components/FeaturedRooms";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Thời trang thú cưng"
          subtitle="Giá cực rẻ chỉ từ ... VNĐ"
        >
          <Link to="/products" className="btn-primary">
            Sản phẩm
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </>
  );
}
