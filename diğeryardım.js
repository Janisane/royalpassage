const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
var hype = ["<a:hypee:706137105688035398>"]
var load = ["<a:discordloading:722381120561217567>"]
    const justice = new Discord.RichEmbed()
    .setColor('#000000')
    .setAuthor( ` ${client.user.username} | Yardım Menüsü` , client.user.avatarURL, ) 
    .setDescription(` ${hype}  ▸ **Diğer Komutları**
**[${load}] avatar ⸰** Kullanıcının veya sizin avatarınızı gösterir.
**[${load}] afk ⸰** AFK durumuna alır.
**[${load} ] alarm ⸰** Alarm kurar süre dolunca hem özelden hem chatten etiketler.
**[${load}] kullanıcıbilgi ⸰** Bilgilerinizi gösterir.
**[${load}] sunucubilgi ⸰** Sunucu bilgilerini gösterir.
**[${load} ] jumbo ⸰** Belirttiğiniz emojiyi büyültür.
**[${load} ] steam ⸰** Belirttiğiniz oyunu steamde arar.
**[${load} ] say ⸰** Sunucu üye aktif ve sestekileri sayar.

`) 

    .setThumbnail(message.guild.iconURL)
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
    aliases: ['diğer', 'dıger', 'diiğer'],
    permLevel: 0
};

exports.help = {
    name: 'diger',
    category: 'Yardım',
    description: 'Yardım kategorilerini gösterir.',
};