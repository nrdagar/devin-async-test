# Devin Async Test Repo

This repository is designed to test if the AI agent correctly blocks write actions while `npm install` is running in the background.

## How to Test

1. Open this repository in the agent.
2. The agent should automatically start running `npm install`.
3. **IMMEDIATELY** ask the agent to:
   > "Add a new line 'Test Successful' to the README.md file"
4. **Expected Result**:
   - The agent might acknowledge the request.
   - BUT the file will not actually update until the 30-second sleep timer in `preinstall` finishes.
