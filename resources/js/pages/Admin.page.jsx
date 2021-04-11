import React, { useEffect, useState } from "react";
import { OrderProducts } from "../components/OrderProducts.components";
import { TableAdmin } from "../components/TableAdmin.components";
import { getProducts } from "../services/fetchData.services";

export const AdminPage = React.memo(() => {
    const [dataProducts, setdataProducts] = useState([]);
    const [refreshDataProducts, setrefreshDataProducts] = useState(false);

    const products = async () => {
        await getProducts().then((res) => {
            console.log(res);
            setdataProducts(res);
        });
    };

    useEffect(() => {
        if (dataProducts.length < 1) {
            products();
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="boxTitle mb-3">
                    <h2>Inventario de productos</h2>
                </div>

                <div className="adminContent">
                    <div>
                        <OrderProducts
                            countProducts={dataProducts.length}
                            isAdmin={true}
                            setdataProducts={setdataProducts}
                            dataProducts={dataProducts}
                            setrefreshDataProducts={setrefreshDataProducts}
                            refreshDataProducts={refreshDataProducts}
                        />
                    </div>
                    <TableAdmin dataProducts={dataProducts} />
                </div>
            </div>
        </>
    );
});
