const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (req,res)=>
{
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req,res)=>
{
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({mission: req.params.mission, quantity: explorersInMission});
});

app.get("/v1/explorers/usernames/:mission", (req,res)=>
{
    const mission = req.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: req.params.mission, Usernames: explorersUsernames});
});

app.get("/v1/fizzbuzz/:score",(req,res)=>
{
    const number = req.params.score;
    const ValidationOfNumber = ExplorerController.getValidation(number);
    res.json(ValidationOfNumber);
});
