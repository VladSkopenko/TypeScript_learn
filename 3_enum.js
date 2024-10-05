var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
// 0 1 2
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
