import { createContext } from 'react';
import IItem from '../interfaces/item';

export interface ICartProps {
    items: { [key: string]: IItem[] };
    updateItems: (items: { [key: string]: IItem[] }) => void;
}

const CartContext = createContext<ICartProps>({
    items: {},
    updateItems: (items: { [key: string]: IItem[] }) => {}
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;
