import * as action from './action_type';

export function set_Helmet (helmet) {
    return {
        type: action.SET_HELMET,
        payload: helmet
    }
}

export function set_Chest(chest) {
    return {
        type: action.SET_CHEST,
        payload: chest
    }
}

export function set_Gloves(gloves) {
    return {
        type: action.SET_GLOVES,
        payload: gloves
    }
}

export function set_Boots(boots) {
    return {
        type: action.SET_BOOTS,
        payload: boots
    }
}

export function set_Weapon(weapon) {
    return {
        type: action.SET_WEAPON,
        payload: weapon
    }
}

export function set_Hero(hero) {
    return {
        type: action.SET_HERO,
        payload: hero
    }
}
