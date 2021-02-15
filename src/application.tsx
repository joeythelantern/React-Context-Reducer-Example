import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartContextProvider, cartReducer, inistialCartState } from './contexts/cart';
import CartPage from './pages/cart';
import ShopPage from './pages/shop';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [cartState, cartDispatch] = useReducer(cartReducer, inistialCartState);

    const cartContextValues = {
        cartState,
        cartDispatch
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