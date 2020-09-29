const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(` <a:uyari:717007569402593403> Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor.`)
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(new Discord.RichEmbed().setAuthor(message.guild, message.guild.iconURL).setDescription(`<a:uyari:717007569402593403> Sunucunuzda **${bans.size}** Banlanmış üye Bulunmakta.`).setFooter(message.author.tag, message.author.avatarURL).setTimestamp().setColor('black')))
        //.catch(console.error)

}

exports.conf = {
    enabled: true,
    runIn: ["bansay"],
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }