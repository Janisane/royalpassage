const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if(!message.guild) return;
  if(message.author.id !=`${ayarlar.gorkem}` && message.author.id !=`${ayarlar.uur}` && message.author.id !=`${ayarlar.maes}`) return; 
  message.delete();
    message.channel.send(`Bot yeniden başlatılıyor.`).then(msg => {
    message.delete();
    console.log(`Bot yeniden başlatılıyor.`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};