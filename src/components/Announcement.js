import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ffb20d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Announcement = () => {
    return <Container>Khuyến mãi cực HOT! FREESHIP cho đơn từ 200K</Container>;
}
