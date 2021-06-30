import React, { useState } from 'react';
import BasketItem from 'components/basket/BasketItem';
import { useDispatch } from 'react-redux';
import withAuth from '../hoc/withAuth';
import StepTracker from '../components/StepTracker';
import Pagination from '../components/Pagination';
import ShippingForm from './ShippingForm';
import ShippingTotal from './ShippingTotal';
import firebase from 'firebase'
import { displayActionMessage } from 'helpers/utils';
import { CHECKOUT_STEP_1, HOME } from 'constants/routes';
import { setShippingDetails } from 'actions/checkoutActions';
import { removeFromBasket } from 'actions/basketActions';
const ShippingDetails =({ basket, profile, shipping, subtotal, history })=>{
    const[field, setField] = useState({
        fullname: {value: profile.fullname ? profile.fullname: ''},
        email: {value: profile.email ? profile.email: ''},
        address: {value: shipping.address ? shipping.address : profile.address ? profile.address: ''},
        mobile: profile.mobile.value ? profile.mobile : shipping.mobile ? shipping.mobile : {
            value: '',
            data:{}
        },
        isInternational: !!shipping.isInternational ? shipping.isInternational : false,
        isDone: false,
        productName: [],
        productPrice: 100
    });
    const dispatch = useDispatch();
    const noError = Object.keys(field).every((key)=> {
        if(typeof field[key] === 'object'){
            return !!field[key].value && !!!field[key].error
        } else {
            return true;
        }
    });
    const saveShippingDetails = () => {
        const isChanged = true;
        const basketItemsNames = [];
        basket.map(product => {
            basketItemsNames.push(product.name)
            field.productPrice = product.price
            dispatch(removeFromBasket(product.id))
        })
        if(isChanged){
            firebase.firestore().collection('orders').add({
                fullname: field.fullname.value,
                price: subtotal,
                email: field.email.value,
                address: field.address.value,
                mobile: field.mobile,
                ProductName: basketItemsNames
            }).then((docref)=>{})
            dispatch(setShippingDetails({
                fullname: field.fullname.value,
                price: subtotal,
                email: field.email.value,
                address: field.address.value,
                mobile: field.mobile,
                isInternational: field.isInternational,
                ProductName: basketItemsNames,
                isDone: true

            }))
            displayActionMessage('Your order has been saved and will be delivered in time', 'info');
        }
    };


    const onClickConfirm = () => {
      
        if (field.fullname.value !== ''
        && field.address.value !== ''
        && field.email.value !== ''
        && field.mobile.value !== ''){
            saveShippingDetails();
            history.push(HOME)
        }
        else{
            displayActionMessage("Please Fill All Fields",'info')
        }
    };
    
    return(
        <div className="checkout">
            <StepTracker current={2}/>
            {basket.map(product => (
                <BasketItem
                    key={product.id}
                    product={product}
                    basket={basket}
                    dispatch={dispatch}
                />
            ))}
            <div className="checkout-step-2">
                <h3 className="text-center">
                    Shipping Details
                </h3>
                <ShippingForm
                    profile={profile}
                    shipping={shipping}
                    subtotal={subtotal}
                    history={history}
                    field={field}
                    setField={setField}
                />
                <br/>
                <ShippingTotal subtotal={subtotal} field={field}/>
                <br/>
                <Pagination
                    history={history}
                    onClickPrevious={() => history.push(CHECKOUT_STEP_1)}
                    disabledNext={noError}
                    onClickNext={onClickConfirm}
                />
            </div>
            
        </div>
    );
};
export default withAuth(ShippingDetails);