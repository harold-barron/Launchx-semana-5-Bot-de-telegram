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
        const amountOfExplorers = ExplorerService.filterByMission(explorer,mission);
        return amountOfExplorers;
    }
    static getValidation(number)
    {
        const numbreToValidate = FizzzbuzzService.applyValidationInNumber(number);
        return numbreToValidate;
    }
    static callBotFizzBuzz(token)
    {
        const explorer = Reader.readJsonFile("explorers.json");
        const callingBot = botService.createBot(token,explorer);
        return callingBot
    }
   
}

module.exports =ExplorerController;