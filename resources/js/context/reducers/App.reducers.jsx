export const appReducer = (state, action) => {
    switch (action.type) {
        case 'addCart':
            return {
                ...state,
                cart: action.payload,
            };

        default:
            return state;
    }
};
