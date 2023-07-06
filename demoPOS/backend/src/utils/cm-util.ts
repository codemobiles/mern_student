import * as fs from "fs-extra";
import { AppDataSource } from "../data-source";
import { Counters } from "../entity/Counters";

const uploadPath = process.env.ROOT_PATH + "/uploaded/images/";

export function savedValue(value: any, _default: any): any {
  return value ? value : _default;
}

export async function deleteFile(name: string) {
  if (name) {
    const toDeletedFiles = fs.readdirSync(uploadPath).filter((allFilesPaths: string) => allFilesPaths.match(new RegExp(`(${name})+(.*)$`, "i")) !== null);

    toDeletedFiles.forEach(async (file) => {
      // console.log(file);
      await fs.remove(uploadPath + file);
    });
  }
}

export function getFileName(files: any, id: string): string | null {
  if (files.image != null) {
    var fileExtention = files.image.originalFilename.split(".")[1];
    const name = `${id}.${fileExtention}`;
    return name;
  }
  return null;
}

export async function uploadImage(files: any, name: string) {
  if (files.image != null) {
    var oldpath = files.image.filepath;
    var newpath = uploadPath + name;

    if (fs.existsSync(newpath)) {
      await fs.remove(newpath);
    }

    await fs.move(oldpath, newpath);
  }
}

export async function generateSeq(id: string): Promise<number> {
  const counterRepo = AppDataSource.getMongoRepository(Counters);
  var result = await counterRepo.findOneAndUpdate({ id }, { $inc: { seq: 1 } }, { upsert: true });
  return result.value?.seq ? result.value?.seq + 1 : 1;
}
