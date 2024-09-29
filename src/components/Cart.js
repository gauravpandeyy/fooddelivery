import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return(
        <div className="">
            <div className="flex justify-center">
            <h1 className="text-center px-5 py-1 my-5 text-2xl font-bold">Cart</h1>
            <button className="px-3 py-1 my-5 bg-green-300 rounded-lg"
            onClick={handleClearCart}>Clear cart</button>
            </div>
            {cartItems.length === 0 && <h1 className="text-center m-5">Cart is empty! Please add items in the cart.🍕 </h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;