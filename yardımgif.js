const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {

let patlama = client.emojis.get("706137105688035398")

  if (message.author.bot || message.channel.type === "dm") return;
    const justice = new Discord.RichEmbed()
    .setColor('#ff5e2a')
    .setAuthor( `${client.user.username} | Gif Yardım Komutları` , client.user.avatarURL, ) 
    .setDescription(`
${patlama} ▸ **.erkekgif & randomerkek ▸** \`Random Erkek gifleri atar.\` \n
${patlama} ▸**.kızgif & randomkız ▸**  \`Random Kız gifleri atar.\` \n
${patlama} ▸**.sevgiligif & randomsevgili ▸** \`Random Sevgili gifleri atar.\` \n
${patlama} ▸**.netflix & randomnetflix ▸**  \`Random Netflix gifleri atar.\` \n
`)
    //.setThumbnail(client.user.avatarURL)
    //.addField(`<:addinvite:706122056189739090> ⸰ Server Invite`, `[Click here](https://discord.gg/D6JHuVu)`, true )
    //.addField(`<:rich:706122001231904799> ⸰ Bot Vote`, `[Click here](https://top.gg/bot/697445801223258145/vote)`, true ) 
    //.addField(`<:pinned:706121873498308613> ⸰ Support`, `[Click here](https://top.gg/bot/697445801223258145/vote)`, true) // -> Dökümasyon tamamlandığında eklenecek.
//.setThumbnail(`https://cdn.discordapp.com/attachments/712822817837809675/715227391898812437/pizap-removebg-preview.png`)
 .setImage(`https://cdn.discordapp.com/attachments/712822817837809675/715225577904144545/SS.png`)
    .setFooter(`${message.author.tag} tarafından istendi.`, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(justice).catch()//.then(m => {m.delete(10000)})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gifhelp', 'gifyardım', 'ppyardım'],
    permLevel: 0
};

exports.help = {
    name: 'avataryardım',
    category: 'Yardım',
    description: 'Yardım kategorilerini gösterir.',
};