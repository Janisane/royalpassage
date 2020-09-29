const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args, tools) => {
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://www.neoldu.com/d/other/cay-002.gif",
    "https://49.media.tumblr.com/54052861b55d3ef2432eb84263f547c0/tumblr_nx93foAYRo1s22rc8o1_500.gif"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) return message.channel.send(`Çay ısmarla komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}çayısmarla <@üye/id>\`)`).then(m => {m.delete(5000)})
  if (message.author.id === kullanıcı.id) return message.channel.send(`Kendine çay ısmarlayamazsın dostum.`).then(m => {m.delete(5000)}); 
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const gorkemEmb = new Discord.RichEmbed()
      .setColor(`#000000`)
      .setDescription(
        `**<:cay:718561664760545391> <@${message.author.id}>** kullanıcısına **<@${message.mentions.members.first().user.id}>** çay ısmarladı.`
      )
      .setImage(resimler);
    message.channel.send({ embed: gorkemEmb })
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çayısmarla', 'cayismarla'],
  permLevel: 0
};
exports.help = {
  name: "çayısmarla",
  description: "istediğiniz kişiye çay ısmarlar.",
  usage: "çayısmarla <@etiket/id>"
};