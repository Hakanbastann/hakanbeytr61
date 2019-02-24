const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` komutunu özel mesajlarda kullanamazsın!');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Doğru Kullanım: `/temizle 1/100`')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj silinmiştir!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
