var numbers = [2, 1, 7, 5, 10, 4, 3];

function bubbleSort(numbers){
  var limit = numbers.length; //limit the number of loops
  var i;
  var j;
  var temp;

  while (limit > 0){
    for (i = 0, j = 1; i < limit; i++, j++){
      if (numbers[i] > numbers[j]){

        temp = numbers[i];
        //console.log('this is temp', temp);
        //console.log('this is numbers[i]', numbers[i]);

        numbers[i] = numbers[j];
        //console.log('this is numbers[i]', numbers[i]);
        //console.log('this is numbers[j]', numbers[j]);

        numbers[j] = temp;
        //console.log('this is numbers[j]', numbers[j]);
        //console.log('this is temp', temp);
      }
    }
  }
  return numbers;
}
console.log(bubbleSort(numbers));