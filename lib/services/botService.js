const TelegramBot = require("node-telegram-bot-api");
const FizzBuzzVal = require("./FizzbuzzService")
const explorerService = require("./ExplorerService")
class botService
{
    static createBot(token,explorer)
    {
        const bot = new TelegramBot(token, {polling: true});
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
        
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"
        
            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            // console.log(msg.text,explorer)
            const numberToApplyFb = parseInt(msg.text);
            if (msg.text === "node")
            {
                const explorersInNode = explorerService.getExplorersUsernamesByMission(explorer,"node")
                explorersInNode.forEach(expname=>bot.sendMessage(chatId, `El alumno ${expname} pertenece a la mision de node js`))
                
            }
            else if (msg.text === "java")
            {
                const explorersInNode = explorerService.getExplorersUsernamesByMission(explorer,"java")
                explorersInNode.forEach(expname=>bot.sendMessage(chatId, `El alumno ${expname} pertenece a la mision de java`))
            }
            else if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = FizzBuzzVal.applyValidationInNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick.trick}`;
                bot.sendMessage(chatId, responseBot);
            } else{
                bot.sendMessage(chatId, "Envía un número válido");
            }
        
        });        
    }
}

module.exports = botService