import { Container, Row } from "react-bootstrap";
import { productsArr } from "./Constants";
import ProductModel from "./ProductModel";

const ProductList = () => {
    return (
        <>
            <Container>
                <Row className='d-flex g-5 justify-content-center align-items-center'>
                    {productsArr.map((product, index) => (
                        <ProductModel key={product.id} product={product} index={index} />
                    ))}
                </Row>

            </Container>
        </>
    );
};

export default ProductList;