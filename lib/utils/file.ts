import * as fs from 'fs';

export function fileCopy(fromPath: string, toPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.copyFile(fromPath, toPath, err => {
      if (err) { return reject(err); }
      return resolve();
    });
  });
}

export function fileRename(fromPath: string, toPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.rename(fromPath, toPath, err => {
      if (err) { return reject(err); }
      return resolve();
    });
  });
}

export function fileRead(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    return fs.readFile(path, 'utf8', (err, data) => {
      if (err) { return reject(err); }
      return resolve(data);
    });
  });
}

export function fileWrite(path: string, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.writeFile(path, data, 'utf8', err => {
      if (err) { return reject(err); }
      return resolve();
    });
  });
}

export function fileBackup(path: string): Promise<void> {
  return fileRename(path, `${path}.OLD`).catch(() => {});
}
