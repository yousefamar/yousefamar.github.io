---
layout: post
title: Universal Resource Loading in Java
date: '2012-10-09 17:33:00'
---

Loading images and files in Java is relatively simple. Maybe not through one-liners like in Python, but the trade-off is flexibility. There are a number of ways to load resources within a Java program. On searching the internet, you’ll probably find something like this.
<pre class="prettyprint">try{
	File file = new File("file.txt");
	FileInputStream fs = new FileInputStream(file);
	DataInputStream in = new DataInputStream(fs);
	BufferedReader br = new BufferedReader(new InputStreamReader(in));
	String line;
	while ((line = br.readLine()) != null)
		System.out.println(line);
	in.close();
} catch (Exception e) {
	e.printStackTrace();
}</pre>
Alternatively, we could have simply passed in the file name as a String directly into the FileInputStream constructor.

DataInputStreams are useful especially for reading binary files and calling methods such as “in.readInt()” amongst others for custom file formats. However, if we simply wanted to load a plain text file , there is an easier method.
<pre class="prettyprint">try{
	File file = new File("file.txt");
	BufferedReader br = new BufferedReader(new FileReader(file));
	String line;
	while ((line = br.readLine()) != null)
		System.out.println(line);
} catch (Exception e) {
	e.printStackTrace();
}</pre>
You might notice the fact that nobody ever bothers to cloes FileReaders, BufferedReaders, FileInputStreams and DataInputStreams by calling “close();” on their instances. This would be the primary reason to assign them to variables, not legibility, instead of cramming everything into one line. But that’s another story.

Anyway, there are many different ways to load files and manage errors and eventually things get messy and you’ll find yourself having to catch exceptions left and right.<!--more-->

The same goes for loading images; the most common way to load an image is as follows.
<pre class="prettyprint">BufferedImage img = null;
try {
	img = ImageIO.read(new File("image.png"));
} catch (IOException e) {
	e.printStackTrace();
}</pre>
If all of this is so widely accepted, why am I complaining you ask? The number one biggest issue with loading files by far, is getting the paths right and there is a simple solution that few people know that I’ll share with you today.

Assuming you’re creating an application that you plan to release, you’ll probably be packing your resources in the jar itself and want a relative path that you can get using “MyClass.class.getResource(“image.png”);” for example. However, if your project is reasonably complex, you might have organised your resources in folders such as “images/image.png” and you load it using that relative path thinking you’ve solved the problem.

<strong>Problem #1: Cross-platform compatibility</strong>

If you choose your file separator to be “\\" you’re in for a world of hurt once you realise that this only works on Windows. You might think “Oh well I’ll solve this inconsistency by typing it as “images”+File.separator+”image.png” ” and generally, that would be fine only there’s one problem: applets. But we’ll get to that later. For now, trust me when I say always use forward slashes (/).

<strong>Problem #2: Applets</strong>

If you want to load an image in an applet, the standard way to go about it would be as follows.
<pre class="prettyprint">BufferedImage img = null;
try {
	img = ImageIO.read(new URL("http://www.example.com/image.png"));
} catch (IOException e) {
	e.printStackTrace();
}</pre>
So far it may seem fine. You can already imagine creating methods to store the root URL where the images are stored but it would only work for images outside of the jar and, depending on the server your jar is on, might be limited to getting images only off of that server.

Then the much, much bigger problem appears. You can’t load files using the above methods. At all. If you try to convert your path names to URIs using the “toURI();” method, you’ll notice the path starts with “file://” or something similar depending on your OS. You simply cannot load resources that exist on a web server using the traditional techniques.

Even worse, “File.separator” only applies to files! It will ruin the URL if you try it on a Windows PC so you <em>must</em> use “/” and I guarantee you it will work most anywhere.

There are several solutions that I wont bother boring you with for now. We want a universal, elegant and safe solution that will work on anything. Scroll down and skip the next part to read it if you want to skip my reasoning.

Now if you’re like me, you’ll like to comply with intelligent standards and best practices but rage at things that have become “the standard way” out of tradition. This isn’t just a problem in programming; if you look at the field of economics for instance, you’ll find that when plotting supply and demand curves, price is put on the vertical axis simply because that’s the way it has always been done. Any mildly scientific person will tell you that it doesn’t make sense and that price should be on the horizontal axis and economists know this too but it doesn’t change because it’s too late! I digress.

So the only thing we can do is put in the extra mile to make sure our code works on all major OSs, browsers, and modes which I fundamentally believe is our duty as programmers. It doesn’t matter if I think Mac is crap, or if Windows 8 will ruin everything, people will use it and it is our job to fulfil these people’s needs to the best of our abilities.

<strong>Solution</strong>

Now to the final solution. I prefer to keep my resources in the jar themselves which (if you sign your jars) will guarantee that they are always there and you don’t have to rely on external resources. It’s also faster and safer than loading things from an arbitrary URL. The superior, little known way to load resources universally is as follows. Ready?

For images:
<pre class="prettyprint">BufferedImage img = null;
try {
	img = ImageIO.read(MyClass.class.getResource("images/"+fileName));
} catch (IOException e) {
	e.printStackTrace();
}</pre>
Where MyClass is a class in the same directory as the package/folder “images” and fileName is something like “image.png”.

For other files:
<pre class="prettyprint">try {
	InputStream in = MyClass.class.getResource("folder/"+fileName).openStream();
	InputStreamReader ir = new InputStreamReader(in);
	BufferedReader br = new BufferedReader(ir);
	String line;
	while ((line = br.readLine()) != null)
		System.out.println(line);
	br.close();
	ir.close();
	in.close();
} catch (IOException e) {
	e.printStackTrace();
}</pre>
Now of course there are a bunch of types of files you can load, but the key points here are getResource(…), forward slashes, openStream() and having clean code. This will always work no matter what and spare you the headaches especially if you’re coding an application that can run as an applet or standalone. The rest is up for experimentation.