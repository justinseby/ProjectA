//sequential model
const model=tf.sequential();

mode.add(
    tf.layers.simpleRNN({
        //only needed for first layer
        inputShape: [20, 4],
        //the number of nuerons or units
        units: 20,
        //weight
        recurrentInitializer: 'GlorotNormal'

    })
);