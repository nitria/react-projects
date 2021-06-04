import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { data } from "../data";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  state = {
    products: data,
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  console.log(value);
                  return value.products.map((product) => {
                    return <Product product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
