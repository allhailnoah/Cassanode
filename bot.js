var irc = require("irc");
var bot = new irc.Client("irc.afternet.org", "Cassandra", {channels:["#GamedevTeam","#ScratchTheCat","#AHN"],userName:'Cassandra',realName:'Cassandra of New Noah City',port: 9998, secure: true, floodProtection: true});
bot.addListener("join", function(channel, who) {
    bot.notice(channel, who.toUpperCase() + " ARRIVES IN A BLAZE OF GLORY");
});
bot.addListener("message", function(from, to, message) {
    if (message.indexOf("o/") > -1) {
        bot.say(to, "\\o");
    }
    if (message.indexOf("\\o") > -1) {
        bot.say(to, "o/");
    }
    if (message.indexOf("Cassandra, can you hear me?") > -1) {
        bot.say(to, "Yes.");
    }
    if (message.indexOf("Are you ready to begin?") > -1) {
        bot.say(to, "Yes, I'm ready.");
    }
    if (message.indexOf("!Bosozoku") > -1) {
        bot.whois(from, function(info) {
            if (info.host.indexOf("michcioperz.Users.AfterNET.Org") > -1) {
                bot.disconnect();
                process.exit();
            }
        });
    }
    if (message.indexOf("!Dance") > -1) {
        bot.action(to, "dances");
    }
});