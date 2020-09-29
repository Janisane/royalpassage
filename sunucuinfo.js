const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if(message.author.id !== ayarlar.gorkem && message.author.id !== ayarlar.yox) return;
  var sunucum = args.slice(0).join(' ');
  if(!sunucum) return message.channel.send(`Sunucu Bilgisini istediğin sunucunun ID'sini yazmalısın!`)
  if(!client.guilds.get(sunucum).member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send(`Belirttiğin sunucuda davet oluşturabilme yetkisine sahip değilim!`);
  client.guilds.get(sunucum).channels.filter(c => c.type == "text").random().createInvite({maxAge: 0, maxUses: 0}).then(invite => {
    let embed = new Discord.RichEmbed().setColor('BLUE').setDescription(`Sunucu Adı: **${client.guilds.get(sunucum).name}** \n Sunucu ID: **${client.guilds.get(sunucum).id}** \n Üye Sayısı: **${client.guilds.get(sunucum).memberCount}** \n Aktif Üye Sayısı: **${client.guilds.get(sunucum).members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}** \n  Sunucu Sahibi: **${client.guilds.get(sunucum).owner.user.tag}** \n Sunucu Davet: **https://discord.gg/${invite.code}** `).setThumbnail(`${client.guilds.get(sunucum).iconURL}`);
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucuinfo', 'info', 'sunucubilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'IDsi girilen sunucunun davetini verir. :3',
  usage: 'bilgi',
};