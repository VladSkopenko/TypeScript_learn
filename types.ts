const message: string = 'Hello Typescript'

const isFetching: boolean = true
const isLoading: boolean = false

const int:number = 45
const float: number = 4.2
const num: number = 3e10

const numberArrayFirst: number[] = [1, 1, 2, 3, 5, 8, 13, 21]
const numberArraySecond: Array<number> = [1, 1, 2, 3, 5]

const words: string[] = ['Hello', 'Typescripts']

// Tuple
const contact: [string, number] = ['Vlad', 123123]

// Any
let variable: any = 42
variable = []
variable = 'new value'

console.log(message)
console.log(words)

// =====
function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Vlad')

// Never
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {
  }
}

// Type

type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = "1234"

type SomeType = string | null | undefined