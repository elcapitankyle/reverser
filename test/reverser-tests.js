const expect = require('chai').expect,
reverser = require('../src/reverser');

describe('reverser', () => {
    it('should reverse a line of words', () => {
        const result = reverser.reverse('This is a string');
        expect(result).to.have.string('string a is This');
    });
    it('should reverse 5 lines with up to 25 words each', () => {
        throw new Error("Fail");
        //load a the small dataset file
    });
    it('should reverse 100 lines with up to 1000 words each', () => {
        throw new Error("Fail");
        //load the large dataset
    });
});