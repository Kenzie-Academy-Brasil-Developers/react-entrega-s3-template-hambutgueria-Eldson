import { useEffect, useState } from "react"
import { ProductCardStyle } from "./style"
import { toast } from "react-toastify"

export const ProductCard = ({ product, cartArray }) => {
    const [ isFocused, setIsFocused ] = useState(false)

    const addItemToCart = (nameItem) => {
        const cartItems = JSON.parse(localStorage.getItem("cartArray") || "[]");
        
        const inItems = cartItems.find((element) => {
            return element.name === nameItem
        })

        if (!inItems) {
            const DataCart = {
                img: product.img,
                name: product.name,
                category: product.category,
                price: product.price
            }
            
            const updatedArray = [...cartItems, DataCart]
            localStorage.setItem("cartArray", JSON.stringify(updatedArray))
    
            cartArray(updatedArray)
            setIsFocused(true)
        } else {
            toast.error("Item ja adicionado!")
            console.log("Ja adicionado!")
        }
    }

    return(
        <ProductCardStyle className={isFocused ? "focus" : ""}>
            <div className="container_image">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="container_info">
                <h3 className="heading3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body color-span-body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addItemToCart(product.name)}>Adicionar</button>
            </div>
        </ProductCardStyle>
    )
}