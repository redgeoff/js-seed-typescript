import './chai'
import './node-and-browser'
import Foo from '../lib/foo'

describe('node', () => {
  it('should test only in node', async () => {
    // TODO: insert tests that can only be tested in node
    let foo = new Foo()
    let thing = await foo.bar()
    thing.should.eql('yar')
  })
})
