---
layout: post
title: Hacking PlaySnake.org
---

Yet another random flash game with a high-score list without any security. This time it's as simple as whipping out DevTools, losing the game, and copying the score POST request as a cURL command from the network tab. The "game" argument can be `snake1`, `snake2`, or `snake3` depending on the list (slug, worm, or python respectively), and "score" and "name" are score and name obviously. The name seems to be sanitized properly server-side as far as I can tell, so no funny business dropping the whole list from the database, or hijacking the website with HTML entities etc, and it is flash after all.

This time I left a link to amar.io — I wonder how that might affect unique visitor count?

![Image of hacked slug high-score list]({{ site.baseurl }}/assets/images/snake-highscore-slug.png)

Looks like a game dev at reacentration.com might have had the same idea!

![Image of hacked python high-score list]({{ site.baseurl }}/assets/images/snake-highscore-python.png)
