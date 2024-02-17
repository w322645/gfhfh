const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db');
const os = require('os');

var prefix = ayarlar.prefix;

module.exports = client => {

  
  
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");

 console.log(`Bot Aktif :) `);
 client.user.setActivity("İFŞALAND 💜 ", {
 type: "STREAMING",
 url: "https://www.twitch.tv/ifsaland"});
 
  // client.user.setActivity("İFŞA LAND", { type: "STREAMING" }); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  // console.log(
  //   `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Oyun ismi ayarlandı!`
  // );

};
