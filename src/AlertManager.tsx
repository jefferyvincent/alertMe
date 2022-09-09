import React, {createContext, useReducer } from 'react';
import AlertComponent from './AlertComponent';
import Stack from '@mui/material/Stack';
import { useAlertReducer } from './AlertReducer';

export const AlertContext = createContext({});

const AlertManager = (props:any) => {
    const [state, dispatch] = useReducer(useAlertReducer, []);
    return (
        <AlertContext.Provider value={dispatch}>
            <div className={"alert-wrapper"}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    {state.map((alert:any) => {
                        return <AlertComponent dispatch={dispatch} key={alert.id} {...alert} />
                    })}
                </Stack>
            </div>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertManager;