import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartContextProvider } from './contexts/cart';
import IItem from './interfaces/item';
import CartPage from './pages/cart';
import ShopPage from './pages/shop';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [items, setItems] = useState<{ [key: string]: IItem[] }>({});

    const updateItems = (_items: { [key: string]: IItem[] }) => {
        setItems(_items);
    }

    const cartContextValues = {
        items,
        updateItems
    }

    return (
        <CartContextProvider value={cartContextValues}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ShopPage} />
                    <Route path="/cart" exact component={CartPage} />
                </Switch>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default Application;