import React, { useContext } from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import CartContext from '../../contexts/cart';
import IItem from '../../interfaces/item';

export interface IShopItemComponentProps {
    item: IItem;
}

const ShopItemComponent: React.FunctionComponent<IShopItemComponentProps> = (props) => {
    const { item } = props;
    const cartContext = useContext(CartContext);

    return (
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="shadow-sm mb-4">
                <img src={item.pic} alt="item" style={{ width: '100%', height: '250px' }} />
                <CardBody>
                    <strong>
                        <h5>{item.name}</h5>
                    </strong>
                    <br />
                    <div>
                        <div className="float-left">
                            <h4 className="text-warning">${item.price}</h4>
                        </div>
                        <div className="float-right">
                            <Button
                                size="sm"
                                color="primary"
                                onClick={() => cartContext.cartDispatch({ type: 'add_item', payload: item })}
                            >
                                Add to Cart
                                <i className="fa fa-plus ml-1" aria-hidden="true"></i>
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ShopItemComponent;