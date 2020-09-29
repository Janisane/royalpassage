const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(message.author.id !=`${ayarlar.gorkem}`) return; 
  let islem = args[0];
  if (!islem) return message.channel.send(`⚠ **|** Rol komutunu kullanmak için işlem argümanı gerekiyor. (\`${ayarlar.prefix}rol <ver/al/listele>\`)`)
  let islemler = ['ver', 'al', 'listele']
  if (!islemler.includes(islem)) return message.channel.send(`⚠ **|** Bu işlemi bilmiyorum, lütfen tekrar dene.`)
  
  if (islem === 'ver') {
  let girdi1 = args[1];
  if (!girdi1) return message.channel.send(`⚠ **|** Rol ver komutunu kullanmak için 2 argüman gerekiyor. (\`${ayarlar.prefix}rol ver <@üye/id/isim> <@rol/id/isim>\`)`)
  let uye = message.guild.members.get(girdi1) || message.guild.member(message.mentions.users.first()) || message.guild.members.find(e => e.user.tag.toLowerCase().includes(girdi1.toLowerCase()))
  if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene.`)
  let girdi2 = args.slice(2).join(' ')
  if (!girdi2) return message.channel.send(`⚠ **|** Rol ver komutunu kullanmak için 2 argüman gerekiyor. (\`${ayarlar.prefix}rol ver ${girdi1} <@rol/id/isim>\`)`)
  let rol = message.mentions.roles.first() || message.guild.roles.find(rol => rol.id === girdi2) || message.guild.roles.find(e => e.name.toLowerCase().includes(girdi2.toLowerCase()))
  if (!rol) return message.channel.send(`⚠ **|** Bu rolü bulamadım, lütfen tekrar dene.`)
  if (uye.roles.has(rol.id)) return message.channel.send(`⚠ **|** Üyede bu rol zaten var.`)
  try {
  message.delete(5000)
  uye.addRole(rol.id)
  let embed = new Discord.RichEmbed()
  .setColor(rol.hexColor)
  .setDescription(`${ayarlar.tik} <@${uye.user.id}> **üyesine** ${rol} **rolü verildi.** `)
  .setFooter(` ${message.author.tag} tarafından verildi`)
  message.channel.send(embed)
  } catch (err) {
    if (err) {
      console.log(err)
      message.channel.send(`Bu terslikte bir iş var.`)
    }
  }}
  
  if (islem === 'al') {
  let girdi1 = args[1];
  if (!girdi1) return message.channel.send(`⚠ **|** Rol al komutunu kullanmak için 2 argüman gerekiyor. (\`${ayarlar.prefix}rol al <@üye/id/isim> <@rol/id/isim>\`)`)
  let uye = message.guild.members.get(girdi1) || message.guild.member(message.mentions.users.first()) || message.guild.members.find(e => e.user.tag.toLowerCase().includes(girdi1.toLowerCase()))
  if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene.`)
  let girdi2 = args.slice(2).join(' ')
  if (!girdi2) return message.channel.send(`⚠ **|** Rol al komutunu kullanmak için 2 argüman gerekiyor. (\`${ayarlar.prefix}rol al ${girdi1} <@rol/id/isim>\`)`)
  let rol = message.mentions.roles.first() || message.guild.roles.find(rol => rol.id === girdi2) || message.guild.roles.find(e => e.name.toLowerCase().includes(girdi2.toLowerCase()))
  if (!rol) return message.channel.send(`⚠ **|** Bu rolü bulamadım, lütfen tekrar dene.`)
  if (!uye.roles.has(rol.id)) return message.channel.send(`⚠ **|** Üyede bu rol zaten yok.`)
  try {
  message.delete(5000)
  uye.removeRole(rol.id)
  let embed = new Discord.RichEmbed()
  .setColor(rol.hexColor)
  .setDescription(`${ayarlar.tik} <@${uye.user.id}> **üyesinden** ${rol} **rolü alındı.** `)
  .setFooter(` ${message.author.tag} tarafından alındı`)
  message.channel.send(embed)
  } catch (err) {
    if (err) {
      console.log(err)
      message.channel.send(`Bu terslikte bir iş var.`)
    }
  }}
  
  if (islem === 'listele') {
    let girdi1 = args[1];
    if (!girdi1) return message.channel.send(`⚠ **|** Rol listele komutunu kullanmak için 1 argüman gerekiyor. (\`${ayarlar.prefix}rol listele <@üye/id/isim veya @rol/id/isim>\`)`)
    let uye = message.guild.members.get(girdi1) || message.guild.member(message.mentions.users.first()) || message.guild.members.find(e => e.user.tag.toLowerCase().includes(girdi1.toLowerCase()))
    if (!uye) {
      let rol = message.mentions.roles.first() || message.guild.roles.find(rol => rol.id === girdi1) || message.guild.roles.find(e => e.name.toLowerCase().includes(girdi1.toLowerCase()))
      if (!rol) {
        message.channel.send(`⚠ **|** Bu isme/idye sahip rol veya üye bulamadım, lütfen tekrar dene.`)
      } else {
        if (message.guild.members.filter(e => e.roles.has(rol.id)).size < 1) return message.channel.send(`⚠ **|** Bu role sahip kimse yok.`)
        try {
        let liste = message.guild.members.filter(e => e.roles.has(rol.id))
        let embed = new Discord.RichEmbed()
        .setColor(rol.hexColor)
        .setAuthor(`${rol.name} (${rol.id}) rolüne sahip üyeler`)
        .setDescription(liste.map(e => ` <@${e.user.id}> **|** ${e.user.id}`))
        .setFooter(`Bu role sahip olan ${liste.size} üye listeleniyor.`)
        message.channel.send(embed)
        } catch (err) {
          if (err) {
            console.log(err)
            message.channel.send(`Bu terslikte bir iş var.`)
          }
        }
      }
    } else {
      if (uye.roles.length < 1) return message.channel.send(`⚠ **|** Üyenin hiç rolü yok.`)
      try {
        let embed = new Discord.RichEmbed()
        .setAuthor(`${uye.user.tag} üyesinin rolleri`)
        .setColor(`#FFFFFF`)
        .setDescription(uye.roles.filter(e => e.name !== '@everyone').map(e => `${e} **|** ${e.id}`))
        .setFooter(`Üyenin sahip olduğu ${uye.roles.filter(e => e.name !== '@everyone').size} rol listeleniyor.`)
        message.channel.send(embed)
      } catch (err) {
        if (err) {
          console.log(err)
          message.channel.send(`Bu terslikte bir iş var.`) 
        }
      }
    }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol'],
  permLvl: 0
};

exports.help = {
  name: 'rol',
  description: '-',
  usage: 'rol'
};