precision mediump float;

// uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 texColor = texture2D(uTexture, vUv);
  texColor.rgb *= vElevation * 1.5 + 0.5;
  gl_FragColor = texColor;
}