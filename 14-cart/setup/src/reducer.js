

const reducer = (state, action) => {

    if(action.type === 'DISPLAY_ITEMS'){
        return {...state, 
           isLoading:false,
           cart:action.payload,
     }
    }
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: [] }
    }
    if(action.type === 'REMOVE'){
     let specificItem =  state.cart.filter((cartItem) => cartItem.id !== action.payload)
     return {...state, cart: specificItem}

    //  or 
    // if(action.type === 'REMOVE'){
    //     return{...state, cart:state.cart.filter((item) => item.id !== action.payload)}
    // }
     
    };
    // if(action.type === 'INCREASE'){
    //   let tempCart = state.cart.map((cartItem) => {
    //       if(cartItem.id === action.payload){
    //          return {...cartItem, amount : cartItem.amount + 1}
    //       }
    //       return cartItem;
    //   })
    //   return {...state, cart:tempCart}
    // }
    // if(action.type === 'DECREASE'){
    //     let tempCart = state.cart.map((cartItem) => {
    //         if(cartItem.id === action.payload){
    //            return {...cartItem, amount : cartItem.amount -1}
    //         }
    //         return cartItem;
    //     }).filter((cartItem) => cartItem.amount !== 0)

    //     return {...state, cart:tempCart}
    //   }

      if(action.type ==='TOGGLE_FUNCTIONS'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload.id){
                if(action.payload.type === 'incr'){
                    return{...cartItem, amount:cartItem.amount + 1}
                }
                if(action.payload.type === 'decr'){
                    return {...cartItem, amount:cartItem.amount - 1}
                }
            }
            return cartItem
        }).filter((items) => items.amount !== 0)
        return { ...state, cart: tempCart }
      }
     if(action.type === 'TOTALS'){
         const {total,amount} = state.cart.reduce((acc,val) => {
             const{amount,price} = val;
            acc.amount += amount;
            acc.total += amount * price
            return acc;
         },{total:0,amount:0})

         let parseTotal = parseFloat(total.toFixed(2))

         return { ...state, total:parseTotal, amount}
     }
     
     if(action.type === 'LOADING'){
         return {...state, isLoading:true}
     }
     
    return state;

}

export default reducer;