const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const db = require('quick.db');
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const data1 = new db.table('database');
const data2 = new db.table('database2');
const Canvas = require('canvas');






module.exports = async (interaction, client, message, args) => {
  
client.on("ready", () => {
  client.api.applications(client.user.id).commands.post({data: {
      name: 'baba',
      description: 'baba!'
  }})
});
client.api.applications(client.user.id).commands.post({data: {
      name: 'baba',
      description: 'baba!'
  }})
  client.ws.on('INTERACTION_CREATE', async  interaction => {
  const command = interaction.data.name.toLowerCase();
 const embed = new Discord.MessageEmbed()


.addField('.str',`Türk İfş@ Kanalına İfşa Atar .str (görüntü-link) (trlink) (açıklama)`,true)
.addField('.stl',`Türk Lise İfş@ Kanalına İfşa Atar .str (görüntü-link) (trlink) (açıklama)`,true)
.addField('.slg',`Türk Lise İfş@ Kanalına İfşa Atar .str direk dosya (trlink) (açıklama)`,true)
.addField('.sten',`Türk Ensest İfş@ Kanalına İfşa Atar .str (görüntü-link) (trlink) (açıklama)`,true)
.addField('.paylaşılan',`Paylaşılan İfş@lar`,true)
.addField('.gizle',`Yazılan Kanalı Üyelere Gizler`,true)
.addField('.aç',`Yazılan Kanalı Üyelere Açar`,true)
.addField('.yaz',`Bota Yazdırısınız`,true)
 // .setImage('https://media.discordapp.net/attachments/1197114859565895730/1197848711611551764/logo-no-background.png?ex=65bcc28b&is=65aa4d8b&hm=52d7a7737d46ae4803b417939e324f654d86e0c54b98a8b08d5ea68091f0b762&=&format=webp&quality=lossless&width=1440&height=480')
// .setThumbnail('https://media.discordapp.net/attachments/1197114859565895730/1197848711611551764/logo-no-background.png?ex=65bcc28b&is=65aa4d8b&hm=52d7a7737d46ae4803b417939e324f654d86e0c54b98a8b08d5ea68091f0b762&=&format=webp&quality=lossless&width=1440&height=480')
.setThumbnail('https://telegramgrupbul.com/gorsel/gruplar/22941photo_2020-03-25_13-18-32.jpg')


  if (command == 'baba'){
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          embeds: [ embed ]
        }
      }
    }).catch(console.error);
  }
});
  
};

  
  


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['res'],
  permLevel: 2
};

module.exports.help = {
  name: 'ww',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};