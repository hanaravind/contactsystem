import { contactList } from "./contactstate";
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT  } from './constants'

const contactReducer = (state = contactList, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case EDIT_CONTACT:
            const elementsIndex = state.data.findIndex(element => element.id === action.data.id )
            let newArray = [...state.data]
            newArray[elementsIndex] = {...newArray[elementsIndex], name: action.data.name, number: action.data.number}
            return {
                ...state,
                data: newArray
            }
        case DELETE_CONTACT:
        return {
            ...state,
            data: state.data.filter(item =>  item.id !== action.data)
        }
        default:
            return state
    }
}

export default contactReducer