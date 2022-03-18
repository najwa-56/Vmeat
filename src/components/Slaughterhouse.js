import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
import './App.css';
import Contract2 from '../abis/Contract2.json'
import Navbar from './Navbar'
import SlaughterhouseMain from './SlaughterhouseMain'
import Farmerp from './Farmerp';
import {BrowserRouter as Router , Routes } from "react-router-dom";

import Main from './Main'


class Slaughterhouse extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData= Contract2.networks[networkId]
    if(networkData ) {
      const marketplace1 = web3.eth.Contract(Contract2.abi, networkData.address)
      this.setState({ marketplace1 })
      const productCount = await marketplace1.methods.productCount().call()
      this.setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product1 = await marketplace1.methods.products2(i).call()
        this.setState({
          products2: [...this.state.products2, product1]

        })

      }
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }

  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,

      products2: [],


      loading: true
    }
    this.createProduct2=this.createProduct2.bind(this)

  }
  createProduct2(AccessTime,Timetogoout){
    this.setState({ loading: true })
    this.state.marketplace1.methods.createProduct2(AccessTime,Timetogoout).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })

  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">

              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <SlaughterhouseMain

                  products2={this.state.products2}

                  createProduct2={this.createProduct2}

                  />

              }
            </main>

          </div>
        </div>
      </div>
    );
  }

}

export default Slaughterhouse;
