export const DEFAULT_ANDROID_SOURCE = "./android";
export const resAndroidDir = (flavor: string = "main") =>
  `app/src/${flavor}/res`;

export const dpiValues = {
  mdpi: { folderName: "mipmap-mdpi", scale: 1 },
  hdpi: { folderName: "mipmap-hdpi", scale: 1.5 },
  xhdpi: { folderName: "mipmap-xhdpi", scale: 2 },
  xxhdpi: { folderName: "mipmap-xxhdpi", scale: 3 },
  xxxhdpi: { folderName: "mipmap-xxxhdpi", scale: 4 },
};
