const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()

  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', '📝ban-kayıtları');
  if (!modlog) return message.reply('`📝ban-kayıtları` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Doğru Kullanım: `/ban @kullanıcı Ban Sebebi`');
  if (message.mentions.users.size < 1) return message.reply('Doğru Kullanım: `!ban @kullanıcı Ban Sebebi`').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkiye sahip kişileri banlayamam.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()

    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban @kullanıcı Ban Sebebi'
};
