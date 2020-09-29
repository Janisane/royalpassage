const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args, tools) => {
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media.giphy.com/media/lqqKhj22gGJpgtPQ0R/giphy.gif",
"https://media.giphy.com/media/WRA6Bf0Gd4RSUGE8As/giphy.gif",
"https://media.giphy.com/media/zhpxMXQSBpgPu/giphy.gif"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) return message.channel.send(`Sarıl komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}sarıl <@üye/id>\`)`).then(m => {m.delete(5000)})
  if (message.author.id === kullanıcı.id) return message.channel.send(`Kendine sarılamazsın dostum.`).then(m => {m.delete(5000)}); 
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const gorkemEmb = new Discord.RichEmbed()
      .setColor(`#000000`)
      .setDescription(
        `**<:sarilalim:643022479320678400>  <@${message.author.id}>** kullanıcısı **<@${message.mentions.members.first().user.id}>** kullanıcısına sarıldı.`
      )
      .setImage(resimler);
    message.channel.send({ embed: gorkemEmb })
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sarıl'],
  permLevel: 0
};
exports.help = {
  name: "saril",
  description: "istediğiniz kişiyi öper.",
  usage: "öp <@etiket/id>"
};