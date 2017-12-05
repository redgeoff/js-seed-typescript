export default class Foo {
  protected thing: string

  constructor () {
    this.thing = 'yar'
  }

  bar () {
    return Promise.resolve(this.thing)
  }
}
