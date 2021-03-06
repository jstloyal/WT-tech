import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addProduct} from 'actions/productActions';
import ProductForm from '../components/ProductForm';
const AddProduct =()=>{
    const isLoading = useSelector(state => state.app.loading)
    const dispatch = useDispatch();
    const onSubmit = (product) => {
        dispatch(addProduct(product));
    };
    
    return(
        <div className="product-form-container">
            <h2>Add New Product</h2>
            <ProductForm
                isLoading={isLoading}
                onSubmit={onSubmit}
            
            />
        </div>
    );
};
export default withRouter(AddProduct);