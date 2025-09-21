import React, { useState } from 'react'
import Header from './Section/Header'
import Chatlist from './Section/Chatlist'
import Messagetype from './Section/Messagetype'

const Chatdetail = () => {
  // ✅ parent level pe messages state
  const [messages, setMessages] = useState([])

  // ✅ child se naya message add karne ka function
  const addMessage = (text) => {
    setMessages((prev) => [...prev, text])
  }

  return (
    <div className="Chatdetail hidden lg:block">
      <div className="bg-slate-800 w-[990px] overflow-y-hidden">
        <Header />
        {/* messages prop pass kar rahe hain */}
        <Chatlist messages={messages} />
        {/* onSend prop pass kar rahe hain */}
        <Messagetype onSend={addMessage} />
      </div>
    </div>
  )
}

export default Chatdetail
