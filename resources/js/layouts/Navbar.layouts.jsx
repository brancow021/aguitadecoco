import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartShoppingModal } from "../components/cartShoppingModal.components";
import { AppContext } from "../context/Context";


export const NavbarLayouts = () => {
    const { cart } = useContext(AppContext);

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>
                            AGUITA DE COCO
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to={"/"}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={"/admin"}>
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex w-100 justify-content-end">
                                <div>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            data-toggle="modal"
                                            data-target="#cartShopping"
                                            to={"#"}
                                        >
                                            <i className="fa fa-shopping-cart text-white">
                                                <span class="badge badge-light ml-1">
                                                    {cart?.length}
                                                </span>
                                            </i>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
                <CartShoppingModal />
            </div>
        </>
    );
};
