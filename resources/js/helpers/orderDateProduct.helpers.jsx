export const orderProductsDate = async (productsArray, isRecent = false) => {
    let productsSort = [];
    console.log(productsArray);

    productsSort = await productsArray.sort((previous, next) => {
        let previousDate = new Date(previous.created_at).getTime();
        let nextDate = new Date(next.created_at).getTime();

        return !isRecent ? previousDate - nextDate : nextDate - previousDate;
    });

    console.log("Productos ordenados", productsSort);
    return productsSort;
};
