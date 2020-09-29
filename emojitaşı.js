const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
 if (!message.guild.member(message.author.id).hasPermission(8) && !message.member.roles.has(`701798856513552531`) && message.author.id !== `${ayarlar.gorkem}`) return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`) 
var guild = client.guilds.get(args[0]);
if(!guild) return message.channel.send(':angry: | Bir sunucu idsi girmelisin');
if(!guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Belirtilen sunucuda emoji yönet yekim yok');
var nm = await message.channel.send(':ok_hand: | Bu sunucudaki ' + message.guild.emojis.size + ' emoji ' + guild.name + ' adlı sunucuya taşınıyor!'); 
await message.guild.emojis.forEach(a => guild.createEmoji(a.url, a.name));
await nm.edit(':ok_hand: | Bu sunucudaki ' + message.guild.emojis.size + ' emoji ' + guild.name + ' adlı sunucuya taşındı!')
}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'emoji-taşı'
};
