// @ts-ignore
import * as PIXI from 'pixi.js';
// @ts-ignore
import * as PIXI_Legacy from 'pixi.js-legacy';

// let status = PIXI.utils.isWebGLSupported() ? PIXI : PIXI_Legacy;
//
// let app = new PIXI.Application({
//         width: 256,
//         height: 256,
//         antialias: true,
//         transparent: false,
//         resolution: 1
//     }
// );
const app = new PIXI.Application();

// app.renderer.backgroundColor = "#FFDEAD";
// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);


// PIXI.Loader
//     .add("logo", "assets/P_logo.png")
//     .load(setup);
//
// function setup() {
//     let sprite = new PIXI.Sprite(
//         PIXI.Loader.resources["assets/P_logo.png"].texture
//     );
//
//     app.stage.addChild(sprite);
// }