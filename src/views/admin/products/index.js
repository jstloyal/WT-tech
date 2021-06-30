import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import  Boundary from 'components/ui/Boundary';
import SearchBar from 'components/ui/SearchBar';
import FiltersToggle from 'components/ui/FiltersToggle';
import ProductList from 'components/product/ProductList';
import ProductAppliedFilters from 'components/product/ProductAppliedFilters';
import ProductItem from '../components/ProductItem';
import {ADD_PRODUCT} from 'constants/routes';

const Products =({history, location})=>{

    const {store} = useSelector(state=>({
        store:{
            productsLength: state.products.items.length,
            filter: state.filter,
            products: state.products.items,
            isLoading: state.app.loading,
            lastRefKey: state.products.lastRefKey,
            totalItems: state.products.total,
            filteredProducts: selectFilter(state.products.items, state.filter),
            requestStatus: state.app.requestStatus
        }
    }));

    console.log(store.lastRefKey);

    const dispatch = useDispatch();
    const onClickAddProduct = () => {
        history.push(ADD_PRODUCT);
    };
    return(
        <Boundary>
            <div className="product-admin-header">
                <SearchBar
                    isLoading={store.isLoading}
                    filter={store.filter}
                    history={history}
                    productsLength={store.productsLength}
                />
                &nbsp;
                <FiltersToggle
                    filter={store.filter}
                    isLoading={store.isLoading}
                    products={store.products}
                    productsLength={store.productsLength}
                    history={history}
                >
                <button
                    className="button-muted button-small"
                >
                    Filters
                </button>
                </FiltersToggle>
                &nbsp;
                <button
                    className="button button-small"
                    onClick={onClickAddProduct}
                >
                    Add New Products
                </button>
            </div>
            <div className="product-admin-items">
                <ProductList
                     dispatch={dispatch}
                     filteredProducts={store.filteredProducts}
                     isLoading={store.isLoading}
                     location={location}
                     productsLength={store.productsLength}
                     lastRefKey={store.lastRefKey}
                     totalItems={store.totalItems}
                     requestStatus={store.requestStatus}
                >
                    <ProductAppliedFilters filter={store.filter}/>
                    {store.filteredProducts.length > 0 && (
                    <div className="grid grid-product grid-count-6">
                        <div className="grid-col"/>
                        <div className="grid-col">
                            <h5>Name</h5>
                        </div>
                        <div className="grid-col">
                            <h5>Brand</h5>
                        </div>
                        <div className="grid-col">
                            <h5>Price</h5>
                        </div>
                        <div className="grid-col">
                            <h5>Data Added</h5>
                        </div>
                        <div className="grid-col">
                            <h5>Qty</h5>
                        </div>
                    </div>
                    )}
                    {store.filteredProducts.length === 0 ? new Array(10).fill({}).map((product, index)=>(        
                           <ProductItem
                        key={`product-skeleton ${index}`}
                        product={product}
                       />   
                    )):store.filteredProducts.map(product => (
                        <ProductItem
                        key={product.id}
                        product={product}
                        dispatch={dispatch}
                       />              
                    ))} 
                </ProductList>
            </div>
        </Boundary>
    );
};
export default withRouter(Products);