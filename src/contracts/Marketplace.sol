pragma solidity ^0.5.0;

contract Marketplace {
    string public name;

    struct Product {
        uint id;
        string name;
        uint price;
        string lastvaccain;
        string farmname;
        string meatshopname;
        string farmlocation;
        uint phone;
        address payable owner;
        bool purchased;
    }
     uint public productCount ;
    mapping(uint => Product) public products;

    event ProductCreated(
        uint id,
        string name,
        uint price,
        string lastvaccain,
        string farmname,
        string meatshopname,
        string farmlocation,
        uint phone,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        string lastvaccain,
        string farmname,
        string meatshopname,
        string farmlocation,
        uint phone,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "Vmeat";
    }

    function createProduct(string memory _name, uint _price,string memory lastvaccain1, string memory _farm_name ,
     string memory meatshop_name, string memory farm_location,  uint phone) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        require(bytes(lastvaccain1).length > 0);
        require(bytes(_farm_name).length > 0);
        require(bytes(meatshop_name).length > 0);
        require(bytes(farm_location).length > 0);
                require(phone > 0);

        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _price  , lastvaccain1 ,_farm_name ,meatshop_name,farm_location,phone, msg.sender, false);
        // Trigger an event
        emit ProductCreated(productCount, _name, _price,lastvaccain1,_farm_name ,meatshop_name,farm_location,phone, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address payable _seller = _product.owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price);
        // Require that the product has not been purchased already
        require(!_product.purchased);
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        // Transfer ownership to the buyer
        _product.owner = msg.sender;
        // Mark as purchased
        _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price,_product.lastvaccain,_product.farmname,_product.meatshopname, _product.farmlocation ,_product.phone, msg.sender, true);
    }
}
