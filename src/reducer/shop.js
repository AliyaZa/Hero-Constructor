import * as actions from '../actions/action_type';

const initial_state = {
    hero: {},
    helmet: {},
    chest: {},
    glove: {},
    boot: {},
    weapon: {}
  }

  export function equip(state= initial_state, action) {
    switch (action.type) {
      case actions.SET_HELMET:
        return {
          ...state,
          helmet: action.payload
        }
      case actions.SET_CHEST:
        return {
          ...state,
          chest: action.payload
        }
      case actions.SET_GLOVES:
        return {
          ...state,
          glove: action.payload
        }
        case actions.SET_BOOTS:
        return {
          ...state,
          boot: action.payload
        }
        case actions.SET_WEAPON:
        return {
          ...state,
          weapon: action.payload
        }
        case actions.SET_HERO:
        return {
          ...state,
          hero: action.payload
        }
      default:
        return state;
    }
  }
  
  export function getEquipment(state) {
    return {
      ...state.equip
    };
  }