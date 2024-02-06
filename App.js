import './App.css';
import React,{useState} from 'react';
let pic = require("./requireds/img01.jpg")

function App() {
  const [amount, setamount = 90] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_4bKxmlpNcUmGsw", //apni razorpay ki key dalo 
        key_secret:"TJ5JWyBS3NVV7zZ2AuZJdenA",// apni razor pay ki secret_key dalo 
        amount: amount *100,
        currency:"INR",
        name:"Ecommerce",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Velmurugan",
          email:"mvel1620r@gmail.com",
          contact:"7904425033"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2>Checkout</h2>
     <br/>
     <img src={pic} alt="React Logo" />

     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
     <div className='product'>
     <input placeholder='address'></input><br></br>
     </div>
    </div>
  );
}

export default App;