---
layout: post
title: An Image Scraping Challenge
date: '2015-05-11 01:29:36'
---

*Original post from 12 March 2015 restored from backup*

A little over a year ago a friend sent me a 4chan banner:

![4chan banner](https://s.4cdn.org/image/title/195.gif)

We started thinking about whether or not these are randomised when we realised that they're all just static links to images with URLs that start with `https://s.4cdn.org/image/title/` and file names that range from `0.png` to `260.png` and from `0.gif` to `251.gif`.

So we challenged each other to write a scraper that would download all of these banners knowing it would be a matter of minutes. I decided to write the script in Python and he decided to write it in JavaScript with Node.js. We also agreed to have one second intervals between image downloads so we don't don't annoy moot (though I'm pretty sure we wouldn't have even made a blip in requests),

To make a long story short, Python is much better suited for this kind of job. With I/O in Node you're in callback hell or waste time on async control flow.

I was hardly aiming for tiny code but here is all you need:

    import urllib
    import time
    import os
    
    if not os.path.exists("imgs"):
        os.makedirs("imgs")

    for i in xrange(1,260):
        urllib.urlretrieve("http://s.4cdn.org/image/title/"+str(i)+".png", "imgs/"+str(i)+".png")
        time.sleep(1)

    for i in xrange(1,251):
        urllib.urlretrieve("http://s.4cdn.org/image/title/"+str(i)+".gif", "imgs/"+str(i)+".gif")
        time.sleep(1)