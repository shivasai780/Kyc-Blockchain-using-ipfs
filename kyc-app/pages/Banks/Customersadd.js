import React, { Component } from "react";
import bank from "../../ethereum/bank";
import web3 from "../../ethereum/web3";
import ipfs from "../../ethereum/ipfs.js";
import Layout from "../../components/layout";
import { Button, Form, Image, Input, Message } from "semantic-ui-react";
import { Link, Router } from "../../routes";

class Customersnew extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);
    const address = props.query.address;

    const Bank = bank(address);
    console.log(Bank);

    return { Bank, address };
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cus_add: "",
      ipfs_hash: "",
      phonenum: null,
      password: "",
      buffer: "",
      loading: false,
      errorMessage: "",
      value: "",
      minimumcontribute: null,
      contributed: null,
    };
    const Bank2 = this.props.Bank;
    console.log("hello ther" + Bank2);
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      console.log(this.props.Bank.methods);
      const Bank1 = bank(this.props.address);
      console.log(Bank1);
      const minimum = await Bank1.methods.minimum_amount().call();
      console.log(minimum);
      this.setState({ minimumcontribute: minimum });
    } catch (err) {
      console.log(err.message);
    }
  };

  captureFile = async (event) => {
    event.preventDefault();
    console.log(this.state.name);
    const file = event.target.files[0];
    const reader = new window.FileReader();
    console.log(this);
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
    await ipfs.files.add(this.state.buffer, (error, result) => {
      console.log(result);
      if (error) {
        console.log(error);
        return;
      }
      console.log("hii");
      this.setState({ ipfs_hash: result[0].hash });
      console.log(this.state.ipfs_hash);
    });
  };
  onSubmit = async (event) => {
    event.preventDefault();
    console.log(
      this.state.name,
      this.state.cus_add,
      this.state.ipfs_hash,
      this.state.phonenum,
      this.state.password,
      this.state.contributed
    );
    const Bank2 = bank(this.props.address);
    console.log(this.props.Bank);
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await Bank2.methods
        .register(
          this.state.name,
          this.state.cus_add,
          this.state.ipfs_hash,
          this.state.phonenum,
          this.state.password
        )
        .send({ from: accounts[0], value: this.state.contributed });
      Router.pushRoute(`/`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h3>Register new customer</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name </label>
            <Input
              label="Bank name"
              labelPosition="right"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            ></Input>
            <label>eth_address </label>
            <Input
              label="Bank address"
              labelPosition="right"
              value={this.state.ethaddress}
              onChange={(event) =>
                this.setState({ cus_add: event.target.value })
              }
            ></Input>
            <label>upload Identity proof</label>
            <img
              src={`https://gateway.ipfs.io/ipfs/${this.state.ipfs_hash}`}
              alt=""
              //style={{ width: 200, height: 200 }}
            ></img>
            <Input type="file" onChange={this.captureFile}></Input>

            <label>phonenumber </label>
            <Input
              label="Min 10 num"
              labelPosition="right"
              value={this.state.minimum}
              onChange={(event) => {
                this.setState({ phonenum: event.target.value });
              }}
            ></Input>
            <label>Enter your password</label>
            <Input
              type="password"
              label="Password"
              labelPosition="right"
              value={this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            ></Input>
            <label>Value</label>
            <Input
              label={`value minimumcontribute in wei:${this.state.minimumcontribute}`}
              labelPosition="right"
              onChange={(event) =>
                this.setState({ contributed: event.target.value })
              }
            ></Input>
          </Form.Field>

          <Message
            error
            header="oops!"
            content={this.state.errorMessage}
          ></Message>
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default Customersnew;
