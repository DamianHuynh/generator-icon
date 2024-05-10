import sharp from "sharp";
import fs from "fs-extra";
import { success, error } from "../utils/logger.js";
import path from "path";

const outputDirectory = "android/app/src/main/res/";

// Define output image sizes
const iconSizes = [
  { size: 48, directory: "mipmap-mdpi" },
  { size: 72, directory: "mipmap-hdpi" },
  { size: 96, directory: "mipmap-xhdpi" },
  { size: 144, directory: "mipmap-xxhdpi" },
  { size: 192, directory: "mipmap-xxxhdpi" },
];

const generateAndroidIconPack = ({
  size,
  source,
  resDir,
  destIcon,
}: AndroidGenIconArg) => {
  const iconPath = path.resolve(resDir, destIcon);

  sharp(source)
    .resize(size, size)
    .toFile(iconPath)
    .then(() => success(`Generated icon ${size}x${size} at ` + iconPath))
    .catch((err) => {
      error(`Error generating icon ${size}x${size}: ${err}`);
    });
};

const run = (option: Option) => {
  iconSizes.forEach(({ size, directory }) => {
    const resDir = path.resolve(outputDirectory, directory);
    fs.ensureDirSync(resDir);
    generateAndroidIconPack({
      source: option.source,
      destIcon: "ic_launcher.png",
      size,
      resDir,
    });
    generateAndroidIconPack({
      source: option.source,
      destIcon: "ic_launcher_foreground.png",
      size,
      resDir,
    });
    generateAndroidIconPack({
      source: option.source,
      destIcon: "ic_launcher_round.png",
      size,
      resDir,
    });
  });
};

export default run;
