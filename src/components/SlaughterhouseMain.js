import React, { Component } from 'react';

class SlaughterhouseMain extends Component {

  render() {
    return (
      <div id="content">
        <form onSubmit={(event) => {
          event.preventDefault()

          const AccessTime = this.AccessTime.value
          const Timetogoout = this.Timetogoout.value

          this.props.createProduct2(AccessTime,Timetogoout)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="AccessTime"
              type="text"
              ref={(input) => { this.AccessTime = input }}
              className="form-control"
              placeholder="AccessTime"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="Timetogoout"
              type="text"
              ref={(input) => { this.Timetogoout = input }}
              className="form-control"
              placeholder="Timetogoout"
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
              <th scope="col">AccessTime</th>
              <th scope="col">Timetogoout</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products2.map((product2, key) => {
                   return(
                    <tr key={key}>
                      <th scope="row">{product2.id.toString()}</th>
                      <td>{product2.AccessTime}</td>
                  <td>{product2.Timetogoout}</td>
                  </tr>)})}



          </tbody>
        </table>

      </div>
    );
  }
}

export default SlaughterhouseMain;
