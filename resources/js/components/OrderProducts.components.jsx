import React, { useState } from "react";
import { orderProductsDate } from "../helpers/orderDateProduct.helpers";
import { ModalCreateProducts } from "./ModalCreateProducts.components";

export const OrderProducts = React.memo(
    ({
        isAdmin = false,
        countProducts = 0,
        setdataProducts,
        dataProducts,
        setrefreshDataProducts,
        refreshDataProducts,
    }) => {
        const [optionOrder, setoptionOrder] = useState("");

        const handleOrderData = async (evt) => {
            setoptionOrder(evt.target.value);
            let option = evt.target.value
            let dataSort = [];


            if (option === "recent") {
                dataSort = await orderProductsDate(dataProducts, true);
            } else if(option === 'old') {
                dataSort = await orderProductsDate(dataProducts, false);
            }

            console.log("data que llega al metodo", dataSort);
            setdataProducts(dataSort);
            setrefreshDataProducts(!refreshDataProducts);
        };

        return (
            <>
                <div className="boxOrderProducts container-fluid">
                    <div className="counProductsBox">
                        {countProducts} Productos Encontrados
                    </div>
                    <div>
                        <select
                            onChange={handleOrderData}
                            class="custom-select"
                            value={optionOrder}
                            id="inputGroupSelect01"
                        >
                            <option selected value="recent">
                                Ordenar por: Mas reciente
                            </option>
                            <option value="old">
                                Ordenar por: Mas antiguo
                            </option>
                        </select>
                    </div>

                    {isAdmin ? (
                        <div className="ml-4">
                            <button
                                data-toggle="modal"
                                data-target="#createProducts"
                                type="button"
                                className="btn btn-primary"
                            >
                                Agregar Nuevo Producto
                            </button>
                        </div>
                    ) : null}
                </div>

                <ModalCreateProducts />
            </>
        );
    }
);
