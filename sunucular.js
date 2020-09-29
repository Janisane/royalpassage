const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const util = require('util');

exports.run = async (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if(message.author.id !=`${ayarlar.gorkem}` && message.author.id !=`${ayarlar.yox}`) return;  

  const guildArray = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,20);
    for (const guild of guilds) {
      embed.setDescription(`${guilds.map(a => '`' +a.id + '` | **Üye Sayısı:** `'  + a.memberCount + '` | `' + a.name + '`').join('\n')}`);
      embed.setColor('#000000')
      embed.setAuthor(`Botun Bulunduğu Sunucular; (${client.guilds.size})`)
    }
    message.channel.send({embed: embed})//.then(m => {m.delete(10000)})
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucular',
  description: 'Botun olduğu sunucuları listeler.',
  usage: 'sunucular'
};