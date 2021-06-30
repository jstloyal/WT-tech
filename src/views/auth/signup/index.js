import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'components/ui/Input'; 
import useDidMount from 'hooks/useDidMount';
import { signUp } from 'actions/authActions';

import CircularProgress from 'components/ui/CircularProgress';
const SignUp =(props)=>{
    const [PasswordHidden, setPasswordHidden] = useState(true);
    const [signUpStatus, setSignUpStatus] = useState({});
    const [isSigninUp, setIsSigninUp] = useState(false);

    const  { isAuthenticating, authStatus } = useSelector( state => ({
        isAuthenticating: state.app.isAuthenticating,
        authStatus: state.app.authStatus
    }));

    const [field, setField] = useState({});
    const didMount = useDidMount();
    const dispatch = useDispatch();
    const passwordField = useRef(null);

    useEffect(()=> {
        if(didMount){
            setSignUpStatus(authStatus);
            setIsSigninUp(isAuthenticating);
        }
    }, [authStatus, isAuthenticating]);

    const onFullnameInput = (e, value, error) => {
        setField({ ...field, fullname: {value, error}});
    };
    const onEmailInput = (e, value, error) => {
       setField({ ...field, email: {value, error}});
    };
   const onPasswordInput = (e, value, error) => {
    setField({ ...field, password: {value, error}});
    };
    
    const onTogglePasswordVisibility = () => setPasswordHidden(!PasswordHidden);
    const onClickSignIn = () => props.history.push('/signin');
    const onFormSubmit = (e) => {
        e.preventDefault();
        const noError = Object.keys(field).every(key => !!field[key].value && !field[key].error);
        if(noError){
            dispatch(signUp({
                fullname: field.fullname.value.trim(),
                email: field.email.value.trim().toLowerCase(),
                password: field.password.value.trim()
            }));
        }
    };

    const isSuccess = !!authStatus.success && authStatus.type === 'auth';
    return(
        <div className="signup">
            {isSuccess && (
                <div className="loader">
                    <h3 className="toast-success signin-success">
                        {authStatus.message}
                        <CircularProgress/>
                    </h3>
                </div>
            )}
            {signUpStatus.message && (
                <h5 className="text-center toast-error">
                    {authStatus.message}
                </h5>
            )}
            {!isSuccess && (
                <>
                <div className={`signup-wrapper ${signUpStatus.message && (!authStatus.success && 'input-error')}`}>
                    <h3>Sign up to MobShop</h3>
                    <form onSubmit={onFormSubmit}> 
                        <div className="signup-field">
                            <Input
                                label="* Full Name"
                                maxLength={40}
                                readOnly={isSigninUp}
                                placeholder="Your Full Name"
                                onInputChange={onFullnameInput}
                                isRequired={true}
                                field="fullname"
                                style={{ textTransform: 'capitalize'}}
                                type="text"
                            />
                        </div>
                        <div className="signup-field">
                            <Input
                                label="* Email"
                                maxLength={40}
                                readOnly={isSigninUp}
                                placeholder="test@example.com"
                                onInputChange={onEmailInput}
                                isRequired={true}
                                field="email"
                                type="email"
                            />
                        </div>
                        <div className="signup=field">
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <div style={{flexGrow: 1}}>
                                    <Input
                                        label="* Password"
                                        maxLength={40}
                                        readOnly={isSigninUp}
                                        placeholder="Password"
                                        onInputChange={onPasswordInput}
                                        isRequired={true}
                                        field="password"
                                        ref={passwordField}
                                        type={PasswordHidden ? 'password' : 'text'}
                                        style={{ marginBottom: 0}}
                                    />
                                </div>
                                <button
                                    className="button button-small button-muted"
                                    disbaled={isSigninUp}
                                    onClick={onTogglePasswordVisibility}
                                    type="button"
                                >
                                    {PasswordHidden ? < i className="fa fa-eye"/> : <i className="fa fa-eye-splash"/>};
                                </button>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="signup-field signup-action">
                            <button
                                className="button signup-button"
                                disabled={isSigninUp}
                                type="submit"
                            >
                                <CircularProgress visible={isSigninUp} theme="light"/>
                                {isSigninUp ? 'signing Up': 'sign Up'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="signin-message">
                    <span className="signin-info">
                        <strong>Already have an account?</strong>
                    </span>
                    <button
                        className="button button-small button-border button-border-gray"
                        disabled={isSigninUp}
                        onClick={onClickSignIn}
                    >
                        Sign In                       
                    </button>
                </div>
                </>
            )}         
        </div>
    )
};
export default SignUp