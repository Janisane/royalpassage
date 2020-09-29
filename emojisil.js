const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = function(client, message, args) {
  if (message.author.bot || message.channel.type === "dm") return;
 if(message.author.bot || message.channel.type === "dm") return;
 if(!message.guild.member(message.author.id).hasPermission(8) && message.author.id !=`${ayarlar.gorkem}` && message.author.id !=`${ayarlar.uur}` && message.author.id !=`${ayarlar.maes}`)return message.channel.send( `<a:hata:717424249069109323> **|** Üzgünüm, bu komutu kullanmak için **Yönetici** olmalısın.`)   
  let guild = message.guild
  //let silincekemoji = args[0];
  let silincekemoji = message.guild.emojis.get(args[0]) || message.guild.emojis.find(emoji => emoji.name === args[0]);
  if (!silincekemoji) return message.channel.send(` ${ayarlar.hata} | Bir emoji seçmelisiniz.`).then(m => {m.delete(5000)})
 
  //guild.emojis.forEach(x => { x.delete(x.id) })
  guild.deleteEmoji(silincekemoji.id)
  message.channel.send(`${ayarlar.karetik} **Belirtilen emoji silindi.**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-sil','emojisil','emoji-kaldır'],
  permLevel: 0
};

exports.help = {
  name: 'emojisil',
  description: 'Belirttiğiniz emojiyi siler.',
  usage: 'emojisil <isim>'
};