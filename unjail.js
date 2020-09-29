const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  var kayıtsız = db.fetch(`${message.guild.id}_kayıtsız`)
  var jailsorumlusu = db.fetch(`${message.guild.id}_jailsorumlusurol`)
  var cezalıRol = db.fetch(`${message.guild.id}_jailrol`)
  var jailkanal = db.fetch(`${message.guild.id}_jailkanal`)
  if (!jailkanal) return message.channel.send(`Jail kanalı tanımlanmamış lütfen Jail kanalı tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jailsorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!jailsorumlusu) return message.channel.send(`Jail sorumlusu rolü tanımlanmamış lütfen Jail sorumlusu rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jailsorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!cezalıRol) return message.channel.send(`Cezalı rolü tanımlanmamış lütfen Cezalı rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jail_rol> <ekle> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!kayıtsız) return message.channel.send(`Kayıtsız rolü tanımlanmamış lütfen Kayıtsız rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <kayıtsız> <ekle> <@rol/id>\`)`).then(m => {m.delete(10000)})
  var jailkanall = bot.channels.get(db.fetch(`${message.guild.id}_jailkanal`))
  if (!message.member.roles.has(jailsorumlusu) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`).then(m => {m.delete(10000)})
  
  let uye = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!uye) return message.channel.send(`Bu üyeyi bulamadım, lütfen tekrar dene`).then(m => {m.delete(10000)})
  uye.removeRole(cezalıRol)
  uye.addRole(kayıtsız)
  db.delete(`jailivarmi_${uye.id}`);
  jailkanall.send(`**<@!${uye.id}>** üyesi **<@${message.author.id}>** tarafından jaile çıkarıldı!`)
  message.react(`${ayarlar.tikscott}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unjail'],
  permLevel: "0"
};

exports.help = {
  name: "unjail",
  description: "Bir kullanıcıyı jailden çıkartır.",
  usage: ".unjail <@üye/id>"
};