/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable space-infix-ops */
const book = {
  'main title': 'Java script',
  'sub-title': 'The definitive guide',
  // eslint-disable-next-line quote-props
  'for': 'all audiences',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }
}
// let len
// book = null
// if (book) {
//   if (book.sub-title) {
//     len = book.sub-title.length
//     console.log(len)
//   } else {
//     console.log('book.sub-title undefined:')
//   }
// } else {
//   console.log('book is null')
// }

// len = book && book.sub-title && book.sub-title.length
// if (len) console.log(len)

console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])
let o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)

delete Object.prototype
let a = 1
delete this.a
function f1 () {}
delete this.f1()
