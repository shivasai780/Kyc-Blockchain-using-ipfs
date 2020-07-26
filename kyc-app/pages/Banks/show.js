import React, { Component } from "react";
import bank from "../../ethereum/bank.js";
import web3 from "../../ethereum/web3";
import {
  Label,
  Card,
  Button,
  Input,
  Segment,
  Grid,
  Divider,
} from "semantic-ui-react";
import Layout from "../../components/layout";
import { Link } from "../../routes";
/*const campaighindex =new Campaighnindex();
static campaighnindex.getintialprops
campaighindex.render()*/
class ShowCustomers extends Component {
  //static is class function .function is asssigned to the calss itself not for the instance
  static async getInitialProps(props) {
    console.log(props.query.address);
    const address = props.query.address;
    console.log(bank(address));
    const Bank = bank(address);
    console.log(Bank);
    const array = await Bank.methods.get_noofcustomers().call();

    console.log(array);
    return { array, address }; //return this object as props to Campaighnindex
  }
  state = {
    loading: false,
    user: "",
    rating: null,
    rateuser: "",
    loading1: false,
  };
  renderCustomers() {
    const items = this.props.array.map((address) => {
      return {
        header: address,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  DeleteCustomer = async (event) => {
    event.preventDefault();
    console.log(this.state.user);
    const accounts = await web3.eth.getAccounts();
    const Bank1 = bank(this.props.address);
    this.setState({ loading: true });
    try {
      await Bank1.methods
        .Delete_Customer(this.state.user)
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ loading: false });
  };
  RateUser = async (event) => {
    event.preventDefault();
    console.log(this.state.rateuser, this.state.rating);
    const accounts = await web3.eth.getAccounts();
    const Bank2 = bank(this.props.address);
    this.setState({ loading1: true });
    try {
      await Bank2.methods
        .rate_users(this.state.rateuser, this.state.rating)
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ loading1: false });
  };
  render() {
    return (
      <Layout>
        <div>
          <Segment>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <h3>Customers</h3>
                {this.renderCustomers()}
              </Grid.Column>
              <Grid.Column verticalalign="middle">
                <Link route={`/Banks/${this.props.address}/new`}>
                  <a>
                    <Button
                      content="Register Customer"
                      icon="add circle"
                      primary
                    />
                  </a>
                </Link>
                <Divider horizontal></Divider>
                <Input
                  floated="right"
                  placeholder="address"
                  onChange={(event) =>
                    this.setState({ user: event.target.value })
                  }
                ></Input>
                <Button
                  primary
                  onClick={this.DeleteCustomer}
                  loading={this.state.loading}
                  size="Large"
                >
                  Delete user
                </Button>
                <Divider horizontal></Divider>
                <Input
                  action="Adress"
                  floated="right"
                  placeholder="Adress"
                  onChange={(event) =>
                    this.setState({ rateuser: event.target.value })
                  }
                ></Input>

                <Input
                  action="Limit5"
                  floated="right"
                  placeholder="number"
                  onChange={(event) =>
                    this.setState({ rating: event.target.value })
                  }
                ></Input>
                <Button
                  primary
                  size="Large"
                  onClick={this.RateUser}
                  loading={this.state.loading1}
                >
                  Rate user
                </Button>
              </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
          </Segment>
        </div>
      </Layout>
    );
  }
}
export default ShowCustomers;
