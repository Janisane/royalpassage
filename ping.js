const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if(message.author.id !=`${ayarlar.gorkem}` && message.author.id !=`${ayarlar.yox}` && message.author.id !=`${ayarlar.maes}`) return; 
  const m = await message.channel.send(`Ölçülüyor...`)
  m.edit(`🏓  İşlem **${m.createdTimestamp - message.createdTimestamp} ms** sürede gerçekleştirildi.`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gecikme'],
  permLvl: 0
};

exports.help = {
  name: 'ping',
  description: '-',
  usage: 'ping'
};