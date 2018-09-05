import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * needed component
 */
import ProductCard from '../../components/ProductCard';

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'first',
                    price: 2500,
                    discount: 20,
                    imgUrl: 'https://images.yourstory.com/2016/08/125-fall-in-love.png?auto=compress'
                },
                {
                    id: 2,
                    title: 'second',
                    price: 3500,
                    discount: 30,
                    imgUrl: 'https://images.yourstory.com/2016/08/125-fall-in-love.png?auto=compress'
                },
                {
                    id: 3,
                    title: 'third',
                    price: 4500,
                    discount: 30,
                    imgUrl: 'https://images.yourstory.com/2016/08/125-fall-in-love.png?auto=compress'
                }
            ]
        };
    }

    renderProducts = () => {
        this.state.products.map((product) => {
            return (
                <div className="col-xs-12 col-sm-5">
                    <ProductCard title={product.title} 
                                price={product.price}
                                discount={product.discount}
                                imgUrl={product.imgUrl}
                                key={product.id} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                <h3>Products</h3>
                <hr />
                {}
            </div>
        )
    }
}

ProductListPage.propTypes = {

}

ProductListPage.defaultProps = {

}

export default ProductListPage;
