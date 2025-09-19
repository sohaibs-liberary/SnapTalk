import React from 'react'
import Header from './Section/Header'
import Chatlist from './Section/Chatlist'
const Chatdetail = () => {
  return (
    
    <>
    <div className="Chatdetail hidden lg:block">
      <div className="bg-slate-800 w-[990px]">
      <Header />
      <Chatlist />
      </div>
      
    </div>
    </>
  )
}

export default Chatdetail;