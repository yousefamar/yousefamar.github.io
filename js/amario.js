AMARIO = {};

AMARIO.main = function () {
	var canvas = document.getElementById('canvas');
	var ctx = AMARIO.ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener('resize', function(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}, false);

	var graphTrans = AMARIO.graphTrans = new Transform();
	var camera = AMARIO.camera = {
		x: 0,
		y: 0,
		dX: 0,
		dY: 0,
		setTarget: function (x, y) {
			this.dX = x - (canvas.width>>1);
			this.dY = y - (canvas.height>>1);
		},
		tick: function (delta) {
			if (!this.dX || !this.dY)
				return;

			delta = delta || 0.1;
			var ddX = -delta * this.dX;
			var ddY = -delta * this.dY;
			this.dX += ddX;
			this.dY += ddY;
			graphTrans.translate(ddX, ddY);
		}
	};

	var root = AMARIO.root = new AMARIO.Node(AMARIO.loadGraphSync('res/graph.json'));
	root.forEachPost(function (node) {
		if (node.children.length)
			return;
		for (var current = node.parent; current; current = current.parent)
			current.radius++;
	});

	// Pre-simulate graph to settle nodes
	for (var i = 100; i >= 0; i--) {
		root.forEachPre(function (node) {
			root.forEachPre(function (otherNode) {
				if (otherNode === node)
					return;

				node.addForce(otherNode);
			});

			if (node !== AMARIO.input.dragee) {
				node.x += node.netForce.x;
				node.y += node.netForce.y;
			}
			node.netForce.x = 0;
			node.netForce.y = 0;
		});
	}
	var coords = AMARIO.graphTrans.applyToCoords(AMARIO.root.x, AMARIO.root.y);
	AMARIO.camera.setTarget(coords[0], coords[1]);

	//graphTrans.scale(50/root.radius, 50/root.radius);

	AMARIO.me = new Image();
	AMARIO.me.src = 'res/images/me-small.png';
	AMARIO.me.width = 1.5 * root.radius;
	AMARIO.me.height = 1.5 * 0.825 * root.radius;
	var highResMe = new Image();
	highResMe.width = 1.5 * root.radius;
	highResMe.height = 1.5 * 0.825 * root.radius;
	highResMe.src = 'res/images/me.png';
	highResMe.onload = function () {
		AMARIO.me = highResMe;
	};

	AMARIO.input.init(root);
	AMARIO.input.select(root);

	const TICK_INTERVAL_MS = 1000.0/60.0;

	function tick() {
		// FIXME: Chrome throttles the interval down to 1s on inactive tabs.
		setTimeout(tick, TICK_INTERVAL_MS);

		camera.tick();

		root.forEachPre(function (node) {
			root.forEachPre(function (otherNode) {
				if (otherNode === node)
					return;

				node.addForce(otherNode);
			});

			if (node !== AMARIO.input.dragee) {
				node.x += node.netForce.x;
				node.y += node.netForce.y;
			}
			node.netForce.x = 0;
			node.netForce.y = 0;
		});
	}

	function render () {
		requestAnimFrame(render);

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();
		graphTrans.applyToContext(ctx);
		root.render(ctx);
		ctx.restore();

		/*
		var coords = [AMARIO.input.mousePos.x, AMARIO.input.mousePos.y];
		ctx.beginPath();
		ctx.moveTo(coords[0], coords[1]);
		ctx.lineTo(coords[0]+1, coords[1]+1);
		ctx.strokeStyle = 'red';
		//ctx.lineWidth = 1;
		ctx.stroke();
		*/
	}

	setTimeout(tick, TICK_INTERVAL_MS);

	window.requestAnimFrame = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function(callback){
				window.setTimeout(callback, 1000/60);
			};
	requestAnimFrame(render);
};
