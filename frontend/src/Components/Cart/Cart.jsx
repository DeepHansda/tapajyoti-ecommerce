import { Box, Button, Chip, Container, Divider, Input, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ProjectContext } from "../../App";
import "./cart.css";
import CartCard from "./CartCard";



function Cart() {
  const {cartItems} = useSelector(state=>state.cart)
  const {navigator} = useContext(ProjectContext)  
  let TotalPrice = cartItems.reduce((acc,item)=>
    acc + item.quantity*item.price,0
  )

  const checkOutHandler = () => {
    navigator('/checkout')
  }
  return (
    <div className="cart">
      <Box sx={{ width: "100%" }}>
        <Container>
          <Typography variant="h2">Cart</Typography>
        </Container>

        <Paper elevation={2}>
          {
            cartItems.map((item)=>{
              return <CartCard item={item} key={item.id}/>
            })
          }

<Divider/>
          <div className="cart-sub-total">
            <div className="cart-sub-total-title">
              <Typography variant="h6">Sub-Total</Typography>
              <Typography variant="subtitle1">{cartItems.length} items</Typography>
            </div>

            <div className="total">
              <Typography variant="h3">{TotalPrice}</Typography>
            </div>

            
          </div>
          <div className="cart-checkout">
                <Button variant="outlined" onClick={() => checkOutHandler()}>
                    Check Out
                </Button>
            </div>
        </Paper>
      </Box>
    </div>
  );
}

export default Cart;
