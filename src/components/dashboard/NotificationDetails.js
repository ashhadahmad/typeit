import React from 'react'

export default function NotificationDetails({item}) {
let designclass;
if(item.type === "newproj") designclass = "is-primary";
else designclass = "is-info"
  return (
    <div>
    <article  className={`message ${designclass}`}>
        <div className="message-header">
            <p>Ashhad Ahmad added a new post to the section</p>
        </div>
    </article>
    </div>
  )
}
