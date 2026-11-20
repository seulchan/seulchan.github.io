---
title: "Valid Anagram"
number: 242
order: 2
category: "Arrays & Hashing"
difficulty: Easy
leetcode: https://leetcode.com/problems/valid-anagram/
pattern: "Arrays & Hashing"
idea: "Use Hash Maps to count the frequency of each character in both strings in O(n) time and compare whether the two frequency maps are identical"
complexity: "O(n) time, O(n) space"
attempts:
  - { date: 2026-11-20, result: hint }
draft: false
---

```python
def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    count_s, count_t = {}, {}

    for i in range(len(s)):
        count_s[s[i]] = 1 + count_s.get(s[i], 0)
        count_t[t[i]] = 1 + count_t.get(t[i], 0)
        
    return count_s == count_t
```
