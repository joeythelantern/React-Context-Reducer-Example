import { createContext } from 'react';
import IItem from '../interfaces/item';

export const inistialCartState: ICartState = {
    items: {}
};

export interface ICartActions {
    type: 'add_item' | 'remove_item';
    payload: IItem;
}

export interface ICartState {
    items: { [key: string]: IItem[] };
}

export const cartReducer = (state: ICartState, action: ICartActions) => {
    let item = action.payload;
    let items = { ...state.items };

    switch (action.type) {
        case 'add_item':
            if (items[item.name]) {
                items[item.name].push(item);
            } else {
                items[item.name] = [item];
            }

            return { ...state, items };
        case 'remove_item':
            items[item.name].pop();

            if (items[item.name].length === 0) delete items[item.name];

            return { ...state, items };
        default:
            return state;
    }
};

export interface ICartContextProps {
    cartState: ICartState;
    cartDispatch: React.Dispatch<ICartActions>;
}

const CartContext = createContext<ICartContextProps>({
    cartState: inistialCartState,
    cartDispatch: () => {}
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;
