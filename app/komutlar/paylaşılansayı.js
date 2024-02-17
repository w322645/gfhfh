const Discord = require("discord.js");
const db = require("quick.db");
const disbut = require('discord-buttons');
exports.run = async (client, message, args) => {

    


    var ensest = db.fetch(`ekleen_${message.guild.id}`) || 'yok'
   var lise = db.fetch(`eklelise_${message.guild.id}`) || 'yok'
     var tr = db.fetch(`ekletr_${message.guild.id}`) || 'yok'


       

const embed = new Discord.MessageEmbed()
.addField('Paylaşılan Türk İfş@',`${tr}`,true)
.addField('Paylaşılan Türk Lise İfş@',`${lise}`,true)
.addField('Paylaşılan Türk Ensest İfş@',`${ensest}`,true)
.setThumbnail('https://telegramgrupbul.com/gorsel/gruplar/22941photo_2020-03-25_13-18-32.jpg')

message.channel.send(embed)
message.channel.send('# İFŞALAND SUNDU')





};





exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bbbb",
  description: "Örnek açıklama.",
  usage: ".örnek <kullanım>"
};
