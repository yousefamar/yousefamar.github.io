---
layout: post
title: 'Ludum Dare 27: "10 Seconds" Entry'
date: '2013-08-26 16:50:39'
---

Last weekend I submitted my new game, <a title="Out of Breath" href="http://www.ludumdare.com/compo/ludum-dare-27/?action=preview&amp;uid=21239" target="_blank">Out of Breath</a>, for the 27th <a title="Ludum Dare" href="http://www.ludumdare.com/" target="_blank">Ludum Dare</a> competition; the first ever I've found the time to finish for Ludum Dare. Written in JavaScript from scratch with zero libraries!

Here are some screenshots:

<img class="   " alt="Out of Breath Screenshot 1" src="http://www.ludumdare.com/compo/wp-content/compo2/273708/21239-shot0.png" width="800" height="450" /></img> *Searching for the Treasure*

<!--more-->

<img class="   " alt="Out of Breath Screenshot 2" src="http://www.ludumdare.com/compo/wp-content/compo2/273708/21239-shot1.png" width="800" height="450" /> *Waiting for some Bubbles*

<img class="   " alt="Out of Breath Screenshot 3" src="http://www.ludumdare.com/compo/wp-content/compo2/273708/21239-shot2.png" width="800" height="450" /> *Chilling in a Cavern*

<img class="    " alt="Out of Breath Screenshot 4" src="http://www.ludumdare.com/compo/wp-content/compo2/273708/21239-shot3.png" width="800" height="450" /> *Skirting Stalagmites and Stalactites*

You can play the game here too if you want; just scroll down. Controls are WASD or arrow keys. The game has been tested in Chrome and FireFox, but I recommend Chrome since it seems to give me a faster frame rate.

If the game seems impossibly hard, it only means that you were very, very, VERY unlucky. Refresh the page to generate a more normal distribution of flora. Art and sound are quite lacking to say the least, but the game does have an "ending" so don't give up! I'll definitely continue working on it after the LD27.

The source code can either be viewed within your browser the standard way (it is entirely unobfuscated although not very commented) or downloaded in a zip file. It's not open source yet though so please don't steal. ;)

Enjoy!

<script type="text/javascript">
function removeCanvasMargin() {
	var gameFrame = document.getElementById('gameFrame');
	var canvas = (gameFrame.contentDocument || gameFrame.contentWindow.document).getElementById('canvas').style.marginTop = 0;
}
</script>
<center><iframe id="gameFrame" src="https://amar.io/outofbreath" height="450" width="800" onload="removeCanvasMargin()"></iframe></center>
