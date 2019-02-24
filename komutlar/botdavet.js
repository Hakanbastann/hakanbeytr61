const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()

    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesaj kutuna bot davet linkini gönderdim! :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()

    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot Davet Linki: https://discordapp.com/oauth2/authorize?client_id=540967647081267230&scope=bot&permissions=2146958847');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'botdavet',
  description: 'Botu sunucunuza eklemeniz için davet linkini size gönderir.',
  usage: 'botdavet'
};