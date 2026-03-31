const ffmpegPath = require('ffmpeg-static');
const { spawnSync } = require('child_process');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/herosection/hero_sequence.mp4');
const outputPath = path.join(__dirname, 'public/images/herosection/hero_sequence_web.mp4');

console.log('Starting video encoding with faststart...', ffmpegPath);
const result = spawnSync(ffmpegPath, [
  '-y', 
  '-i', inputPath,
  '-c:v', 'libx264',
  '-crf', '18',
  '-preset', 'slow',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart', // MANDATORY for mobile web scrubbing
  '-g', '12', // keyframe every 12 frames (0.5s) for buttery smooth mobile scrubbing
  outputPath
], { stdio: 'inherit' });

if (result.error) {
  console.error('Encoding failed:', result.error);
  process.exit(1);
} else {
  console.log('Encoding complete: ', outputPath);
}
