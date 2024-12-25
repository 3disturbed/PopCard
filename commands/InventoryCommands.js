export default {
  addItem: (args, users) => {
    const username = args[0];
    const item = args.slice(1).join(' ');
    if (!users[username]) return `User '${username}' not found.`;
    users[username].data.inventory.push(item);
    return `Item '${item}' added to user '${username}' inventory.`;
  },
  removeItem: (args, users) => {
    const username = args[0];
    const item = args.slice(1).join(' ');
    if (!users[username]) return `User '${username}' not found.`;
    const index = users[username].data.inventory.indexOf(item);
    if (index === -1) return `Item '${item}' not found in inventory.`;
    users[username].data.inventory.splice(index, 1);
    return `Item '${item}' removed from user '${username}' inventory.`;
  },
  listInventory: (args, users) => {
    const username = args[0];
    if (!users[username]) return `User '${username}' not found.`;
    return `Inventory for user '${username}': ${users[username].data.inventory.join(', ')}`;
  },
};
