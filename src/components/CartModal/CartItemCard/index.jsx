import { MdDelete } from "react-icons/md";
import { CartItemCardStyle } from "./style";
import { useEffect, useState } from "react";

export const CartItemCard = ({ product, index, removeItem}) => {
   const [ arrayItems, setArrayItems ] = useState([])

   useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem("cartArray") || "[]")
      setArrayItems(cartItems)
   }, [])

   const handleRemoveClick = () => {
      removeItem(index)
   }

   return (
      <CartItemCardStyle>
         <div className="left_container">
            <div className="image">
               <img src={product.img} alt={product.name} />
            </div>
            <div className="info_dialog">
               <h3 className="heading3">{product.name}</h3>
               <p className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
         </div>
         <button onClick={handleRemoveClick} aria-label="delete" title="Remover item">
            <MdDelete size={21} color="#BDBDBD"/>
         </button>
      </CartItemCardStyle>
   );
};
