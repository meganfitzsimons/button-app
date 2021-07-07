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

import {
  NotebookActions
} from '@jupyterlab/notebook'

function findPictures() {
  // if cell.hasClassName('jp-RenderedImage')


	var pictures = document.getElementsByClassName("jp-RenderedImage");
	console.log('piczz!');
	console.log(pictures.length);
	console.log(pictures);
	(window as any).pictures = pictures;

	var picarray = Array.from(pictures);
	console.log(picarray);

	Array.from(pictures).forEach(function(picture){
		console.log('worked');
		console.log(picture);

		var button = document.createElement("button");
		button.innerHTML = "Do Something";

		// 2. Append somewhere
		picture.appendChild(button);

	});
};

(window as any).findPictures = findPictures;



/////////////////////////
// uploadImage('https://ngj8pqd220.execute-api.eu-west-1.amazonaws.com/dev', 'image')
  // .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  // .catch(error => console.error(error));

// function uploadImage(url = "", img = {}) {
//   // Default options are marked with *
//     // return fetch(url, {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "image/png",
//     //     "Access-Control-Allow-Origin": true},
//     //   data: { "user_file" : img },
//     //   dataType: "text"
//     // })
//     // .then(response => response.json()); // parses response to JSON
//     console.log("WAHAAYA WERE IN THE UPLOAD IMAGE SAFD;IAJHS;FIJASFD!!")
// }

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

    // STUFF HAPPENS

    // declare var notebookactions = NotebookActions;

    console.log(NotebookActions)
    console.log('---')
    console.log(NotebookActions.executed)
    // document.addEventListener('NotebookActions.executed.emit', function(event){
    //   console.log('NotebookActions.executed did a !')
    //   // findPictures()
    // })
    NotebookActions.executed.connect(function(sender = NotebookActions){
      console.log('Added function to NotebookActions')
      console.log('NotebookActions', sender)
      // addAnnotableButton(sender)
    })



  	// setInterval(findPictures, 10000);
    // uploadImage('https://ngj8pqd220.execute-api.eu-west-1.amazonaws.com/dev', 'image')
  }

}



export default extension;
