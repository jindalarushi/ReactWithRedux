import { combineReducers } from 'redux';
import characters from './character_reducers';
import heroes from './heroes_reducers';


const rootReducers = combineReducers(
    {
        characters,
        heroes
    }
)

export default rootReducers;