//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.subsetSums(arr,n);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
*/

class Solution {
    subsetSums(arr,n){
       //code here
       const result=[];
       arr=arr.sort((a,b)=>a-b)
       
       function recCall(id, sum){
           if(id>=n){
               result.push(sum)
               return
           }
           result.push(sum)
           
           for(let i=id; i<arr.length; i++){
                     sum+=arr[i]
                     recCall(i+1, sum)
                     sum-=arr[i]
                   
               
           }
       }
       recCall(0,0)
       return result.sort((a,b)=>a-b);
       
    }
}
