import {v4} from "uuid";

interface AlertAction {
    type: any;
    id: number;
    payload: any;
}

export const useAlertReducer = (state:any, action:AlertAction) => {
    switch (action.type) {
        case "ADD_ALERT": {
            let payload = action.payload;
            // A unique ID should be generated if not provided in dispatch
            if (!payload.id) {
                payload.id = v4();
            }
            return [...state, {...payload}];
        }
        case "REMOVE_ALERT": {
            return state.filter((el:any) => el.id !== action.id);
        }
        default:
            return state;
    }
}