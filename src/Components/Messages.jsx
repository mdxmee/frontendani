import React from "react"
// import styles from "../styles/Messages.module.css";

const Messages = ({messages, name}) => {
  return (
    <div>
         {messages.map(({user, message}, i) => {
            const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();
            // const className = itsMe ? styles.me : styles.user;
            return (
                <div key={i}>
                    <span>{user.name}</span>
                    <div className=" bg-bg-pink " >{message}</div>
                </div>
            );
         })}
    </div>
  )
}

export default Messages