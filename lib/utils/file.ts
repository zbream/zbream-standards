import * as fs from 'fs';

export function fileCopy(fromPath: string, toPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.copyFile(fromPath, toPath, err => {
      if (err) reject(err)
      else resolve();
    });
  });
}

export function fileRename(fromPath: string, toPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.rename(fromPath, toPath, err => {
      if (err) reject(err)
      else resolve();
    });
  });
}

export function fileRead(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    return fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(data);
    });
  });
}

export function fileWrite(path: string, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.writeFile(path, data, 'utf8', err => {
      if (err) reject(err)
      else resolve();
    });
  });
}
