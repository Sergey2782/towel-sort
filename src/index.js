
// You should implement your task here.

module.exports = function towelSort(matrix){
    if(arguments.length == 0 || matrix.length == 0){
        return [];
    };
    let arr = [];
     for(let i =0; i < matrix.length; i++){
         if(i%2 ==0){
           arr.push(matrix[i]);
       } else if (i%2 !=0){  
            let arr_item_rev = matrix[i].reverse();
            arr.push(arr_item_rev);
            console.log(arr);
     }
     else continue;
 };
        var result = [].concat(...arr);
        return result;
 
}
