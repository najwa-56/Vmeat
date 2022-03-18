pragma solidity ^0.5.0;
import "../contracts/Marketplace.sol";

contract Contract2 is Marketplace{
    
    uint id2;
struct Product2 {
       
        uint  id;
        string AccessTime;
        string Timetogoout;
        address payable owner;
      
    }
    mapping(uint => Product2) public products2;
    

 event ProductUpdated(
        uint  id,
       string AccessTime,
        string Timetogoout,
        address payable owner
    );
//function reader()  public payable returns( uint _id) {
   //  Product memory _product = products[ _id];
   //   if (_product.purchased= true){
   //   return _product.id;}
//}
function createProduct2(uint idf,string memory _AccessTime, string memory Timetogoout) public  {
        // Require a valid name
        require(bytes(_AccessTime).length > 0);
        require(bytes(Timetogoout).length > 0);
        require(idf > 0);      
        // Create the product
        products2[id2] = Product2(id2,_AccessTime,Timetogoout,  msg.sender);
        // Trigger an event
        emit ProductUpdated(id2, _AccessTime, Timetogoout, msg.sender);
    }


}
