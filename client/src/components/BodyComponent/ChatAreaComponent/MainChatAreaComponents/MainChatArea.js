import "./MainChatArea.scss";

import Messages from "../Messages";
import SendComponent from "../../../SendComponent/SendComponent";

export default function MainChatArea() {
  return (
    <>
      <div className="mainchat-area-grid">
        <div className="mainchat-area-grid_titlebar">main chat</div>
        <div className="mainchat-area-grid_messages ">
          <Messages myMessage="true" />
          <Messages myMessage="false" />
          <Messages myMessage="true" />
          <Messages myMessage="false" />
          <Messages myMessage="true" />
          <Messages myMessage="false" />
          <Messages myMessage="true" />
          <Messages myMessage="false" />
          <Messages myMessage="false" />
          <Messages myMessage="true" />
          <Messages myMessage="false" />
        </div>
        <div className="mainchat-area-grid_sendcomponent">
          <SendComponent />
        </div>
      </div>
    </>
  );
}
