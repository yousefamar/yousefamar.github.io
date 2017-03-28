---
layout: post
title: Hacking Every Second Counts
date: '2013-06-16 16:22:00'
---

Once again I needed a break from hardcore coding and decided to play some online games. As I was surfing around I came across <a title="EverySecond" href="http://www.zefrank.com/everysecond/index.html" target="_blank">this game</a> on zefrank.com, a website as old as the internet itself. A simple game that tests the accuracy of your internal clock with no end. The only incentive is beating the people on the highscore list. The player with the highest score gets to leave a little message for the world to see.
<div><img class="aligncenter" alt="image" src="http://media.tumblr.com/9697cdbf0ea95135a4b2bdd6bc172606/tumblr_inline_mohogrvnYx1qz4rgp.png" /></div>
The game is not at all easy even if you use some kind of timer and it’s pretty safe to assume that #1 is there to stay. Or is he?<!--more--><!-- more -->

I’ve decided to hack this. I’m still not sure if it will work (I’m literally typing this at the same time as said hacking) but I have high hopes since it’s unlikely there’s going to be a lot of security layers in my way. I wouldn’t even really call it “hacking”. Ze, if you’re reading this, I’m sorry ahead of time and if I do end up on the highscore list, feel free to remove me from your database.

Changing the score with the usual memory scanner/hex editor treatment looks like a no-go alone due to the nature of the game. Right, so let decompile the code and look for anything immediately noticeable. Ah a url:

http://www.zefrank.com/everysecond/getdata.php?tablename=everysecond&amp;cache=“+random(999),”_root.highscore”

Looks like it queries some database for data via PHP. Plug in a random number up to 999 and you get this:

<span>&amp;name0=Sorry Sean..&amp;score0=136.2&amp;extra0=How the mighty have fallen! ~Matt&amp;name1=BIG SEAN&amp;score1=135&amp;extra1=VICTORY IS MINE- I LEAVE BEHIND ME A PATH OF DESTRUCTION, A LEGACY OF TRIUMPH. KNEEL BEFORE MY AWESOME POWER AND TYRANNY; THIS CONQUEST OF THE SCIENCES SHALL FOREVER BE REMEMBERED IN AWE AND FEAR. KNEEL!!&amp;name2=JoJoBloMo&amp;score2=125.2&amp;extra2=I am internet famous! This is a story all about how my life got flipped, turned upside down… Go to flash.landrycoolers.com to learn how to get these high scores.&amp;name3=Logger067&amp;score3=104.4&amp;extra3=Ha-ha! Losers!&amp;name4=Ralle&amp;score4=100&amp;extra4=Hahahaha!</span>

Nice! Looks like we can read the messages for all the runner-ups too. You don’t even need the “cache” variable. Let’s clean that up a bit:

<span>Sorry Sean.. - 136.2
</span><span>How the mighty have fallen! ~Matt</span>

<span>BIG SEAN - 135
</span><span>VICTORY IS MINE- I LEAVE BEHIND ME A PATH OF DESTRUCTION, A LEGACY OF TRIUMPH. KNEEL BEFORE MY AWESOME POWER AND TYRANNY; THIS CONQUEST OF THE SCIENCES SHALL FOREVER BE REMEMBERED IN AWE AND FEAR. KNEEL!!</span>

<span>JoJoBloMo - 125.2
</span><span>I am internet famous! This is a story all about how my life got flipped, turned upside down… Go to flash.landrycoolers.com to learn how to get these high scores.</span>

<span>Logger067 - 104.4
</span><span>Ha-ha! Losers!</span>

<span>Ralle - </span><span>100
</span><span>Hahahaha!</span>

So far so good! It looked like JoJoBloMo may have gotten there before me but their website seems to be dead and has nothing relevant on it on <a title="WayBack Machine" href="http://archive.org/web/web.php" target="_blank">WayBack Machine</a>. Chances are some of them got those scores unfairly too though. To get a score of 100 you would have to play perfectly for 16.83 minutes (0.2 * n*(n+1)/2) and to beat “Matt” you need to do the same for at least 31.14 mins. Ain’t nobody got time fo’ that!

So let’s see what else we can find…
<pre class="prettyprint">if(!(_root.level&lt;hiscore))
{
   submit.userscore=_root.level;
   win_message="Cogratulations! You have the top score. Enter your name below, as well as you victory message and press submit.";
}
else
{
   win_message="Cogratulations! You have a high score. Enter your name below and press submit.";
   submit.userscore=_root.level;
   submit.usermessage="You need the top score to post a message!";
}
update();
stop();</pre>
And Jackpot!
<pre class="prettyprint">if(userscore&gt;_root.lowestscore&amp;&amp;sent&lt;1)
{
   sent=1;
   output="please wait : sending score";
   lowscore=_root.lowestscore;
   loadVariables("http://www.zefrank.com/everysecond/insertdelete.php?tablename=everysecond&amp;cache="+random(9999),this);
}</pre>
Huehuehuehue…

Well, I don’t feel like trying to figure out what the correct GET variables are and I don’t want to screw it up so instead I’ll just set the starting level to 1337 (literally just a single assignment) and lose the game immediately. It would take 49.69 perfect, non-stop hours to get that score fairly. Advertising my blog in the message may be a bit tactless so instead I’ll just let whoever sees it google my name for more info.
<div><img class="aligncenter" alt="image" src="http://media.tumblr.com/95076a9d7cb16a34893da1ab460354cf/tumblr_inline_mohugrhaM81qz4rgp.png" /></div>
And happy trails to you too!