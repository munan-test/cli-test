
let arr = [
  async (next) => {
    console.log(1)
    await next()
    console.log(11)
  },
  async (next) => {
    console.log(2)
    await next()
    console.log(22)
  },
  async (next) => {
    console.log(3)
    await next()
    console.log(33)
  }
];

const callBack = async () => {
  console.log(55)
}

const tempFn = arr.reverse().reduce((a, b) => {
  return async () => { await b(a) }
}, async () => { await callBack() })

console.log(tempFn)