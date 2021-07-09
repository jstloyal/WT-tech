import React,{useState} from 'react';
import firebase from 'firebase';
import {useEffect} from 'react';

const Dashboard =()=>{
    const [name, setName] = useState([]);
    const [productname,setProductName]= useState([]);
    const [address, setAddress] = useState([]);
    const [email, setEmail] = useState([]);
    const [price, setPrice] = useState([]);
    const [mobile, setMobile] = useState([]);

    const getListUsers = async() => {
        const name = [];
        const email = [];
        const productName = [];
        const address = [];
        const price = [];
        const mobile = [];

        const result = await firebase.firestore().collection("orders").get();
        if(result.docs.length > 0){
            let orders = [];
            orders = [...result.docs]
            orders.forEach((doc, index)=>{
                name.push(doc.data().fullname);
                email.push(doc.data().email);
                address.push(doc.data().address);
                productName.push(doc.data().ProductName);
                price.push(doc.data().price);
                mobile.push(doc.data().mobile.value);
            })
        }
        setName(name);
        setProductName(productName);
        setAddress(address);
        setEmail(email);
        setPrice(price);
        setMobile(mobile);
    }

    useEffect(()=> {
        getListUsers();
    },[]);
    
    return(
        <div className="product-form-inputsadmin">
            <div className="d-flex">
                <div className="product-form-field1">
                    <h2>Name</h2>
                    <h5>{name.map(item=><p className="admin-product-details">{item}</p>)}</h5>
                </div>
                <div className="product-form-fieldemail">
                    <h2>Phone</h2>
                    <h5>{mobile.map(item=><p className="admin-product-details">{item}</p>)}</h5>
                </div>
                <div className="product-form-fieldemail">
                    <h2>Product</h2>
                    <h5>{productname.map(item=><p className="admin-product-details">{item}</p>)}</h5>
                </div>
                <div className="product-form-fieldaddress">
                    <h2>Address</h2>
                    <h5>{address.map(item=><p className="admin-product-details">{item}</p>)}</h5>
                </div>
                <div className="product-form-field1">
                    <h2>Price</h2>
                    <h5>{price.map(item=><p className="admin-product-details">{item}</p>)}</h5>
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard;
