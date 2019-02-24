const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
        .setDescription('')

        .addField("**》 #FivemTR Bot Sahibi 《**", `Hakan Baştan | 19.5#0927`)
        .setURL('https://discord.gg/7Fv99wT')
        .setImage('https://images-ext-2.discordapp.net/external/B4J6vUuBCsWkOHsOyouA7V_YR1GcCJLYYdjyO66V2kA/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/547752194590507011/54c3be8fe63b6e9dfac2e204e1c74151.png?width=473&height=473')
        .setTitle("Destek Discord Adresimiz")


    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botsahibi'],
    permLevel: 0
};

exports.help = {
    name: 'botsahibi',
    description: 'Botun Yapımcısını Gösterir',
    usage: 'botsahibi'
};
