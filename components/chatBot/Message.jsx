import React from 'react'

const Message=({ children, byUser }) => {
    return (
        <div className={`max-w-[220px] ${byUser? 'bg-blue-400 ml-auto':'bg-green-600'} rounded-md p-2 mt-auto`}>
            <p className="text-sm font-semibold break-words text-white">{children}</p>
        </div>
    )
}

export default Message