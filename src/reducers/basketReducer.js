export default (state = [], action) =>{
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return state.some(product => product.id === action.payload.id)
                ?state
                : [...state, action.payload]
          
        case 'REMOVE_FROM_BASKET':
            return state.filter(product => product.id !== action.payload);
        case 'CLEAR_BASKET':
            return[];
        case 'ADD_QTY_ITEM':
            return state.map((product) => {
                if(product.id === action.payload){
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product;
            });
        case 'MINUS_QTY_ITEM':
            return state.map((product) => {
                if(product.id === action.payload){
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product;
            });
            
        default:
            return state;
    }
};