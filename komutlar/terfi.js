const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = guild.channels.find('name', '📝terfi-istek');
  if (!terfiler) return message.reply('`📝terfi-istek` kanalını bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Doğru Kullanım: `/terfi @kullanıcı Rütbe`');
  if (message.mentions.users.size < 1) return message.reply('Doğru Kullanım: `/terfi @kullanıcı Rütbe`').catch(console.error);
  const embed = new Discord.RichEmbed()

	.setThumbnail("https://cdn.discordapp.com/attachments/542668698586972179/542701387235065888/asenarp.png")
    .setTimestamp()
    .addField('Eylem:', 'Terfi istendi')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Rütbe:', reason);
	
	return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 2
};

exports.help = {
  name: 'terfi',
  description: 'Oyuncuyu bir permden farklı bir perme terfi etmek için istek gönderir.',
  usage: 'terfi [kullanıcı]'
};