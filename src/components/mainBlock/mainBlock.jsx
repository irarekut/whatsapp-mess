import { React, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import { SendMessage, GetMessage, DelMessage } from "../../api/api";
import { setMessages } from "../../store/messagesSlice";

export default function MainBlock() {
  const dispatch = useDispatch();
  const [messageSend, setMessageSend] = useState("");
  const [error, setError] = useState(false);
  const [messageReceivedId, setMessageReceivedId] = useState("");
  const tel = useSelector((state) => state.tel.tel);
  const ref = useRef();
  const id = useSelector((state) => state.loginData.id);
  const token = useSelector((state) => state.loginData.token);
  const messages = useSelector((state) => state.messages.messages);
  const chatId = `${tel}@c.us`;

  const onChangeMessage = (val) => {
    setMessageSend(val.target.value);
  };

  useEffect(() => {
    const intervalID = setInterval(async () => {
      const data = await GetMessage(id, token);
      if (data !== null && data.receiptId !== messageReceivedId) {
        setMessageReceivedId(data.receiptId);

        await DelMessage(id, token, data.receiptId);
        if (data.body.typeWebhook === "incomingMessageReceived") {
          if (data.body.senderData.chatId === chatId) {
            dispatch(
              setMessages({
                message: data.body.messageData.textMessageData.textMessage,
                type: "received",
              })
            );
          }
        }
      }
    }, 5000);
    return () => clearInterval(intervalID);
  });

  const HandleClick = async () => {
    if (messageSend !== "") {
      dispatch(setMessages({ message: messageSend, type: "send" }));
      SendMessage(id, token, tel, messageSend);
      ref.current.value = "";
      setMessageSend("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <S.container>
      <S.telBlock>
        <S.telTitle>{tel}</S.telTitle>
      </S.telBlock>
      <S.mainBlock>
        <S.blockMessages>
          {messages?.map((message) => (
            <S.blockMessage
              key={messages.indexOf(message.message)}
              className={message.type === "send" ? `send` : ``}
            >
              <S.message
                className={message.type === "send" ? `send` : ``}
                key={messages.indexOf(message.message)}
              >
                {message.message}
              </S.message>
            </S.blockMessage>
          ))}
        </S.blockMessages>
        {tel !== "" ? (
          <S.wrapper>
            {error === true ? (
              <S.error>Невозможно отправить пустое сообщение</S.error>
            ) : null}
            <S.blockInput>
              <S.inputMessage
                onChange={(val) => onChangeMessage(val)}
                type="text"
                ref={ref}
              />
              <S.button onClick={HandleClick}>Отправить</S.button>
            </S.blockInput>
          </S.wrapper>
        ) : null}
      </S.mainBlock>
    </S.container>
  );
}
