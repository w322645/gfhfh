  


const Discord = require("discord.js");
const db = require("quick.db");
const Database = require("plasma-db");
const resim = new Database("./kis.json");

exports.run = async (client, message, args) => {
 

    let görsel = args[0];
   let link = args[1];
    let baslik = args.slice(2).join(" ");


   message.react('1202000380192641034');
db.add(`ekletr_${message.guild.id}`,1)
  resim.set(`görsel_${message.guild.id}`,görsel)
     db.set(`kanalw_${message.guild.id}`,'Türk İfşası')
     if(!baslik) return message.channel.send(new Discord.MessageEmbed().setDescription('Başlık Eksik'))
     if(!link) return message.channel.send(new Discord.MessageEmbed().setDescription('Link Eksik'))
     if(!görsel) return message.channel.send(new Discord.MessageEmbed().setDescription('Görsel Eksik'))
  
       const channel = client.channels.cache.find(x => x.id == '1200873926323089480')

  
  var mesaj = `
# -------------------------------
# <:1095roleiconsupportteam:1202000295438340146>  ***${baslik}***

## <a:image05:1202743151979134998> (${link})


### <:8319folder:1202718404126056528>${görsel}
  
<@&1205955106932260904>
  
  `
  
channel.send(mesaj)

message.channel.send(new Discord.MessageEmbed().setThumbnail('https://telegramgrupbul.com/gorsel/gruplar/22941photo_2020-03-25_13-18-32.jpg').setDescription('MESAJ GÖNDERİLDİ <#1200873926323089480> :green_square:'))

  
  
  
  
  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sharetr'],
  permLevel: 3
};

exports.help = {
  name: 'str',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};

