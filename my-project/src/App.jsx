import React, { useState } from 'react'
import Allchats from './Components/Allchats/Allchats'
import Chatsdetail from './Components/Chatsdetail/Chatsdetail'

const App = () => {
  // yahan parent level state
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <div className="snaptalk h-screen">
      <div className="flex h-full">

        {/* Left side: pass onSelect prop */}
        <div className="w-[380px] flex justify-center custom-scroll
                        overflow-y-auto overflow-x-hidden border-r border-gray-700">
          <Allchats onSelect={setSelectedContact} />
        </div>

        {/* Right side: pass selectedContact prop */}
        <div className="flex-1 h-full">
          <Chatsdetail contact={selectedContact} />
        </div>

      </div>
    </div>
  )
}

export default App
