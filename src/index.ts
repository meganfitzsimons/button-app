import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import '../style/index.css';


/**
 * Initialization data for the jupyter-extension-new extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyter-extension-new',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyter-extension-new is activated!');
    console.log('ICommandPalette:', palette)
  }
};

export default extension;
