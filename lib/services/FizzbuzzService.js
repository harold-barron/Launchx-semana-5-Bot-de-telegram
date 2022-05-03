const Reader = require("./../../lib/utils/Reader");

class FizzzbuzzService{

    static applyValidationInExplorer(path,explorer)
    {
        const explorers = Reader.readJsonFile(path);
        const FindExplorerByName = explorers.find((explorerName) => explorerName.name === explorer);
        console.log(FindExplorerByName.score);
        if(FindExplorerByName.score%3 === 0)
        {
            FindExplorerByName.trick = "Fizz";
        }
        if(FindExplorerByName.score%5 === 0)
        {
            if(FindExplorerByName.score%3 === 0)
            {
                FindExplorerByName.trick += "Buzz";
            }
            else
            {
                FindExplorerByName.trick = "Buzz";
            }
        }
        else if (FindExplorerByName.score%3 != 0 && FindExplorerByName.score%5 != 0)
        {
            FindExplorerByName.trick = FindExplorerByName.score;
        }
        
        return FindExplorerByName;
    }
    static applyValidationInNumber(number)
    {
        let trick = {};
        if(number%3 === 0)
        {
            trick = {Score:number, trick: "Fizz"};
            console.log(trick);
        }
        if(number%5 === 0)
        {
            if(number%3 === 0)
            {
                trick.trick += "Buzz";
                console.log(trick);
            }
            else
            {
                trick = {Score:number, trick: "Buzz"};
                console.log(trick);
            }
        }
        else if (number%3 != 0 && number%5 != 0)
        {
            trick = {Score:number, trick:number};
            console.log(trick);
        }
        
        return trick;
    }
}

module.exports = FizzzbuzzService;