import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { HomeStyle } from "./style";
import axios from "axios";

export const HomePage = () => {
   const [ productList, setProductList ] = useState([]);
   const [ cartList, setCartList ] = useState([]);
   const [ stateModal, setStateModal ] = useState(false);
   
   useEffect(() => {
      axios.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
         .then((result) => {
            setProductList(result.data)
         })
   }, [])
   
   const receiveData = (data) => {
      setCartList(data)
   }

   const receiveState = (data) => {
      setStateModal(data)
   }

   return (
      <>
         <Header cartItems={cartList} modalState={receiveState}/>
         <HomeStyle>
            <ProductList productList={productList} cartItems={receiveData}/>
            {stateModal ? <CartModal modalStateHide={receiveState}/> : false}
         </HomeStyle>
      </>
   );
};
