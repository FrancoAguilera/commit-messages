import type { NextPage } from "next";
import { messages } from "../messages";
import { useEffect, useState } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Branding } from "../components/brand";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");

  const randomMessage = () => {
    const msgIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[msgIndex]);
  };

  const copyText = () => {
    navigator.clipboard.writeText(message);
  };

  useEffect(() => {
    randomMessage();
  }, []);

  return (
    <>
      <div className="branding">
        <Branding />
      </div>
      <div className="container">
        <div className="message">
          <span>"{message}"</span>
          <span
            className="copy-icon"
            onClick={copyText}
            style={message ? { display: "inline" } : { display: "none" }}
            title="Copy text"
          >
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </div>
        <div className="new-message-button">
          <button
            className="glow-on-hover"
            onClick={() => {
              randomMessage();
            }}
          >
            New Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
