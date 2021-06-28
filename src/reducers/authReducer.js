const initState = {};
export default (state = initState, action) =>{
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            return{
                id: action.payload.id,
                role: action.payload.role,
                provider: action.payload.provider     
            };
        case 'SIGNOUT_SUCCESS':
            return{};
        default:
            return state;
    }
};