var log4js = require("log4js");
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/log.log'), 'Cassandra');
var logger = log4js.getLogger('Cassandra');
logger.setLevel('INFO');
var git = require('gift');
var repo = git "logs"
# => #<Repo>
var irc = require("irc");
var bot = new irc.Client("irc.afternet.org", "Cassandra", {channels:["#GamedevTeam","#ScratchTheCat","#AHN"],userName:'Cassandra',realName:'Cassandra of New Noah City', floodProtection: true});
bot.addListener("join", function(channel, who) {
    logger.info(who.toUpperCase() + " ARRIVES IN A BLAZE OF GLORY");
    bot.notice(channel, who.toUpperCase() + " ARRIVES IN A BLAZE OF GLORY");
});
bot.addListener("part", function(channel, who, reason, message) {
    logger.info(who.toUpperCase() + " WALKS OUT IN A BLAZE OF GLORY");
    bot.notice(channel, who.toUpperCase() + " WALKS OUT IN A BLAZE OF GLORY");
});
bot.addListener("notice", function(nick, to, text, message) {
    logger.info(nick + "|" + to + ": " + text);
});
bot.addListener("nick", function(from, to, chans, message) {
    logger.info(from + " is now known as " + to);
});
bot.addListener("quit", function(nick, reason, channels, message) {
    logger.info(who.toUpperCase() + " LEAVES IN A BLAZE OF GLORY");
    channels.forEach(function(channel) { bot.notice(channel, who.toUpperCase() + " LEAVES IN A BLAZE OF GLORY"); });
});
bot.addListener("message", function(from, to, message) {
    logger.info(from + ": " + message);
    if (message.indexOf("o/") > -1) {
        bot.say(to, "\\o");
	logger.info("Cassandra: " + "\\o");
    }
    if (message.indexOf("\\o") > -1) {
        bot.say(to, "o/");
	logger.info("Cassandra: " + "o/");
    }
    if (message.indexOf("Cassandra, can you hear me?") > -1) {
        bot.say(to, "Yes.");
	logger.info("Cassandra: " + "Yes.");
    }
    if (message.indexOf("Are you ready to begin?") > -1) {
        bot.say(to, "Yes, I'm ready.");
	logger.info("Cassandra: " + "Yes, I'm ready.");
    }
    if (message.indexOf("!Bosozoku") > -1) {
        bot.whois(from, function(info) {
            if (info.host.indexOf("michcioperz.Users.AfterNET.Org") > -1) {
		bot.notice(channel, "CASSANDRA SAYS CYA <3");
                bot.disconnect("Cya", function(){process.exit();});
            }
        });
    }
    if (message.indexOf("!SendLogs") > -1) {
        repo.commit("Log update", {all = true});
        repo.sync();
    }
    if (message.indexOf("!Dance") > -1) {
	logger.info("Cassandra dances");
        bot.action(to, "dances");
    }
});
