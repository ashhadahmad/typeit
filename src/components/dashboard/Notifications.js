import React from 'react'
import moment from 'moment'

const Notification = (props) => {
    const {notifications} = props;
    return(
        <div>
        <h4 className="title is-4">Notifications :</h4>
        {notifications && notifications.map((item => {
            let designclass;
            if(item.type === "newproj") designclass = "is-primary";
            else designclass = "is-info"
            return (
                    <article key={item.id}  className={`message ${designclass}`}>
                    <div className="message-header">
                        <p><strong>{item.user}</strong> {item.content}</p>
                    </div>
                    <div className="message-body">
                            {(moment.unix(item.time.seconds).calendar())}
                        </div>
                </article>
            )
        }))}
        </div>
    )
}

export default Notification