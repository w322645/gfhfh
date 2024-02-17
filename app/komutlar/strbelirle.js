const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const db = require('quick.db');
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;








exports.run = async (client, message, args) => {

    let type = args.slice(0).join(' ');
  if(!type) return message.channel.send('Yarram id nerde')
  
  db.get(`str_${message.guild.id}`,`${type}`)

    
    message.channel.send(`Str Belirlendi ${type}`)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'strbelirle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};