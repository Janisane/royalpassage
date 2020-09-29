const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var prefix = ayarlar.prefix;

module.exports.run = async (bot, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  var modrol = db.fetch(`${message.guild.id}_modrol`)
  if (!modrol) return message.channel.send(`Moderasyon rolü tanımlanmamış lütfen Moderasyon rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <modrol> <ekle> <@rol/id>\`)`)
  if (!message.member.roles.has(modrol) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`)    
  //if (!message.guild.member(message.author.id).hasPermission(8) && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`)    
  let mesajsayisi = parseInt(args.join(' '));
  if (!mesajsayisi) return message.channel.send(`Kaç mesaj sileceğimi belirtmedin.`);
  if (mesajsayisi >= 100) return message.channel.send(`En fazla **100** mesaj silebilirim.`);
  message.channel.bulkDelete(mesajsayisi + 1, true)
  await message.channel.send(`Başarıyla **${mesajsayisi} adet** mesajı sildim.`).then(msg => msg.delete(5000))
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle' , 'clear'],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: '.sil <temizlenecek mesaj sayısı>'
};