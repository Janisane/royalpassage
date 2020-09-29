const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const ms = require("ms");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  var mutesorumlusu = db.fetch(`${message.guild.id}_mutesorumlusurol`)
  var cezalıRol = db.fetch(`${message.guild.id}_muterol`)
  var mutekanal = db.fetch(`${message.guild.id}_mutekanal`)
  if (!mutekanal) return message.channel.send(`Jail kanalı tanımlanmamış lütfen Jail kanalı tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <mutesorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!mutesorumlusu) return message.channel.send(`Jail sorumlusu rolü tanımlanmamış lütfen Jail sorumlusu rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <mutesorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!cezalıRol) return message.channel.send(`Cezalı rolü tanımlanmamış lütfen Cezalı rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jail_rol> <ekle> <@rol/id>\`)`).then(m => {m.delete(10000)})
  var mutekanall = bot.channels.get(db.fetch(`${message.guild.id}_mutekanal`))
  if (!message.member.roles.has(mutesorumlusu) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`).then(m => {m.delete(10000)})
  
  let uye = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!uye) return message.channel.send(`Bu üyeyi bulamadım, lütfen tekrar dene`).then(m => {m.delete(10000)})
  
  if(!uye.roles.has(cezalıRol)) return message.channel.send(`Belirtilen üye muteli değil.`).then(m => {m.delete(10000)})
  
  uye.removeRole(cezalıRol);
  mutekanall.send(`**<@!${uye.id}>** üyesinin susturulma cezası kaldırıldı.`)
  message.react(`${ayarlar.tikscott}`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unmute'],
  permLevel: 0
};

exports.help = {
  name: 'unmute',
  description: 'Bir kullanıcıyı belirtilen süre mute atar.',
  usage: '.unmute <@üye/id>'
};