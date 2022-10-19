import React, { useEffect, useState } from "react";
import ChatItems from "./ChatItems";
import { useAuth } from "../../context/UserContext";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

const Chats = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const temp = [];
    const unsubscribe = onSnapshot(
      query(collection(db, "Messages"), orderBy("time")),
      (querySnapshot) => {
        temp = [];
        querySnapshot.docs.forEach((doc) => {
          temp.push({
            time: doc.data().time?.toDate().toDateString(),
            message: doc.data().message,
            username: doc.data().username,
            userid: doc.data().userid,
          });
        });

        setAllMessages(temp);
      }
    );

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    addDoc(collection(db, "Messages"), {
      time: serverTimestamp(),
      message: message,
      username: user.email,
      userid: user.uid,
    }).then(() => {
      setMessage("");
    });
  };

  console.log(allMessages);

  console.log(user);
  return (
    <>
      {user ? (
        <div className="z-10 rounded-sm relative bg-[#29325e] pt-4 pb-16 px-4">
          <div className="relative max-h-[400px] overflow-scroll">
            {allMessages?.length > 0 ? (
              allMessages.map((item, index) => (
                <ChatItems
                  key={index}
                  time={item.time}
                  username={item.username}
                  userid={item.userid}
                  message={item.message}
                />
              ))
            ) : (
              <span className="flex justify-center items-center font-sans font-medium text-white text-sm sm:text-base md:text-lg">
                No Messages in the Chatroom
              </span>
            )}
          </div>
          <div className="absolute bottom-2 w-[93%] flex items-center space-x-3">
            <input
              name="message"
              className="flex-grow bg-inherit text-white text-xs sm:text-sm md:text-base border-solid border border-[#52587c] outline-none p-2 h-8"
              type="text"
              placeholder="tyoe your Message"
              autoComplete="off"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="w-24 md:w-28 bg-[#7581BB] mx-5 rounded text-white text-xs sm:text-sm md:text-base p-2 font-sans font-normal"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="z-10 relative bg-[#29325e] p-4 px-4">
          <span className="w-full h-full flex justify-center items-center text-white text-sm sm:text-base md:text-lg font-semibold font-sans">
            You have to be logged in to access chats
          </span>
        </div>
      )}
    </>
  );
};

export default Chats;
