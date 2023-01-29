import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";
import "./App.css";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
const App = () => {
  return (
    <div className="">
      <Layout>
        <Sider>
          <Navbar />
        </Sider>
        <Content
          style={{
            padding: "30px 110px",
            minHeight: 280,
          }}
        >
          {/* <div className=""> */}
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
          {/* </div> */}
        </Content>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
