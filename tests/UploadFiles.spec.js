const { expect } = require('@playwright/test');
// const { error } = require('console');
const fs = require('fs');
const path = require('path');
import { test as base } from '@playwright/test';

const test = base.extend({
  myPageUrl: async ({}, use, testInfo) => {
    // Default URL
    let url = 'https://qa-automation-practice.netlify.app/file-upload.html';

    // Override based on test title or tags if needed
    if (testInfo.title.includes('Multiple File Upload')) {
      url = 'https://davidwalsh.name/demo/multiple-file-upload.php';
    }

    await use(url);
  }
});

test.beforeEach(async ({ page, myPageUrl }, testInfo) => {
  console.log(`Opening ${myPageUrl} for test: ${testInfo.title}`);
  await page.goto(myPageUrl);
});

async function createTxtFile(fileName, content) {
  const filePath = path.join(__dirname, '..', 'uploads', fileName);

  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

  try {
    await fs.promises.writeFile(filePath, content);
  } catch (error) {
    console.error('Error while creating file:', err);
    throw err;
  }
  return filePath;
}

async function deleteFile(fileName) {
  const filePath = path.join(__dirname, '..', 'uploads', fileName);
  try {
    await fs.promises.unlink(filePath);
  } catch (error) {
    if (err.code == 'ENOENT') {
      console.warn('File not found');
    } else {
      console.error('Error while deleting file:', err);
      throw err;
    }
  }
}

test('Upload files test', async ({ page }) => {
  const filePath = await createTxtFile('file.txt', 'Hello, world!');
  // await new Promise(resolve => setTimeout(resolve, 3000));
  const uploadMessage = page.locator('#file_upload_response');
  await page.setInputFiles('input[type="file"]', filePath);
  await page.click('button[type="submit"]');
  await expect(uploadMessage).toHaveText(
    `You have successfully uploaded "${path.basename(filePath)}"`,
  );
  // await new Promise(resolve => setTimeout(resolve, 3000));
  await deleteFile('file.txt');
  await page.waitForTimeout(5000);
});

test.only('Multiple File Upload', async ({ page }) => {
//   const filesToUpload = page.locator('#filesToUpload');
//   const filesToUploadHandle = await filesToUpload.elementHandle();
  const noFilesSelected = page.locator('#fileList li:nth-child(1)');
  const filesToUpload = '#filesToUpload';
  const arrayOfFiles = [];
  for (let i = 0; i < 3; i++) {
    let filePath = path.join(__dirname, '..', 'uploads', `my_file${i}.txt`);
    await fs.promises.writeFile(filePath, 'SOME DATA');
    arrayOfFiles.push(filePath);
  }
  console.log(arrayOfFiles);
  await page.setInputFiles(filesToUpload, arrayOfFiles);

  for (let i = 0; i < 3; i++) {
    expect(await page.locator(`#fileList li:nth-child(${i+1})`)).toHaveText(`my_file${i}.txt`);
  };
//   await page.waitForTimeout(3000);
  await page.setInputFiles(filesToUpload, []);
//   await page.waitForTimeout(3000);

  expect ( await noFilesSelected).toHaveText('No Files Selected');
});
