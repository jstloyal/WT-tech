import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory} from 'history';

import ClientRoute from './clientRoute';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';

import Dashboard from 'views/admin/dashboard';
import Products from 'views/admin/products';
import EditProduct from 'views/admin/edit_product';
import AddProduct from 'views/admin/add_product';

import  ProductSearch from 'components/product/ProductSearch';
import SignUp from 'views/auth/signup';
import SignIn from 'views/auth/signin';
import ForgotPassword from 'views/auth/forgot_password';
import UserAccount from 'views/account/user_account';
import EditAccount from 'views/account/edit_account';
import Home from 'views/home';
import CheckOutStep1 from 'views/checkout/step1';
import CheckOutStep2 from 'views/checkout/step2';
import PageNotFound from 'views/error/PageNotFound';
import ScrollToTop from 'components/ui/ScrollToTop';

export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
    <Switch>
        <Route
        component={ScrollToTop(ProductSearch)}
        exact
        path="/search"
        />
        <PublicRoute
        component={Home}
        exact
        path="/"
        />
        <PublicRoute
        component={ScrollToTop(SignUp)}
        path="/signup"
        />
        <PublicRoute
        component={ScrollToTop(ForgotPassword)}
        path="/forgot_password"
        />
        <PublicRoute
        component={ScrollToTop(SignIn)}
        path="/signin"
        />
        <ClientRoute
        component={ScrollToTop(UserAccount)}
        exact
        path="/account"
        />
        <ClientRoute
        component={ScrollToTop(EditAccount)}
        exact
        path="/account/edit"
        />
        <ClientRoute
        component={ScrollToTop(CheckOutStep1)}
        exact
        path="/checkout/step1"
        />
        <ClientRoute
        component={ScrollToTop(CheckOutStep2)}
        exact
        path="/checkout/step2"
        />
        <AdminRoute
        component={ScrollToTop(Dashboard)}
        exact
        path="/admin/dashboard"
        />
        <AdminRoute
        component={ScrollToTop(Products)}
        path="/admin/products"
        />
        <AdminRoute
        component={ScrollToTop(AddProduct)}
        path="/admin/add"
        />
         <AdminRoute
        component={ScrollToTop(EditProduct)}
        path="/admin/edit/:id"
        />
        <PublicRoute component={ScrollToTop(PageNotFound)}/>
         
    </Switch>
    </Router>
);
export default AppRouter;

