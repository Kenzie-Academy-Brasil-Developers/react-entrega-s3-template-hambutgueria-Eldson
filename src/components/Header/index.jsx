import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { HeaderStyle } from "./style";

export const Header = ({cartItems, modalState}) => {
   const [ cartList, setCartList ] = useState([])

   useEffect(() => {
      const cartLocal = JSON.parse(localStorage.getItem("cartArray") || "[]")
      setCartList(cartLocal)
   }, [])

   const showOrHideModal = () => {
      modalState(true)
   }


   return (
      <HeaderStyle>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className="card_button" onClick={showOrHideModal}>
                <MdShoppingCart size={30} color="#BDBDBD" />
                <span>{cartItems.length == 0 ? cartList.length : cartItems.length}</span>
            </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
      </HeaderStyle>
   );
};
