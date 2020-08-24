// State Type

export interface AppState {
    isOn: boolean;
}

// Action Types
export const TURN_SWITCH_ON = 'TURN_SWITCH_ON';
export const TURN_SWITCH_OFF = 'TURN_SWITCH_OFF';

interface TurnSwitchOnAction {
    type: typeof TURN_SWITCH_ON
}

interface TurnSwitchOffAction {
    type: typeof TURN_SWITCH_OFF
}

export type SwitchActionTypes = TurnSwitchOffAction | TurnSwitchOnAction


