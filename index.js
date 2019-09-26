const core = require('@actions/core');
const fs = require("fs-extra")

async function main() {
  const fileName = core.getInput('file-name', {
    required: true
  }).trim();


  const result = await fs.readFile(fileName, "utf-8");

  core.setOutput('data', result);
}

main().catch(err => core.setFailed(err.message));
