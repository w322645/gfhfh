const Discord = require("discord.js");
const db = require("quick.db");
const disbut = require('discord-buttons');
const SlashCommandManager = require('../SlashCommandManager');
const Database = require("plasma-db");
const resim = new Database("./kis.json");

exports.run = async (client, message, args) => {

    
 var resss = resim.fetch(`görsel_${message.guild.id}`)
  
const embed = new Discord.MessageEmbed()
.setDescription('adasdad')

 // .setImage('https://media.discordapp.net/attachments/1197114859565895730/1197848711611551764/logo-no-background.png?ex=65bcc28b&is=65aa4d8b&hm=52d7a7737d46ae4803b417939e324f654d86e0c54b98a8b08d5ea68091f0b762&=&format=webp&quality=lossless&width=1440&height=480')
// .setThumbnail('https://media.discordapp.net/attachments/1197114859565895730/1197848711611551764/logo-no-background.png?ex=65bcc28b&is=65aa4d8b&hm=52d7a7737d46ae4803b417939e324f654d86e0c54b98a8b08d5ea68091f0b762&=&format=webp&quality=lossless&width=1440&height=480')
.setImage(resss)

message.channel.send(embed)
message.channel.send('# İFŞALAND SUNDU')





};





exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['d'],
  permLevel: 0
};

exports.help = {
  name: "deneme",
  description: "Örnek açıklama.",
  usage: ".örnek <kullanım>"
};
