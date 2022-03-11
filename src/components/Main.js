import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Product</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          const lastvaccain = this.lastvaccain.value
          const farmname = this.farmname.value
          const meatshopname = this.meatshopname.value
          const farmlocation = this.farmlocation.value
          const phone = this.phone.value

          this.props.createProduct(name, price,lastvaccain,farmname,meatshopname,farmlocation,phone)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="lastvaccain"
              type="text"
              ref={(input) => { this.lastvaccain = input }}
              className="form-control"
              placeholder="date Of lastVac"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="farmname"
              type="text"
              ref={(input) => { this.farmname = input }}
              className="form-control"
              placeholder="farm name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="meatshopname"
              type="text"
              ref={(input) => { this.meatshopname = input }}
              className="form-control"
              placeholder="meatshop name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="farmlocation"
              type="text"
              ref={(input) => { this.farmlocation = input }}
              className="form-control"
              placeholder="farm location"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="phone"
              type="text"
              ref={(input) => { this.phone = input }}
              className="form-control"
              placeholder="phone"
              required />
          </div>

          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
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
      </div>
    );
  }
}

export default Main;
