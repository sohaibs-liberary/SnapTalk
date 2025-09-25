import React, { useState } from 'react'
import Allchats from './Components/Allchats/Allchats'
import Chatsdetail from './Components/Chatsdetail/Chatsdetail'

const App = () => {
  // parent level state – yahi select hoga
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <div className="snaptalk h-screen">
      <div className="flex h-full">

        {/* Left side */}
        <div className="w-[380px] flex justify-center custom-scroll
                        overflow-y-auto overflow-x-hidden border-r border-gray-700">
          {/* pass setter to Allchats */}
          <Allchats onSelect={setSelectedContact} />
        </div>

        {/* Right side */}
        <div className="flex-1 h-full">
          {/* pass selected contact */}
          <Chatsdetail contact={selectedContact} />
        </div>

      </div>
    </div>
  )
}

export default App
