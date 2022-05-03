const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
describe("Unit test for Explorer Services", () =>
{
    test("1. test to filter all the explorers by their mission", () =>
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const filterByNode = ExplorerService.filterByMission(explorer,"node");
        const ExplorersWithNode = filterByNode.forEach(expName => expect(expName.mission).toContain("node"));
    });
    test("2. Get the amount of explorers by their mission", () =>
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const ExplorerByMission = ExplorerService.getAmountOfExplorersByMission(explorer,"node");
        expect(ExplorerByMission).toBe(10);
             
    });

    test("3. Get explorers usernames by their mission", () =>
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const explorersByName=ExplorerService.getExplorersUsernamesByMission(explorer,"node");
        console.log(explorersByName);
    });
});