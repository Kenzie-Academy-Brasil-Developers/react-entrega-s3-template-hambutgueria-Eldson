import { ProductCardStyle } from "./style"

export const ProductCard = ({ product }) => {
    return(
        <ProductCardStyle>
            <div className="container_image">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="container_info">
                <h3 className="heading3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body color-span-body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button>Adicionar</button>
            </div>
        </ProductCardStyle>
    )
}