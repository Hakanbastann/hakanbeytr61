const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden başlatılıyor.. :gear: ").then(msg => {
        console.log("[BOT] Yeniden baslatiliyor... [BOT]");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'res61', 
  description: 'Botun sahibi dışında kimse kullanamaz.',
  usage: 'Botun sahibi dışında kimse kullanamaz.'
};