const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}`)  return message.channel.send(`Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısınız.`); 

let acik = client.emojis.get("718556931241017425")
let kapali = client.emojis.get("718556889218023433")
  
  let sayacSayı = db.fetch(`${message.guild.id}_sayacsayı`)
  let sayacKanal = db.fetch(`${message.guild.id}_sayackanal`)
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
  
  let sayac_scott = ""
  if (!sayacSayı) {
  if (sayacSayı  === null || sayacSayı === undefined || sayacSayı === NaN)
  sayac_scott = `${kapali} **Sayaç:** Ayarlanmamış`
  } else {
  sayac_scott = `${acik} **Sayaç:** ${sayacSayı}`
  }

  let sayacKanal_scott = ""
  if (!sayacKanal) {
  if (sayacKanal  === null || sayacKanal === undefined || sayacKanal === NaN)
  sayacKanal_scott = `**Log Kanalı:** Ayarlanmamış`
  } else {
    sayacKanal_scott = `**Log Kanalı:** <#${sayacKanal}>`
  }
  
  let kayıtsızrol_scott = ""
  if (!kayıtsızrol) {
  if (kayıtsızrol  === null || kayıtsızrol === undefined || kayıtsızrol === NaN)
  kayıtsızrol_scott = `${kapali} **Kayıtsız Rolü:** Ayarlanmamış`
  } else {
  kayıtsızrol_scott = `${acik} **Kayıtsız Rolü:** <@&${kayıtsızrol}>`
  }
  
  let modrol_scott = ""
  if (!modrol) {
  if (modrol  === null || modrol === undefined || modrol === NaN)
  modrol_scott = `${kapali} **Moderasyon Rolü:** Ayarlanmamış`
  } else {
  modrol_scott = `${acik} **Moderasyon Rolü:** <@&${modrol}>`
  }
  
  let otorol_scott = ""
  if (!otorol) {
  if (otorol  === null || otorol === undefined || otorol === NaN)
  otorol_scott = `${kapali} **Oto Rol:** Ayarlanmamış`
  } else {
  otorol_scott = `${acik} **Oto Rol:** <@&${otorol}>`
  }

  let logkanal_scott = ""
  if (!logkanal) {
  if (logkanal  === null || logkanal === undefined || logkanal === NaN)
  logkanal_scott = `${kapali} **Log Kanalı:** Ayarlanmamış`
  } else {
  logkanal_scott = `${acik} **Log Kanalı:** <#${logkanal}>`
  }
  
  let otorolKanal_scott = ""
  if (!otorolKanal) {
  if (otorolKanal  === null || otorolKanal === undefined || otorolKanal === NaN)
  otorolKanal_scott = `**Log Kanalı:** Ayarlanmamış`
  } else {
  otorolKanal_scott = `**Log Kanalı:** <#${otorolKanal}>`
  }
  
  let küfürFiltre_scott = ""
  if (!küfürFiltre) {
  if (küfürFiltre  === null || küfürFiltre === undefined || küfürFiltre === NaN)
  küfürFiltre_scott = `${kapali} **Küfür Koruması:** Bu Kanalda Kapalı`
  } else {
  küfürFiltre_scott = `${acik} **Küfür Koruması:** Bu Kanalda Açık`
  }
  
  let reklamFiltre_scott = ""
  if (!reklamFiltre) {
  if (reklamFiltre  === null || reklamFiltre === undefined || reklamFiltre === NaN)
  reklamFiltre_scott = `${kapali} **Reklam Koruması:** Bu Kanalda Kapalı`
  } else {
  reklamFiltre_scott = `${acik} **Reklam Koruması:** Bu Kanalda Açık`
  }
  
  let jailRol_scott = ""
  if (!jailRol) {
  if (jailRol  === null || jailRol === undefined || jailRol === NaN)
  jailRol_scott = `${kapali} **Jail Rol:** Ayarlanmamış`
  } else {
  jailRol_scott = `${acik} **Jail Rol:** <@&${jailRol}>`
  }
  
  let muteRol_scott = ""
  if (!muteRol) {
  if (muteRol  === null || muteRol === undefined || muteRol === NaN)
  muteRol_scott = `${kapali} **Susturma Rol:** Ayarlanmamış`
  } else {
  muteRol_scott = `${acik} **Susturma Rol:** <@&${muteRol}>`
  }
  
  let ultraSohbetTemizleyici_scott = ""
  if (!ultraSohbetTemizleyici) {
  if (ultraSohbetTemizleyici  === null || ultraSohbetTemizleyici === undefined || ultraSohbetTemizleyici === NaN)
  ultraSohbetTemizleyici_scott = `${kapali} **Ultra Sohbet Temizleyici:** Bu Kanalda Kapalı`
  } else {
  ultraSohbetTemizleyici_scott = `${acik} **Ultra Sohbet Temizleyici:** Bu Kanalda Açık`
  }
  
  let banSorumlusu_scott = ""
  if (!banSorumlusu) {
  if (banSorumlusu  === null || banSorumlusu === undefined || banSorumlusu === NaN)
  banSorumlusu_scott = `${kapali} **Ban Sorumlusu:** Ayarlanmamış`
  } else {
  banSorumlusu_scott = `${acik} **Ban Sorumlusu:** <@&${banSorumlusu}>`
  }
  
  let banKanal_scott = ""
  if (!banKanal) {
  if (banKanal  === null || banKanal === undefined || banKanal === NaN)
  banKanal_scott = `**Log Kanalı:** Ayarlanmamış`
  } else {
  banKanal_scott = `**Log Kanalı:** <#${banKanal}>`
  }
  
  let jailSorumlusu_scott = ""
  if (!jailSorumlusu) {
  if (jailSorumlusu  === null || jailSorumlusu === undefined || jailSorumlusu === NaN)
  jailSorumlusu_scott = `${kapali} **Jail Sorumlusu:** Ayarlanmamış`
  } else {
  jailSorumlusu_scott = `${acik} **Jail Sorumlusu:** <@&${jailSorumlusu}>`
  }
  
  let jailKanal_scott = ""
  if (!jailKanal) {
  if (jailKanal  === null || jailKanal === undefined || jailKanal === NaN)
  jailKanal_scott = `**Log Kanalı:** Ayarlanmamış`
  } else {
  jailKanal_scott = `**Log Kanalı:** <#${jailKanal}>`
  }
  
  let muteSorumlusu_scott = ""
  if (!muteSorumlusu) {
  if (muteSorumlusu  === null || muteSorumlusu === undefined || muteSorumlusu === NaN)
  muteSorumlusu_scott = `${kapali} **Mute Sorumlusu:** Ayarlanmamış`
  } else {
  muteSorumlusu_scott = `${acik} **Mute Sorumlusu:** <@&${muteSorumlusu}>`
  }
  
  let muteKanal_scott = ""
  if (!muteKanal) {
  if (muteKanal  === null || muteKanal === undefined || muteKanal === NaN)
  muteKanal_scott = `**Log Kanalı:** Ayarlanmamış`
  } else {
  muteKanal_scott = `**Log Kanalı:** <#${muteKanal}>`
  }
  
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`
**Sunucu Ayarları:**
${sayac_scott} | ${sayacKanal_scott}
${küfürFiltre_scott}
${reklamFiltre_scott}
${ultraSohbetTemizleyici_scott}
${logkanal_scott}
${otorol_scott} | ${otorolKanal_scott}

**Rol Ayarları:**
${modrol_scott}
${jailRol_scott}
${muteRol_scott}
${kayıtsızrol_scott}
${banSorumlusu_scott} | ${banKanal_scott}
${jailSorumlusu_scott} | ${jailKanal_scott}
${muteSorumlusu_scott} | ${muteKanal_scott}
`)
  message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "0"
  };
  
  exports.help = {
    name: 'durum',
    description: 'Botun durum gösterir.',
    usage: '.durum'
  };