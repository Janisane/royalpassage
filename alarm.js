const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require('ms')

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  var sure = args[0];
  if (!sure) return message.channel.send(`⚠ **|** Süre yazmalısın.`)
  if(!sure.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(`⚠ **|** Böyle bir süre bilmiyorum, lütfen tekrar dene.`);
  let za = args.slice(1).join(' ')
  if (!za) {
    var sebep = 'Belirtilmedi'
  } else {
    var sebep = za
  }
  message.channel.send(` <a:tikstyle:694321958904660048> Tamamdır, **${sure}** süre sonra seni etiketleyeceğim.`)
  
  setTimeout(function(){
    message.author.send(`Hey, selam! **${sure}** önce benden seni etiketlememi istemiştin. \n**Sebep:** ${sebep}`)
    message.channel.send(`Hey <@${message.author.id}>, **${sure}** önce benden seni etiketlememi istemiştin. \n**Sebep:** ${sebep}`)
  }, ms(sure))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alarm',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ping"
};;