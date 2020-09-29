const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const ms = require("ms");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  var jailsorumlusu = db.fetch(`${message.guild.id}_mutesorumlusurol`)
  var cezalıRol = db.fetch(`${message.guild.id}_muterol`)
  var mutekanal = db.fetch(`${message.guild.id}_mutekanal`)
  if (!mutekanal) return message.channel.send(`Jail kanalı tanımlanmamış lütfen Jail kanalı tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jailsorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!jailsorumlusu) return message.channel.send(`Jail sorumlusu rolü tanımlanmamış lütfen Jail sorumlusu rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jailsorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
  if (!cezalıRol) return message.channel.send(`Cezalı rolü tanımlanmamış lütfen Cezalı rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <jail_rol> <ekle> <@rol/id>\`)`).then(m => {m.delete(10000)})
  var mutekanall = bot.channels.get(db.fetch(`${message.guild.id}_mutekanal`))
  if (!message.member.roles.has(jailsorumlusu) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`).then(m => {m.delete(10000)})

  let uye = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!uye) return message.channel.send(`Bu üyeyi bulamadım, lütfen tekrar dene`).then(m => {m.delete(10000)})
  
  if(uye.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu üyeye mute atamıyorum! Ya yetkim yok ya da üyenin yetkisi benden yüksek.').then(m => {m.delete(10000)})
  if(message.author.id === uye.user.id) return message.channel.send(`Kendine mute atamazsın dostum.`).then(m => {m.delete(10000)})
  
  let susturmaSuresi = args[1];
  if(!susturmaSuresi) return message.channel.send(`Süre belirtiniz.`)

  await(uye.addRole(cezalıRol));
  mutekanall.send(`**<@!${uye.id}>** üye ${ms(ms(susturmaSuresi))} süre kadar susturuldu.`)
  message.react(`${ayarlar.tikscott}`)
  
  setTimeout(function(){
    uye.removeRole(cezalıRol);
	  mutekanall.send(`**<@!${uye.id}>** üyesinin susturulma cezası bitti.`)
  }, ms(susturmaSuresi));

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mute'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'Bir kullanıcıyı belirtilen süre mute atar.',
  usage: '.mute <@üye/id> <süre>'
};