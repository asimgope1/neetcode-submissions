class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map(); // Create a hashmap to store indices

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      // Check if the complement exists in the map
      if (map.has(complement)) {
        return [map.get(complement), i]; // Return indices of the two numbers
      }

      // Add the current number and its index to the map
      map.set(nums[i], i);
    }

    // Return empty array if no solution is found
    return [];
  }
}

// Example usage

