const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {
  if(!args[0]) return message.reply('Eklemek istediğin botun ID girmelisin!')
  let yazı = args.slice(0).join(' ');
  if(yazı.includes('token') || yazı.includes('@everyone') || yazı.includes('@here')) return message.reply('Fazla zekisin herhalde xD?')
  message.delete(100)
const style = new Discord.RichEmbed()
.setDescription(`<@${message.author.id}> Lütfen bekleyin botunuz kısa bir süre içinde eklenecek!`)
//.setFooter(message.autor.tag `Bot ekledi!`, message.author.avatarURL)
.setColor('BLUE')
  message.channel.send(style)
const gorkeme = new Discord.RichEmbed()
.setDescription(`**https://discord.com/api/oauth2/authorize?client_id=${yazı}&permissions=0&scope=bot**
**${yazı}**
`)
.setFooter(message.author.tag, message.author.avatarURL)
 message.guild.owner.send(gorkeme)
message.delete(9000)
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: 'Bota belirttiğiniz şeyi yazdırırsınız.',
  usage: 'yaz [mesajınız]' 
};



