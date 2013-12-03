var irc = require("irc");
var bot = new irc.Client("irc.afternet.org", "Cassandra", {channels:["#GamedevTeam","#ScratchTheCat","#AHN"]});
bot.addListener("join", function(channel, who) {
    bot.notice(channel, who.toUpperCase() + " ARRIVES IN A BLAZE OF GLORY");
});
bot.addListener("message", function(from, to, message) {
    if (message.indexOf("o/") > -1) {
        bot.message(to, "\o");
    }
    if (message.indexOf("\\o") > -1) {
        bot.message(to, "o/");
    }
    if (message.indexOf("!Bosozoku") > -1) {
        bot.whois(nick, function(info) {
            if (info.host.indexOf("michcioperz.Users.Afternet.Org") > -1) {
                bot.disconnect();
                process.exit();
            }
        });
    }
});