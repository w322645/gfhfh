const Discord = require("discord.js");
const db = require("quick.db");
const data1 = new db.table('kiş');
const data2 = new db.table('kiş');

exports.run = async (client, message, args) => {

    


    var fiyat1 = data1.fetch(`fiyats1_${message.guild.id}`) || 'Fiyat Belirlenmedi'
   var fiyat2 = data1.fetch(`fiyats2_${message.guild.id}`) || 'Fiyat Belirlenmedi'
     var fiyat3 = data1.fetch(`fiyats3_${message.guild.id}`) || 'Fiyat Belirlenmedi'
     
    var indirim1 = data2.fetch(`indirims1_${message.guild.id}`) || '❌'
     var indirim2 = data2.fetch(`indirims2_${message.guild.id}`) || '❌'
    var indirim3 = data2.fetch(`indirims3_${message.guild.id}`) || '❌'

       var açıklamafiyat = db.fetch(`acıklamafiyats_${message.guild.id}`) || 'Açıklama Yok'

const embed = new Discord.MessageEmbed()
.setDescription(`Veriler Sekmesi

${fiyat1}
${fiyat2}
${fiyat3}
${indirim1}
${indirim2}
${indirim3}
${açıklamafiyat}


`)
.setTitle('DATABASE DOSYASI İÇİ')
.setColor('#36393f')


message.channel.send(embed)




};





exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "data",
  description: "Örnek açıklama.",
  usage: ".örnek <kullanım>"
};
