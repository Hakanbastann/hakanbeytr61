const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.setTitle("**Bulunduğum Sunucular:**")
      embed.addField(`${guild.name} - Sunucudaki Üye Sayısı : ${guild.memberCount}`, guild.id);

    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucular'],
  permLevel: 4
};

exports.help = {
  name: "sunucular",
  description: "Shows all the servers the bot is in.",
  usage: "sunucular"
};