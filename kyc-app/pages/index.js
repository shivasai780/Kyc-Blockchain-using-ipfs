import React, { Component } from "react";
import kyc from "../ethereum/Kyc";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/layout";
import { Link } from "../routes";
/*const campaighindex =new Campaighnindex();
static campaighnindex.getintialprops
campaighindex.render()*/
class Camapighnindex extends Component {
  //static is class function .function is asssigned to the calss itself not for the instance
  static async getInitialProps() {
    const campaighn = await kyc.methods.getBankaddress().call();
    console.log(campaighn);
    return { campaighn }; //return this object as props to Campaighnindex
  }

  /* async componentDidMount() {
    
  }*/
  renderCampighns() {
    const items = this.props.campaighn.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/Banks/${address}`}>
            <a>View Bank</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Banks</h3>
          <Link route="/Banks/new">
            <a>
              <Button
                floated="right"
                content="Create Bank"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampighns()}
        </div>
      </Layout>
    );
  }
}
export default Camapighnindex;
