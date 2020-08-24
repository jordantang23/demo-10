import {
    AppState,
    SwitchActionTypes,
    TURN_SWITCH_OFF, 
    TURN_SWITCH_ON,} from "./types";

const initialState: AppState = {
    isOn: false
}

export function switchReducer(
    state = initialState,
    action: SwitchActionTypes
): AppState {
    switch(action.type) {
        case TURN_SWITCH_OFF:
            return {
                isOn: false
            }
            case TURN_SWITCH_ON:
                return{
                    isOn: true
                }
                default:
                    return initialState;
    }
}