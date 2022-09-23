const {shuffleArray} = require('utils.js');
let example = ["bot", "2", "3", "4"]

describe('shuffleArray should', () => {
    test('should return array', () => {
        expect(shuffleArray(example)).toBe('array')
    })

    test('should return array of equal lengths as initial argument', () => {
        expect(shuffleArray(example).length).toEqual(example.length)
    })

    test('should return shuffled array', () => {
        expect(shuffleArray(example)[0-8]).not.toBe(example[0-8])
    })
})

