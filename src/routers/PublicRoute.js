import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Basket from 'components/basket/Basket';
import Navigation from 'components/ui/Navigation';
import Footer from 'components/ui/Footer';

const  PublicRoute =({userType, isAuth, component: Component, path, ...rest})=>(
    <Route
        {...rest}
        component={(props)=>{
            const { from } = props.location.state || {from: {pathname: '/'}};
            return(
                isAuth && userType === 'ADMIN'
                ?(
                    <Redirect to ='/admin/dashboard'/>
                )
                :(isAuth && userType === "USER") && (path === '/signin' || path === '/signup')
                ?(<Redirect to={from}/>)
                :(
                    <>
                        <Navigation path={path} isAuth={isAuth}/>
                        <Basket isAuth={isAuth}/>
                        <main className="content">
                            <Component {...props}/>
                        </main>
                        <Footer path={path}/>
                    </>
                )
            );
        }}
    />

);
const mapStateToProps = ({auth}) => ({
    isAuth: !!auth.id && !!auth.role,
    userType: auth.role
});
export default connect(mapStateToProps)(PublicRoute);


