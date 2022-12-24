// /*
// Q: Given a list of n-1 integers and these integers are in the range of 1 to n. 
// There are no duplicates in the list. One of the integers is missing in the list. 
// Write an efficient function to find the missing integer. 
// Examples: 
// Input : arr[] = [1, 2, 3, 4, 6, 7, 8] 
// Output : 5

// */ 
// // [1]
// // O(nlogn) time
// // O(1)
// function findMissing(arr) {
//   arr.sort()
//   if (arr[0] !== 1) return 1
//   for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i+1] - arr[i] > 1) {
//       return arr[i] + 1
//     }
//   }
//   return arr[arr.length-1] + 1
// }

// console.log(findMissing([1, 2, 3, 4, 6, 7, 8] ));
// console.log(findMissing([1] ));
// // console.log(findMissing([] ));
// console.log(findMissing([2,3,4,5,7,8] ));
// console.log(findMissing([3,2,1,5,6] ));
// // console.log(findMissing([1, 2, 3, 4, 6, 7, 8] ));
// console.log(findMissing([1,2,3,4] ));

/*

Q: Given an array, rotate the array to the right by k steps, where k is non-negative.
Example: 
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

*/
// time O(kn) O(1) 
// function rotateArr(arr, k) {
//   for (let i = 1; i <= k; i++) {
//     arr.unshift(arr.pop())
//   }
//   return arr
// }

// console.log(rotateArr([1,2,3,4,5,6,7], 14));

public List<Review> getReviewsByUser(User user) {
  List<Review> ReviewList = new ArrayList<Review>();
  User loggedUser = UserSession.getInstance().getLoggedUser();
  boolean isFollower = false;
  if (loggedUser != null) {
      for (User follower : user.getFollowers()) {
          if (follower.equals(loggedUser)) {
              isFollower = true;
              break;
          }
      }
      if (isFollower) {
          ReviewList = ReviewDAO.findReviewsByUser(user);
}
      return ReviewList;
  } 
}
const isLogged = UserSession.getInstance().getLoggedUser()

const getReviewByUser()