import { MdDelete } from "react-icons/md";
import { CartItemCardStyle } from "./style";

export const CartItemCard = ({ product }) => {
   
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
         <button aria-label="delete" title="Remover item">
            <MdDelete size={21} color="#BDBDBD"/>
         </button>
      </CartItemCardStyle>
   );
};
