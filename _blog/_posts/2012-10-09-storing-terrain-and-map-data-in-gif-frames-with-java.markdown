---
layout: post
title: Storing Terrain and Map Data in GIF Frames with Java
date: '2012-10-09 22:08:00'
---

In Java, nobody really ever uses gifs (that is, images of the *.gif persuasion) and when they do, it’s usually as an ImageIcon for Swing GUIs and the like and even then they don’t look very professional.

I feel like the GIF format is under-appreciated since it is pretty much the only common format able to store image layers in a lightweight manner, display them as an animation or each layer overlaying the next, have support in most image loading APIs, and is easily creatable in common image manipulation software such as GIMP or Photoshop.

With this in mind I have devised a technique to store terrain and entity data within the GIF format for easy visual editing.<!--more--> I don’t think anybody has ever loaded gifs layer by layer in this manner, let alone done anything quite like this in the first place, but it’s quite nice.
<pre class="prettyprint">BufferedImage tileMap = null;
BufferedImage entityMap = null;
try {
	ImageReader ir = ImageIO.getImageReadersBySuffix("GIF").next();
	ir.setInput(ImageIO.createImageInputStream(Terrain.class.getResource("maps/"+mapName+".gif").openStream()));
	tileMap = ir.read(0);
	entityMap = ir.read(1);
} catch (IOException e) {
	System.err.println("Unable to load custom map ""+mapName+"".");
}</pre>
Let’s go through this step by step. First, we get an image reader that can read the GIF format (another advantage of using a well known format). Then we create an input stream using <a title="Universal Resource Loading in Java" href="http://amarport.com/blog/?p=27" target="_blank">my preferred method</a>. To read the separate layers/frames, we simply use “ir.read(layerIndex);”. That’s it! So simple and yet so overlooked.

Using this technique, we can eventually turned this, an easily drawn map:

<img alt="Test Map" src="https://dl.dropbox.com/u/704818/web/tumblr/images/testMap.gif" width="64" height="64" align="middle" />

To this, a tile-based map for a 2D top-down game:
<p style="text-align: center;"><img alt="A tile based 2D top-down game" src="https://dl.dropbox.com/u/704818/web/tumblr/images/screen1.png" align="middle" /></p>
<img class="aligncenter" alt="A tile based 2D top-down game" src="https://dl.dropbox.com/u/704818/web/tumblr/images/screen2.png" align="middle" />

If you open up the gif above in GIMP for example, you’ll see the separate layers. Every pixel represents a tile type that eventually becomes a 32*32 tile. As such I obviously couldn’t depict the entire map as a 64*64 map (of which multiple exist, e.g. the inside of the house which is bigger on the inside by far) becomes a 2048*2048 world. How’s that for compacting data?

After the image is loaded, we then iterate through the pixels and do with the information whatever we like, such as build a map while additionally being able to use data such as image size or settings encoded in one layer that can be interpreted using a custom protocol of your imagining.

You might be thinking “But GIFs are only limited to 8-bit colours and I have more than 256 tile types!”. Not only are you wrong (gifs can support far more than that in exchange for making the file bigger) but you’ve overlooked the layers! That’s the beauty of it! Even if you have a million tile/colour IDs for whatever reason, you can always reuse them in different layers. In this example I use one layer for the terrain and the other for trees, buildings and decorative entities but one could for instance use a layer for fluids (water, lava, etc.) one for plants, one for in-traversable tiles that you collide with (such as water or or rocks) instead of interpreting it from the tile type, and so on. And at the same time, you could have custom maps as you don’t need to be a programmer to create a gif. Is this not better than custom file formats and complicated map editors and tools? The possibilities are endless!