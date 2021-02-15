import React, { useContext } from 'react';
import { Container, Row } from 'reactstrap';
import CartItemComponent from '../components/CartItem';
import Navigation from '../components/Navigation';
import CartContext from '../contexts/cart';

export interface ICartPageProps {}

const CartPage: React.FunctionComponent<ICartPageProps> = props => {
    const cartContext = useContext(CartContext);    

    return (
        <>
            <Navigation />
            <Container className="p-1">
                {Object.keys(cartContext.items).length > 0 ?
                    <Row>
                        {Object.keys(cartContext.items).map((value, index) => {
                            let _items = cartContext.items[value];

                            if (_items.length > 0)
                            {
                                return (
                                    <CartItemComponent 
                                        key={index}
                                        item={_items[0]}
                                        quantity={_items.length}
                                    />
                                )
                            } 
                            else
                            {
                                return null;
                            }
                        })}
                    </Row>
                :
                    <p>Your cart is empty!</p>
                }
            </Container>
        </>
    );
}

export default CartPage;