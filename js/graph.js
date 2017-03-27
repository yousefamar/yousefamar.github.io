AMARIO.loadGraphSync = function (url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	return JSON.parse(xhr.responseText);
};

AMARIO.Node = function (obj) {
	this.label = obj.label || '';
	this.desc = obj.desc || '';
	this.link = obj.link || null;
	this.parent = null;
	this.children = [];
	this.radius = 10;

	if (obj.children) {
		for (var i = 0, len = obj.children.length; i < len; i++)
			this.addChild(new AMARIO.Node(obj.children[i]));
	}
	if (obj.image) {
		this.image = new Image();
		this.image.src = obj.image;
	}
	
	var canvas = AMARIO.ctx.canvas;
	this.x = canvas.width/2 + Math.random()*1000 - 500;
	this.y = canvas.height/2 + Math.random()*1000 - 500;
	this.netForce = { x: 0, y: 0 };
};

AMARIO.Node.prototype.negCharge = 100;
AMARIO.Node.prototype.linkForceFactor = 0.2;
AMARIO.Node.prototype.linkRestLength = 100;

AMARIO.Node.prototype.addChild = function (child) {
	child.parent = this;
	this.children.push(child);
	return this;
};

AMARIO.Node.prototype.forEachPre = function (func) {
	if (func(this))
		return true;
	for (var i = 0, len = this.children.length; i < len; i++)
		if (this.children[i].forEachPre(func))
			return true;
};

AMARIO.Node.prototype.forEachPost = function (func) {
	for (var i = 0, len = this.children.length; i < len; i++)
		if (this.children[i].forEachPost(func))
			return true;
	if (func(this))
		return true;
};

AMARIO.Node.prototype.distTo = function (node) {
	return Math.sqrt((node.x - this.x)*(node.x - this.x) + (node.y - this.y)*(node.y - this.y));
};

AMARIO.Node.prototype.addForce = function (otherNode) {
	var dist = this.distTo(otherNode) || 0.0001;
	var distX = (this.x - otherNode.x) || 0.0001, distY = (this.y - otherNode.y) || 0.0001;
	var dirX = distX/dist, dirY = distY/dist;

	this.netForce.x += this.negCharge*this.radius*otherNode.radius*dirX/(dist*dist);
	this.netForce.y += this.negCharge*this.radius*otherNode.radius*dirY/(dist*dist);

	if (this.children.indexOf(otherNode) >= 0) {
		var force = this.linkForceFactor * (dist - this.linkRestLength);

		otherNode.netForce.x += dirX*force;
		otherNode.netForce.y += dirY*force;

		this.netForce.x -= dirX*force;
		this.netForce.y -= dirY*force;
	}

	if (this.netForce.x > 1000)
		this.netForce.x = 1000;
	else if (this.netForce.x < -1000)
		this.netForce.x = -1000;
	if (this.netForce.y > 1000)
		this.netForce.y = 1000;
	else if (this.netForce.y < -1000)
		this.netForce.y = -1000;
};

AMARIO.Node.prototype.contains = function (x, y) {
	// TODO: Coarse check first.
	var coords = AMARIO.graphTrans.applyToCoords(this.x, this.y);
	return Math.sqrt((x - coords[0])*(x - coords[0]) + (y - coords[1])*(y - coords[1])) <= this.radius*AMARIO.input.zoom;
};

AMARIO.Node.prototype.render = (function () {
	var cssRules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;

	var styles = {};
	for (var i = 0; i < cssRules.length; i++)
		styles[cssRules[i].selectorText] = cssRules[i].style;

	var lineCol = styles['.line'].color;

	var nodeCol = styles['.node'].backgroundColor;
	var nodeColLeaf = styles['.node.leaf'].backgroundColor;
	var nodeColHover = styles['.node:hover'].backgroundColor;
	var nodeColFocus = styles['.node:focus'].borderColor;

	var nodeTextCol = styles['.node'].color;

	return function (ctx) {
		for (var i = 0, len = this.children.length; i < len; i++) {
			var child = this.children[i];

			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(child.x, child.y);
			ctx.strokeStyle = lineCol;
			//ctx.lineWidth = 1;
			ctx.stroke();

			child.render(ctx);
		}

		if (this.image) {
			ctx.drawImage(this.image, this.x-this.radius, this.y-this.radius, this.radius<<1, this.radius<<1);
		} else {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
			ctx.fillStyle = this===AMARIO.input.hovered?nodeColHover:this.children.length?nodeColLeaf:nodeCol;
			ctx.fill();
			if (this.parent === null)
				ctx.drawImage(AMARIO.me, this.x-AMARIO.me.width/2, this.y-AMARIO.me.height/2, AMARIO.me.width, AMARIO.me.height);
			if (this === AMARIO.input.selected) {
				ctx.lineWidth = 2;
				ctx.strokeStyle = nodeColFocus;
				ctx.stroke();
				ctx.lineWidth = 1;
			}
		}

		ctx.textAlign = 'center';
		ctx.fillStyle = nodeTextCol;
		ctx.fillText(this.label, this.x, this.y-this.radius-2);
		//ctx.fillStyle = AMARIO.cols[2];
		//ctx.fillText('('+this.x.toFixed(2)+', '+this.y.toFixed(2)+')', this.x, this.y+this.radius+12);
	};
})();