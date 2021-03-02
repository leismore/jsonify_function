import { assert }           from 'chai';
import { jsonify_function } from '../src/index';

function test_func(para:string):string
{
    return para;
}

const stringified_test_func = '{"jsonified":"function test_func(para) {\\n    return para;\\n}"}';

describe('jsonify_function', function(){
    it('should return a stringified function', function(){
        let text = jsonify_function(test_func);
        assert(text === stringified_test_func);
    });
});