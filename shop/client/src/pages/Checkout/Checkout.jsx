import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51QKhCODM0QvU3sxJRpZfwsIuqnqJLz5bKHvZukyGG8iRLlKPbmnUxZe9QkGSloToCDoTgjdu5hOui3JERTrkoedA00SC1LFUHL');
const Checkout = () => {
  
        // passing the client secret obtained from the server
        const options = {
            mode: 'payment',
            currency: 'usd',
            amount: 1000,
        }
   
    
      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      );
    
}
export default Checkout;

