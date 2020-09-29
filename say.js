const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "tik");
  const justicembed = new Discord.RichEmbed()
  .setColor('#00ffff') // olm napmaya calısıyon su an  SALAK EVLADI SUNUCU İSMİ İCONU | BİGLİ OLUCAK !!
  .setAuthor(`${message.guild.name} | Bilgi`, message.guild.iconURL)// ${message.author.displayAvatarURL} ${message.guild.name}
        .setDescription(` <:member:706121916603432990> **Sunucuda** \`${message.guild.memberCount} Kişi\` **bulunmaktadır.**
<:royalpartner:714940172180914318>  **Ses Kanallarında** \`${count} Kişi\` **bulunmaktadır.**
<a:hypeshiny:551361668219666442>  **Sunucuda Aktif** \`${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size} Kişi\` **bulunmaktadır.**
`)
    //.addField(" **Sunucudaki Aktif Üye Sayısı** ",message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
    .setThumbnail(`${message.guild.iconURL}`)
        .setTimestamp()
        .setFooter(`${message.author.tag} `, message.author.avatarURL)
 
  message.channel.sendEmbed(justicembed)
  message.react(emoji)
  message.delete(5000)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'annenscot',
  usage: 'say'
};
