import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductListStyle } from "./style"

export const ProductList = ({ productList, cartItems }) => {

   const receive = (data) => {
      cartItems(data)
   }

   return (
      <ProductListStyle>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} cartArray={receive}/>
         ))}
      </ProductListStyle>
   );
};
