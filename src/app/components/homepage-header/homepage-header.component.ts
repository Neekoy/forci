import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Engine, Scene, ArcRotateCamera, Light, Vector3, HemisphericLight, MeshBuilder, UniversalCamera } from 'babylonjs';

@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css']
})
export class HomepageHeaderComponent implements OnInit {

  public headerPosition: string;

  private _canvas: HTMLCanvasElement;
  private _engine: Engine;
  private _scene: Scene;
  private _camera: ArcRotateCamera;
  private _camera2: UniversalCamera;
  private _light: Light;

  constructor() {
    // Fix for the header image because it's is too small (not FullHD) so it looks weird. Ideally this needs to be rewritten so it will
    // change programatically based on the width of the screen.
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth > 1600) {

      this.headerPosition = '0 -130px';
    } else {
      this.headerPosition = '0 0';
    }

  }

  createScene(): void {
    this._scene = new Scene(this._engine);
    this._scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0000000000000001);

    this._camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);
    this._camera2 = new UniversalCamera('Camera2', new BABYLON.Vector3(0, 0, -10), this._scene);
    this._camera2.setTarget(Vector3.Zero());
    this._camera2.attachControl(this._canvas, false);
    this._scene.activeCamera = this._camera2;

    this._light = new HemisphericLight('hemiLight', new BABYLON.Vector3(-1, 1, 0), this._scene);

    let starsManager = new BABYLON.SpriteManager('starsManager', '/assets/images/star.png', 2000, 800, this._scene);

    let generateStars = function(numOfStars) {
      for (let i = 0; i < numOfStars; i++) {
        let star = new BABYLON.Sprite('star', starsManager);
        star.position.x = Math.random() * 20 - 10;
        star.position.y = Math.random() * 20 - 10;
        star.size = Math.random() * 0.5;

        star.position.z = Math.random() * 500;
      }
    }

    generateStars(8000);
  }

  animate() : void {
    // Rendering loop for the animation.
    // Want to add interaction with the mouse for the stars, but it's a test site after all.
    this._engine.runRenderLoop(() => {
        this._scene.render();
        this._camera2.position.z += 0.05;

    });

    // the canvas/window resize event handler
    window.addEventListener('resize', () => {
        this._engine.resize();
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this._canvas = <HTMLCanvasElement>document.getElementById('headerCanvas');
    this._canvas.style.width = '100%';
    this._canvas.style.height = '900px';
    this._engine = new Engine(this._canvas, true);

    this.createScene();
    this.animate();

  }

  onResize(event) {
    // Continue of the fix for the small header image.
    const innerWidth = event.target.innerWidth;

    if (innerWidth > 1600) {
      this.headerPosition = '0 -130px';
    } else {
      this.headerPosition = '0 0';
    }
  }

  public toggleMenu = function(action) {
    let menu = <HTMLElement>document.querySelector('.mobileMenu');
    if (action === 'open') {
      menu.style.display = 'inline';
    } else {
      menu.style.display = 'none';
    }
  };
}
