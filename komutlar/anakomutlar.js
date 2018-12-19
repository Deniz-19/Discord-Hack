const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Botun Ana Komutları**", ` d.yardım = BOT Komutlarını Atar. \nd.botbilgi = BOT Kendisi Hakkında Bilgi Verir. \nd.ping = BOT Gecikme Süresini Söyler. \nd.davet = BOT Davet Linkini Atar. \nd.istatistik = BOT İstatistiklerini Gösterir. \nd.yapımcım = Botun Yapımcısını Gösterir. \nd.desteksunucusu = Botun destek sunucusunun davet linkini gönderir. `)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komut', 'ana', 'anakomut', 'komutana'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: '.',
  usage: 'anakomutlar'
};


