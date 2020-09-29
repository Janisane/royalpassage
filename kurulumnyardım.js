const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const fs = require('fs')

var prefix = ayarlar.prefix;



exports.run = (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let sayacSayı = db.fetch(`${message.guild.id}_sayacsayı`)
  let kayıtsızrol = db.fetch(`${message.guild.id}_kayıtsız`)
  let modrol = db.fetch(`${message.guild.id}_modrol`)
  let otorol = db.fetch(`${message.guild.id}_otorol`)
  let logkanal = db.fetch(`${message.guild.id}_logkanal`)
  let otorolKanal = db.fetch(`${message.guild.id}_otorolkanal`)
  let küfürFiltre = db.fetch(`küfürFiltre_${message.channel.id}`)
  let reklamFiltre = db.fetch(`reklamFiltre_${message.channel.id}`)
  let susturmaRol = db.fetch(`${message.guild.id}_susturmarol`)
  let jailRol = db.fetch(`${message.guild.id}_jailrol`)
  let muteRol = db.fetch(`${message.guild.id}_muterol`)
  let ultraSohbetTemizleyici = db.fetch(`otoBotSilici_${message.channel.id}`)
  let banSorumlusu = db.fetch(`${message.guild.id}_bansorumlusurol`)
  let banKanal = db.fetch(`${message.guild.id}_bankanal`)
  let jailSorumlusu = db.fetch(`${message.guild.id}_jailsorumlusurol`)
  let jailKanal = db.fetch(`${message.guild.id}_jailkanal`)
  let muteSorumlusu = db.fetch(`${message.guild.id}_mutesorumlusurol`)
  let muteKanal = db.fetch(`${message.guild.id}_mutekanal`)

let acik = client.emojis.get("718556931241017425")
let kapali = client.emojis.get("718556889218023433")
  
  let sayac_scott = ""
  if (!sayacSayı) {
  if (sayacSayı  === null || sayacSayı === undefined || sayacSayı === NaN)
  sayac_scott = `${kapali}`
  } else {
  sayac_scott = `${acik}`
  }
  let kayıtsızrol_scott = ""
  if (!kayıtsızrol) {
  if (kayıtsızrol  === null || kayıtsızrol === undefined || kayıtsızrol === NaN)
  kayıtsızrol_scott = `${kapali}`
  } else {
  kayıtsızrol_scott = `${acik}`
  }
  
  let modrol_scott = ""
  if (!modrol) {
  if (modrol  === null || modrol === undefined || modrol === NaN)
  modrol_scott = `${kapali}`
  } else {
  modrol_scott = `${acik}`
  }
  
  let otorol_scott = ""
  if (!otorol) {
  if (otorol  === null || otorol === undefined || otorol === NaN)
  otorol_scott = `${kapali}`
  } else {
  otorol_scott = `${acik}`
  }
  
  let kayitsizRol_scott = ""
  if (!otorol) {
  if (otorol  === null || otorol === undefined || otorol === NaN)
  kayitsizRol_scott = `${kapali}`
  } else {
  kayitsizRol_scott = `${acik}`
  }
  
  let logkanal_scott = ""
  if (!logkanal) {
  if (logkanal  === null || logkanal === undefined || logkanal === NaN)
  logkanal_scott = `${kapali}`
  } else {
  logkanal_scott = `${acik}`
  }
  
  let otorolKanal_scott = ""
  if (!otorolKanal) {
  if (otorolKanal  === null || otorolKanal === undefined || otorolKanal === NaN)
  otorolKanal_scott = `${kapali}`
  } else {
  otorolKanal_scott = `${acik}`
  }
  
  let küfürFiltre_scott = ""
  if (!küfürFiltre) {
  if (küfürFiltre  === null || küfürFiltre === undefined || küfürFiltre === NaN)
  küfürFiltre_scott = `${kapali}`
  } else {
  küfürFiltre_scott = `${acik}`
  }
  
  let reklamFiltre_scott = ""
  if (!reklamFiltre) {
  if (reklamFiltre  === null || reklamFiltre === undefined || reklamFiltre === NaN)
  reklamFiltre_scott = `${kapali}`
  } else {
  reklamFiltre_scott = `${acik}`
  }
  
  let jailRol_scott = ""
  if (!jailRol) {
  if (jailRol  === null || jailRol === undefined || jailRol === NaN)
  jailRol_scott = `${kapali}`
  } else {
  jailRol_scott = `${acik}`
  }
  
  let muteRol_scott = ""
  if (!muteRol) {
  if (muteRol  === null || muteRol === undefined || muteRol === NaN)
  muteRol_scott = `${kapali}`
  } else {
  muteRol_scott = `${acik}`
  }
  
  let ultraSohbetTemizleyici_scott = ""
  if (!ultraSohbetTemizleyici) {
  if (ultraSohbetTemizleyici  === null || ultraSohbetTemizleyici === undefined || ultraSohbetTemizleyici === NaN)
  ultraSohbetTemizleyici_scott = `${kapali}`
  } else {
  ultraSohbetTemizleyici_scott = `${acik}`
  }
  
  let banSorumlusu_scott = ""
  if (!banSorumlusu) {
  if (banSorumlusu  === null || banSorumlusu === undefined || banSorumlusu === NaN)
  banSorumlusu_scott = `${kapali}`
  } else {
  banSorumlusu_scott = `${acik}`
  }
  
  let banKanal_scott = ""
  if (!banKanal) {
  if (banKanal  === null || banKanal === undefined || banKanal === NaN)
  banKanal_scott = `${kapali}`
  } else {
  banKanal_scott = `${acik}`
  }
  
  let jailSorumlusu_scott = ""
  if (!jailSorumlusu) {
  if (jailSorumlusu  === null || jailSorumlusu === undefined || jailSorumlusu === NaN)
  jailSorumlusu_scott = `${kapali}`
  } else {
  jailSorumlusu_scott = `${acik}`
  }
  
  let jailKanal_scott = ""
  if (!jailKanal) {
  if (jailKanal  === null || jailKanal === undefined || jailKanal === NaN)
  jailKanal_scott = `${kapali}`
  } else {
  jailKanal_scott = `${acik}`
  }
  
  let muteSorumlusu_scott = ""
  if (!muteSorumlusu) {
  if (muteSorumlusu  === null || muteSorumlusu === undefined || muteSorumlusu === NaN)
  muteSorumlusu_scott = `${kapali}`
  } else {
  muteSorumlusu_scott = `${acik}`
  }
  
  let muteKanal_scott = ""
  if (!muteKanal) {
  if (muteKanal  === null || muteKanal === undefined || muteKanal === NaN)
  muteKanal_scott = `${kapali}`
  } else {
  muteKanal_scott = `${acik}`
  }
  
    const sunucubilgi = new Discord.RichEmbed()
      .setColor("#000000")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setDescription(`
${sayac_scott} | \`.kurulum sayaç\` | \`<ekle/sıfırla>\` | \`<#kanal/id>\` | \`<sayı>\`
${otorol_scott} | \`kurulum otorol\` | \`<ekle/sıfırla>\` | \`<#kanal/id>\` | \`<@rol/id>\`
${modrol_scott} | \`.kurulum modrol\` | \`<ekle/sıfırla>\` | \`<@rol/id>\`
${logkanal_scott} | \`.kurulum logkanal\` | \`<ekle/sıfırla>\` | \`<#kanal/id>\`
${küfürFiltre_scott} | \`.kurulum küfürkoruma\` | \`<aç/kapat>\` | \`Kanala Göre\`
${reklamFiltre_scott} | \`.kurulum reklamkoruma\` | \`<aç/kapat>\` | \`Kanala Göre\`
${ultraSohbetTemizleyici_scott} | \`.kurulum ultrasohbettemizleyici\` | \`<aç/kapat>\` | \`Kanala Göre\`
${kayıtsızrol_scott} | \`.kurulum kayıtsız\` | \`<ekle/sıfırla>\` | \`<@rol/id>\`
${jailRol_scott} | \`.kurulum jail_rol\` | \`<ekle/sıfırla>\` | \`<@rol/id>\`
${muteRol_scott} | \`.kurulum mute_rol\` | \`<ekle/sıfırla>\` | \`<@rol/id>\`
${banSorumlusu_scott} | \`.kurulum bansorumlusu\` | \`<ekle/sıfırla>\` | \`<#kanal/id>\` | \`<@rol/id>\`
${jailSorumlusu_scott} | \`.kurulum jailsorumlusu\` | \`<ekle/sıfırla>\` | \`<#kanal/id>\` | \`<@rol/id>\`
${muteSorumlusu_scott} | \`.kurulum mutesorumlusu\` | \`<ekle/sıfırla>\` | \`<#kanal/id>\` | \`<@rol/id>\`
\`.kurulum prefix\` | \`<yeniPrefix/sıfırla>\`

**[Yardım için sunucumuza katılabilirsiniz!](https://discord.gg/qKznSfr)**
      `)
      //.setThumbnail(message.guild.iconURL)
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
    return message.channel.send(sunucubilgi)//.then(m => {m.delete(10000)})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kurulumyardım'],
    permLevel: 0
};

exports.help = {
    name: 'kurulum-yardım',
    category: 'kurulum-yardım',
    description: 'Kurulum kodlarını gösterir.',
};