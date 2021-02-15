import React from 'react';
import { Container, Row } from 'reactstrap';
import Navigation from '../components/Navigation';
import ShopItemComponent from '../components/ShopItem';
import IItem from '../interfaces/item';

export interface IShopPageProps {}

const itemsFromFakeBackend: IItem[] = [
    {
        name: 'Cool Shoe',
        pic: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg',
        price: 9.99
    },
    {
        name: 'New Slippers',
        pic: 'https://image.shutterstock.com/shutterstock/photos/1841561251/display_1500/stock-photo-many-different-soft-slippers-on-white-marble-background-flat-lay-1841561251.jpg',
        price: 9.99
    }
];

const ShopPage: React.FunctionComponent<IShopPageProps> = props => {
    return (
        <>
            <Navigation />
            <Container className="p-1">
                <Row>
                    {itemsFromFakeBackend.map((item, index) => <ShopItemComponent key={index} item={item} />)}
                </Row>
            </Container>
        </>
    );
}

export default ShopPage;