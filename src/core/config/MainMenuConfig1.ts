const DocMenuConfig = [
  {
    pages: [
      // {
      //   heading: "dashboard",
      //   route: "/dashboard",
      //   svgIcon: "media/icons/duotune/general/gen025.svg",
      // },
      // // {
      // //   sectionTitle: "จัดการระบบ",
      // //   route: "/manage-system",
      // //   svgIcon: "media/icons/duotune/ecommerce/ecm007.svg",
      // //   icon: "bi bi-briefcase-fill",
      // //   sub: [
      // //     {
      // //       heading: "กำหนดงวดบัญชี",
      // //       route: "/manage-system/op1",
      // //     },
      // //     {
      // //       heading: "ปรับปรุงยอดยกมา",
      // //       route: "/manage-system/op2",
      // //     },
      // //     {
      // //       heading: "คำนวณสร้างยอดยกไป",
      // //       route: "/manage-system/op3",
      // //     },
      // //   ],
      // // },
      // //---
      // {
      //   sectionTitle: "คลังสินค้า",
      //   route: "/warehouse",
      //   svgIcon: "media/icons/duotune/communication/com006.svg",
      //   icon: "bi bi-box-seam",
      //   sub: [
      //     {
      //       heading: "คลังสินค้า",
      //       route: "/warehouse/WH1",
      //     },
      //     {
      //       heading: "เพิ่มกลุ่มสินค้าหลัก",
      //       route: "/warehouse/WH2",
      //     },
      //     {
      //       heading: "เพิ่มกลุ่มสินค้ารอง",
      //       route: "/warehouse/WH3",
      //     },
      //     {
      //       heading: "Product Library",
      //       route: "/warehouse/WH4",
      //     },
      //     {
      //       heading: "จัดการสินค้าหมดอายุ",
      //       route: "/warehouse/WH5",
      //     },
      //     {
      //       heading: "ตัดสินค้าหมดอายุ / ชำรุด / สูญหาย",
      //       route: "/warehouse/WH6-1",
      //     },
      //     {
      //       heading: "อนุมัติตัดสินค้าหมดอายุ / ชำรุด / สูญหาย",
      //       route: "/warehouse/WH6-2",
      //     },
      //     {
      //       heading: "เพิ่มจำนวนสินค้าเข้าระบบ",
      //       route: "/warehouse/WH6-3",
      //     },
      //     {
      //       heading: "อนุมัติเพิ่มจำนวนสินค้าเข้าระบบ",
      //       route: "/warehouse/WH6-4",
      //     },
      //     // {
      //     //   heading: "Report",
      //     //   route: "/warehouse/WH7",
      //     // },
      //   ],
      // },
      // //---
      // {
      //   sectionTitle: "ซื้อ",
      //   route: "/purchase",
      //   svgIcon: "media/icons/duotune/technology/teh004.svg",
      //   icon: "bi bi-cart4",
      //   sub: [
      //     {
      //       heading: "เพิ่มผู้ขาย / ผู้รับเงิน",
      //       route: "/purchase/PU1",
      //     },
      //     {
      //       heading: "สร้างใบสั่งซื้อสินค้า",
      //       route: "/purchase/PU2-1",
      //     },
      //     {
      //       heading: "อนุมัติใบสั่งซื้อสินค้า",
      //       route: "/purchase/PU2-2",
      //     },
      //     {
      //       heading: "รับสินค้า - รอดำเนินการ",
      //       route: "/purchase/PU2-3",
      //     },
      //     {
      //       heading: "อนุมัติรับสินค้าเข้าคลัง",
      //       route: "/purchase/PU2-4",
      //     },
      //   ],
      // },
      // //---
      // {
      //   sectionTitle: "ขาย",
      //   route: "/sale",
      //   svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
      //   icon: "bi bi-cash-coin",
      //   sub: [
      //     {
      //       heading: "เพิ่มผู้ซื้อ / ผู้จ่ายเงิน",
      //       route: "/sale/SA1",
      //     },
      //     {
      //       heading: "สร้างใบขายส่ง",
      //       route: "/sale/SA2-1",
      //     },
      //     {
      //       heading: "อนุมัติขายส่ง",
      //       route: "/sale/SA2-2",
      //     },
      //     {
      //       heading: "สร้างใบขายปลีก",
      //       route: "/sale/SA3-1",
      //     },
      //     {
      //       heading: "อนุมัติขายปลีก",
      //       route: "/sale/SA3-2",
      //     },
      //     // {
      //     //   heading: "สร้างใบโอนสินค้าออก",
      //     //   route: "/sale/SA4-1",
      //     // },
      //     // {
      //     //   heading: "อนุมัติโอนสินค้าออก",
      //     //   route: "/sale/SA4-2",
      //     // },
      //     {
      //       heading: "POS",
      //       route: "/sale/SA5",
      //     },
      //     {
      //       heading: "สรุปขายปลีกประจำวัน",
      //       route: "/sale/daily-retail-summary",
      //     },
      //     {
      //       heading: "ราคาขาย / ป้ายราคา",
      //       route: "/sale/price-tag",
      //     },
      //   ],
      // },
      // //---
      // {
      //   sectionTitle: "โอนสินค้า",
      //   route: "/transfer-product",
      //   svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
      //   icon: "bi bi-arrow-left-right",
      //   sub: [
      //     {
      //       heading: "เพิ่มผู้รับโอน",
      //       route: "/transfer-product/TP1",
      //     },
      //     {
      //       heading: "โอนสินค้าออก",
      //       route: "/transfer-product/TP2-1",
      //     },
      //     {
      //       heading: "อนุมัติการโอนสินค้าออก",
      //       route: "/transfer-product/TP2-2",
      //     },
      //     {
      //       heading: "โอนสินค้าเข้า",
      //       route: "/transfer-product/TP3-1",
      //     },
      //     {
      //       heading: "อนุมัติการโอนสินค้าเข้า",
      //       route: "/transfer-product/TP3-2",
      //     },
      //   ],
      // },
      // //---
      // {
      //   sectionTitle: "รายงาน",
      //   route: "/report",
      //   svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
      //   icon: "bi bi-file-bar-graph",
      //   sub: [
      //     {
      //       heading: "สรุปยอดขาย / ลูกค้า",
      //       route: "/report/summary-sales-customer-report",
      //     },
      //     {
      //       heading: "ยอดขาย Weekly",
      //       route: "/report/summary-weekly-report",
      //     },
      //     {
      //       heading: "สินค้าขายดี",
      //       route: "/report/summary-best-seller-report",
      //     },
      //     {
      //       heading: "สรุป Transaction",
      //       route: "/report/summary-transaction-report",
      //     },
      //     {
      //       heading: "Product Movement",
      //       route: "/report/product-movement",
      //     },
      //     {
      //       heading: "Stock Movement",
      //       route: "/report/summary-warehouse-report",
      //     },
      //     // {
      //     //   heading: "Product Movement",
      //     //   route: "/report/product-movement",
      //     // },
      //   ],
      // },
      //---
      {
        sectionTitle: "การตั้งค่า",
        route: "/setting",
        svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
        icon: "bi bi-gear",
        sub: [
          {
            heading: "ข้อมูลร้านค้า",
            route: "/setting/shop-info",
          },
          {
            heading: "จัดการสาขา",
            route: "/setting/company-branch",
          },
          {
            heading: "ผู้ใช้งานระบบ",
            route: "/setting/user-profile",
          },
          {
            heading: "เปลี่ยนรหัสผ่าน",
            route: "/setting/change-password",
          },
        ],
      },
    ],
  },
];

export default DocMenuConfig;
