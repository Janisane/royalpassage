const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
var discordloading = ["<a:discordloading:722381120561217567>"]
var discordNeon = ["<a:discordNeon:722381166119878726>"]
    const justice = new Discord.RichEmbed()
    .setColor('#000000')
    .setAuthor( ` ${client.user.username} | Yardım Menüsü` , client.user.avatarURL, ) 
    .setDescription(`${discordNeon}  ▸ **Eğlence Komutları**
**[${discordloading}] çayısmarla ⸰** Belirttiğiniz kullanıcya çay ısmarlar.
**[<a:discordloading:722381120561217567>  ] öp ⸰** Belirttiğiniz kullanıcyı öper.
**[<a:discordloading:722381120561217567>  ] sarıl ⸰** Belirttiğiniz kullanıcya sarılır.
**[<a:discordloading:722381120561217567>  ] tokat ⸰** Belirttiğiniz kullanıcya tokat atar.
**[<a:discordloading:722381120561217567>  ] alkışla ⸰** Belirttiğiniz kullanıcyı alkışlar.
**[<a:discordloading:722381120561217567>  ] hack ⸰** Belirttiğiniz kullanıcyı hackler.
**[<a:discordloading:722381120561217567> ] kaçcm ⸰** Kaçcm olduğunu öğrenirsiniz.
**[<a:discordloading:722381120561217567> ] hesapla ⸰** Matematik hesaplamaları yapar.
**[<a:discordloading:722381120561217567> ] aşkölçer ⸰** Belirttiğiniz kullanıcıyla aşkınızı ölçer.

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
    aliases: ['eğlence', 'eglence', 'fun'],
    permLevel: 0
};

exports.help = {
    name: 'eğlenceyardım',
    category: 'Yardım',
    description: 'Yardım kategorilerini gösterir.',
};