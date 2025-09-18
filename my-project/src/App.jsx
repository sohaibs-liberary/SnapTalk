import React from 'react'
import Allchats from './Components/Allchats/Allchats'
import Chatsdetail from './Components/Chatsdetail/Chatsdetail'


const App = () => {
  return (
   <>
   <div className="snaptalk">
    <div className="flex justify-between">
      <Allchats className=''/>
      <Chatsdetail className=''/>
    </div>


   </div>
      </>
  )
}

export default App