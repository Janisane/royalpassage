const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
    const justice = new Discord.RichEmbed()
    .setColor('#000000')
    .setAuthor( ` ${client.user.username} | Yardım Menüsü` , client.user.avatarURL, ) 
    .setDescription(` <:battle:706104595360907372> ▸ **Moderasyon Komutları** (7)

 \`moderasyon\`・\`ban\`, \`mute\`, \`unmute\`, \`bansay\`, \`unban\`, \`sil\`, \`slowmode\`

<a:hypee:706137105688035398>  ▸ **Diğer Komutlar** (11)
  \`diğer\`・ \`yardım\`, \`avatar\`, \`afk\`, \`kullanıcıbilgi\`, \`jumbo\`, \`sunucubilgi\`, \`steam\`, \`say\`, \`alarm\`

 <a:discordjustice:715175675316797500> ▸ **Eğlence Komutları** (9)
  \`eğlence\`・ \`çayısmarla\`, \`avatar\`, \`aşkölçer\`, \`sarıl\`, \`tokat\`, \`kaçcm\`, \`hack\`, \`sor\`

<:royalpartner:714940172180914318> ▸ **Gif Komutları** (6)
  \`gifyardım\`・\`erkekgif\`, \`kızgif\`, \`sevgiligif\`, \`netflixgif\`, \`randomgif\`

 <:ayarlar:706116215420223518> ▸ **Kurulum Komutları** (13)
\`kurulumyardım\`・\`sayaç\`, \`modrol\`, \`otorol\`, \`logkanal\`, \`reklamkoruma\`, \`küfürkoruma\`, \`mutesorumlusu\`, \`jailsorumlusu\`, \`bansorumlusu\`, \`ultrasohbettemizleyici\`, \`jail_rol\`, \`mute_rol\`, \`kayıtısz\`

 <:bughunter:706139464468136027> ▸ **Koruma Komutları**  

<a:loading:706127117359775825> **YAKINDA! **

`) // <:kanalkoruma:706123217936580619>  \`korumayardım\` ,  \`kanalkoruma\`,  \`bankoruması\` , \`kickkoruması\` , \`emojikoruma\`  -  \`kurulumyardım\` Yazarak kurulumu tamamlayabilirsiniz. \`durum\` yazarak ise kurduğunuz kurumların açık/kapalı olduğunu görürsünüz.

    .setThumbnail(client.user.avatarURL)
    //.addField('<:battle:706104595360907372>  - **Moderasyon Komutları**', '`ban`, `at`, `sustur`, `slowmode`, `unban`, `unmute`, `sil`, `emoji-yükle`, `emoji-sil`, `unbanall`')
    //.addField('<a:supporter:704670429595566092> - **Diğer Komutlar**', '`yardım`, `avatar`, `afk`, `kullanıcıbilgi`, `jumbo`, `ping`, `sunucubilgi`')
    //.addField('<a:yildiz:706105849642483714> - **Eğlence Komutları**', '`çayısmarla`, `avatar`, `aşkölçer`, `sarıl`, `tokatat`, `kaçcm`')
    //.addField('<:ayarlar:706116215420223518> ▸ **Kurulum Komutları**', '`kurulumyardım` Yazarak kurulumu tamamlayabilirsiniz. `durum` yazarak ise kurduğunuz kurumların açık/kapalı olduğunu görürsünüz.')
   // .addField('<:bughunter:706139464468136027> ▸ **Koruma Komutları**',   ' <a:loading:706127117359775825> **YAKINDA!** , <:kanalkoruma:706123217936580619>  `korumayardım` ,  `kanalkoruma`,  `bankoruması` , `kickkoruması` , `emojikoruma` ')
    .addField(`<:addinvite:706122056189739090> ⸰ Server Invite`, `[Click here](https://discord.gg/ggvSFZv)`, true )
    .addField(`<:rich:706122001231904799> ⸰ Bot Vote`, `[Click here](https://discord.gg/ggvSFZv)`, true ) 
    .addField(`<:pinned:706121873498308613> ⸰ Support`, `[Click here](https://royalbot.gitbook.io/royal/)`, true) // -> Dökümasyon tamamlandığında eklenecek.
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(justice).catch()//.then(m => {m.delete(10000)})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help', 'yardım', 'yardim'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
    category: 'Yardım',
    description: 'Yardım kategorilerini gösterir.',
};