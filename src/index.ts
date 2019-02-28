import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';

// function addButton(picture: Element) {
	

// 	// 3. Add event handler
// 	// button.addEventListener ("click", function() {
// 	//   alert("Annotate");
// 	// });
// }

function findPictures() {
	var pictures = document.getElementsByClassName("jp-RenderedImage");
	console.log('piczz!');
	console.log(pictures.length);
	console.log(pictures);
	(window as any).pics = pictures;

	var picarray = Array.from(pictures); 
	console.log(picarray);


	// for(let picture of pictures) {
	// 	addButton(picture);
	// }
	Array.from(pictures).forEach(function(picture){
		console.log('worked');
		console.log(picture);

		var button = document.createElement("button");
		button.innerHTML = "Do Something";

		// 2. Append somewhere
		picture.appendChild(button);

	}); //{
		
		
	// 	var button = document.createElement("button");
	// 	button.innerHTML = "Button";

	// 	// 2. Append somewhere
	// 	el.appendChild(button);
	// });
};

(window as any).findPictures = findPictures;

/**
 * Initialization data for the jupyter-extension-new extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyter-extension-new',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyter-extension-new is activated!');
    // Create a single widget
		let widget: Widget = new Widget();
		widget.id = 'annotable-jupyterlab';
		widget.title.label = 'annotable';
		widget.title.closable = true;

		// Add an application command
		const command: string = 'annotable:open';
		app.commands.addCommand(command, {
		label: 'Annotable',
		execute: () => {
		  if (!widget.isAttached) {
		    // Attach the widget to the main work area if it's not there
		    app.shell.addToMainArea(widget);
		  }
		  // Activate the widget
		  app.shell.activateById(widget.id);
			}
		});
		// Add the command to the palette.
  	palette.addItem({command, category: 'Tutorial'});

  	setInterval(findPictures, 1000);

  }

}

export default extension;
