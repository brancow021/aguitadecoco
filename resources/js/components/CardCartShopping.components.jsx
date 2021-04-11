import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AppContext } from "../context/Context";

export const CardCartShopping = () => {
    const { cart, saveProductInCart } = useContext(AppContext);
    const [cartData, setcartData] = useState([]);
    const [totalPaid, settotalPaid] = useState(0);

    useEffect(() => {
        setcartData(cart);
        cart.map((product) => {
            settotalPaid(totalPaid + product.price);
        });
    }, [cart]);

    const handlePaidTotal = async () => {
        await Swal.fire(
            "Compra Exitosa!",
            "Su compra a sido exitosa, Tu pedido llegara a tu domicilio en una semana",
            "success"
        );

        window.location.reload(false);
    };

    const deleteProductCard = async (id) => {
        let filterData = await cart.filter((product) => {
            return product.id !== id;
        });

        saveProductInCart(filterData);
        setcartData(cart)
    };

    return (
        <>
            {cart?.map((product) => (
                <div
                    key={product.id}
                    class="card mb-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img
                                src={product.cover}
                                class="card-img"
                                alt={product.title}
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.description}</p>
                                <p class="card-text price">
                                    Precio: $ {product.price}
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        {/* <button
                                            onClick={() =>
                                                deleteProductCard(product.id)
                                            }
                                            className="btn btn-danger w-100"
                                        >
                                            Eliminar del carrito
                                        </button> */}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    ;
                </div>
            ))}
            <button
                disabled={cart.length > 0 ? false : true}
                onClick={handlePaidTotal}
                className="btn btn-primary w-100"
            >
                Proceder a pagar: $ {cart.length === 0 ? 0 : totalPaid}
            </button>
        </>
    );
};
