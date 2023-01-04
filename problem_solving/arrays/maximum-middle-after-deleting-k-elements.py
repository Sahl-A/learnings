# Python3 implementation of the approach
 
# Function to calculate maximum possible
# middle value of the array after
# deleting exactly k elements
def maximum_middle_value(n, k, arr):
  
    # Initialize answer as -1
    ans = -1
 
    # Calculate range of elements that can give
    # maximum possible middle value of the array
    # since index of maximum possible middle
    # value after deleting exactly k elements
    # from array will lie in between low and high
    low = (n + 1 - k) // 2
 
    high = (n + 1 - k) // 2 + k
 
    # Find maximum element of the
    # array in range low and high
    for i in range(low, high+1): 
 
        # since indexing is 1 based so
        # check element at index i - 1
        ans = max(ans, arr[i - 1])
      
    # Return the maximum possible middle
    # value of the array after deleting
    # exactly k elements from the array
    return ans

print(maximum_middle_value(5,2,[21,5,4,9,18]))