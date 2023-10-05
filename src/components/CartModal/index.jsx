import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { CartModalStyle } from "./style";

export const CartModal = ({ cartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <CartModalStyle>
         <div role="dialog" className="container_dialog">
            <div className="header_dialog">
               <h2 className="heading3">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar">
                  <MdClose size={21} color="#FFFFFF80"/>
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div>
               <div>
                  <span>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button>Remover todos</button>
            </div>
         </div>
      </CartModalStyle>
   );
};
