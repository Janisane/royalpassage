const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(1).join(' ');
 //if(!message.guild.member(message.author.id !=`${ayarlar.gorkem}`)) return message.channel.send( `<a:hata:718562313233236048> **|** Üzgünüm, bu komutu sadece Görkem kullanabilir.`)
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(':x:Bunun için gerekli iznin yok');
  if (!args) return message.reply("Kanalın açıklamasına ne yazmam gerek!")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni konusu ***${args}***`))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala", "kk"],
  permLevel: 3
};

exports.help = {
  name: 'kanalaçıklama',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};