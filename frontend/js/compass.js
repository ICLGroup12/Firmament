import {Sprite, Object3D} from 'three';
import {TextMaterial} from './text.js';

function Compass(radius) {
  Object3D.call(this);
  var that = this;
  this.name = "compass";

  var compassSprite = function(name, position) {
    var material = new TextMaterial(name);
    var sprite = new Sprite(material);
    sprite.position.fromArray(position);
    var labelWidth  = material.map.image.width;
    var labelHeight = material.map.image.height;
    sprite.scale.set(labelWidth, labelHeight, 1.0);
    return sprite;
  };

  this.add(compassSprite("N", [radius, 0, 16]));
  this.add(compassSprite("E", [0, -radius, 16]));
  this.add(compassSprite("S", [-radius, 0, 16]));
  this.add(compassSprite("W", [0, radius, 16]));

}

Compass.prototype = Object.create(Object3D.prototype);
Compass.prototype.constructor = Compass;

export {Compass};
