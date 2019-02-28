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


function findPictures() {
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


// Export scribbles as SVG to S3.
function uploadImage (image) {
    // Image must be an image file with a name (How???)

    // var trsvg = canvas.toSVG();
    console.log('save...');

    var request = $.ajax({
        url: "https://ngj8pqd220.execute-api.eu-west-1.amazonaws.com/dev",
        method: "POST",
        headers: {'Access-Control-Allow-Origin': true},
        data: { "user_file" : image },
        dataType: "text"
    }).done(function( msg ) {
        console.log( msg );
    }).fail(function( jqXHR, textStatus ) {
        console.log( "Request failed: " + textStatus );
    });

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

  	setInterval(findPictures, 10000);

  }

}

export default extension;
