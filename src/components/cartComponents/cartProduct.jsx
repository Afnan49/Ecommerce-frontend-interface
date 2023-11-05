// import css from "../../pages/Cart/cart.module.css";
import css from "../../assets/style/product.module.css";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import instance from "../../axiosConfig/instance";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../../store/slices/cart";

function CartProduct({ product }) {
    var [quantity, setQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    function inc(productId) {
        setQuantity(++quantity);
        instance.patch("/cart", { productId, quantity });
    }
    function dec(productId) {
        if (quantity > 1) {
            setQuantity(--quantity);
            instance.patch("/cart", { productId, quantity });
        }
    }
    async function removeFromcart(productId) {
        console.log("remove");
        dispatch(removeFromCartAction(productId))
    }

    return (
        <>
            <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
                <div
                    className={`${css["cart_product_left"]} float-start d-flex col-9`}
                >
                    {/* Card Image */}
                    <div
                        className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1 overflow-hidden`}
                        style={{ width: "7.75rem", height: "7.75rem" }}
                    >
                        <img
                            src={product._id.thumbnail}
                            className="h-100 m-auto overflow-hidden object-fit-scale w-100"
                        />
                    </div>
                    <div
                        className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column`}
                    >
                        <h4>{product._id.title}</h4>
                        <p>
                            Size: <span className="text-secondary">Large</span>
                        </p>
                        <p>
                            Color: <span className="text-secondary">Blue</span>
                        </p>
                        <h3 className="mt-auto mb-0">{product._id.price}EGP</h3>
                    </div>
                </div>
                <div
                    className={`${css["cart_product_right"]} d-flex align-items-end align-content-between col-3`}
                >
                    <button
                        className="btn text-danger fs-5"
                        onClick={() => {
                            removeFromcart(product._id._id);
                        }}
                    >
                        <FaTrash />
                    </button>
                    <div className="d-flex">
                        <button
                            onClick={() => {
                                dec(product._id._id);
                            }}
                            className={`${css.myBtn} rounded-0 rounded-start-5 w-25`}
                        >
                            <FaMinus />
                        </button>
                        <button
                            type=""
                            className="w-50 border bg-white px-4 fw-semibold"
                        >
                            {quantity}
                        </button>

                        <button
                            onClick={() => {
                                inc(product._id._id);
                            }}
                            className={`${css.myBtn} rounded-0 rounded-end-5 w-25`}
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartProduct;
