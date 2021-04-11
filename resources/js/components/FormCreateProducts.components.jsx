import React, { useState } from "react";
import { convertToBase64 } from "../helpers/convertToBase64.helpers";
import { createProducts } from "../services/fetchData.services";

convertToBase64

export const FormCreateProducts = React.memo(() => {
    const [formData, setformData] = useState({
        title: "",
        description: "",
        price: '',
        cover: "",
        id_discount: 0,
    });

    const handleChangeForm = (evt) => {
        const { target } = evt;
        setformData({
            ...formData,
            [target.name]: target.value,
        });
        // console.log(formData)
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await createProducts(formData).then((res) => console.log(res));
    };

    const handleChangeFile = async (evt) => {
        let base64 = await convertToBase64(evt.target.files[0]);
        // console.log(evt.target.files);
        setformData({
            ...formData,
            cover: base64
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="title">Titulo:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Arroz de coco"
                        required
                        name="title"
                        onChange={handleChangeForm}
                        value={formData.title}
                    />
                </div>

                <div className="form-group">
                    <label for="description">Descripcion:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        required
                        rows="3"
                        name="description"
                        onChange={handleChangeForm}
                        maxLength="100"
                        value={formData.description}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label for="price">Precio:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        required
                        name="price"
                        onChange={handleChangeForm}
                        placeholder="$ 32000"
                        value={formData.price}
                    />
                </div>
                <div className="form-group">
                    <label for="cover">Suba una imagen</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="cover"
                        required
                        onChange={handleChangeFile}
                    />
                </div>

                <input type="submit" className="btn btn-primary w-100" />
            </form>
        </>
    );
});
