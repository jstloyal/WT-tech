export default (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROFILE':
        return action.payload
      case 'UPDATE_PROFILE_SUCCESS':
        return {
            ...state,
            ...action.payload
        };
      case 'CLEAR_PROFILE':
        return {};
      default:
        return state;
    }
  };