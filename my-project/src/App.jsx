import React from 'react'
import Allchats from './Components/Allchats/Allchats'
import Chatsdetail from './Components/Chatsdetail/Chatsdetail'

const App = () => {
  return (
    <>
      <div className="snaptalk h-screen">   {/* full-screen height */}
        <div className="flex  h-full">
          
          {/* Left side: scrollable chat list */}
          <div className="w-[380px]  flex justify-center custom-scroll overflow-y-auto overflow-x-hidden  border-r border-gray-700">
            <Allchats />
          </div>

          {/* Right side: fixed chat details */}
          <div className="flex-1 h-full">
            <Chatsdetail />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
