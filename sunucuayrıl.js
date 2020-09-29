const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
let sunucuid = args[0]
    if (!sunucuid) return message.channel.send(` Sunucunun ID'sini yazmalısın.`).then(msg => msg.delete(10000))
         message.delete()
  const hata = client.emojis.get('717424249069109323')
  const tik = client.emojis.get('618591302845595649')
 if(message.author.id !=`${ayarlar.gorkem}`)return message.reply(` ${hata} | Yapımcım Sen Değilsin `);
   message.channel.send(`  **Bot ${client.guilds.get(sunucuid).name} Sunucusundan Ayrıldı** ${tik}`);
   client.guilds.get(sunucuid).leave()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucudanayrıl'],
  permLevel: 0
};

exports.help = {
  name: 'ayrıl',
  description: 'Sunucudan ayrılır',
  usage: 'ayrıl'
};