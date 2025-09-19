import React from 'react'
import Header from './Section/Header'
import Search from './Section/Search'
import Chatlist from './Section/Chatlist'
const Allchats = () => {
  return (
    
    <>
    <div className="Allchats">
      <div  className="bg-slate-950   w-[440px]">
        <Header />
        <Search />
        <Chatlist />
      </div>
       
    </div>
    </>
  )
}

export default Allchats