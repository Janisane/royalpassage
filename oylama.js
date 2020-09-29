const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require("ms");

 exports.run = async (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.guild.member(message.author.id).hasPermission(8) && message.author.id !== `${ayarlar.gorkem}`)return message.channel.send(`Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısınız.`); 
  message.delete();
  let soru = args.join(' ');
  if (!soru) return message.channel.send(`Bir şey yazmalısın.`).then(m => m.delete(5000));

  const gorkemEmb = new Discord.RichEmbed()
    .setColor(`#000000`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    //.setFooter('Justice Oylama', client.user.avatarURL)
    .setDescription(`
    ${message.guild.name} **|** Oylama

    **${soru}**
    `)

  message.channel.send(gorkemEmb).then(function(message) {
    let basarili = message.react(`717021299167199262`)
    let basarisiz = message.react(`718562313233236048`)

  /*setTimeout(function(){
    message.channel.send(`${basarili.size} | ${basarisiz.size}`)
  }, ms(`10s`));*/
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oylama'],
  permLevel: 0
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};