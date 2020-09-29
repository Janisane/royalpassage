const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
  if (message.author.bot || message.channel.type === "dm") return;

let gorkem = client.emojis.get("706137105688035398")
let sevgili = client.emojis.get("722380021787787264") 

  var gifler = [
"https://cdn.discordapp.com/avatars/590839552776601610/a_66cd4a5e9a7478e50f85afd0b4d7e025.gif",
"https://cdn.discordapp.com/avatars/424867788373360652/a_842a4a3556678ff7196a2aecc02a2649.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715201684967522314/a_7b41b16a464175ef6ab5fb0e8aa8ecf0.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715205363015745567/a_92c2727833b81953e3d62cd18508b9ad.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715198391063150662/a_e85735f09990c8f544e58653ed6be07c.gif",
"https://cdn.discordapp.com/avatars/672530205432348752/a_16b33e8a47c6ccb7466bdbbce0f33246.gif",
"https://cdn.discordapp.com/avatars/273387310991802368/a_4de6d229fe72874104ba946fe8518e2a.gif",
"https://cdn.discordapp.com/avatars/488726262152691712/a_d60a304eb00e67f71ec7658c62a0a1a7.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715642536273772594/a_a21c57537ba64cecd77834e2dd8ed344.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715642823336132720/couple.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/716060646579503254/614.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/716060647401455616/xati_9.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715643048515862669/3f07g9.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715641146151272491/a_44d009926b6b4c75c7e9bb2701567aa1.gif",
"https://cdn.discordapp.com/attachments/694694675679936585/706664993441054720/couple8.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/710277971495092264/a_8d6b43b2fc898e621977aa371e9edf58.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/708058647829413958/a_3f672c73f20fc656d36cafcfe37d8090.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/707628720399319100/UwU_9.gif",
"https://cdn.discordapp.com/attachments/694694675679936585/706838423620812840/Giphy_65.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/708322528497631286/dsffsdafs.gif",
"https://cdn.discordapp.com/attachments/694694675679936585/705644792561926184/a_da4a35039469fdb09e2adccdae897ce8.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715642114989359134/a_b2564e77dd8141e78789960d95e45b1b.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715641145811795999/20200111_062412.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640807725596825/a_d1114f16d5e64cc2f8a2aff8e823cd93.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640807071416350/a_38e3282faf8bf8ba7b722702576a10b4.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714729107937820672/a_3fe32fb92df22b830811ee80001406c1.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/712611069302145084/Kristine_Froseth_in_Apostle_2018.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713776177919164426/a_7fa4e550440a4b9e18ab06a309d3e1aa.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713899324832219167/5.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713737004910772264/IMG_2ehfdk.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713343868854337636/a_27f2bac2f271f7e9baab0713c2a02ae2.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713075941030494299/a_3c60e4b5ac2b3b1cadd49a5feae12498.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714564129586675792/207.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714564068199104522/242.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714564360713928745/215.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714564346981646406/256.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714562453769551892/231.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713943428777639987/image0.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713943437250134066/image0.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/713899611785396275/10.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714561650581176370/9.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714563497123643534/306.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714563267405807616/22.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714562319664807956/10.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714564196276240444/36.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714562779012661278/15.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640400588701707/bad06aef1ac0b79f034b95d910a75bbd.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640013353910295/a_0e64c9c1a274c1e77173413cb4302fa9.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715431379944472626/a_57a027d3fbdc157283c32a4a52e952cd-2.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640630734487573/f375761b1e41d0d0829ae34af1c038f1.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640127975587911/5-2.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640128692813904/1143.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715640011378130974/a_c64858b56bc588c377eae5b3e95e8915.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/715639674244169728/a_ef765ececd9dce4ff3ee21fd394d4c9e-1.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714729221452202064/Mulan_Gif_14.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714729243023769680/Mulan_Gif_13.gif",
"https://cdn.discordapp.com/attachments/631918691801366539/714729201651023922/a_548119a72cd68dd57573fd6346af0eec.gif",
"https://cdn.discordapp.com/avatars/582121439797444620/a_69334831326d0560f565bb63869bc357.gif",
"https://cdn.discordapp.com/avatars/583352324978900993/a_7d383155402928fce738a7d05454ccf6.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715176875064033330/a_32d45f5a525c53815671a8902f3b25c6.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715223049506652231/a_64565d72cafc5afe2006616fbbc37d45.gif"
  ];
  
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    const gorkemEmb = new Discord.RichEmbed()
    //.setDescription(`<@${message.author.id}> Tarafından İstendi`)
    .setDescription(` ${sevgili}・[Couple Gif](${resimler}) `)
      .setColor("RANDOM")
      .setImage(resimler)
    .setFooter(`${message.author.tag} istendi.`, message.author.avatarURL);
    message.channel.send({ embed: gorkemEmb });
message.delete(3500) 
    return;

  }
};

exports.conf = {
  enabled: true,
  aliases: ['ss', 'randomsevgiliav', 'randomsevgiliavatar', 'randomsevgilipp', 'randoms', 'gif!sevgili', 'gifsevgili', 'sevgiligif', 'sevgili'],
  permLevel: 0,
};

exports.help = {
  name: "randomesevgili",
  description: "Resim Attırma.",
  usage: "avt",
};

