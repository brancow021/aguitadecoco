import React from "react";
import { FormCreateProducts } from "./FormCreateProducts.components";

export const ModalCreateProducts = React.memo(() => {
    return (
        <>
            <div
                className="modal fade"
                id="createProducts"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Creacion de productos
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormCreateProducts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
