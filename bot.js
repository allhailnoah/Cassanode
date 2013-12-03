var irc = require("irc");
var bot = new irc.Client("irc.afternet.org", "Cassandra", {channels:["#GamedevTeam","#ScratchTheCat","#AHN"]});
bot.addListener("join", function(channel, who) {
    bot.notice(channel, who.toUpperCase() + " ARRIVES IN A BLAZE OF GLORY");
});
bot.addListener("message", function(nick, to, text, message) {
    if (message.search("o/") != -1) {
        bot.message(to, "\o");
    }
    if (message.search("\o") != -1) {
        bot.message(to, "o/");
    }
    if (message.search("!Bosozoku") != -1) {
        bot.whois(nick, function(info) {
            if (info.host.search("michcioperz.Users.Afternet.Org") != -1) {
                bot.disconnect();
                process.exit();
            }
        });
    }
});