// define function
function simpleadd(input1, input2){

    //tidy is used to free up the GPU memory when the function returns
    return tf.tidy(() => {
        const x1= input1;
        const x2= input2;
        const y= x1.add(x2);
        return y

    }) ;

}

// New 1d array
const data1= tf.tensor1d([4, 6, 8, 5]);
const data2= tf.tensor1d([41, 16, 28, 15]);

// using model
const result = simpleadd(data1,data2);
result.print();
