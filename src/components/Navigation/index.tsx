import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Badge } from 'reactstrap';
import CartContext from '../../contexts/cart';

const Navigation: React.FunctionComponent = props => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        let _count = 0;

        for (let key in cartContext.items)
            _count += cartContext.items[key].length;

        setCount(_count);
    }, [cartContext]);

    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={Link} to='/'>
                    Shop
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/cart'>
                                <i className="fas fa-shopping-cart"></i> 
                                    Cart
                                {count > 0 &&
                                    <Badge color="danger">{count}</Badge>
                                }
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
