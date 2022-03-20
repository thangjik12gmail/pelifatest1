import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <Hero>
      <Banner title="Lỗi tìm kiếm" subtitle="Không có trang bạn cần tìm">
        <Link to="/" className="btn-primary">
          Quay về trang chủ
        </Link>
      </Banner>
    </Hero>
  );
}
