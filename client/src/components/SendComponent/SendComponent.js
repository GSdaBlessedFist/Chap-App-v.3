import React, { useState } from "react";
import "../../scss/variables.scss";
import "./SendComponent.scss";

import SendGrid from "./SendGrid";
import SendButton from "./SendButton";
import SendInput from "./SendInput";
import SendFeatures from "./SendFeatures";

export default function SendComponent({ canSee }) {
  const [message, setMessage] = useState("");

  return (
    <div>
      {canSee === "false" ? null : (
        <>
          <SendGrid>
            <SendButton />
            <SendInput />
            <SendFeatures />
          </SendGrid>
        </>
      )}
    </div>
  );
}
