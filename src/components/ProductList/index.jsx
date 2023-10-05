import { ProductCard } from "./ProductCard";
import { ProductListStyle } from "./style"

export const ProductList = ({ productList }) => {
   return (
      <ProductListStyle>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ProductListStyle>
   );
};
