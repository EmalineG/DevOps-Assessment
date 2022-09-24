const {shuffleArray} = require('./utils.js');


describe('shuffleArray should', () => {

    test('should return object', () => {
        //example array
        let example = [1,2,3,4]

        //this should pass if the type returned is object
        //btw i initally put array here, but it said it was type object
        //dont know why 
        expect(typeof shuffleArray(example)).toBe('object')
    })

    test('should return shuffled array thats same length as before it was shuffled', () => {
        let example = [1,2,3,4]
        expect(shuffleArray(example).length).toEqual(example.length)
    })

    test('should return array in which items are not in same order after shuffling', () => {
        //example array
        let example = [1,2,3,4]
        //shuffle array and store result in new variable
        let result = shuffleArray(example)

        // this is the test and should pass
        expect(example).not.toBe(result)
    })

    test('make return shuffled array w/ same items', () => {
    
        //example array
        let example = [1,2,3,4]
        //shuffle example array and store result in new variable
        let result = shuffleArray(example)
        //set samesies to true, as they should be the same
        let samesies = true

        // this is the test, iterate through results
        for(let i=0; i< result.length; i++){
            // see if any value in results is not in example
            if(example.includes(result[i]) === false){
                // if thats the case, set samesies to false
                samesies = false
                return
            }
        }  
        //if result array still contains all same values from in example, 
        //this should pass
        expect(samesies).toBe(true)
      })
})
