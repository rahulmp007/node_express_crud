const { log } = require("console");
const fs = require("fs").promises;
const path = require("path");

const dirPath = path.join(__dirname, "../data");
const targetPath = path.join(__dirname, "../data", "users.json");
console.log(targetPath);

async function createDirectory() {
  await fs.mkdir(dirPath, { recursive: true });
}

async function readFile() {
  try {
    const isDirExists = (await fs.stat(dirPath)).isDirectory();
    if (!isDirExists) {
      await createDirectory();
    } else {
      let readData = await fs.readFile(targetPath, "utf-8", (err, data) => {
        if (!err) {
          return data;
        } else {
          return err;
        }
      });
      return readData;
    }
  } catch (error) {
    console.log("error catched : ", error);
  }
}

async function writeFile(data) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    let result = await fs.writeFile(targetPath, data, (err, data) => {
      if (!err) {
        return data;
      } else {
        return err;
      }
    });
  } catch (error) {
    console.log("error catched : ", error);
  }
}

module.exports = {
  readFile,
  writeFile,
};
