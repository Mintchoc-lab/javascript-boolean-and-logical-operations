// Exercise #1: Event Conditions
// Start coding here
let isOver18;
let hasCriminalBlacklist;
let isAllow;

// Reassign ตามคุณสมบัติของ James
isOver18 = false;            // อายุ 18 ปี ไม่ได้ "มากกว่า" 18
hasCriminalBlacklist = false; // ไม่เคยมีประวัติอาชญากรรม

// Reassign isAllow ตามเงื่อนไขของงาน
let isAllow = isOver18 === true && hasCriminalBlacklist === false;

console.log(isAllow);