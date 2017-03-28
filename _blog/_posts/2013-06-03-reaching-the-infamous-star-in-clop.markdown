---
layout: post
title: Reaching the Infamous Star in CLOP
date: '2013-06-03 23:30:00'
---

In <a title="CLOP" href="http://www.foddy.net/CLOP.html" target="_blank">CLOP</a>, you play a perambulatory challenged unicorn attempting to reach a virgin on the far side of a hill. Sound simple? What if I told you that CLOP was made by the same person who made <a title="GIRP" href="http://www.foddy.net/GIRP.html" target="_blank">GIRP</a> and <a title="QWOP" href="http://www.foddy.net/Athletics.html" target="_blank">QWOP</a>. Yeah, <em>that</em> QWOP.
<div align="center"><img alt="image" src="http://media.tumblr.com/25612e330d15e0df7abd696874e3976a/tumblr_inline_mntty4wjIq1qz4rgp.png" /></div>
Well, although CLOP may seem easier at first, the learning curve only gets steeper as the game progresses. Even after trying what must have been hundreds of times by now, I still can’t get past the giant cliff about 3/4 of the way to the virgin.

However, just like QWOP, it <em>is</em> possible. Furthermore there seems to be this spinning star near the start just above the viewport. If you get the jump just right in the right spot you can just about see it.
<div align="center"><img alt="image" src="http://media.tumblr.com/2d72f7a109c97e10f2b8fe8b93def1bd/tumblr_inline_mnub98BqfF1qz4rgp.png" /></div>
It doesn’t take many tries to realise how utterly impossible it is to reach it. The internet doesn’t seem to know what it is and it doesn’t look like anybody has ever reached it (prove me wrong). I <strong>must</strong> find out what it does.<!--more-->

<!-- more -->

Judging by the few YouTube play-throughs that there are, towards the end of the actual game it becomes a matter of luck no matter how good you are at timing the patterns (the ones I find work for me are HJ-KL, H-JK-H-KL, and HJ*-K/L by the way). Even though I already know how the game ends, I figure one day I’ll play it through since I know it’s possible.

Difficult games like these have a certain quality to them; they can easily turn into obsessions for certain players, like the “Nintendo-hard” games of old. When a goal is virtually impossible though, like the reaching the star, some people chose to give up. Others chose to hack the game. Guess which category I fall into.

A quick “Inspect Element” will reveal that the SWF file is located at http://www.foddy.net/CLOP.swf, so download and decompile that (I use <a title="JPEXS" href="http://www.free-decompiler.com/" target="_blank">JPEXS</a>) and we have our source code.

Sure enough, everything we need is plain as day and not obfuscated. You can even read the entire list of Sherrod’s taunts in “PlayState” (one giant switch statement).
<div align="center"><img alt="image" src="http://media.tumblr.com/b4dae3540724fb8ecea73909f53c701c/tumblr_inline_mntwonacjD1qz4rgp.png" /></div>
<span>The next step is to find the code responsible for the infamous star. I can immediately see a class called “Star” that loads the star sprite and plays the spinning animation and since the rest of the code is not obfuscated, all you need to do is search for where a “Star” is initialised.</span>

Instead of cheating and bringing the star down rendering the goal far too easy, why not do something else that will step the goal down from impossible to “Nintendo-hard”? Hmm, let’s see…
<pre class="prettyprint">private var _gravity:Number = 270;</pre>
Muahahaha! Let’s crank that down to 10 aaand yup, CLOP should now be able to fly. Time to try it out! But wait, what’s this?
<div align="center"><img alt="image" src="http://media.tumblr.com/6d743e1b320ad65f03c1a3e09d88c6b7/tumblr_inline_mnu9m5hofJ1qz4rgp.png" /></div>
A quick search for “permission” yielded only one result in “FlxPreloader” (probably a feature of Flixel) and the if statement was quickly put out of commission.

And presto, moon gravity mode! It’s a little hard to move now but it’s also hard to die since you complete a flip before you can hit the ground.
<div align="center"><img alt="image" src="http://media.tumblr.com/f18c5ddf2e9b166be8197e57e388a289/tumblr_inline_mnua0pQKS91qz4rgp.png" /></div>
If you want to play around with low gravity CLOP, drop me a line. I’d host it here but Bennett Foddy might not be too pleased about that.

After flying around a bit it’s finally time to reach for the star. Does touching it grant us supernatural powers of dexterity beyond the wildest dreams of a unicorn? Does it teleport us to a world of rainbows and magic? Does it finally shut that SOB Sherrod up? Well, we’re about to find out. Then we’ll finally know if it is truly an easter egg that requires skills that transcend gaming and enter the realm of hacking to reach, or simply an artifact; an echo of an orphaned game feature that never quite made the cut. Here it is, the moment we’ve all been waiting for:
<div align="center"><img alt="image" src="http://media.tumblr.com/93154e29eb0305b4bef05a12ab336e35/tumblr_inline_mnuahlSz4x1qz4rgp.gif" /></div>
Well that was anti-climactic…