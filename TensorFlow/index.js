// Shape our tensors by 4 colum and 2 rows
const shape=[4,2];
// feed data into tensor
const data= tf.tensor([4,6,44,54,555,45,41,4], shape);

//set variables with zzero method
const data2=tf.variable(tf.zeros([8]));

//Print data
data.print();

// change variable valies
data2.assign(tf.tensor1d([4, 5, 6, 7, 8, 9, 10, 11]));

data2.print()

//Craete 2 new one dimentional tensors
const data3= tf.tensor([4,6,44,54,555,45,41,4]);
const data4= tf.tensor([14,26,4,4,5,5,1,4]);

//print those
data3.print();
data4.print();

// adding and mul then print
data3.add(data4).print();
data3.mul(data4).print();

