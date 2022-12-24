// https://leetcode.com/problems/merge-intervals/

var merge = function(intervals) {
    intervals.sort((a,b) => a[1] === b[1] && a[0] < b[0] ? a[0] - b[0] : a[1] - b[1]);
    let prev = intervals[0];
    const result = [prev];
    
    for(let curr of intervals) {
        if(curr.start <= prev.end) {
            prev.end = Math.max(start.end, prev.end)
        } else {
            result.push(curr);
            prev = curr;
        }
    }
    return result
};

// console.log(merge([ [2,6], [1,3], [8,10], [15,18] ]));
console.log(merge([ [3,6], [8,10], [2,6], [15,18] ]));