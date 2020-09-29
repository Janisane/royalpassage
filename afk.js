const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')

exports.run = async (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let kullanıcı = message.author
  let neden = args.join(" ")
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  const reklam = ["discord.app", "discord.gg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http",".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az"];
  if (!neden) return message.channel.send(`AFK sebebini yazmalısın.`).then(m => {m.delete(5000)})
  if (reklam.some(word => neden.includes(word))) return;
  
  db.set(`afk_${kullanıcı.id}`, neden)
  const kullanıcıafkbilgi = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`<@!${kullanıcı.id}> isimli üye \`${neden}\` sebebiyle AFK oldu.`)
  return message.channel.send(kullanıcıafkbilgi).then(m => {m.delete(5000)})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["afk"],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK Komudu",
  usage: 'afk <neden>'
}