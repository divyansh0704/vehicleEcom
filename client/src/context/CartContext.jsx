import { createContext,useState } from "react"
export const CartContext = createContext();
export const CartProvider=({children})=>{

    const [cart,setCart] =useState([]);

    const addToCart =(vehicle)=>{
        const existing=cart.find(i=>i._id === vehicle._id);
        if(existing){
            setCart(cart.map(i=>
                i._id===vehicle._id?{...i,quantity:i.quantity+1}:i

            ))
        }else{
            setCart([...cart,{...vehicle,quantity:1}])
        }
        // alert("vehicle added in cart");

    }
    const removeFromCart = (id)=>{
        setCart(cart.filter(i=>i._id!==id))

    }
    const updateQuantity =(id,qty)=>{
        setCart(cart.map(i=>i._id===id?{...i,quantity:qty}:i));
    }
    const clearCart=()=>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart,addToCart,clearCart,updateQuantity,removeFromCart}}>{children}</CartContext.Provider>
    )


} 

