import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [classes] = useSelectedClass()
    const total = classes.reduce((sum, Class) => Class.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
   
   
    
    
   

    return (
        <div>
            
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} classes={classes} />
            </Elements>
        </div>
    );
};

export default Payment;