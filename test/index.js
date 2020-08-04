import { assert } from 'chai'

import { AutoplayController, MeasureController } from '../src'

const controllers = [AutoplayController, MeasureController]

describe('Library', function () {
  it('exports constructor functions', () => {
    const types = controllers.map((func) => typeof func)
    assert(types.every((t) => t === 'function'))
  })
})
