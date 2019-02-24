const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()

  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: UYARI ! :warning:', '`Hatabildir` komutunu özel mesajlarda kullanamazsınız.')
return message.author.sendEmbed(ozelmesajuyari); }
let guild = message.guild
let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setDescription('Hatamız nedir?'));
  const tavsiye1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(':open_file_folder: Hata Başarıyla Gönderildi !\n:page_facing_up: Hata İletildi Teşekürler.')
  message.channel.send(tavsiye1);
const tavsiye = new Discord.RichEmbed()

  .setThumbnail(message.author.avatarURL)
  .setDescription(':newspaper2: **' + message.author.tag + '** adlı kullanıcının Hatası;')
  .addField(':envelope: Gönderen Kişinin Bilgileri', '• Kullanıcı ID: ' + message.author.id + '\n• Kullanıcı Adı: ' + message.author.username + '\n• Kullanıcı Tag: ' + message.author.discriminator + '')
  .addField(':pencil: Gönderilen Hata', mesaj)
return client.channels.get("548253510655934474").send(tavsiye);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Hatabildir'],
  permLevel: 0
};

exports.help = {
  name: 'hatabildir',
  description: 'Botta bulunan hatayı gönderir.',
  usage: '/hatabildir [hata]'
};