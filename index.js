const Discord = require('discord.js');
const client = new Discord.Client();
const { RichEmbed } = require("discord.js");
const faker = require("faker");
const prefix = '?';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
    
    switch (args[0]) {
        case "catchall":
        const catchall = args[0]
        if(!catchall) return message.channel.send("Please provide your domain");
        const num = 9
        const num2 = 9
        const num3 = 9
        const num4 = 9
        const num5 = 9

        const embed = new RichEmbed()
        .setColor(0x5126c7)
        .setTitle("**Catchall Generator**")
        .addField(`__10 ${catchall} emails__`, `${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`} 
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}
        ${`${faker.fake(`{{name.firstName}}{{name.lastName}}`)}${Math.floor(Math.random() * num)}${Math.floor(Math.random() * num2)}${Math.floor(Math.random() * num3)}${Math.floor(Math.random() * num4)}${Math.floor(Math.random() * num5)}@${catchall}`}`)
        .setFooter("Made by @FootlockerRU")
        message.author.send(embed).then(m => message.channel.send("Check your DMs!"))
            break;
    }
})

client.login('token-here');
