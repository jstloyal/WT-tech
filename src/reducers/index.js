import appReducer from './appReducer';
import authReducer from './authReducer';
import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import productReducer from './productReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';

const rootReducer = {
    products: productReducer,
    basket: basketReducer,
    auth: authReducer,
    profile: profileReducer,
    filter: filterReducer,
    users: userReducer,
    checkout: checkoutReducer,
    app: appReducer
};
export default rootReducer;