uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float modelElevation = sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
  modelElevation += sin(modelPosition.y * uFrequency.y + uTime) * 0.1;

  modelPosition.z = modelElevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  vUv = uv;
  vElevation = modelElevation;

  gl_Position = projectionPosition;
}