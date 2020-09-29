const ayarlar = require('../ayarlar.json');
module.exports = async message => {
  let client = message.client;
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);

const Discord = require("discord.js");
let kanal = '718952164567023708' 
 const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.tag, message.author.avatarURL)
  //.setDescription(`**${cmd.help.name}** adlı komutum kullanıldı!`)
  //.addField(`<:ustebak:716061536627589131> **Kullanan Kişi:**`, `**${message.author.tag}**`)
  //.addField(`:id: **Kullanan Kişinin ID'si:**`, message.author.id)
  .addField(` **Kullanılan Komutum:**`, ` **${cmd.help.name}**`)
  .addField(` **Kullanan Kişinin ID'si:**`, message.author.id)
  .addField(` **Kullanılan Sunucunun ID'si:** `, message.guild.id)
  .setThumbnail(message.author.avatarURL)
  .setFooter(message.guild.name, message.guild.iconURL)
  .setTimestamp()
 client.channels.get(kanal).send(embed)
  }

};

