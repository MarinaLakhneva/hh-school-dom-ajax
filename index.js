function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

let square = document.getElementById("square");
square.addEventListener('pointerdown', (e) => {
	let newElement = document.createElement("div");
	newElement.style.background = getRandomColor();
	newElement.className = "new-square";
	document.body.append(newElement);
	function position(e) {
		newElement.style.left = e.pageX - newElement.offsetWidth / 2 + 'px';
		newElement.style.top = e.pageY - newElement.offsetHeight / 2 + 'px';
	}
	position(e);
	
	document.addEventListener('pointermove', position);
	
	newElement.addEventListener('pointerup', (e) => {
		document.removeEventListener('pointermove', position);
		let mesh = document.getElementById("mesh").getBoundingClientRect();
		let freedom = document.getElementById("freedom").getBoundingClientRect();
		if ((e.pageX > mesh.left && e.pageX < mesh.right) &&
				(e.pageY > mesh.top && e.pageY < mesh.bottom)) {
			newElement.style.position = 'static';
			document.getElementById("mesh").append(newElement);
		} else if ((e.pageX > freedom.left && e.pageX < freedom.right) &&
							 (e.pageY > freedom.top && e.pageY < freedom.bottom)) {
			document.getElementById("freedom").append(newElement);
		}
		else {
			newElement.remove();
		}
	});
});


