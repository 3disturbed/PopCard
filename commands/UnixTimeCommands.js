import UnixTimeMan from '../UnixTimeMan.js';

export default {
  now: () => `Current Unix timestamp: ${UnixTimeMan.now()}`,
  nowPlus: (args) => {
    if (args.length < 1 || isNaN(args[0])) return 'Usage: nowPlus <seconds>';
    return `Unix timestamp for now plus ${args[0]} seconds: ${UnixTimeMan.nowPlus(Number(args[0]))}`;
  },
  since: (args) => {
    if (args.length < 1 || isNaN(args[0])) return 'Usage: since <UTS>';
    return `Seconds since ${args[0]}: ${UnixTimeMan.since(Number(args[0]))}`;
  },
  until: (args) => {
    if (args.length < 1 || isNaN(args[0])) return 'Usage: until <UTS>';
    return `Seconds until ${args[0]}: ${UnixTimeMan.until(Number(args[0]))}`;
  },
  passed: (args) => {
    if (args.length < 1 || isNaN(args[0])) return 'Usage: passed <UTS>';
    return `Has ${args[0]} passed? ${UnixTimeMan.passed(Number(args[0]))}`;
  },
  format: (args) => {
    if (args.length < 1 || isNaN(args[0])) return 'Usage: format <UTS>';
    return `Formatted date: ${UnixTimeMan.format(Number(args[0]))}`;
  },
};
