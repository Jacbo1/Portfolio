function addGradients(items, idPrefix) {
	for (let i = 0; i < items.length; i++) {
		let styleTag = document.createElement("style")
		let item = items[i]
		function randomize() {
			let angle = Math.random() * 360
			let id = idPrefix + i
			item.id = id
			let firstHalf = "#" + id + "{background: linear-gradient(" + angle + "deg,rgba(53, 53, 53, 0.25) 0% 33%,rgba(0, 204, 255, 0.1) 66%,rgba(212, 0, 212, 0.1));"
			let secondHalf = ""
			firstHalf += "background-size: 300% 300%;"
			if (angle < 90)
			{
				firstHalf += "background-position: 0% 100%;"
				secondHalf = "#" + id + ":hover{background-position: 100% 0%;}"
			}
			else if (angle < 180)
			{
				firstHalf += "background-position: 0% 0%;"
				secondHalf = "#" + id + ":hover{background-position: 100% 100%;}"
			}
			else if (angle < 270)
			{
				firstHalf += "background-position: 100% 0%;"
				secondHalf = "#" + id + ":hover{background-position: 0% 100%;}"
			}
			else
			{
				firstHalf += "background-position: 100% 100%;"
				secondHalf = "#" + id + ":hover{background-position: 0% 0%;}"
			}
			setTimeout(function() {
				firstHalf += "transition: background-position 350ms ease;}\n"
				styleTag.innerHTML = firstHalf + secondHalf
			}, 10)
			styleTag.innerHTML = firstHalf + "}\n" + secondHalf
		}
		randomize()
	
		let timeoutID = null
		item.addEventListener("mouseenter", function() {
			if (timeoutID != null)
			{
				clearTimeout(timeoutID)
				timeoutID = null
			}
		})
	
		item.addEventListener("mouseleave", function() {
			if (timeoutID != null)
			{
				clearTimeout(timeoutID)
				timeoutID = null
			}
	
			timeoutID = setTimeout(randomize, 350)
		})
	
		document.head.appendChild(styleTag)
	}
}

addGradients(document.getElementsByClassName("listitem"), "listitem")
addGradients(document.getElementsByClassName("container"), "container")

// {
// 	let styleTag = document.createElement("style")
// 	styleTag.innerHTML += "\n#name{background: linear-gradient(" + (Math.random() * 360) + "deg,#a6edff,#e8cae8);"
// 	styleTag.innerHTML += "-webkit-background-clip: text;"
// 	styleTag.innerHTML += "-webkit-text-fill-color: transparent;}"
// 	document.head.appendChild(styleTag)
// }