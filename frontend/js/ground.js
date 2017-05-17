import {MeshLambertMaterial, Mesh, Object3D} from 'three';
import {TerrainGeometry} from './terrain.js';

function Ground(size, wireColour, fillColour) {
  Object3D.call(this);
  var that = this;
  this.name = "ground";

  var geometry    = new TerrainGeometry(size, size / 4);
  var material    = new MeshLambertMaterial({color: fillColour});
  var wireframe   = new MeshLambertMaterial({color: wireColour, wireframe: true});
  var solidGround = new Mesh(geometry, material);
  var wiredGround = new Mesh(geometry, wireframe);

  this.add(solidGround);
  this.add(wiredGround);
}

Ground.prototype = Object.create(Object3D.prototype);
Ground.prototype.constructor = Ground;

export {Ground};
