const Reader = require("./../../lib/utils/Reader");

class ExplorerService{

    static filterByMission(explorers,mission)
    {
        
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
        
    }

    static getAmountOfExplorersByMission(explorers, mission)
    {
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const numberOfExplorers = explorersInNode.length;
        return numberOfExplorers;
    }

    static getExplorersUsernamesByMission(explorers, mission)
    {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        const explorersNames = explorersInMission.map((explorers) => explorers.name);
        return explorersNames;
    }
}

module.exports = ExplorerService;