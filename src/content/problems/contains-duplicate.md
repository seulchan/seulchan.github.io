---
title: "Contains Duplicate"
number: 217
order: 1
category: "Arrays & Hashing"
difficulty: Easy
leetcode: https://leetcode.com/problems/contains-duplicate/
pattern: "Arrays & Hashing"
idea: "Use a Hash Set to track seen elements for O(1) average-time lookup while iterating through the array once."
complexity: "O(n) time, O(n) space"
attempts:
  - { date: 2026-11-20, result: solo }
draft: false
---

```python
def hasDuplicate(self, nums: List[int]) -> bool:
    seen = set()
    
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    
    return False
```
