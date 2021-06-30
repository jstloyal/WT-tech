import React, {lazy} from 'react';
import UserTab from '../tab/UserTab';
import CircularProgress from 'components/ui/CircularProgress';
import { Suspense } from 'react';
const UserAccountTab = lazy(()=> import('../tab/UserAccountTab'));
const UserOrdersTab = lazy(()=>import('../tab/UserOrdersTab'));
const UserAccount =()=>{
    const Loader = () => (
        <div className="loader" style={{minHeight:'80vh'}}>
            <CircularProgress/>
            <h6>Loading.....</h6>
        </div>
    )
    return(
        <UserTab>
            <div index={0} label="Account">
                <Suspense fallback={<Loader/>}>
                    <UserAccountTab/>
                </Suspense>
            </div>
            <div index={2} label="My Orders">
                <Suspense fallback={<Loader/>}>
                    <UserOrdersTab/>
                </Suspense>
            </div>
        </UserTab>
    )
};
export default UserAccount