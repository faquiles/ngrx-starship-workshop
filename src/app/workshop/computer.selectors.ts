/**
 * computer selector file!
 * 
 * all main computer selectors go in this file
 * 
 * this file should be free of any business logic or Math.random() calls!
 */
import { createSelector } from "@ngrx/store";
import { selectComputer } from "../app.state";
import { SolarSystemLocation } from "../challenge.service";
import { ComputerState } from "./computer.reducer";
import { ViewscreenState } from "./viewscreen/viewscreen.component";

// https://ngrx.io/guide/store/selectors

export const selectViewscreen = createSelector(
    selectComputer,
    (state: ComputerState) => {
        //TODO: remove all the random state!
        const locations: SolarSystemLocation[] = ['LEO', 'LunaOrbit', 'AsteroidBelt'];
        const planets = ['/assets/mars.png', '/assets/SunRed.png', undefined];
        const satellites = ['/assets/red_asteroid.png', '/assets/yellow_satellite.png', undefined];
        const view: ViewscreenState = {
            location: locations[Math.floor(Math.random() * 3)],
            course: locations[Math.floor(Math.random() * 4)],
            leftImage: satellites[Math.floor(Math.random() * 3)],
            centerImage: planets[Math.floor(Math.random() * 3)],
            rightImage: satellites[Math.floor(Math.random() * 3)],
            laser: Math.random() > 0.5,
            tractor: Math.random() > 0.5,
        };
        return view;
    }
);

export const selectEngine = createSelector(
    selectComputer,
    (state: ComputerState) => {
        //TODO: remove all the random state!
        return Math.floor(Math.random()*11)
    }
);

export const selectLasers = createSelector(
    selectComputer,
    (state: ComputerState) => {
        //TODO: remove all the random state!
        return Math.floor(Math.random()*11)
    }
);

export const selectDockingClamp = createSelector(
    selectComputer,
    (state: ComputerState) => {
        //TODO: remove all the random state!
        return Math.random() > 0.5
    }
);

//TODO: finish up the shield selector!
export const selectShields = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.shieldPercentage;
    }
);

//TODO: finish up the tractorbeam selector!
// export const selectTractorbeam = createSelector(
//     ??,
//     (??) => ??
// );