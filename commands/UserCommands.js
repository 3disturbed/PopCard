import crypto from 'crypto';

const users = {};

// Utility to hash passwords
const hashPassword = (password) => crypto.createHash('sha256').update(password).digest('hex');

export default {
  createUser: (args) => {
    if (args.length < 4) return 'Usage: createUser <username> <password> <email> <discordID>';
    const [username, password, email, discordID] = args;
    if (users[username]) return `User '${username}' already exists.`;
    users[username] = {
      password: hashPassword(password),
      email,
      discordID,
      data: { inventory: [] },
    };
    return `User '${username}' created.`;
  },
  readUser: (args) => {
    const username = args[0];
    if (!users[username]) return `User '${username}' not found.`;
    return { ...users[username], password: '******' };
  },
  updateUser: (args) => {
    if (args.length < 2) return 'Usage: updateUser <username> <newUsername>';
    const [username, newUsername] = args;
    if (!users[username]) return `User '${username}' not found.`;
    if (users[newUsername]) return `User '${newUsername}' already exists.`;
    users[newUsername] = { ...users[username], username: newUsername };
    delete users[username];
    return `User '${username}' updated to '${newUsername}'.`;
  },
  deleteUser: (args) => {
    const username = args[0];
    if (!users[username]) return `User '${username}' not found.`;
    delete users[username];
    return `User '${username}' deleted.`;
  },
};
