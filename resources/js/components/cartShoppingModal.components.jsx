import React from "react";
import { CardCartShopping } from "./CardCartShopping.components";

export const CartShoppingModal = React.memo(() => {
    return (
        <>
            <div
                class="modal fade"
                id="cartShopping"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Carrito de compras
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <CardCartShopping />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            {/* <button type="button" class="btn btn-primary">
                                Proceder a Pagar
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
