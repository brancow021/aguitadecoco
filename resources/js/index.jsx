import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarLayouts } from "./layouts/Navbar.layouts";
import { RouterPage } from "./routers/Router.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/app.css";
import "jquery";
import { FooterLayouts } from "./layouts/Footer.layouts";
import { AppContext } from "./context/Context";
import { appReducer } from "./context/reducers/App.reducers";

function App() {
	const initialState = {
		cart: [],
	};
	
	const [state, dispatch] = useReducer(appReducer, initialState);
	
    const saveProductInCart = (products) => {
        dispatch({
            type: "addCart",
            payload: products
        });
    };

    return (
        <>
            <div>
                <AppContext.Provider value={{ cart: state.cart, saveProductInCart }}>
                    <Router>
                        <NavbarLayouts />
                        <RouterPage />
                        <FooterLayouts />
                    </Router>
                </AppContext.Provider>
            </div>
        </>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
