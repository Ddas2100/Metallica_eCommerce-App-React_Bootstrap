import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { RiShoppingCartFill, RiEyeFill } from 'react-icons/ri';
import {toast} from 'react-toastify';
import { Button, Card, CardBody, CardHeader, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductModel= ({product, index}) => {
    let classes = `d-flex justify-content-center ${
        index % 2 === 0 ? 'justify-content-md-end' : 'justify-content-md-start'
    }`;
    const cartCtx= useContext(CartContext);

    const addToCartHandler = (prodduct) => {
        const { id, title, price, imageUrl } = product;
        const item = { id, title, price, imageUrl, qty: 1 };

        const existingItemIndex = cartCtx.items.findIndex(
            (i) => i.id === product.id
        );

        if (existingItemIndex !== -1)
            return toast.warn('Item Already in the cart!', {
                position: 'top-center',
            });

        cartCtx.addItem(item);
    };

    return (
        <Col md='6' className={classes}>
            <Card style={{ width: '18rem' }}>
                <CardHeader className='d-flex gap-2 flex-column align-items-center'>
                    <h4>{product.title}</h4>
                    <img className='w-100' src={product.imageUrl} alt={product.title} />
                </CardHeader>
                <CardBody className='d-flex gap-2 flex-column justify-content-between'>
                    <div className='d-flex gap-1 flex-row justify-content-between align-items-center'>
                        <p className='d-flex mb-0 fw-bold fs-5'>$ {product.price}</p>
                    </div>
                    <div className='d-flex gap-2 justify-content-between'>
                        <Button
                            type='button'
                            className='w-100 display-6'
                            size='sm'
                            onClick={() => addToCartHandler(product)}
                            variant='primary'
                        >
                            <RiShoppingCartFill size={20} />
                        </Button>
                        <Link
                            className='text-decoration-none text-white w-100'
                            style={{ fontSize: '0.875rem' }}
                            to={`/products/${product.id}`}
                        >
                            <Button size='sm' variant='success' className='w-100'>
                                <RiEyeFill size={20} />
                            </Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductModel;