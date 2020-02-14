export const INPUT_DRAFT = 'INPUT_DRAFT'
export const INPUT_SAVE = 'INPUT_SAVE'
export const DRAFTto_SAVE = 'DRAFTto_SAVE'
export const SAVEto_DRAFT = 'SAVEto_DRAFT'
export const DRAFT_REMOVE = 'DRAFT_REMOVE'
export const EDIT_CARD = 'EDIT_CARD'
export const INDICATOR_PUSH = 'INDICATOR_PUSH'
export const INDICATOR_DELETE = 'INDICATOR_DELETE'
export const SAVEto_DRAFT_INDICATOR_TRUE = 'SAVEto_DRAFT_INDICATOR_TRUE'



export function addItemDraftArr(item) {
    return (dispatch) => {

      dispatch({
        type: INPUT_DRAFT,
        payload: item
      })
    }
}

export function addItemSavetArr(item) {
    return (dispatch) => {

      dispatch({
        type: INPUT_SAVE,
        payload: item
      })
    }
}

export function draftToSave(id, index) {
    return (dispatch) => {

      dispatch({
        type: DRAFTto_SAVE,
        payloadID: id,
        payloadINDEX: index
      })
    }
}

export function saveToDraft(id, index) {
    return (dispatch) => {

      dispatch({
        type: SAVEto_DRAFT,
        payloadID: id,
        payloadINDEX: index
      })
    }
}

export function saveToDraftTrue(id, index) {
    return (dispatch) => {

      dispatch({
        type: SAVEto_DRAFT_INDICATOR_TRUE,
        payloadID: id,
        payloadINDEX: index
      })
    }
}

export function draftRemove(index) {
    return (dispatch) => {

      dispatch({
        type: DRAFT_REMOVE,
        payload: index,
      })
    }
}


export function editCard(id, index) {
    return (dispatch) => {

      dispatch({
        type: EDIT_CARD,
        payloadID: id,
        payloadINDEX: index
      })
    }
}

export function indicatorPush(id, index) {
    return (dispatch) => {

      dispatch({
        type: INDICATOR_PUSH,
        payloadID: id,
        payloadINDEX: index
      })
    }
}

export function indicatorDelete(id, index) {
    return (dispatch) => {

      dispatch({
        type: INDICATOR_DELETE,
        payloadID: id,
        payloadINDEX: index
      })
    }
}