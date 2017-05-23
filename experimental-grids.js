var allElements = document.querySelectorAll("[has-gutters]");
	for (var i = 0; i < allElements.length; i++) {
	var element = allElements[i];

	if (element.getAttribute("class")) {
		var conClasses = element.getAttribute('class').split(" ");
		var arrayconClasses = [];
		for (var f = 0; f < conClasses.length; f++) {
				arrayconClasses.push("test-" + conClasses[f]);
		}

		var conClassesStr = arrayconClasses.join(" ");

	}
	else {
		var conClassesStr = "";
	}

	var htmltemplate = '<div class="container-wrapper shadow-dom shadow-root ' + conClassesStr + '">';


	originalClass = element.getAttribute("class");
	element.setAttribute("class", originalClass + " shadow-host");


	for (var j = 0; j < element.children.length; j++) {
		var child = element.children[j];
		//   var matches = classes.match(/item/g);

		if (child.getAttribute("class")) {
			var classes = child.getAttribute('class').split(" ");
			var newClasses = [];
			var classeswithout = [];
			for (var b = 0; b < classes.length; b++) {
				if (classes[b].match(/extent-[\w/]+|offset-[\w/]+/g)) {
					newClasses.push(classes[b]);
				}
				else {
					newClasses.push("test-" + classes[b]);
					classeswithout.push(classes[b]);
				}

			}
			var newclasseswithout = classeswithout.join(" ");
			child.setAttribute("class", newclasseswithout);
			newClassesStr = newClasses.join(" ");
			var childClass = newClassesStr;
		}
		else {
			childClass = "";
		}

		child.setAttribute("key", j);
		contentInsertion = '<div class="item-wrapper shadow-dom ' + childClass + '"><content select="[key=' + "'" + j + "'" + ']"></div>';
		htmltemplate += contentInsertion;
	}

	//   console.log(element.children);

	htmltemplate += '</div>';

	var shadow = element.createShadowRoot();
	shadow.innerHTML = htmltemplate;

}
