
const token = "6284978419:AAFpXvL22MjyaEv_LAY4A9hUcMC8O95cTAg";


// const axios = require('axios');
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(token);

bot.start((ctx) => {
  // const firstName = ctx.message.from.first_name;
  ctx.reply(`Добро пожаловать в POIZON BY LP 💗`, 
  Markup.keyboard([
    ["Оформить заказ"],
    ["Часто задаваемые вопросы"],
    [" Как скачать приложение Poizon?"],
    ["Сотрудничество с POIZON BY LP"]
  ]).resize());
});

// bot.hears(/^[0-9]+$/, async (ctx) => {
//   try {
//     const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
//     const rate = response.data.Valute.CNY.Value;
//     const sum = Number(ctx.message.text) * rate;
//     ctx.reply(`Стоимость заказа: ${sum.toFixed(2)} руб.`);
//   } catch (error) {
//     console.log(error);
//     ctx.reply('Произошла ошибка при расчете стоимости заказа');
//   }
// });

bot.hears('Оформить заказ', (ctx) => {
  ctx.reply('Для оформления заказа напишите @PoizonByLP');
});
bot.hears('Часто задаваемые вопросы', (ctx) => {
  ctx.reply('https://telegra.ph/CHasto-zadavaemye-voprosy-04-22-3');
});
bot.hears('Как скачать приложение Poizon?', (ctx) => {
  ctx.reply('https://youtube.com/shorts/e0Hknxhz3ZM?feature=share');
});
bot.hears('Сотрудничество с POIZON BY LP', (ctx) => {
  ctx.reply('По вопросам сотрудничества напишите @PoizonByLP');
});

bot.launch();
