import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import './CheckoutForm.css'


const CheckOutForm = ({price , classes}) => {

const stripe = useStripe();
const elements = useElements();
const {user} = useAuth()
const [axiosSecure] = useAxiosSecure()
const [clientSecret, setClientSecret] = useState('')
const [cardError, setCardError] = useState('')
const [processing, setProcessing]= useState(false)
const [transactionId, setTransactionId] = useState('')


useEffect(()=>{
   if(price > 0){
    axiosSecure.post('/create-payment-intent', {price})
    .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
    })
   }
},[axiosSecure, price])
    
const handleSubmit = async(event)=>{
    event.preventDefault();
    if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
      if(card === null){
        return;
      }
      console.log(card);
      const {error} = await stripe.createPaymentMethod({
        type: 'card', 
        card
      })

      if(error){
        console.log('errorrrr',error);
        setCardError(error.message)
      }
      else{
        setCardError('')
      }
      setProcessing(true)
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card: card,
            billing_details:{
                email: user?.email || 'unknown',
                name: user?.displayName || 'anonymous'
            }
        }
      })
      if(confirmError){
        console.log(confirmError);
      }
      setProcessing(false)
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
        // const transactionId = paymentIntent.id;
        const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: classes.length,
            selectedClass: classes.map(Class => Class._id),
            classes: classes.map(Class => ({
                classId: Class.Class.class_id,
                className: Class.Class.name,
                classImage: Class.Class.image
              })),
        }
        axiosSecure.post('/payments', payment)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                // 
            }
        })
      }
      console.log(paymentIntent);
}
         
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-3' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-600'>Transaction Complete with TransactionId:{transactionId}</p>
            }
        </div>
    );
};

export default CheckOutForm;