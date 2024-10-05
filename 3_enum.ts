enum Membership {
  Simple,
  Standard,
  Premium,
}
// 0 1 2
const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)