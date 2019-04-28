import compile from '../compile'
import { resolve } from 'path'
import { expect } from 'chai'

describe('ts-transform-img', function() {
    this.timeout(5000)
    it('should be able to compile img & generate correct path', function() {
        expect(compile(resolve(__dirname, 'fixture/*.ts'))).to.deep.equal({
            '3F-mmqKipJ': '/Users/longho/src/ts-transform-img/test/fixture/50k.png',
        })
        expect(require('./fixture/index.js').default()).to.deep.equal([
            'data:image/png;base64,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',
            '3F-mmqKipJ',
        ])
    })
})
