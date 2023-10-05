import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { HeaderStyle } from "./style";

export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <HeaderStyle>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className="card_button">
                <MdShoppingCart size={30} color="#BDBDBD" />
                <span>0</span>
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
