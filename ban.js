const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  var bansorumlusu = db.fetch(`${message.guild.id}_bansorumlusurol`)
  var bankanal = db.fetch(`${message.guild.id}_bankanal`)
  if (!bankanal) return message.channel.send(`Ban kanalı tanımlanmamış lütfen Ban kanalı tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <bansorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`)
  if (!bansorumlusu) return message.channel.send(`Ban sorumlusu rolü tanımlanmamış lütfen Ban sorumlusu rolü tanımlayınız.\n(\`${ayarlar.prefix}ayarlar <bansorumlusu> <ekle> <#kanal/id> <@rol/id>\`)`)
  var bankanall = client.channels.get(db.fetch(`${message.guild.id}_bankanal`))
  if (!message.member.roles.has(bansorumlusu) && message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`${ayarlar.basarisiz} **|** Üzgünüm, yetkin yok.`)   
  if (!args[0]) return message.channel.send(`Ban komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ban <@üye/id> <sebep>\`)`)
  let uye = message.mentions.members.first() || message.guild.member(args[0]) || message.guild.members.find(e => e.displayName.toLowerCase().includes(args[0].toLowerCase()))
  if (!uye) return message.channel.send(`Bu üyeyi bulamadım, lütfen tekrar dene`)
  let za = args.slice(1).join(' ')
  if (!za) {
    var sebep = "Belirtilmedi"
  } else {
    var sebep = za
  }
  if (message.author.id === uye.user.id) return message.channel.send(`Kendini yasaklayamazsın dostum.`);
  if (!message.guild.member(uye).bannable) return message.channel.send('Bu üyeyi yasaklayamıyorum! Ya yetkim yok ya da üyenin yetkisi benden yüksek.');
  //message.guild.ban(uye, { days: 7, reason: sebep});
  message.guild.member(uye).ban(sebep).catch(err => message.reply("Banlama yetkim yok.").then(m => m.delete(5000)))  
 // message.channel.send(`**<@${uye.id}>** üyesi **<@${message.author.id}>** tarafından **${sebep}** sebebiyle yasaklandı!`, {files: [`https://media.discordapp.net/attachments/625084134083264523/628239319857102868/tumblr_pqr0ixD1TF1y0ry57o1_500.gif`]})
  bankanall.send(`**<@${uye.id}>** üyesi **<@${message.author.id}>** tarafından **${sebep}** sebebiyle yasaklandı!`, {files: [`https://media.discordapp.net/attachments/625084134083264523/628239319857102868/tumblr_pqr0ixD1TF1y0ry57o1_500.gif`]})
  uye.send(`**${message.guild.name}** sunucusundan **<@${message.author.id}>** tarafından **${sebep}** sebebiyle yasaklandın!`, {files: [`https://media.discordapp.net/attachments/625084134083264523/628239319857102868/tumblr_pqr0ixD1TF1y0ry57o1_500.gif`]})
  message.react(`${ayarlar.tikscott}`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 0
};

exports.help = {
  name: 'yasakla',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "yasakla"
};