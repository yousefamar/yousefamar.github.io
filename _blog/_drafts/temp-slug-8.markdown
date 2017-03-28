---
layout: post
title: Doubly Linked Lists in Javascript
---

In Javascript, there is no built-in implementation of stacks, queues, or anything derivative of linked lists. Most people are content with using arrays as makeshift lists. Javascript arrays are not "real" arrays as they act like JS objects which store their values in a hashtable (giving them a mutable feel) but you can still use list-related methods such as <em>push</em>, <em>pop</em>, <em>shift</em>, and <em>unshift.</em>

&nbsp;

However, as indices have to be reassigned when using methods such as <em>unshift</em>, which prepends elements to the array, these operations have a time complexity of O(n) as opposed to O(1) with a linked list. In certain cases it is still better to use JS arrays due to their efficiency overall, but regardless, here's a simple implementation of a doubly linked list in JavaScript.

The minimum one would need for a doubly linked list that can act as both stack and queue is the following.
<pre class="prettyprint">List = function () {
	this.size = 0;
};

List.prototype.add = function (element) {
	if (element) {
		this.tail = this.tail ? this.tail.next = { element: element, prev: this.tail } : this.head = { element: element };
		this.size++;
	}
	return this;
};

List.prototype.push = function (element) {
	if (element) {
		this.head = this.head ? this.head.prev = { element: element, next: this.head } : this.tail = { element: element };
		this.size++;
	}
	return this;
};

List.prototype.poll = List.prototype.pop = function () {
	var element = this.head ? this.head.element : undefined;
	if (element) {
		this.head === this.tail ? this.head = this.tail = undefined : (this.head = this.head.next).prev = undefined;
		this.size--;
	}
	return element;
};</pre>
We can then iterate through a list with a simple for-loop, and since it's doubly linked, we can go either way:
<pre class="prettyprint">var list = new List();
list.add('a').add('b').push('c').add(4);

/* Head to Tail */
for (var node = list.head; node; node = node.next)
	console.log(node.element);

/* Tail to Head */
for (var node = list.tail; node; node = node.prev)
	console.log(node.element);</pre>
For added memory, speed, and to allow tail-sharing, the doubly linked list can easily be converted to a singly linked list by simply removing all references to ".prev". I decided to go for a doubly linked implementation for added ease of manipulation as well as resonance with Java (hence Java nomenclature: <em>add</em>, <em>poll</em>, <em>push</em>, and <em>pop</em>).

The code itself can be condensed further through obfuscation and minimisation. It's already a bit convoluted with all the ternary operations but should all make sense if you read through it slowly.

Of course we could add a whole host of other useful methods depending on our needs such as the following.

<pre class="prettyprint">

</pre>