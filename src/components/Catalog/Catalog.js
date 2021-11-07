import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Vase1 from "../../assets/vase1.jpg"
import Vase2 from "../../assets/vase2.jpg"
import Vase3 from "../../assets/vase3.jpg"


let items = [
    {
        name: "Green vase",
        price: 123,
        image: Vase1
    },
    {
        name: "Blue vase",
        price: 228,
        image: Vase2
    },
    {
        name: "Yellow vase",
        price: 42,
        image: Vase3
    },
]

export function Catalog() {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <CatalogItem name={item.name} price={item.price} image={item.image}/>))
            }
        </Wrapper>
    );
}