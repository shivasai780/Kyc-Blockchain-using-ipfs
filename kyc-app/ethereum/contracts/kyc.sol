pragma solidity ^0.4.17;

contract Kyc {
    address[] public Banks;
    address owner = msg.sender;

    function CreateBank(
        string name,
        address eth_address,
        uint256 minimum
    ) public {
        require(msg.sender == owner);
        address Bankaddress = new Bank(name, eth_address, minimum, msg.sender);
        Banks.push(Bankaddress);
    }

    function getBankaddress() public view returns (address[]) {
        return Banks;
    }
    /*function Delete_Bank(address bank_address)public
    {
        selfdestruct(bank_address);
    }*/
}

contract Bank {
    struct Customer {
        string name;
        address cus_eth_address;
        string verification_number;
        uint256 phonenumber;
        uint256 rating;
        string password;
        uint256 value;
    }
    address public Owner;
    address[] customers_arr;
    modifier Only_Owner() {
        require(msg.sender == Owner);
        _;
        _;
    }
    string public name;
    Customer[] public arr_customers;
    uint256 public minimum_amount;
    //mapping(address => Customer) single_Customer
    address eth_address;

    function Bank(
        string _name,
        address _eth_address,
        uint256 minimum,
        address _Owner
    ) public {
        name = _name;
        eth_address = _eth_address;
        minimum_amount = minimum;
        Owner = _Owner;
    }

    function register(
        string _name,
        address cus_add,
        string num,
        uint256 phonenumber,
        string password
    ) public payable {
        require(msg.sender != Owner);
        if (msg.value > minimum_amount) {
            if (arr_customers.length > 1) {
                for (uint256 i = 0; i < arr_customers.length; i++) {
                    if (
                        String_com(arr_customers[i].name, _name) ||
                        String_com(arr_customers[i].verification_number, num) ||
                        String_com(arr_customers[i].password, password) ==
                        true ||
                        arr_customers[i].cus_eth_address == cus_add ||
                        arr_customers[i].phonenumber == phonenumber
                    ) {
                        revert();
                    }
                }
            }

            Customer memory newdata = Customer({
                name: _name,
                cus_eth_address: cus_add,
                verification_number: num,
                phonenumber: phonenumber,
                rating: 0,
                password: password,
                value: msg.value
            });
            arr_customers.push(newdata);
            customers_arr.push(cus_add);

            //single_Customer[cus_add]=newdata;
        } else {
            revert();
        }
    }

    function String_com(string storage _a, string memory _b)
        internal
        returns (bool)
    {
        bytes storage a = bytes(_a);
        bytes memory b = bytes(_b);
        if (a.length == b.length) {
            return true;
        } else {
            return false;
        }
    }

    function Delete_Customer(address our_eth_address) public Only_Owner {
        for (uint256 i = 0; i < arr_customers.length; i++) {
            if (arr_customers[i].cus_eth_address == our_eth_address) {
                arr_customers[i].cus_eth_address.transfer(
                    arr_customers[i].value
                );

                arr_customers[i] = arr_customers[arr_customers.length - 1];
                customers_arr[i] = customers_arr[customers_arr.length - 1];
                delete arr_customers[arr_customers.length - 1];
                delete customers_arr[customers_arr.length - 1];
                customers_arr.length--;
                arr_customers.length--;
                return;
            }
        }
    }

    function rate_users(address user_address, uint256 rate) public Only_Owner {
        for (uint256 i = 0; i < arr_customers.length; i++) {
            if (arr_customers[i].cus_eth_address == user_address) {
                arr_customers[i].rating = rate % 5;
            }
        }
    }

    function get_noofcustomers() public view returns (address[]) {
        return customers_arr;
    }
}
