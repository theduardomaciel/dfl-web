import fsPromises from 'fs/promises';
import path from 'path'

export async function getAboutData() {
    const filePath = path.join(process.cwd(), '/src/utils/data/about-info.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return objectData;
}