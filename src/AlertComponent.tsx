import React, {useState, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface AlertProps {
    timeLimit: number;
    id: any;
    alertTitle: string;
    text: string;
    link: string;
    alertType: any;
    dispatch: any;
}

const AlertComponent = (props:AlertProps) => {
    const [isExpired, setExpired] = useState(false);
    
    const startTimer = () => {
        let time = props.timeLimit ? props.timeLimit: 10000;
        const timer = setTimeout(() => {
            props.dispatch({
                type: "REMOVE_ALERT",
                id: props.id
            })
            setExpired(true);
        }, time);
    };

    useEffect(() => {
        startTimer();
    }, []);

    const alertTitleTag = () => {
        if (props.alertTitle) {
            return <AlertTitle>{props.alertTitle}</AlertTitle>
        } else {
            return null;
        }
    }
    
    if (!props.link) {
        return (
            <Alert severity={props.alertType} variant="outlined">
                {alertTitleTag()}
                {props.text}
            </Alert>
        )
    } else {
        return (
            <a href={props.link}>
                <Alert severity={props.alertType} variant="outlined">
                    {alertTitleTag()}
                    {props.text}
                </Alert>
            </a>
        )
    }
    
}

export default AlertComponent;