const TelegramBot = require("node-telegram-bot-api");
const FizzBuzzVal = require("./FizzbuzzService")

class botService
{
    static createBot(token)
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
            const numberToApplyFb = parseInt(msg.text);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = FizzBuzzVal.applyValidationInNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick.trick}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }
        
        });        
    }
}

module.exports = botService