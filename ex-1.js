let isOver18 = true;
let hasCriminalBlacklist = true;
hasCriminalBlacklist = false;
let isAllow = true;
isAllow = isOver18 && !hasCriminalBlacklist

console.log(isAllow);
