contract Market {
    struct Market {
        string question;
        uint betAmount;
        address creator;
    }
    
    Market[] public markets;
    
    function createMarket(string memory question) public {
        markets.push(Market({
            question: question,
            betAmount: 0,
            creator: msg.sender
        }));
    }
    
   
}

