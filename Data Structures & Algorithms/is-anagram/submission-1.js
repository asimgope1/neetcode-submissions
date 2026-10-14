class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // Check if lengths are different
    if (s.length !== t.length) {
      return false;
    }

    // Convert strings to arrays, sort them, and compare
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
  }
}
