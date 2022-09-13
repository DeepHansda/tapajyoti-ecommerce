import { Box, Chip, Container, Input, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { ProjectContext } from "../../App";
import { addToCart } from "../../Redux/Actions/CartActions";
import "./cart.css";

export default function CartCard({item}) {
  const {width} = useContext(ProjectContext)
  const dispatch = useDispatch();

  console.log(item)
  // Increase quantity
// const [quantity, setQuantity] = useState(1);
  const increaseQuantity = (id, quantity,stock) => {
    const newQty = quantity +1;
    if (stock <= quantity) return alert("Product stock limited");
    dispatch(addToCart(id, newQty));
      
  };
  
  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) return;
    dispatch(addToCart(id, newQty));
    
  };
    return (
      <Paper variant="outlined" sx={{marginTop:'15px'}}>
      <div className="cart-paper-container">
        <div className="cart-paper-desc">
          <div className="cart-paper-img">
            <img
              src={item.img}
            />
          </div>
  
          <div className="cart-paper-title">
            <Typography variant="h4">Prime Numner cart</Typography>
          {width >= 600 && width <= 1280? ProductPrice(item.price,item.quantity) : ''}
            
          </div>
        </div>
  
        <div className="cart-paper-numbers">
        <div className="cart-paper-quantity">
            <div className="cartInput">
              <Chip
                label="+"
                variant="outlined"
                onClick={() => increaseQuantity(item.id,item.quantity,item.stock)}
              />
              <Input type="number" readOnly value={item.quantity} />
              <Chip
                label="-"
                variant="outlined"
                onClick={() => decreaseQuantity(item.id,item.quantity)}
              />
            </div>
          </div>
  
          {width < 600 && ProductPrice(item.price,item.quantity)}
        </div>
      </div>
      </Paper>
    );

  function ProductPrice(price,quantity) {
    return <div className="cart-paper-price">
      <Typography variant="body1">{price*quantity}</Typography>
    </div>;
  }
  }