// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday ="Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday";
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true; 
let isPlatinum;

let hasPromotion;



// ผู้ซื้อสินค้าคนหนึ่งชื่อว่า John มีคุณสมบัติดังนี้

lastMonthPaidMoreThan4000 = 4000;
isWeekday = "friday";
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

console.log(hasPromotion && (lastMonthPaidMoreThan4000 > 4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent && !hasAttendedDiscountEvent) || (isPlatinum));