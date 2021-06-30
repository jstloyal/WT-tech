import React,{useState} from 'react';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShowOrders from './show';

const UserOrdersTab =()=>{
    const [product, setProduct] = useState([]);
    const [priceproduct, setPrice] = useState([]);
    const profile = useSelector(state => state.profile);
    
const userOrders = () => {
        const orders = [];
        const userProducts = [];
        const price = [];
        firebase.firestore().collection('orders').where("email","==" ,profile.email)
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                orders.push({
                    email: doc.data().email,
                    name: doc.data().ProductName,
                    price:doc.data().price
                })
            });
            console.log(orders)
            orders.forEach(products=>{
                userProducts.push(products.name)
            });
            orders.forEach(products=>{
                price.push(products.price)
            });
            setProduct(userProducts);
            setPrice(price);        
        })
        .catch(function(error){
            console.log("Error getting document:", error)
        }); 
    };
    useEffect(()=>{
        userOrders();
    },[])
    return(
        <div>
            <div>
                <h3 className="text-subtle text-italic">Name: {profile.fullname}</h3>
                <h3 className="text-subtle text-italic">Email: {profile.email}</h3>
            </div>
            <ShowOrders name={product} price={priceproduct}/>
        </div>
    )
}
export default UserOrdersTab