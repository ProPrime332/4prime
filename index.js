const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require("moment");
const randomPuppy = require('random-puppy');
const prefix = "<"
const version = "1.0"
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} 𝅘𝅥𝅮`);
});

bot.on('ready', () => {
    console.log('AM READY');
    bot.user.setActivity("<help")
})

bot.on('message', async message => {

    if (message.content.toLocaleLowerCase() === `${prefix}meme`) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        const subReddits = ["dankmeme", "meme", "memes", "dankmemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`Heres your meme`)
            .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
            .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }

    if (message.content.toLocaleLowerCase() === `${prefix}cat`) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        const subReddits = ["cat", "kitty", "cats", "catloaf"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`★~(◠︿◕✿)`)
            .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
            .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }

    if (message.content.toLocaleLowerCase() === `${prefix}dog`) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        const subReddits = ["dog", "dogs", "puppy"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`ᵔᴥᵔ`)
            .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
            .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }

    if (message.content.toLocaleLowerCase() === `${prefix}birb`) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        const subReddits = ["birb", "birbs"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`∩(︶▽︶)∩`)
            .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
            .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }
    
    if (message.content.toLocaleLowerCase() === `${prefix}animals`) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        const subReddits = ["animals", "aww"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`(◕△◕✿)`)
            .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
            .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }
})

bot.on('message', message => {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let com = command.toLowerCase();
    let args = message.content.slice(prefix.length).split(" ");
    let com1 = message.content.toLowerCase();

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (com1 === prefix + "help"){
        var help = new Discord.MessageEmbed()
        .addField("**Command list**", "``usage: <command``", false)
        .addField("meme", "dank af", true)
        .addField("cat", "Sends you a random cat picture", true)
        .addField("dog", "Sends you a random dog picture", true)
        .addField("birb", "Sends you a random bird picture", true)
        .addField("animals", "Sends you a random animal picture", true)
        .addField("clear", "delete text", true)
        .addField("stats", "check bot's stats", true)
        .setColor("RANDOM")
        .setFooter(`Created By: -Mango#7777`)
        message.channel.send(help)
            .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }

    if (com === prefix + "clear") {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You need "manage messages" permission to use this command.`);
        if (!args[1]) return message.reply('Specify the amount of text to be deletes, `clear <number>, example clear 4`');
        if (message.member.hasPermission("MANAGE_MESSAGES"))
            message.channel.bulkDelete(args[1])
                .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
                .catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    }

    if (com)
        if (com1 === prefix + "stats") {
            if (message.author.bot) return;
            if (message.channel.type === "dm") return;
            require("moment-duration-format");
            const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            let secs = Math.floor(bot.uptime % 60);
            let days = Math.floor((bot.uptime % 31536000) / 86400);
            let hours = Math.floor((bot.uptime / 3600) % 24);
            let mins = Math.floor((bot.uptime / 60) % 60);
            let embedStats = new Discord.MessageEmbed()
                .setTitle("*** Stats ***")
                .setColor("RANDOM")
                .addField("• Uptime ", `${duration}`, true)
                .addField("⏳ ping", `${Math.round(bot.ws.ping)}ms`, true)
                .addField("👥 Users", `${bot.users.cache.size}`, true)
                .addField("🌐 Servers", `${bot.guilds.cache.size}`, true)
                .addField("📺 Channels ", `${bot.channels.cache.size}`, true)
                .addField("• Discord.js", `v${version}`, true)
                .addField("• Node", `${process.version}`, true)
                .addField("Join date", bot.user.createdAt, true)
                .setFooter(`Created By: -Mango#7777`)
            message.channel.send(embedStats)
                .catch(err => message.reply(`Something went wrong... ${err}`));
            return;
        }
})
bot.login("TOKEN GOES HERE");