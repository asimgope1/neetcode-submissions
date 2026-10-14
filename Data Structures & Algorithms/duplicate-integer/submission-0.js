class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set(); // Create a set to track unique elements

    for (let num of nums) {
      if (seen.has(num)) {
        return true; // Duplicate found
      }
      seen.add(num);
    }

    return false; // No duplicates found
  }
}


