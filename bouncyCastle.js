const PI = 3.14159;

const sphereVolume = function(radius) {
  const vol = (4 / 3) * PI * Math.pow(radius, 3);
  return vol;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  const vol = (1 / 3) * (PI * Math.pow(radius, 2)) * height;
  return vol;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  const base = width * depth;
  const vol = base * height;
  return vol;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let totVol = 0;
  for (const solid of solids) {
    if (solid.type == 'sphere') {
      totVol += sphereVolume(solid.radius);
    } else if (solid.type == 'cone') {
      totVol += coneVolume(solid.radius, solid.height);
    } else if (solid.type == 'prism') {
      totVol += prismVolume(solid.height, solid.width, solid.depth);
    } else {
      break;
    }
  }
  return totVol;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);