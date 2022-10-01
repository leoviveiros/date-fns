/* eslint-env mocha */

import assert from 'assert'
import isExisting from './index'

describe('isValid', () => {
  it('returns true if the given date is valid', () => {
    const result = isExisting(2018, 0, 31)
    assert(result === true)
  })

  it('returns false if the given date is invalid', () => {
    const result = isExisting(2018, 1 /* Feb */, 31)
    assert(result === false)
  })
})