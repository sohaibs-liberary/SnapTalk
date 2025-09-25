import React, { useState } from 'react'
import Header from './Section/Header'
import Chatlist from './Section/Chatlist'
import Messagetype from './Section/Messagetype'

const Chatdetail = ({ contact }) => {
  const [messages, setMessages] = useState([])

  const addMessage = (text) => {
    setMessages((prev) => [...prev, text])
  }

  return (
    <div className="Chatdetail hidden lg:block">
      <div className="bg-slate-800 w-[990px] overflow-y-hidden">
        {/* pass selected contact */}
        <Header contact={contact} />
        <Chatlist messages={messages} />
        <Messagetype onSend={addMessage} />
      </div>
    </div>
  )
}

export default Chatdetail
