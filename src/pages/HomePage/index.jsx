import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { HomeStyle } from "./style";
import axios from "axios";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   useEffect(() => {
      axios.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
         .then((result) => {
            setProductList(result.data)
         })
   }, [])

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <HomeStyle>
            <ProductList productList={productList} />
            <CartModal cartList={cartList} />
         </HomeStyle>
      </>
   );
};
