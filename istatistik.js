const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  if (msg.author.bot || msg.channel.type === "dm") return;
  if(msg.author.id !== ayarlar.gorkem && msg.author.id !== ayarlar.yox) return;
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
const uembed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} Bot Bilgilendirme`, client.user.avatarURL) 
  .setColor("#000000")
  .setDescription(`
• **ROYAL İSTATİSTİKLER** •

• Çalışma Süresi » ${duration}
• Kullanıcılar »  ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular » ${client.guilds.size.toLocaleString()}
• Kanallar »  ${client.channels.size.toLocaleString()}
• ** Bot Yapımcıları**
GörkemStyle#0001
`)
//.setFooter(`Royal`)
.setTimestamp()
//.setImage(``)
msg.channel.send(uembed) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-durum' , 'bot-istatistik' , 'bi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};