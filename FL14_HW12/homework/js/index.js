function visitLink(path) {
	let count = +localStorage.getItem(path);
	localStorage.setItem(path, ++count);
}

function viewResults() {
	let ulResult = document.createElement('ul')
	let liFirst = document.createElement('li')
	let liSecond = document.createElement('li')
	let liThird = document.createElement('li')
	for (let i = 0; i < localStorage.length; i++) {
		liFirst.innerHTML = 'You visited Page 1: ' + localStorage.getItem('Page1') + ' times'
		ulResult.append(liFirst)
		liSecond.innerHTML = 'You visited Page 2: ' + localStorage.getItem('Page2') + ' times'
		ulResult.append(liSecond)
		liThird.innerHTML = 'You visited Page 3: ' + localStorage.getItem('Page3') + ' times'
		ulResult.append(liThird)
	}
	document.body.append(ulResult);
	localStorage.clear();
}