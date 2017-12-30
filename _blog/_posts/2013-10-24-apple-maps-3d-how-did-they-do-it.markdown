---
layout: post
title: 'Apple Maps 3D: How did they do it?'
date: '2013-10-24 21:14:10'
---

With the release of OS X Mavericks came a bunch of new features like full screen support on multiple monitors (about time, Apple!). One other such feature is the new Maps app. Its unique selling point is 3D flyover maps. How does it work?<!--more-->

![New York City, now in 3D!]({{ site.baseurl }}/assets/images/new-york-3d.png) *New York City, now in 3D!*

Not too shabby! Here's the same shot in Google Earth for comparison:

![Smooth as always, Google!]({{ site.baseurl }}/assets/images/new-york-4d.png) *Smooth as always, Google!*

Sorry, but I'm gonna have to side with Google on this one on aesthetics! 3D models in Google Earth are often crowdsourced and built and skinned my hand using the idiot-proof modeling tool Google Sketchup. They're made to look right. Apple's Maps on the other hand are built automatically.

Back in late 2011, Apple bought up a Swedish 3D mapping company called C3 Technologies that then disappeared off the radar. C3′s mapping technology was originally intended to help missiles home in on targets but was then used by Nokia's map app Ovi, before Apple bought the company.

How does it work? It involves taking pictures at a whole range of different angles to the ground from a plane then using computer vision software figure out depth from different images of the same object just like our own eyes do.<a title="Ultrasharp 3-D Maps" href="http://www.technologyreview.com/news/423838/ultrasharp-3-d-maps/" target="_blank">[1]</a>

That's why it gets a little wobbly when you zoom in. The advantage is that the skin quality is often much better. Here's an image of the clock tower at my university in the Maps app:

![Old Joe's Front]({{ site.baseurl }}/assets/images/old-joe-front.png) *Old Joe's Front*

And here it is from the other side:

![Old Joe's Behind ಠ_ಠ]({{ site.baseurl }}/assets/images/old-joe-back.png) *Old Joe's Behind ಠ_ಠ*

You'll notice the that in each image, one side of the clock tower is a couple of hours apart temporally from the other side. Clearly the plane must have flown by more than once to get all the sides. Another explanation is that the time difference comes from the time it took for the plane to get situated in a way such that one of the perspective cameras lined up with the clock tower just right. In other words, the plane could have been busy taking pictures of the lake in The Vale (north) from above, but at that time, one of its cameras were pointing towards the clock tower from the side. The pictures of the other side would have been taken while the plane was somewhere in Selly Oak (south) by the opposite perspective camera a couple of hours late. Either way, pretty cool stuff.

Let's see what Google Earth has to offer.

![Well, that's embarrassing...]({{ site.baseurl }}/assets/images/old-joe-back.png) *Well, that's embarrassing...*

Weak. Well known places get a lot of attention when crafted, especially when it's by volunteers. Here, the Great Hall (building with the largest Dome) has it's entrance blocked by a mysterious clock face that I can assure you is not there in real life.

Apple++ for decent automatic mapping software! Get it together, Google!

Update: I spoke to my project supervisor about this recently and he mentioned how SketchUp can let you take an image of something and define outlines manually on it and let it automatically extrude and skin a model for you (search: "Photo Match"). That would explain how the clock tower skin covers the entrance to the Great Hall; the image that was used to build the models was taken from an angle where the clock tower was covering the Great Hall and hence the model!
