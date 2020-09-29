const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let guild = message.guild
  var bansorumlusu = db.fetch(`${message.guild.id}_bansorumlusurol`)
  var bankanal = db.fetch(`${message.guild.id}_bankanal`)
  if (!bankanal) return message.channel.send(`Ban kanalı tanımlanmamış lütfen Ban kanalı tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <bansorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`)
  if (!bansorumlusu) return message.channel.send(`Ban sorumlusu rolü tanımlanmamış lütfen Ban sorumlusu rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <bansorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`)
  var bankanall = client.channels.get(db.fetch(`${message.guild.id}_bankanal`))
  if (!message.member.roles.has(bansorumlusu) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`)   
  //if (!args[0]) return message.channel.send(`Unban komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}unban <@üye/id>\`)`)
  let user = args[0];
  if (!user) return message.channel.send(`Bu üyeyi bulamadım, lütfen tekrar dene`)
  
  bankanall.send(`**<@!${user}>** üyesi **<@${message.author.id}>** tarafından yasaklaması kaldırıldı!`)
  message.guild.unban(user);
  message.react(`${ayarlar.tikscott}`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban'],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişiyi sunucudaki yasaklamasını kaldırır.',
  usage: 'unban <@id/etiket>'
};