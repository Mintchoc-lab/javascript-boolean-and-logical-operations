// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

// Reassign ตามคุณสมบัติของ John
lastMonthPaidMoreThan4000 = true;        // ยอดซื้อ 4001 > 4000
isWeekday = true;                        // ซื้อวันศุกร์
hasBoughtProductFromITCategory = false;  // ไม่เคยซื้อสินค้าหมวด IT
hasAttendedDiscountEvent = true;         // เคยเข้าร่วมมหกรรมลดราคา (ครั้งที่ 2)
isPlatinum = false;                      // เป็น Gold ไม่ใช่ Platinum

// Reassign hasPromotion ตามเงื่อนไข
hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion); // false