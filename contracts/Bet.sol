import "./Market.sol";

contract Bet {
    Market public market;

    constructor(address _market) {
        market = Market(_market);
    }

}