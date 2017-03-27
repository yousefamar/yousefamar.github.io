AMARIO.input = {
	select: function (node) {
		this.selected = node;

		if (node.link)
			window.open(node.link, '_blank');

		if (node.desc) {
			document.getElementById('infoTitle').innerHTML = node.label;
			document.getElementById('infoBody').innerHTML = node.desc;
			document.getElementById('infoArea').style.display = '';
		} else {
			document.getElementById('infoTitle').innerHTML = node.label;
			document.getElementById('infoBody').innerHTML = node.desc;
			document.getElementById('infoArea').style.display = 'none';
		}
	},

	init: function (root) {
		var self = this;

		this.hovered = null;
		this.dragee = null;

		this.zoom = 1;

		var isMouseDown = false;
		var isDragging = false;
		var mousePos = new Vec2();

		function down (event) {
			isMouseDown = true;

			root.forEachPre(function (node) {
				if (node.contains(event.pageX, event.pageY)) {
					self.select(node);
					self.dragee = node;
					return true;
				}
			});
		}

		function move (event) {
			if (isMouseDown) {
				isDragging = true;
				if (self.dragee) {
					self.dragee.x += (event.pageX - mousePos.x)/self.zoom;
					self.dragee.y += (event.pageY - mousePos.y)/self.zoom;
				} else {
					AMARIO.graphTrans.translate(event.pageX - mousePos.x, event.pageY - mousePos.y);
				}
			}

			self.hovered = null;
			root.forEachPre(function (node) {
				if (node.contains(event.pageX, event.pageY)) {
					self.hovered = node;
					return true;
				}
			});
			document.body.style.cursor = (self.hovered && self.hovered.link)?'pointer':'';

			mousePos.set(event.pageX, event.pageY);
		}

		function up (event) {
			isMouseDown = false;
			if (!isDragging && self.dragee)
				AMARIO.camera.setTarget(event.pageX, event.pageY);
			isDragging = false;
			self.dragee = null;
		}

		function scroll (event) {
			event.preventDefault();
			var prevZoom = self.zoom;
			var zoomScale = 1 + (event.wheelDeltaY/12 || -event.detail*4)/100;
			self.zoom *= zoomScale;
			self.zoom = self.zoom < 0.2 ? 0.2 : self.zoom > 2 ? 2 : self.zoom;
			zoomScale = self.zoom/prevZoom;
			AMARIO.graphTrans.translate(-mousePos.x, -mousePos.y);
			AMARIO.graphTrans.scale(zoomScale, zoomScale);
			AMARIO.graphTrans.translate(mousePos.x, mousePos.y);
		}

		document.addEventListener('mousedown', down, false);
		document.addEventListener('touchstart', function (event) { event.preventDefault(); down(event.targetTouches[0]); }, false);
		document.addEventListener('mousemove', move, false);
		document.addEventListener('touchmove', function (event) { move(event.targetTouches[0]); }, false);
		document.addEventListener('mouseup', up, false);
		document.addEventListener('touchend', function (event) { up(event.targetTouches[0]); }, false);
		document.addEventListener('mousewheel', scroll,false);
		document.addEventListener('DOMMouseScroll', scroll, false);
		// FIXME: This is still buggy on FireFox.
		window.addEventListener('blur', up, false);

		delete AMARIO.input.init;
	}
};