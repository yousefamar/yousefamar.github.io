---
layout: post
title: Hacking HTML5 Xonix
---

Time for yet another casual hack of a little browser game that hasn't been secured. A game called "Xonix" was released for DOS in 1984. It involved incrementally tracing areas on a grid while avoiding moving dots, and when an area is outlined, it would be filled in automatically. As the levels increased in difficulty, the goal was to get a certain percentage of the grid filled in without running out of lives. Some of you might be familiar with this style of game — this may in fact be the first of it's kind!

Anyway, there have been subsequent ports and clones of this game, and in 2012 two guys ported Xonix to HTML5 such that [it can be played in a browser](http://html5xonix.appspot.com/). It's pretty fun, but as usual I want to take the easy way out, so out come the dev tools!

Unlike the previous game, the developers were a bit more efficient, in that they don't bother sending a score if it's you haven't defeated the top 15 on the high-score list. The only request made on losing is one to get the top N players. I wasn't about to actually try and win, so I set an XHR breakpoint for any requests, to see where this one fires.

After some snooping around where it does fire, I found the check it does before submitting the score. The devs had everything nice and wrapped up in a little function I can call from the console:

    LeaderBoard.set("amar.io", 44488, Game.LEADERBOARD, function(){});

And, voilà, top of the leaderboard!

![Image of hacked Xonix high-score list]({{ site.baseurl }}/assets/images/xonix-highscore.png)

Poor Daniel Shapira, assuming he got those scores fairly, must be raging pretty hard right about now. Sorry Daniel!

## Bonus round! ##

While probing around a little more, I tried changing the parameter for the number of entries when retrieving the high-score list. When I set it to a huge number, it spits back a nasty stack trace (turns out they're using Google App Engine with Python in the back end) and crashed the server. I felt pretty bad, but fortunately after a very short period of time it was back up. That's the extent of the issue though, since when fingerprinting MySQL, the server returns:

	Traceback (most recent call last):
		File &quot;/base/data/home/runtimes/python/python_lib/versions/1/google/appengine/ext/webapp/_webapp25.py&quot;, line 715, in __call__
			handler.get(*groups)
		File &quot;/base/data/home/apps/s~html5xonix/1.357745203681401670/leaderboard.py&quot;, line 17, in get
			count = int(cgi.escape(self.request.get('count')))
	ValueError: invalid literal for int() with base 10: '1 /*! and 1=0 */'

You can actually see the line of python that they use to get the "count" parameter and escape it, then convert it to an integer. The same thing happens with submitting a name to the list; it escapes all HTML entities and doesn't seem vulnerable to injections. They're most likely not even using SQL since it returns JSON documents.

Good on ya, devs!
