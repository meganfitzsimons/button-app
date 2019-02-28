// import {
//   JupyterLab, JupyterLabPlugin
// } from '@jupyterlab/application';

// import {
//   Widget
// } from '@phosphor/widgets';

// if (div.p-Widget=jp-RenderedImage) {
// 	//add button if p-Widget is an image

// } else {
// 	//ignore
// }

function getPictures() {
	var pictures = document.getElementsByClassName("jp-RenderedImage");
	console.log('got some piczzzzzzssss!');
	return pictures;
};

getPictures();


function addButton(picture: any) {
	var button = document.createElement("button");
	button.innerHTML = "Do Something";

	// 2. Append somewhere
	picture.appendChild(button);

	// 3. Add event handler
	button.addEventListener ("click", function() {
	  alert("Annotate");
	});
}