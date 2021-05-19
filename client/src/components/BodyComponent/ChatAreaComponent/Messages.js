import "../ChatAreaComponent/MainChatAreaComponents/MainChatArea.scss";
import "../ChatAreaComponent/Scroll.scss";

export default function Messages({ myMessage }) {
  return (
    <>
      <div className={myMessage === "false" ? "my-messages" : "other-messages"}>
        <a className="screenname" href="#">
          screename:
        </a>
        <div>words to be sent out by the next timbo man cometh way down</div>
        <hr />
      </div>
    </>
  );
}
