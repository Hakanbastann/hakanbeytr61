const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  var channel = client.channels.find('id', '546986669610631186')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» ѕσηмєzтν  | Sunucu Tanıt")
  .setDescription("**Sunucun Tanıtıldı » https://discord.gg/7Fv99wT Burada**")
  .setFooter("Sunucu Tanıtıldı")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» FivemTR  | Sunucu Tanıt")
  .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt',
  description: '',
  usage: 'sunucutanıt'
};