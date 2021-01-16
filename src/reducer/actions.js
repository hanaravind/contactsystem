import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './constants'


export const addContact = (payload) => {
    return {
        type: ADD_CONTACT,
        data: payload
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        data: id
    }
}

export const editContact = (payload) => {
    return {
        type: EDIT_CONTACT,
        data: payload
    }
}