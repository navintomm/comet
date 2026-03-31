const ffmpegPath = require('ffmpeg-static');
const { spawnSync } = require('child_process');
const path = require('path');

const inputPattern = path.join(__dirname, 'public/images/herosection/frames/ezgif-frame-%03d.png');
const outputPath = path.join(__dirname, 'public/images/herosection/hero_sequence.mp4');

console.log('Starting video encoding using ffmpeg...', ffmpegPath);
const result = spawnSync(ffmpegPath, [
  '-y', // overwrite output if exists
  '-framerate', '24',
  '-i', inputPattern,
  '-c:v', 'libx264',
  '-crf', '18', // great quality
  '-pix_fmt', 'yuv420p',
  outputPath
], { stdio: 'inherit' });

if (result.error) {
  console.error('Encoding failed:', result.error);
  process.exit(1);
} else {
  console.log('Encoding complete: ', outputPath);
}
