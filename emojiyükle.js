const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = function(client, message, args) {
  if (message.author.bot || message.channel.type === "dm") return;
 if(message.author.bot || message.channel.type === "dm") return;
 if (!message.guild.member(message.author.id).hasPermission(8) && !message.member.roles.has(`701798856513552531`) && message.author.id !== `${ayarlar.gorkem}`) return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`)  
  let guild = message.guild
  let [link, ad] = args.join(" ").split(" ");
  if (!link) return message.channel.send(`${ayarlar.basarisiz} | Bir link yazmalısın.`).then(m => {m.delete(5000)})
  if (!ad) return message.channel.send(`${ayarlar.basarisiz} | Bir isim yazmalısın.`).then(m => {m.delete(5000)})
 
  guild.createEmoji(link, ad)
    .then(emoji => message.channel.send(`**${emoji.name}** Adında Emoji Oluşturuldu. **(**${emoji}**)**`))//.then(m => {m.delete(5000)})
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle', 'ek'],
  permLevel: 0
};

exports.help = {
  name: 'emojiyükle',
  description: 'Belirttiğiniz link ve isimde emoji yükler.',
  usage: 'emojiyükle <link> - <isim>'
};