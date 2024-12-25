// File: UnixTimeMan.js
class UnixTimeMan {
  /**
   * Returns the current Unix timestamp (seconds since epoch).
   * @returns {number} Current Unix timestamp.
   */
  static now() {
    return Math.floor(Date.now() / 1000);
  }

  /**
   * Returns a Unix timestamp for the current time plus the given seconds.
   * @param {number} seconds - Seconds to add to the current timestamp.
   * @returns {number} Future Unix timestamp.
   */
  static nowPlus(seconds) {
    return this.now() + seconds;
  }

  /**
   * Returns the number of seconds since the given Unix timestamp.
   * @param {number} uts - Unix timestamp to calculate from.
   * @returns {number} Seconds since the given timestamp.
   */
  static since(uts) {
    return this.now() - uts;
  }

  /**
   * Returns the number of seconds until the given Unix timestamp.
   * @param {number} uts - Unix timestamp to calculate until.
   * @returns {number} Seconds until the given timestamp.
   */
  static until(uts) {
    return uts - this.now();
  }

  /**
   * Returns whether the given Unix timestamp has passed.
   * @param {number} uts - Unix timestamp to check.
   * @returns {boolean} True if the timestamp has passed, otherwise false.
   */
  static passed(uts) {
    return this.now() >= uts;
  }

  /**
   * Returns a formatted string representation of the Unix timestamp.
   * Format: Day Month Year (e.g., "25 December 2024").
   * @param {number} uts - Unix timestamp to format.
   * @returns {string} Formatted date string.
   */
  static format(uts) {
    const date = new Date(uts * 1000); // Convert to milliseconds
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
}

export default UnixTimeMan;

// Usage Examples (in another file):
// import UnixTimeMan from './UnixTimeMan.js';
// console.log(UnixTimeMan.now()); // Current Unix timestamp
// console.log(UnixTimeMan.nowPlus(3600)); // Unix timestamp for 1 hour from now
// console.log(UnixTimeMan.since(1700000000)); // Seconds since Unix timestamp 1700000000
// console.log(UnixTimeMan.until(1700000000)); // Seconds until Unix timestamp 1700000000
// console.log(UnixTimeMan.passed(1700000000)); // Whether Unix timestamp 1700000000 has passed
// console.log(UnixTimeMan.format(1700000000)); // Formatted date of Unix timestamp 1700000000
