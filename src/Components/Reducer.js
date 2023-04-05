export const reducer = (state, action) =>{
   if(action.type === "Delete_Item"){
    return{
        ...state,
        item: state.item.filter((curItem) => {
            return curItem.id !== action.payload;

        }),
    };
   };
   if(action.type === "Increment"){
    const updatedShoppingCart = state.item.map((curItem) => {
        if (curItem.id === action.payload) {
            return{...curItem, Quantity:curItem.Quantity + 1};
        }
        return curItem;
    });

    return { ...state, item:updatedShoppingCart };
   }

    
   if(action.type === "Decrement"){
    const updatedShoppingCart = state.item.map((curItem) => {
        if (curItem.id === action.payload) {
            if(curItem.Quantity===1){
                return{...curItem, Quantity:1};
            }
            return{...curItem, Quantity:curItem.Quantity - 1};
        }
        return curItem;
    });

    return { ...state, item:updatedShoppingCart };
   }

    return state;
};