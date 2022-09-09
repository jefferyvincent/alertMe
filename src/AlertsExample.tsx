import React, {useContext, useState} from 'react';
import { AlertContext } from './AlertManager';

function AlertsExample() {
    const [aid, setAlertId] = useState("");
    const [url, setAlertUrl] = useState("");
    const [time, setAlertTimeLimit] = useState("10000");
    const [type, setAlertType] = useState("error");
    const [title, setAlertTitle] = useState("");
    const [text, setAlertText] = useState("");

    const dispatch:any = useContext(AlertContext);
    
    const handleNewAlert = () => {
      dispatch({
        type: "ADD_ALERT",
        payload: {
            id: aid,
            link: url,
            timeLimit: time,
            alertType: type,
            alertTitle: title,
            text: text,
        }
      });
    }

    return (
      <div>
            <h1>Alert Example</h1>
            <div className='formDiv'>
                <label htmlFor="id">Id</label>
                <input id="id" type="text" value={aid} onChange={e => setAlertId(e.target.value)} />
            </div>
            <div className='formDiv'>
                <label htmlFor="link">Link</label>
                <input id="link" type="text" value={url} onChange={e => setAlertUrl(e.target.value)} />
            </div>
            <div className='formDiv'>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={title} onChange={e => setAlertTitle(e.target.value)} required />
            </div>
            <div className='formDiv'>
                <label htmlFor="text">Text</label>
                <input id="text" type="text" value={text} onChange={e => setAlertText(e.target.value)} required />
            </div>
            <div className='formDiv'>
                <label htmlFor="time">TimeLimit</label>
                <input id="time" type="text" value={time} onChange={e => setAlertTimeLimit(e.target.value)} />
            </div>
            <div className='formDiv'>
                <label htmlFor="type">Choose a type:</label>
                <select name="type" id="type" onChange={e => setAlertType(e.target.value)} value={type}>
                <option value="error">error</option>
                <option value="warning">warning</option>
                <option value="info">info</option>
                <option value="success">success</option>
                </select>
            </div>
            <button onClick={handleNewAlert}>Add Alert</button>
      </div>
    );
  }
  
  export default AlertsExample;