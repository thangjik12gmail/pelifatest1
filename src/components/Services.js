import React, { Component } from "react";
import { FaShippingFast, FaStar, FaRegMoneyBillAlt, FaTags } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaShippingFast />,
        title: "miễn phí vận chuyển",
        info:
          "Miễn phí vận chuyển cho đơn hàng từ ... VNĐ"
      },
      {
        icon: <FaStar />,
        title: "Made in Vietnam",
        info:
          "Tự hào hàng chuẩn sản xuất tại Việt Nam"
      },
      {
        icon: <FaRegMoneyBillAlt />,
        title: "Hỗ trợ đổi trả",
        info:
          "Nếu hàng có vấn đề hãy liên hệ ngay với chúng mình để được đổi trả nhanh nhất"
      },
      {
        icon: <FaTags />,
        title: "Khuyến mãi hấp dẫn",
        info:
          "Cực nhiều chương trình khuyến mãi hấp dẫn khi mua sản phẩm bên Pelifa"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Dịch vụ của Pelifa luôn luôn" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
