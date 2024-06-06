import React from 'react'
import axios from "axios";

import useRazorpay from "react-razorpay";

function loadScript(src) {
    
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

function Payment() {
    const Razorpay = useRazorpay();
    
    const Pay = () => {
        const data = { "amount": 200 };
        const res =  loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        const add_data = axios.post("http://localhost:8080/user/create_order", data).then((res) => 
           // const data = await fetch('http://localhost:8080/user/create_order', { method: 'POST' }).then((t) =>
			console.log(res)
		)

		console.log(data)

		const options = {
			key: 'rzp_test_IMtOQYxTuBCdlF',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Payment',
			description: 'Thank you for shopping',
			
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				
				email: '',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}



        
    
    return (
        <div>   <button className="App-link" onClick={Pay}>
            Pay ₹500
        </button></div>
    )

    }

export default Payment