import React from 'react'
import Header from './Section/Header'
import Search from './Section/Search'
import Chatlist from './Section/Chatlist'
const Allchats = () => {
  return (
    
    <>
    <div className="Allchats">
      <div  className="bg-slate-950   w-[440px]">
        <div className="fixed top-0 bg-slate-950">
        <Header />
        <Search />
        </div>
        <Chatlist />
      </div>
       
    </div>
    </>
  )
}

export default Allchats