
import React from 'react';
import './style.css'

function Message({titre, date, content}) {
    const strTime = new Date().toLocaleDateString();

    return (
        <>
          {titre && (
            <h1 style={{ background: 'black', color: 'white' }}>{titre}</h1>
          )}
          {date && (
            <div className='date-info'>{strTime}</div>
          )}
        {content && (
            <p className="brushing">{content}</p>

        )}

        </>
      );
      

}

export default Message;