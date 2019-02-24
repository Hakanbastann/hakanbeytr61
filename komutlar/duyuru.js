const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Doğru Kullanım: `/duyuru Duyuru Yazısı`');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')

    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Adminlerin duyuru yapmasını sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
