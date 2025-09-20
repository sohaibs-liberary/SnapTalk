import React from 'react'
import Header from './Section/Header'
import Chatlist from './Section/Chatlist'
import Messagetype from './Section/Messagetype'

const Chatdetail = () => {
  return (
    
    <>
    <div className="Chatdetail hidden lg:block">
      <div className="bg-slate-800 w-[990px] overflow-y-hidden">
      <Header />
      <Chatlist />
      <Messagetype />
      </div>
      
    </div>
    </>
  )
}

export default Chatdetail;