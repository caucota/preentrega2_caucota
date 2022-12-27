export function CartReducer(state, action){
    switch (action.type) {
        case "ADD_PRODUCT":
            return{
                ...state,
                cantidad: state.cantidad + 1
            }
        default: 
            return state;
    }
}


/* export function CartReducer(state,action){

    const listaProductos = [];
    switch (action.type) {
        case "ADD_ITEMS":

          if(state.producto.length > 0){
            listaProductos.push(state.producto);
            }

            return{
                ...state,
                count:action.payload.count,
                producto:[action.payload.producto],
                listaProducto:listaProductos
            } 
  
        default:
            break;
    }
} */