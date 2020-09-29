const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args, tools) => {
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media.giphy.com/media/vxvNnIYFcYqEE/giphy.gif",
"https://media.giphy.com/media/u8maN0dMhVWPS/giphy.gif"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) return message.channel.send(`Tokat komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}tokat <@üye/id>\`)`).then(m => {m.delete(5000)})
  if (message.author.id === kullanıcı.id) return message.channel.send(`Kendine sarılamazsın dostum.`).then(m => {m.delete(5000)}); 
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const gorkemEmb = new Discord.RichEmbed()
      .setColor(`#000000`)
      .setDescription(
        `**<a:tokat:719298215203176519>  <@${message.author.id}>** kullanıcısı **<@${message.mentions.members.first().user.id}>** kullanıcısına tokat attı.`
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