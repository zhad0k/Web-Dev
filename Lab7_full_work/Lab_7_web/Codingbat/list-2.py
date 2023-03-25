def count_evens(nums):

  count = 0
  for n in nums:
    count -= n%2-1
  return count

def big_diff(nums):

  return max(nums) - min(nums)

def centered_average(nums):

  nums.sort()
  return sum(nums[1:-1]) / (len(nums) - 2)

def sum13(nums):

  while 13 in nums:
    if nums.index(13) < len(nums)-1:
      nums.pop(nums.index(13)+1)
    nums.pop(nums.index(13))
    
  return sum(nums)

def sum67(nums):

  count = 0
  blocked = False
  
  for n in nums:
    if n == 6:
      blocked = True
      continue
    if n == 7 and blocked:
      blocked = False
      continue
    if not blocked:  
      count += n
  
  return count

def has22(nums):

  for i,v in enumerate(nums[:-1]):
    if v == 2 and nums[i+1] == 2:
      return True
  return False
