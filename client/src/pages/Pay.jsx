import React from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { useEffect } from 'react';
import { publicRequest } from '../requestMethods';
const Key = "pk_test_51MUCHmSHJt6342bGI7NHwzXXCrpQpnwjNewQsdhN7XBQsOu40lYRdFdvMLUUvFle0CiDWxwrjUiWwaOfTl1a8ixA001cVTMAD0"


const Container=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
const PayButton=styled.button`
    font-size: x-large;
    border:none;
    background-color: black;
    color:white;
    padding:10px 15px;
    border-radius: 10px;
`

const Pay=()=>{
    const price = 400;

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}
//     const [stripeToken,setStripeToken]=useState(null)

//     const onToken=(token)=>{
//         setStripeToken(token)
//     };

// useEffect(()=>{
//     const makeRequest = async ()=>{
//         try{
//            const res = await axios.post("http://localhost:5001/api/checkout/payment",{
//             tokenId: stripeToken.id,
//             amount:100,
//            })
//            console.log(res.data);
//         }
//         catch(e){
//             console.log(e)
//         }
//     }
//     stripeToken && makeRequest()
// },[stripeToken])

async function displayRazorpay(amt) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const result = await publicRequest.post("/payment/orders", {amt});
    console.log(result)
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Gourav's Shop",
        description: "Test Transaction",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fmarketing%2Fgoogle-logo-history&psig=AOvVaw1pjRialZ2vS8fNsYf28GNK&ust=1678900464226000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIih4N_12_0CFQAAAAAdAAAAABAE",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            

            const result = await publicRequest.post("/payment/success",data);

            alert(result.data.msg);
        },
        prefill: {
            name: "",
            email: "",
            contact: "",
        },
        notes: {
            address: "",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

    return(
        <Container>
             <div className="App">
            <header className="App-header">
                <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fmarketing%2Fgoogle-logo-history&psig=AOvVaw1pjRialZ2vS8fNsYf28GNK&ust=1678900464226000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIih4N_12_0CFQAAAAAdAAAAABAE" className="App-logo" alt="logo" />
                <p>Buy React now!</p>
                <button className="App-link" onClick={()=>displayRazorpay(price)}>
                    Pay {price}
                </button>
            </header>
            </div>
            {/* <StripeCheckout 
            name="Shop" 
            billingAddress
            shippingAddress
            description='Your Total is Rs. 1'
            amount={100}
            currency="INR"
            token = {onToken}
            stripeKey={Key}
            >
                <PayButton>
                    PAY
                </PayButton>
            </StripeCheckout> */}
        </Container>
        
    )
}
export default Pay