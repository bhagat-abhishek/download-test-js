import { error } from 'node:console';
// import { cp } from 'node:fs';
import { copyFile, constants, cp } from 'node:fs/promises';

// try {
//   await cp('https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC74d1e6670b3a7682845dc75cc1bab147/3ef5decd231f5f51075175e4c4f17d55', 'destination.ogg');
//   console.log('audio was copied to folder');
// } catch {
//   console.error('The file could not be copied', error);
// }

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  await copyFile('https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC74d1e6670b3a7682845dc75cc1bab147/3ef5decd231f5f51075175e4c4f17d55', 'destination.ogg', constants.COPYFILE_EXCL);
  console.log('source.txt was copied to destination.txt');
} catch {
  console.error('The file could not be copied', error);
} 