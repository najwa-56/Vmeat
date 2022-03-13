import React, { Component } from 'react';
import Slaughterhouse from './Slaughterhouse'
import Marketplace from '../abis/Marketplace.json'
import Web3 from 'web3'

class SlaughterhouseMain extends Component {

  render() {
    return (

        <div id="content">


        <p>&nbsp;</p>
        <h2>list of livestock</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
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
            {

             //product.purchased && product.owner == product.owner
              this.props.products.map((product, key) => {
              if (product.purchased  ){

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
                            { product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Edit
                        </button>
                      : null
                    }
                        </td>
                        </tr>
                    )}else{return(null)}


            })



          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SlaughterhouseMain;
