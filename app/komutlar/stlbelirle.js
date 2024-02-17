const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const db = require('quick.db');
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;







exports.run = async (client, message, args) => {

    let type = args.slice(0).join(' ');
  if(!type) return message.channel.send('Yarram id nerde')
  
 db.get(`stl_${message.guild.id}`,type)

    
    message.channel.send(`Stl Belirlendi ${type}`)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'stlbelirle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};