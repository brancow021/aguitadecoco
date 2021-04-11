import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../components/Loading.components";
import { OrderProducts } from "../components/OrderProducts.components";
import { getProducts } from "../services/fetchData.services";
import {} from "../index";
import { AppContext } from "../context/Context";
import Swal from "sweetalert2";

export const HomePage = () => {
    const [dataProducts, setdataProducts] = useState([]);
    const [refreshDataProducts, setrefreshDataProducts] = useState(false);
    const { saveProductInCart, cart } = useContext(AppContext);
    const [cartProducts, setcartProducts] = useState([]);

    const products = async () => {
        await getProducts().then((res) => {
            console.log(res);
            setdataProducts(res);
        });
    };

    useEffect(() => {
        if (dataProducts.length < 1) {
            products();
            console.log(dataProducts);
        }
    }, []);



    const addCartShopping = (product) => {
        setcartProducts([product, ...cartProducts]);

        if (cartProducts.length == 0) {
            Swal.fire(
                "Ah ocurrido un error!",
                "Compruebe su conexion a internet",
                "error"
            );
        } else {
            Swal.fire(
                "Articulo agregado al carrito!",
                "El articulo fue agregado correctamente al carrito de compras!",
                "success"
            );
        }
        saveProductInCart(cartProducts);
    };

    return (
        <>
            {dataProducts.length < 1 ? (
                <Loading />
            ) : (
                <div className="container-fluid">
                    <OrderProducts
                        setdataProducts={setdataProducts}
                        countProducts={dataProducts.length}
                        dataProducts={dataProducts}
                        setrefreshDataProducts={setrefreshDataProducts}
                        refreshDataProducts={refreshDataProducts}
                    />
                    <div class="row row-cols-1 row-cols-md-4">
                        {dataProducts?.map((product) => (
                            <div key={product?.id} className="col mb-4">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        style={{ height: "200px" }}
                                        src={product?.cover}
                                        class="card-img-top imgs"
                                        alt={product?.title}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">
                                            {product?.title}
                                        </h5>
                                        <p className="card-text">
                                            {product?.description}
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="price">
                                            $ {product?.price}
                                        </small>
                                        <button
                                            onClick={() =>
                                                addCartShopping(product)
                                            }
                                            className="btn btn-primary mt-3"
                                        >
                                            <i className="fa fa-shopping-cart">
                                                <span className="ml-3">
                                                    Agregar al carrito
                                                </span>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
