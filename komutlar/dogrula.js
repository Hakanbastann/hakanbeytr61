const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "#FivemTR Owner")) {
        return message.channel.send(' **Bu komutu sadece kurucu kullanabilir.** ')
            .then(m => m.delete(5000));
    }
    let toverify = message.guild.member(message.mentions.users.first());
    let verifyrole = message.guild.roles.find(`name`, "#FivemTR Doğrulandı");
    if (!verifyrole) return message.reply("Rol Bulunamadı Lütfen '#FivemTR Doğrulandı' Adıyla Rol Oluşturunuz.");
    if (!toverify) return message.reply("Bir kullanıcıdan bahsetmelisin.");
    await (toverify.addRole(verifyrole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.RichEmbed()
        .setTitle("Doğrulama - Bot Kullanıyor")

        .addField("Doğrulayan Kişi", `${message.author.tag}`, true)
        .addField("Kanal", message.channel, true)
        .addField("Doğrulanan Kullanıcı", `${vUser}`, true)
        .setTimestamp();
    let veriflog = message.guild.channels.find(`name`, "📝doğrulananlar");
    if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen '📝doğrulananlar' Adlı Kanal Oluşturunuz.`");
    veriflog.send(verifembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['verify', 'Verify', 'Doğrula', 'doğrula'],
};

exports.help = {
  name: 'doğrula',
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'doğrula'
};