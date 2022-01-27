/**
 * computer reducer file!
 * 
 * all main computer logic should go in this file
 */
import { createReducer, on } from "@ngrx/store";
import { NavigationData } from "../nav-db.service";
import { echo, loadNavDataSuccess, enableShield } from "./computer.actions";

/**
 * This is the "slice" that you need to fill out!
 * 
 * Course data, location data, engine/shield/laser power level, all 
 * of these state properties must reside in this interface!
 * 
 * All of the visual components will select their state from this central
 * state location.
 */
export interface ComputerState{
    /**
     * these messages are displayed by the computer-messages component
     * 
     * they are not required or useful, they are just example of state properties
     * 
     * feel free to change or remove this
     */
    echoMessages: string[],
    shieldPercentage: number,
    //TODO: add a lot more state!
}

export const InitialComputerState: ComputerState = {
    echoMessages: [],
    shieldPercentage: 0,
    //TODO: add additional initial state!
}

export const computerReducer = createReducer<ComputerState>(
    InitialComputerState,
    on(echo, (state, action) => {
        return {
            ...state,
            echoMessages: [
                action.message, 
                ...state.echoMessages
            ]
        };
    }),
    on(enableShield, (state, action) => {
        return {
            ...state,
            shieldPercentage: action.shieldPercentage
        };
    }),
    
    //TODO: add an on() listener for loadNavDataSuccess that puts NavigationData[] in the state!
    //TODO: use the NavigationData[] to set viewscreen state depending on location and/or course!
    //TODO: add a lot more reducer action logic!
    // https://ngrx.io/guide/store/reducers
    // there should be a lot of logic in here!
);

 