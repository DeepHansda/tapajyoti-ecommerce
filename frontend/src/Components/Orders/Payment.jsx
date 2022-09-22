import React, { useContext, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemIcon,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {useSelector} from "react-redux";
import Upi from "../../assets/icons/upi-icon.svg"
import bank from "../../assets/icons/wallet-to-bank-icon.svg"
import card from "../../assets/icons/card-return-icon.svg"
import wallet from "../../assets/icons/wallet-money-icon.svg"
import { Fragment } from "react";
import OrderStepper from "../Utils/OrderStepper";
import {ProjectContext} from "../../App"
import {paymentProcess} from "../../Redux/Actions/PaymentActions"
import Toast from "../Utils/Toast";
import { createOrders } from "../../Redux/Actions/OrderActions";



const methods = [
  { name: "UPI", type: "upi",logo:Upi },
  { name: "Wallets", type: "wallets" ,logo:wallet},
  { name: "Cards", type: "cards",logo:card },
  { name: "Net Bankings", type: "netBankings",logo:bank },
];
function Payment() {
  const paymentPrices = JSON.parse(sessionStorage.getItem('orderInfo'))
  const [paymentMethod, setPaymentMethod] = useState("upi");
  console.log(paymentMethod)
  const {user} = useSelector((state) => state.user);
  const {shippingInfo,cartItems}= useSelector((state) => state.cart)
  const {payment,error} = useSelector((state) => state.payment)
  console.log(user,shippingInfo,cartItems,payment,error,paymentPrices);
  const {dispatch, navigator ,setOpenAlert} = useContext(ProjectContext);
  


const placeOrder = () => {
  console.log('place ordder called')
  const orderData = {
    shippingInfo,
    orderedItems:cartItems,
    createdBy:user._id,
    shippingCharges:paymentPrices.shippingCharges,
    totalPrice:paymentPrices.totalPrice,
  }

  dispatch(createOrders(orderData))
}
  

  const handleOrder = () =>{
    dispatch(paymentProcess({amount:paymentPrices.totalPrice}))
    switch(paymentMethod){
      case 'upi':
        const upiBanks = {
          name: 'Pay via UPI',
          instruments: [
            {
              method: 'upi'
            }
          ],
        }
       return pay(upiBanks)

      case 'wallets':
        const walletsBanks = {
          name: 'Pay via Wallet',
          instruments: [
            {
              method: 'wallet'
            }
          ],
        }
        return pay(walletsBanks)

        case 'cards':
        const cardsBanks = {
          name: 'Pay via Cards',
          instruments: [
            {
              method: 'card'
            }
          ],
        }
        return pay(cardsBanks)

        case 'netBankings':
        const netBanks = {
          name: 'Pay via Net Banking',
          instruments: [
            {
              method: 'netbanking'
            }
          ],
        }
        return pay(netBanks)
        
        default:
          return setOpenAlert({open:true,message:"please select a payment option.",success:false})

    }

  }



  const pay = (banks) => {
    console.log(banks)
    var options = {
      "key": process.env.REACT_APP_KEY_ID, 
      "amount": payment.amount, 
      "currency":payment.currency,
      "name": "Dummy Academy",
      "description": "Pay & Checkout this Course, Upgrade your DSA Skill",
       "image":'',
      "order_id": payment.id,  
      "handler": function (response){
          console.log(response)
          alert("This step of Payment Succeeded");
      },
      "prefill": {
         //Here we are prefilling random contact
        "contact":user.phoneNo,
          //name and email id, so while checkout
        "name": user.full_name,  
        "email": user.email  
      },
      config: {
        display: {
          blocks: {
            banks:banks
          },
          sequence: ['block.banks'],
          preferences: {
            show_default_blocks: false,
          },
        },
      },
    
    "theme": {
          "color": "#2300a3"
      }
  }

  const rzp = new window.Razorpay(options);
  rzp.open()
};
  
  return (
    <Fragment>
      <Toast/>
      <OrderStepper activeStep={2}/>
    <Container maxWidth="md">
      <Paper variant="outlined" square>
        <Container sx={{ margin: "10px" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontFamily: "'Poppins',Roboto" }}
          >
            Payment Options
          </Typography>
        </Container>
      </Paper>
      <Paper variant="outlined" sx={{ padding: "20px", marginTop: "10px" }}>
        <FormControl fullWidth>
          <RadioGroup defaultValue="female" name="radio-payment-group" value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
            <List>
              {
                methods.map((method)=>{
                  return(
<ListItemButton>
                <ListItemIcon >
                  <img src={method.logo} alt="icon" style={{width:'30px'}}/>
                </ListItemIcon>

                <FormControlLabel
                  value={method.type}
                  control={<Radio size="small" color="success"/>}
                  label={method.name}
                  
                  
                />
              </ListItemButton>
                  )
                })
              }
              
            </List>
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="success" onClick={() => handleOrder()}>Pay ₹{paymentPrices.totalPrice}</Button>

        <Button onClick={() => placeOrder()}>place</Button>
      </Paper>
    </Container>
    </Fragment>
  );
}

export default Payment;
