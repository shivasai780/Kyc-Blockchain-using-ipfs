import React, { Component } from "react";
import kyc from "../../ethereum/Kyc";
import web3 from "../../ethereum/web3";
import Layout from "../../components/layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import { Link, Router } from "../../routes";

class BanksNew extends Component {
  state = {
    minimum: 0,
    name: "",
    ethaddress: "",
    errorMessage: "",
    loading: false,
  };
  onSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    console.log(this.state.name, this.state.ethaddress, this.state.minimum);
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await kyc.methods
        .CreateBank(this.state.name, this.state.ethaddress, this.state.minimum)
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Bank</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name </label>
            <Input
              label="Bank name"
              labelPosition="right"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            ></Input>
            <label>Address </label>
            <Input
              label="Bank address"
              labelPosition="right"
              value={this.state.ethaddress}
              onChange={(event) =>
                this.setState({ ethaddress: event.target.value })
              }
            ></Input>

            <label>Minimum </label>
            <Input
              label="Wei"
              labelPosition="right"
              value={this.state.minimum}
              onChange={(event) => {
                this.setState({ minimum: event.target.value });
              }}
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
export default BanksNew;
