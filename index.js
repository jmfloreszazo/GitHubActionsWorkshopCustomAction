const core = require('@actions/core');
const github = require('@actions/github');

try {
  const greeting = core.getInput('greeting');
  console.log({greeting});
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`Event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}