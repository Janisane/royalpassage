const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
     
let mention = message.mentions.users.first();
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}
if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor("#7286da")
  .setImage(mention.avatarURL)
 .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor("#000000")
  .setImage(message.author.avatarURL)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(avatarEmbedYou);
  return;
}
message.channel.send("Bi hata oldu galiba?");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar', 'pp'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Etiketlediğiniz veya kendinizin profil fotosunu gösterir.',
  usage: '.pp <etiket>'
};