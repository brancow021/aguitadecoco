const csrfToken = document.head.querySelector("[name~=csrf-token][content]")
    .content;

export const getProducts = async () => {
    return await fetch("/api/products").then((res) => res.json());
};

export const createProducts = async (dataForm) => {
    console.log(dataForm);
		console.log(csrfToken);

    return await fetch("/api/products", {
        credentials: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        method: "POST",
        body: JSON.stringify(dataForm),
    }).then((res) => res.json());
};
