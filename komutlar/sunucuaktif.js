const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "SUNUCU AKTİFTİR GİRİŞ YAPABİLİRSİNİZ!",
                    icon_url: "https://cdn.discordapp.com/attachments/542671099343798292/542677410144059393/tik-png-9.png"
                  },

                description: "**- Keyifli oyunlar. **"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'aktif',
  description: 'Sunucu aktif yazısı geçer.',
  usage: 'aktif'
};