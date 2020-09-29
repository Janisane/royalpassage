const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if(message.author.id !== ayarlar.gorkem) return;
  var sunucum = args.slice(0).join(' ');
  if(!sunucum) return message.channel.send(`Davet linkini istediğin sunucunun ID'sini yazmalısın!`)
  if(!client.guilds.get(sunucum).member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send(`Belirttiğin sunucuda davet oluşturabilme yetkisine sahip değilim!`);
  client.guilds.get(sunucum).channels.filter(c => c.type == "text").random().createInvite({maxAge: 0, maxUses: 0}).then(invite => {
    let embed = new Discord.RichEmbed().setColor('RANDOM').setDescription(`**\`${client.guilds.get(sunucum).name}\`** sunucusunun davet linki: **https://discord.gg/${invite.code}**`);
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetal'],
  permLevel: 0
};

exports.help = {
  name: 'davet-al',
  description: 'IDsi girilen sunucunun davetini verir. :3',
  usage: 'davet-al ID',
};