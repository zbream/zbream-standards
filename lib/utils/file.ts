import { promises as fsp } from 'fs';

const encoding = 'utf8';

export function fileCopy(fromPath: string, toPath: string): Promise<void> {
  return fsp.copyFile(fromPath, toPath);
}

export function fileRename(fromPath: string, toPath: string): Promise<void> {
  return fsp.rename(fromPath, toPath);
}

export function fileRead(path: string): Promise<string> {
  return fsp.readFile(path, encoding);
}

export function fileWrite(path: string, data: string): Promise<void> {
  return fsp.writeFile(path, data, encoding);
}

export async function fileBackup(path: string): Promise<void> {
  try {
    return await fileRename(path, `${path}.OLD`);
  } catch {}
}
