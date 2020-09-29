const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const ms = require("ms");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  var jailsorumlusu = db.fetch(`${message.guild.id}_jailsorumlusurol`)
  var cezalıRol = db.fetch(`${message.guild.id}_jailrol`)
  var jailkanal = db.fetch(`${message.guild.id}_jailkanal`)
  if (!jailkanal) return message.channel.send(`Jail kanalı tanımlanmamış lütfen Jail kanalı tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jailsorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(5000)})
  if (!jailsorumlusu) return message.channel.send(`Jail sorumlusu rolü tanımlanmamış lütfen Jail sorumlusu rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jailsorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(5000)})
  if (!cezalıRol) return message.channel.send(`Cezalı rolü tanımlanmamış lütfen Cezalı rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jail_rol> <ekle> <@rol/id>\`)`).then(m => {m.delete(5000)})
  var jailkanall = bot.channels.get(db.fetch(`${message.guild.id}_jailkanal`))
  if (!message.member.roles.has(jailsorumlusu) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`).then(m => {m.delete(5000)}) 
  let uye = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!uye) return message.channel.send(`Bu üyeyi bulamadım, lütfen tekrar dene`).then(m => {m.delete(5000)})
  if(uye.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu üyeyi jaile atamıyorum! Ya yetkim yok ya da üyenin yetkisi benden yüksek.').then(m => {m.delete(5000)})
  if(message.author.id === uye.user.id) return message.channel.send(`Kendini jaile atamazsın dostum.`).then(m => {m.delete(5000)})
  let za = args.slice(1).join(' ')
  if (!za) {
    var sebep = "Belirtilmedi"
  } else {
    var sebep = za
  }
 
  let roles = message.guild.members.get(uye.id).roles.array();

  await(uye.addRole(cezalıRol));
  uye.removeRoles(roles);
  db.set(`jailivarmi_${uye.id}`, 'var')
  message.channel.send(`**<@!${uye.id}>** üyesi **<@${message.author.id}>** tarafından **${sebep}** sebebiyle jaile atıldı!`, {files: [`https://media.giphy.com/media/H0nYjvY4vKV7kYLim5/giphy.gif`]}).then(m => {m.delete(5000)})
  jailkanall.send(`**<@!${uye.id}>** üyesi **<@${message.author.id}>** tarafından **${sebep}** sebebiyle jaile atıldı!`, {files: [`https://media.giphy.com/media/H0nYjvY4vKV7kYLim5/giphy.gif`]})
  uye.send(`**${message.guild.name}** sunucusundan **<@${message.author.id}>** tarafından **${sebep}** sebebiyle jaile atıldın!`, {files: [`https://media.giphy.com/media/H0nYjvY4vKV7kYLim5/giphy.gif`]})
  message.react(`${ayarlar.tikscott}`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['jail'],
  permLevel: 0
};

exports.help = {
  name: 'jail',
  description: 'Bir kullanıcıyı jaile atar.',
  usage: '.jail <@üye/id>'
};