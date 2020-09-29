const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
  if (message.author.bot || message.channel.type === "dm") return;

let gorkem = client.emojis.get("706137105688035398")

  var gifler = [
"https://cdn.discordapp.com/attachments/631918688773079078/715173663019761714/1.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715173665108525106/4f99ba3b95d158b0c884ea8bd111b737.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715173665972682793/8.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715173697639678003/8741.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715173743214723082/67186429_113482419948389_554038861152846067_n.mp4_nc_htscontent-atl3-1.cdninstagram_1.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715173757693591562/a_0dad339709de8d76dfae4812d6dd4460.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174184883585034/a_42947e61cad0b217ee4bf8eb9da797f4.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174230387458140/a_6d80af60b305af44589777b7ed6db2a8.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174232996184134/a_7b5d7cf2e1cdf5b2c9d11399208150b6.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/715246991093006386/a_61c7d15d5d7d24bf30651e77342a92b2.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/708078157315702835/a_d1e84c51b1aa994981667e0724d8aa89.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/708078192216244224/gif102.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/708844988590587974/a_4d703d79c61fbdf1e542b52902da7291.gif",
"https://cdn.discordapp.com/attachments/708335241609347072/708500233394454618/xati_33.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/711476535298752583/19.gif",
"https://cdn.discordapp.com/attachments/708335241609347072/708350387215925378/96.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/708078116668440606/a_ce498316cb7b7546b1bf3811ab9a0b2b.gif",
"https://cdn.discordapp.com/attachments/708335241609347072/708500294580830238/xatia_13.gif",
"https://cdn.discordapp.com/attachments/695033986279407631/707469913169592380/a_feeda4ed249807cd0cbb3982692a10c1.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/708339607095476395/e32.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/707306066219892846/82.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/708360054222487572/lexus7.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/707350910891851806/a_d44c98fffb8d8569abf48d29379b7d98.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/707307233205158000/a_c8417a89299d06da3d82b0b5caa3331d.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174243662299186/a_883b8b11b06827a76a7c475dd4c346f3.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/715229195286085684/25.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174300469952562/a_fcedf17bb92bae34720524bd4a41bba6.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174318388281374/dfgdfg.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715318186035380878/a_175f9c0bcb448c5bea1ac705efc3501b.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174337128300564/Efe_bad.gif",
"https://cdn.discordapp.com/attachments/715684069647843349/716764876210438214/a_43d21c68d2fbe8f483909e9a020f5c76.gif",
"https://cdn.discordapp.com/attachments/715684069647843349/716764737807056916/a_6492b28ad6b10217a9dd14bbabc87074.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715859482332102696/58.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715839676161851402/a_7db919c8105905bb2782c244913f0024.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715859482332102696/58.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/715246461700276224/a_d44c98fffb8d8569abf48d29379b7d98.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715641468017967205/a_c72f7da16c0f30d642fb43c4df5ffb23.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715641383377174628/a_f939fa6386aedc848e00d09b83679931.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715319572865220660/a_f1ee662508410fa0a9f8da784151d788.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716790025525657630/image0.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716276868336058368/dc.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716276522054582272/a_6c508bc459757df2b37f517f98c726af.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716276686202863657/18.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716030258700353546/karol_71.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716030447750086686/a_f11a8098d15bfb9b9b5caf12b8cd40c4.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716082189611040798/a_27d81812ae5ae1928f88cff1ac45b693.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716276522583064587/giphy_335.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716093088669630605/0f9cb45603fa210654e510113c66cb2f.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716131661137444874/a_d4223b223b79a2bf929d08eede963093.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716225297099390986/a_fdc86eecd18d59989fddbcda810622f0.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716786114169536523/karol_73.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716520754383945738/image0.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716492817546870894/image0.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716397524713340968/image0.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716276984346574928/a_db7c097c1c98576ebcb10522bcb101cd.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716704446234492958/a_7e8b00c770f0b1999bbdee09f3af6dae.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716695029288140810/a_a33e6533c17a24bf746907a47199e3ea.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716695359614615653/a_5ddb2af096e87b644a68f4ba9b661c64.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716784354663202876/a_93f23c2d7b91427799b18cc66bca98bb.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716704446620500038/a_723149ea34c7c0e217de20913aaf7c6b.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/716789913990725783/guzel1.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174403226468362/Efeck_Kopekli_Gif.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174430598234152/Efeck_Neniz2.gif",
"https://cdn.discordapp.com/avatars/451121478356828160/a_647b906805d86e1177ce500344eaeb47.gif",
"https://cdn.discordapp.com/avatars/322805501861560320/a_c396f36cbe0f2af848dc0c8e1f30f183.gif",
"https://cdn.discordapp.com/avatars/616186755615424522/a_789171d8411985396d652b63faf15b28.gif",
"https://cdn.discordapp.com/avatars/421729655024910336/a_239913c8537924284117a91b5ee4bd3b.gif",
"https://cdn.discordapp.com/avatars/305791566449213453/a_fef0a3f9985b627ef112615229f94dbf.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/715267243692523550/motor.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715198056097906708/a_12030c35bf19a74cf4a42997bcdf3f3c.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/715319355222786141/a_4a2c38d6389e91d02d856e4497409147.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714169635217473576/stranger_things_gifs_39.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715196501323808848/a_83d7467fca824233dfb035b2e8119123.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715201324580470864/a_9693d28d59cfbc3ef8edfad94a9eb29c.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715201496043487242/a_f97feac4474f8459ea6310004e3dce54.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715192706195783762/a_ecd5cf3037d1502fd260d790dcb5328a.gif",
"https://cdn.discordapp.com/avatars/674549259537743883/a_7a88d383f99fd4a85eb5e20fe93b1f25.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715172396323045376/a_a9e7a7c03fc9ff27f6fdc820d4f6d1bd.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174445521698906/Efemmmmm.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715174522265010268/Selam_tatlm_yklmaz_tahtm_14.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715179501423951892/a_dbfc76aa89c069c0f1f0dd705e2a91c9.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715231438047281305/a_1145181d72a2e7c738e110ebf60455f9.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715228075876548618/a_eb5019484d44993a16e37e8c84d3cf01.gif",
"https://cdn.discordapp.com/attachments/712822850473426954/715232390695485500/a_dc57dbdf26d9f61acf51705f91abf196.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715190184504721418/a_3558a20bd8b27399c76ec5ba42080c58.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/715166827470258197/e155.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714994329726484491/321.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714993948740943942/60.gif",
"https://cdn.discordapp.com/avatars/646353134934818828/a_b9dabddb4155dda4e07165152a584324.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714993861893816371/327.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714993587909034064/56.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714901865283846244/a_00f20b28706100cd3f11eb889934b9cb.gif", 
"https://cdn.discordapp.com/attachments/631918688773079078/714901793540407417/Laurie_Man_Gif_1.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714897186814427136/a_b1e8d539bcc06d2cc893b01f5b7c0fb2.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714841686316154930/20200526_162919.gif", 
"https://cdn.discordapp.com/attachments/631918688773079078/714797588938752040/a8.gif",
"https://cdn.discordapp.com/attachments/721323848061943839/721329606048874566/a_8fd65a3d51bef1ba343dd3f6a5ac8b70.gif",
"https://cdn.discordapp.com/avatars/583359948432474162/a_8c71b12d8ce948b8c8d06c23df46eab7.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714797579770265660/a6.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714725219452846110/a_f2fa8ca2a83c60812bb1323f0b9e0ee6_2.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714618412751519764/a_bbc10cee7a05f45d0578c2e28b7c89ac.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727829257417392158/a_d7c406f65d02adcf5ffcdfce1fbb166c.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727828717518192640/a_3a29161e1c3ee14dce9cfefe492ca1db.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727827183065890816/a_db588eaf6f12642a7a6011bb605fad4b.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727827716610457621/a_3164b16230f330a427b3393ccc322349.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727827422749130772/a_1f9eb72ae872e0c8539dd4d7849b8e04.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727827478143303680/a_9210e6fe33496664ab4fc1117bf33a8e.gif",
"https://cdn.discordapp.com/attachments/724654715396292638/727827801234735114/a_15d7895ef65e3ec0e042d5bfef149707.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714571947303895120/a_b8e54dc510670aeb514f47179cf04793.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714567728668868678/a_c6215b635b083dff8b0bdf1ed49c3a4c.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714571342804025495/a_8e24961e439ac5aebafa27aea876481e.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/714829144881496114/dbeea35f23150a9877d63516168b9907.gif"

  ];
  
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    const gorkemEmb = new Discord.RichEmbed()
   // .setDescription(`<@${message.author.id}> Tarafından İstendi`)
.setDescription(`${gorkem}・[Man Gif](${resimler})`) 
      .setColor("RANDOM")
      .setImage(resimler)
    .setFooter(`${message.author.tag} istedi. `, message.author.avatarURL);
    message.channel.send({ embed: gorkemEmb });
message.delete(3500) 
    return;

  }
};

exports.conf = {
  enabled: true,
  aliases: ['erkekgif', 'randomerkekav', 'randomerkekavatar', 'randomerkekpp', 'randome', 'gif!erkek', 'giferkek', 'erkek'],
  permLevel: 0,
};

exports.help = {
  name: "randomerkek",
  description: "Resim Attırma.",
  usage: "avatar",
};

