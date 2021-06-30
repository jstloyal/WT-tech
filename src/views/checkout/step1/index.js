import React from 'react';
import BasketItem from 'components/basket/BasketItem';
import StepTracker from '../components/StepTracker';
import withAuth from '../hoc/withAuth';
import { CHECKOUT_STEP_2 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
const OrderSummary =({ basket, subtotal, dispatch, history })=>{
    const onClickPrevious = () => history.push('/');
    const onClickNext = () => history.push(CHECKOUT_STEP_2);

    return(
        <div className="checkout">
            <StepTracker current={1}/>
            <div className="checkout-step-1">
                <h3 className="text-center"> You have selected following items to purchase.</h3>
                <br/>
                {basket.map(product => (
                    <BasketItem
                        key={product.id}
                        product={product}
                        basket={basket}
                        dispatch={dispatch}
                    />
                ))}
                <br/>
                <div className="basket-total text-right">
                <p className="text-center">Subtotal:</p>
                <h2 className="text-center">{displayMoney(subtotal)}</h2>
                </div>
                <br/>
                <div className="checkout-shipping-action">
                    <button
                        className="button button-muted"
                        onClick={onClickPrevious}
                        type="button"
                    >
                        back
                    </button>
                    <button
                        className="button"
                        onClick={onClickNext}
                    >
                        Next Step
                    </button>

                </div>

            </div>
           
        </div>
    );
};
export default withAuth(OrderSummary)