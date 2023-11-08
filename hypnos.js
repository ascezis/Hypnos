//Импорт библиотек
import {Markup, Telegraf} from "telegraf";

//Создание бота
const bot = new Telegraf('6360208502:AAF62kNUOJiYihbSYIrokKgOiXn_OdIHSR0');

//Меню
const menu_commands = [
    {
        command: '/start',
        description: 'Запустить бота',
    },
    {
        command: '/about',
        description: 'Подробнее о боте'
    },
    {
        command: '/restart',
        description: 'Перезагрузить бота'
    },
    {
        command: '/donate',
        description: 'Помочь автору'
    }
]

bot.telegram.setMyCommands(menu_commands);

//Старт
const key_cycles = Markup.inlineKeyboard([
    [
        Markup.button.callback('6:00', 'six_am'),
        Markup.button.callback('7:00', 'seven_am'),
        Markup.button.callback('8:00', 'eight_am'),
        Markup.button.callback('9:00', 'nine_am'),
    ]
])
//Клавиатура
const key_main = Markup.keyboard(
    [
        ['📢Рекомендации по сну', '⏳Лучшее время для сна⏳'], ['🕐Циклы сна🕐'],
        ['📚Полезные материалы📚']
    ]
)

//Взаимодействие
bot.hears('/start', msg => {
    msg.reply(
        '👋Привет, я — Hypnos! Я создан, чтобы помогать Вам улучшать Ваш сон! 🌙🛏️💤' +
        '\nИтак, чем могу помочь?', key_main.resize()
    )
})


//Функция перезагрузки
bot.hears('/restart', msg=>{
    msg.reply('🛠️Перезагружаюсь...🛠️');

    setTimeout(()=>{

        bot.stop();
        bot.launch();

        msg.reply('🤖Готов к работе!🤖');
    }, 3000)
})




//Лучшее время для сна

bot.hears('⏳Лучшее время для сна⏳', msg => {
    msg.reply('Лучшее время для сна — промежуток от ⌛ *20:00 до 23:00* ⌛ ' +
        'Однако, всё зависит от Вашего организма и конкретное время сна Вам следует подобрать самостоятельно, ориентируясь на данный промежуток',
        {
            parse_mode: "MarkdownV2"
        })
})


//Рекомендации
bot.hears('📢Рекомендации по сну', msg => {
    msg.reply(`🌙 Вот список полезных рекомендаций: 🌙\n
    1️⃣  Спите на боку.\n
    2️⃣  Купите дополнительные подушки для сна.\n
    3️⃣  Ложитесь спать в одно и то же время.\n
    4️⃣  Вставайте в одно и то же время.\n
    5️⃣  Спите по [циклам](https://www.sleepfoundation.org/stages-of-sleep)\n
    6️⃣  Ставьте будильник подальше от себя.\n
    7️⃣  Тщательно проветривайте комнату.\n
    8️⃣  Примите душ за несколько часов до сна.\n
    9️⃣  Сходите на вечернюю прогулку перед сном.\n
    🔟 Как можно сильнее ограничьте свет в комнате.\n
    Надеюсь эти рекомендации были полезны для Вас!\n\n 💤Приятных снов!💤
    `, {
        parse_mode: "Markdown"
    })
})

//donate

bot.hears('/donate', msg => {
    msg.reply(`💸 *Hypnos* абсолютно бесплатен 💸
    
Если Вы хотите поддержать автора, то можете перевести любую сумму на один из номеров:

💳 *TINKOFF* 💳: \`\`\`2200700950161744\`\`\`

💳 *SBERBANK* 💳: \`\`\`2202205349481942\`\`\`

❤️Большое Вам спасибо❤️ `, {
        parse_mode: "MarkdownV2"
    })
})



//about

bot.hears('/about', msg => {
    msg.reply(`😴 *Hypnos* 😴 — это бот, который поможет Вам лучше засыпать🛌
    
    1️⃣ Подскажет как и когда лучше засыпать\n
    2️⃣ Даст рекомендации по улучшению вашего сна\n
    3️⃣ Покажет вам лучшие исследования в области сна\n
    4️⃣ Будет напоминать Вам заранее о запланированном сне\n`,
        {
            parse_mode: "MarkdownV2"
        })
})

bot.hears('📚Полезные материалы📚', msg => {
    msg.reply(
        `1. "Сон и сновидения: научные и философские аспекты" - книга А.С. Ярошевского
2. "Физиология сна" - книга И.П. Антонова
3. "Сон и его роль в жизни человека" - статья В.И. Корниенко
4. "Сон и его влияние на психическое здоровье" - книга А.А. Касаткина
5. "Сон и его связь с физическим здоровьем" - книга Е.В. Шиловой
6. "Sleep and its importance for health" - article by C. M. Morin
7. "The role of sleep in memory and learning" - research paper by J. Siegel
8. "The impact of sleep on mental health" - article by M. P. Walker
9. "Sleep disorders: causes and treatments" - research paper by R S Rosenberg
10. "The neuroscience of sleep" - article by G Tononi and C Cirelli`,
    )
})

//Циклы

bot.hears('🕐Циклы сна🕐', msg => {
    msg.reply('Когда Вы хотите проснуться?', key_cycles)
})

//Клавиатура для каждого отдельного часа

//Циклы на 6 утра
const key_hours_6 = Markup.inlineKeyboard(
    [
        Markup.button.callback('⏰ 20:45 ⏰', 'eight_6'),
        Markup.button.callback('⏰ 22:15 ⏰', 'ten_6'),
        Markup.button.callback('⏰ 4:30 ⏰', 'four_6'),
    ]
)
//Циклы на 7 утра

const key_hours_7 = Markup.inlineKeyboard(
    [
        Markup.button.callback('⏰ 21:45 ⏰', 'eight_7'),
        Markup.button.callback('⏰ 23:15 ⏰', 'ten_7'),
        Markup.button.callback('⏰ 5:30 ⏰', 'four_7'),
    ]
)


//Циклы на 8 утра

const key_hours_8 = Markup.inlineKeyboard(
    [
        Markup.button.callback('⏰ 22:45 ⏰', 'eight_8'),
        Markup.button.callback('⏰ 00:15 ⏰', 'ten_8'),
        Markup.button.callback('⏰ 6:30 ⏰', 'four_8'),
    ]
)

//Циклы на 9 утра
const key_hours_9 = Markup.inlineKeyboard(
    [
        Markup.button.callback('⏰ 23:45 ⏰', 'eight_9'),
        Markup.button.callback('⏰ 01:15 ⏰', 'ten_9'),
        Markup.button.callback('⏰ 7:30 ⏰', 'four_9'),
    ]
)
//6
bot.action('six_am', msg => {
    msg.reply('Шесть утра! Вы можете лечь в: ', key_hours_6)
})

//7
bot.action('seven_am', msg => {
    msg.reply('Семь утра! Вы можете лечь в: ', key_hours_7)
})

//8
bot.action('nine_am', msg => {
    msg.reply('Девять утра! Вы можете лечь в: ', key_hours_8)
})

//9
bot.action('eight_am', msg => {
    msg.reply('Восемь утра! Вы можете лечь в: ', key_hours_9)
})

//Отмена поздних часов

bot.action('no', msg => {
    msg.reply('Хорошо, тогда выберите более удобный график сна:', key_cycles)
})

//Уведомления
let target = new Date; //Данное время
let now = new Date;

//Отправка уведомлений

function sendNotification(userID) {
    bot.telegram.sendMessage(userID, 'Пора спать!');
}

function normalDate(milliseconds) {
    let date = new Date(milliseconds);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours} часов ${minutes} минут`;
}

//20:45
bot.action('eight_6', async msg => {
    const userID = msg.from.id;

    target.setHours(20);
    target.setMinutes(45);

    let targetTime = target.getTime() - now.getTime();

    await msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})
//22:15
bot.action('ten_7', msg => {
    const userID = msg.from.id;

    target.setHours(22);
    target.setMinutes(15);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})
//4:30
bot.action('four_8', msg => {
    const userID = msg.from.id;

    target.setHours(4);
    target.setMinutes(30);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})

bot.action('eight_7', msg => {
    const userID = msg.from.id;

    target.setHours(21);
    target.setMinutes(45);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})
//23:15
bot.action('ten_7', msg => {
    const userID = msg.from.id;

    target.setHours(23);
    target.setMinutes(15);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})
//5:30

bot.action('four_7', msg => {
    const userID = msg.from.id;

    target.setHours(5);
    target.setMinutes(30);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})

//22:45

bot.action('eight_8', msg => {
    const userID = msg.from.id;

    target.setHours(22);
    target.setMinutes(45);

    let targetTime = target.getTime() - now.getTime();

   msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})

//00:15

bot.action('ten_8', msg => {
    const userID = msg.from.id;

    target.setHours(0)
    target.setMinutes(15);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)

})
//6:30
bot.action('four_8', msg => {
    const userID = msg.from.id;

    target.setHours(6)
    target.setMinutes(30)

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)
})

//23:45
bot.action('eight_9', msg => {
    const userID = msg.from.id;

    target.setHours(23);
    target.setMinutes(45);

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`);

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)
})
//01:15

bot.action('ten_9', msg => {
    const userID = msg.from.id;

    target.setHours(1)
    target.setMinutes(15)

    let targetTime = target.getTime() - now.getTime();

    msg.reply(`До будильника осталось: ${normalDate(targetTime)}`, {});

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)
})

//7:30

bot.action('four_9', msg => {
    const userID = msg.from.id;

    target.setHours(7)
    target.setMinutes(30)
    target.setSeconds(0);

    let targetTime = target.getTime() - now.getTime();

    setTimeout(() => {
        sendNotification(userID);
    }, targetTime)
})

//Запуск
bot.launch();