import { BackSide, SphereBufferGeometry, Vector3, Object3D, Mesh, DirectionalLight } from 'three';
import { SkyMaterial } from './skyshader.js';

import FEVENT from './event.js';
import FMODEL from './model.js';

function Sky(radius) {
  Object3D.call(this);
  var that = this;
  this.name = "sky";

  // sky
  const geometry  = new SphereBufferGeometry(radius);
  const material  = new SkyMaterial();
  material.side = BackSide;
  const sky = new Mesh(geometry, material);

  // sun light
  const light = new DirectionalLight(0xf7f7e7, 0.8);

  FEVENT.on('placetime', function() {
    const sunAltAz = FMODEL.getSunAltAz();
    const sunXYZ   = new Vector3().fromAngles(sunAltAz.az, sunAltAz.alt);
    sunXYZ.multiplyScalar(radius);
    material.uniforms.sunPosition.value.copy(sunXYZ);
    light.position.copy(sunXYZ);
  });

  this.add(sky, light);
}

Sky.prototype = Object.create(Object3D.prototype);
Sky.prototype.constructor = Sky;

export { Sky };
