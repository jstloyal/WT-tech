export const registerUser = user => ({
    type: 'REGISTER_USER',
    payload: user
});

export const getUser = uid => ({
    type: 'GET_USER',
    payload: uid
});

//admin side
export const addUser = user => ({
    type: 'ADD_USER',
    payload: user
});

export const editUser = updates => ({
    type: 'EDIT_USER',
    payload: updates
});

export const deleteUser = id => ({
    type: 'DELETE_USER',
    payload: id
});