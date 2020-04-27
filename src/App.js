import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';


function App() {
  const [key, setKey] = useState();

  const onToken = (token) => {
    console.log(token)
    window.alert(token.id);
  }
  return (
    <div>
      <input onChange={(e) => setKey(e.target.value)}/>
      <br /><br /><br />
      {
        key &&
        <StripeCheckout
          token={onToken}
          stripeKey={key}
        />
      }
    </div>
  );
}

export default App;
