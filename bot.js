const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);
// Стандартные команды.
bot.start((ctx) => ctx.reply(`Добро пожаловать ${ctx.from.first_name}.`));
bot.help((ctx) => ctx.reply('Вывод команды help.'));
bot.settings((ctx) => ctx.reply('Команда для сохранения настроек.'))
// Команды, прописанные при кодировании бота
bot.command(['test', 'Test'], (ctx) => ctx.reply('Hello, World!'));
// Настройка реакции бота на определенный текст в сообщении (trigger).
bot.hears(['php', 'PHP'], (ctx) => ctx.reply('PHP - это не язык программирования!'));
bot.hears(['Привет', 'Hello', 'Здравствуйте'], (ctx) => ctx.reply('И вам не хворать...'));
// Метод on
bot.on(message('text'), (ctx) => ctx.reply('Это текстовое сообщение.'));
bot.on(message('sticker'), (ctx)=> ctx.reply('Мне прислали стикер!'));
bot.launch();
