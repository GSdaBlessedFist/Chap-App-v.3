//ChatArea.js;
import "./ChatArea.scss";
import MainChatArea from "./MainChatAreaComponents/MainChatArea";

export default function ChatArea({ children }) {
  return (
    <>
      <div className="chatArea-grid">
        <div className="chatArea-grid_mainchat">
          <MainChatArea />
        </div>
        <div className="chatArea-grid_sidechat1">
          <MainChatArea />
        </div>
        <div className="chatArea-grid_sidechat2">
          <MainChatArea />
        </div>
      </div>
    </>
  );
}
