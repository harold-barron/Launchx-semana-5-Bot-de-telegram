const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzzbuzzService = require("./../services/FizzbuzzService");
const botService = require("./../services/botService")
class ExplorerController{

    static getExplorersByMission(mission)
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const explorersInMission1 = ExplorerService.filterByMission(explorer,mission);
        return explorersInMission1;
    }

    static getExplorersUsernamesByMission(mission)
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorer,mission);
        return explorersUsernames;
    }
    static getExplorersAmonutByMission(mission)
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorer,mission);
        return amountOfExplorers;
    }
    static getValidation(number)
    {
        const numbreToValidate = FizzzbuzzService.applyValidationInNumber(number);
        return numbreToValidate;
    }
    static callBot(token)
    {
        const callingBot = botService.createBot("5368739879:AAHA2JfFHig_BxJHcX8aoovJeEubyFExfFU");
    }
}

module.exports =ExplorerController;