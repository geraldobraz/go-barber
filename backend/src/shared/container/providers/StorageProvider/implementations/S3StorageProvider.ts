import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import { S3 } from 'aws-sdk';

import mime from 'mime';
import IStorageProvider from '../models/IStorageProvider';

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: 'your-region',
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tempFolder, file);
    const contentType = mime.getType(originalPath);

    if (!contentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: 'YOUR_BUCKET_APP',
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType: contentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: 'YOUR_BUCKET_APP',
        Key: file,
      })
      .promise();
  }
}

export default S3StorageProvider;
