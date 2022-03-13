import React, { Component } from 'react';

class Viewproduct extends Component {

  render() {
    return (
     <>
        <p>&nbsp;</p>
        <h2>Buy Product</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">date Of lastVac</th>
              <th scope="col">farm name</th>
              <th scope="col">meatshop name</th>
              <th scope="col">farm location</th>
              <th scope="col">Farmer phone</th>

              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.lastvaccain}</td>
                  <td>{product.farmname}</td>
                  <td>{product.meatshopname}</td>
                  <td>{product.farmlocation}</td>
                  <td>{product.phon}</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Buy
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Viewproduct;
