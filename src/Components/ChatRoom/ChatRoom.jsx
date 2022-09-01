import React, { useEffect, useState } from "react";
import './ChatRoom.css'
import { useDataLayerValue } from "../../DataLayer";

const ChatRoom = () => {

  const [{bitCoins, stocks}, dispatch] = useDataLayerValue(); 

    const btns = ['stocks', 'bit coins']

     const [message, setMessage] = useState("");
     const [messages, setMessages] = useState([{text: 'Hello how may i help you <3', type: 'received'}]);    

     const Handler = (e) => {
       setMessage(e.target.value);
     };
     const HandlerClick = () => {
       setMessage("");
       setMessages(pervMessages => [
        ...pervMessages, {text: message, type: 'sent'}
       ])
    };

    const HandlerBtn = (event,value) => {

      if(value === 'stocks'){
        dispatch({
          type: "SET_STOCKS",
          stocks: true,
        })
      }
      if(value === 'bit coins'){
        dispatch({
          type: "SET_BITCOINS",
          bitCoins: true,
        });
      }
    }
    const le = 'left';
    const ri = 'right';

    const today = new Date();

    const hrs = today.getHours();
    const mins = today.getMinutes();

    const time=hrs+":"+mins;

    return (
      <>
        <div className="chatRoom">
          <p className="timehere">{time}</p>
          {btns.length > 0 ? (
            <div className="btnsHere">
              {btns.map((item, i) => {
                return (
                  <div key={i} className="btn" onClick={event => HandlerBtn(event,item)}>
                    <p vignwesh='holaa'>{item}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
              {
                messages.length > 0 ? <div>
                    {messages.map((item, i) => {
                        return(
                            <div className={item.type} style={{textAlign: `${item.type === 'sent' ? ri: le}`}} key={i}>
                                {item.text}
                                <p>{time}</p>
                            </div>
                        )
                    })}
                </div> : null
              }
        </div>
        <div className="inputContainer">
          <input
            placeholder="How May I help you?"
            onChange={Handler}
            value={message}
          />
          <div className="sendBtn">
            <p onClick={HandlerClick}>Send</p>
          </div>
        </div>
      </>
    );
}

export default ChatRoom;