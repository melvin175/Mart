import React, {useReducer, useContext, createContext} from 'react'


const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return[...state, action.item];
        default: 
          throw new Error(`Unknown action ${action.type}`)
    }
}



export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, []);

    return(
        <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)