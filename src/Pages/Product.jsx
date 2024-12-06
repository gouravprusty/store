import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumbs/Breadcrumb";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

export default function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((el) => el.id === Number(productId));
    return(
        <div>
            <Breadcrumb product={product}/>
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
};
