  


const Discord = require("discord.js");
const db = require("quick.db");
const Database = require("plasma-db");
const resim = new Database("./resim.json");

exports.run = async (client, message, args) => {
 
  
         let attachments = [];
    if (message.attachments) message.attachments.forEach(attachment => {
      attachments.push(`[${attachment.name}](${attachment.url})`);
       resim.set(`görsel_${message.guild.id}`,attachment.url)
    })

    let görsel = attachments 
   let link = args[0];
   // let açıklama = args[2];
   let açıklama = args.slice(1).join(' ')

db.add(`eklelise_${message.guild.id}`,1)
  // resim.set(`görsel_${message.guild.id}`,görsel)
     db.set(`kanalw_${message.guild.id}`,'Liseli İfşası')
  
  message.react('1202000380192641034');
     if(!açıklama) return message.channel.send(new Discord.MessageEmbed().setDescription('Başlık Eksik'))
     if(!link) return message.channel.send(new Discord.MessageEmbed().setDescription('Link Eksik'))
     if(!görsel) return message.channel.send(new Discord.MessageEmbed().setDescription('Görsel Eksik'))
  
       const channel = client.channels.cache.find(x => x.id == '1200181240431640646')
     
  

  
  var mesaj = `
# -------------------------------
# <:1095roleiconsupportteam:1202000295438340146>  ***${açıklama}*** 

## <a:image05:1202743151979134998> (${link})

### <:8319folder:1202718404126056528>${görsel}
  
<@&1205955106932260904>
  
  
  `

  

  
channel.send(mesaj)

  
  message.channel.send(new Discord.MessageEmbed().setThumbnail('https://telegramgrupbul.com/gorsel/gruplar/22941photo_2020-03-25_13-18-32.jpg').setDescription('MESAJ GÖNDERİLDİ <#1200181240431640646> :green_square:'));
  
  
  
  
  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['slg'],
  permLevel: 4
};

exports.help = {
  name: 'testsss',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};

