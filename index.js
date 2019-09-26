const core = require('@actions/core');
const fs = require("fs-extra")

async function main() {
  const fileName = core.getInput('file-name', {
    required: true
  }).trim();


  const result = await fs.open(fileName, "r");

  core.setOutput('data', data);
}

main().catch(err => core.setFailed(err.message));
