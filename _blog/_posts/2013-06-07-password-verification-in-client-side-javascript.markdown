---
layout: post
title: Client-side Password Verification in JavaScript
date: '2013-06-07 22:06:00'
---

Business websites often only act as an online brochure. As such, those that need some kind of password protection often don’t go too all-out in implementing it. Reasons for this could be:
<ul>
	<li><span>Skill; </span><span>checking user input client-side is much easier than server-side.</span></li>
	<li><span>Budget; why pay for a server only for checking passwords when you can just host your HTML/CSS/JS files online for much cheaper and not have to worry about any server-side scripting.</span></li>
	<li><span>Security; maybe the information you’re password protecting isn’t that critical and doesn’t need airtight security.</span></li>
</ul>
<span>The reason is most likely a combination of the latter two. However, a web developer can take just a few simple extra steps to make their website much more secure.<!--more--><!-- more --></span>
<h2><span>What NOT To Do</span></h2>
<span>Take </span><a href="http://www.zahnarzt-frankfurt.de/" target="_blank">http://www.zahnarzt-frankfurt.de/</a>, an informational website for a German association of dentists, for instance. I stumbled upon this particular specimen while searching for my own dentist’s phone number. The home page presents you with two buttons; one for patients and one for dentists. Clicking on the patients button will take you to the information that you, the patient, were looking for. Clicking on the dentists button will take you to a page with a single password field and a continue button.<span>
</span>
<div><img alt="image" src="http://media.tumblr.com/49cedc5623d61d878f5df2322e4c2101/tumblr_inline_mo1hwztwEf1qz4rgp.png" /></div>
The website itself looks semi-professional. It looks like it was made with a decent IDE but I can’t shake the suspicion that getting into this “Doctors Only section” isn’t very hard.

Time to check out the source code. Inspect Element? Nope, right-click disabled. Haha now it’s obvious this web developer had something to hide. Let’s bring out the Developer Tools the old fashioned way and inspect that form from there. What’s this?
<pre class="prettyprint">&lt;form action="javascript:loadpage();" method="post" name="passwort"&gt;</pre>
Bingo! Client-side verification. And right above it:
<pre class="prettyprint">&lt;script language="JavaScript" type="text/JavaScript"&gt;
    &lt;!--
    function loadpage() {
        if (document.passwort.pswd.value != "chirurgie"){
            document.location.href="passwort_falsch_en.html"
        } else {
            document.location.href="chirurgie/" + document.passwort.pswd.value + ".html"
        }
    }
    //--&gt;
&lt;/script&gt;</pre>
The code above has been cleaned up slightly to make it readable. You can also tell by the developer’s style that JavaScript was <em>not</em> their first language to say the least. Well, now we know their dictionary word password and can successfully infiltrate the “Dentist Only section” without being dentists! 1337 h4x0r life.
<h2>What To Do Instead</h2>
Obviously the best solution is to check everything server-side against a hashed password. <em>Hashed</em>, not encrypted; encrypted passwords can still be decrypted. The way I like to hash passwords is with a (randomly) salted SHA256 hash to have a nice balance between security and speed/complexity. That way even if somehow my servers are compromised by some insanely skilled hackers, they still can’t figure out my users’ passwords (which are all required to be complex; i.e. long, with capitals/numbers/punctuation, no dictionary words etc.) without spending a virtually infinite amount of time brute-forcing them.

On the client side however, the best we can do is hash a complex password with a strong, difficult to crack hash function like a salted SHA-3 hash (very easy in JavaScript) and hardcode it in. In fact, the hash algorithm can be as complex as we want because it’s all being run on the user’s computer and not wasting server CPU processing time. With just the hashed password, even the most skilled hacker can only attempt an educated brute-force attack. It would be easier for them to instead find the owner of the website and torture them into revealing the password.

Here’s a practical example of client-side hashing and password verification in the same function as the example website above:
<pre class="prettyprint">var salt = 'Hack THIS!';
var hashedPass = '99c0c3ea5c83f8608f488100a1f42e6478fdb2042d24dee0f1c997c75d65efad';
function loadpage() {
    if (SHA256(salt+document.passwort.pswd.value) !== hashedPass){
        document.location.href='passwort_falsch_en.html';
    } else {
        document.location.href='chirurgie/'+document.passwort.pswd.value+'.html';
    }
}</pre>
<span>JavaScript hash functions can be found in libraries such as </span><a title="CryptoJS" href="https://code.google.com/p/crypto-js/" target="_blank">CryptoJS</a><span> or just </span><a title="Webtoolkit Javascript SHA-256" href="http://www.webtoolkit.info/javascript-sha256.html" target="_blank">online</a><span>. After some minification and obfuscation, this code would make the dentist website’s password verification leagues better with very little extra effort! </span>Of course make sure that visitors and web crawlers can’t see your protected pages! For visitors, use <span>.htaccess’ “Options All -Indexes”, or “IndexIgnore</span> ./zahnaerzte/chirurgie/*<span>” in this case, and for spiders, put “</span><span>Disallow: /</span><span>zahnaerzte/chirurgie/</span><span>” in your robots.txt (and hide that from visitors too!) and so on. Obviously there’s no point in implementing a timeout on too many password attempts as it would take mere seconds to circumvent.</span>

<span>That’s all it takes to fend off script kiddies!</span>