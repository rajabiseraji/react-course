import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * Extenral components
 */
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

class ProductCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="my-card">
                <Card>
                    <CardImg top width="100%" src={this.props.imgUrl} alt={this.props.title} />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>
                            {this.props.price} - 
                            <Badge color="danger">{this.props.discount}</Badge> 
                        </CardSubtitle>
                        <Button color="success">Add</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

ProductCard.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    onAddProduct: PropTypes.func
}

ProductCard.defaultProps = {
    title: 'Test',
    imgUrl: '',
    price: 1000,
    discount: 10,
}

export default ProductCard;
