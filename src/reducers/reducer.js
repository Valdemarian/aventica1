import { INPUT_DRAFT, INPUT_SAVE, DRAFTto_SAVE, SAVEto_DRAFT, DRAFT_REMOVE,
  EDIT_CARD, INDICATOR_PUSH, INDICATOR_DELETE, SAVEto_DRAFT_INDICATOR_TRUE } from '../actions/action';
  
  const initialState = {
    draftArr: [],
    saveArr: [],
    indicatorCounter: []
  }
  
  
  export default function auth(state = initialState, action) {
  
    switch (action.type) {
      case INPUT_DRAFT:
        return {  ...state, draftArr: [...state.draftArr, {item: action.payload}] }
        
      case INPUT_SAVE:
        return {  ...state, saveArr: [...state.saveArr, {item: action.payload, counter: false}]}

      case DRAFTto_SAVE:
        return {  ...state, saveArr: [...state.saveArr, {item: action.payloadID, counter: false}],
          draftArr: [...state.draftArr.slice(0, action.payloadINDEX), ...state.draftArr.slice(action.payloadINDEX + 1)]}

      case SAVEto_DRAFT:
        return {  ...state, draftArr: [...state.draftArr, {item: action.payloadID}], 
          saveArr: [...state.saveArr.slice(0, action.payloadINDEX), ...state.saveArr.slice(action.payloadINDEX + 1)]}

      case SAVEto_DRAFT_INDICATOR_TRUE:
        return {  ...state, draftArr: [...state.draftArr, {item: action.payloadID}], ...state.indicatorCounter.pop(),
          saveArr: [...state.saveArr.slice(0, action.payloadINDEX), ...state.saveArr.slice(action.payloadINDEX + 1)]}

      case DRAFT_REMOVE:
        return { ...state, 
        draftArr: [...state.draftArr.slice(0, action.payload), ...state.draftArr.slice(action.payload + 1)]}

      case EDIT_CARD:
        return { ...state, 
          draftArr: state.draftArr.map((item, i) => {
            if(i === action.payloadINDEX) {
              return {
                ...item,
                item: action.payloadID,
              }
            }
            return item;
          })
      }

      case INDICATOR_PUSH:
        return { ...state, indicatorCounter: [...state.indicatorCounter, 0],
          saveArr: state.saveArr.map((item, i) => {
            if(i === action.payloadINDEX) {
              return {
                ...item,
                item: action.payloadID,
                counter: true
              }
            }
            return item;
          })
      }

      case INDICATOR_DELETE:
        return { ...state, ...state.indicatorCounter.pop(),
          saveArr: state.saveArr.map((item, i) => {
            if(i === action.payloadINDEX) {
              return {
                ...item,
                item: action.payloadID,
                counter: false
              }
            }
            return item;
          })
      }

      default:
        return state
    }
  }