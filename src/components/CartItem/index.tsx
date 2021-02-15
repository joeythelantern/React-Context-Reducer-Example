import React, { useContext } from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import CartContext from '../../contexts/cart';
import IItem from '../../interfaces/item';

export interface ICartItemComponentProps {
    item: IItem;
    quantity: number;
}

const CartItemComponent: React.FunctionComponent<ICartItemComponentProps> = (props) => {
    const { item, quantity } = props;
    const cartContext = useContext(CartContext);

    return (
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="shadow-sm mb-4">
                <CardBody>
                    <strong>
                        <h5>{item.name} x {quantity}</h5>
                    </strong>
                    <br />
                    <div>
                        <h4 className="text-warning">${item.price * quantity}</h4>
                        <Button
                            size="sm"
                            color="primary"
                            onClick={() => cartContext.cartDispatch({ type: 'remove_item', payload: item })}
                        >
                            Remove one from cart
                            <i className="fa fa-minus ml-1" aria-hidden="true"></i>
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CartItemComponent;