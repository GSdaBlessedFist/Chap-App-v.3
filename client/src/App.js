import React from "react";
import "./scss/styles.scss";
import "./scss/grids.scss";

import Header from "./components/HeaderComponent/Header";
import Body from "./components/BodyComponent/Body";
import ChatArea from "./components/BodyComponent/ChatAreaComponent/ChatArea";
import SendComponent from "./components/SendComponent/SendComponent";
import Footer from "./components/FooterComponent/Footer";

export default function App() {
  return (
    <>
      <div className="main-grid">
        <Header title="Chat App v.3" />
        <Body>
          <ChatArea />
          {/* <SendComponent canSee="false" /> */}
        </Body>
        <Footer />
      </div>
    </>
  );
}
