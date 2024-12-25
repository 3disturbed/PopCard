import readline from 'readline';
import fs from 'fs/promises';
import path from 'path';

const commands = {};
const users = {}; // Shared across commands

// Dynamically load command modules
const loadCommands = async () => {
  const commandDir = path.resolve('./commands');
  const files = await fs.readdir(commandDir);
  for (const file of files) {
    if (file.endsWith('.js')) {
      const commandModule = await import(path.join(commandDir, file));
      Object.assign(commands, commandModule.default);
    }
  }
};

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Loading commands...');
await loadCommands();
console.log('Commands loaded. Type "exit" to quit.');

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');
  if (command === 'exit') {
    rl.close();
    return;
  }
  if (commands[command]) {
    try {
      const result = await commands[command](args, users);
      console.log(result);
    } catch (err) {
      console.error('Error:', err.message);
    }
  } else {
    console.log(`Unknown command: ${command}`);
  }
});
