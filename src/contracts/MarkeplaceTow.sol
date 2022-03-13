pragma solidity ^0.5.0;
import "./Marketplace.sol";

contract MarkeplaceTow is  Marketplace {

struct Product2 {
         uint id;
        string AccessTime;
        string Timetogoout;
        address payable owner;
          bool purchased;
  
    }
    mapping(uint => Product2) public products2;
    
    event ProductUpdated(
         uint id,
       string AccessTime,
        string Timetogoout,
        address payable owner,
         bool purchased
  
    );
    
     function Updateproduct(uint id,string memory _AccessTime,string memory _Timetogoout) public   { 
         Marketplace.purchaseProduct(id);
        Marketplace.products;
                

        require(bytes(_AccessTime).length > 0);
       
        require(bytes(_Timetogoout).length > 0);

        productCount ++;
        // Create the product
        products2[productCount] = Product2(id,_AccessTime,_Timetogoout ,msg.sender,false);
         emit ProductUpdated(id,_AccessTime,_Timetogoout, msg.sender,false);
    } 
} 
    

