const Reader = require("./../../lib/utils/Reader");

describe("Test for Reader",() =>
{
    
    test("1. Get a list of explores in a JSON file", () =>
    {
        const ExplorersInJson = Reader.readJsonFile("explorers.json");
        console.log(ExplorersInJson);
    });
});