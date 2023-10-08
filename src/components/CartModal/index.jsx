import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { CartModalStyle } from "./style";
import { useEffect, useState } from "react";

export const CartModal = () => {
   const [ arrayList, setArrayList ] = useState([])
   const total = arrayList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   useEffect(() => {
      const itemsArray = JSON.parse(localStorage.getItem("cartArray") || "[]")
      setArrayList(itemsArray)
   }, [])

   const clearItems = () => {
      localStorage.clear("cartArray")
      setArrayList([])
   }

   return (
      <CartModalStyle>
         <div role="dialog" className="container_dialog">
            <div className="header_dialog">
               <h2 className="heading3">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar">
                  <MdClose size={21} color="#FFFFFF80"/>
               </button>
            </div>
            <div className="body_dialog">
               <ul>
                  {arrayList.map((product) => (
                     <CartItemCard key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div className="total_price_container">
               <div className="header_total">
                  <span className="headline title">Total</span>
                  <span className="body price">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={clearItems} className="body">Remover todos</button>
            </div>
         </div>
      </CartModalStyle> 
   );
};
