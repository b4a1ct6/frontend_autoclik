import React, { useEffect, useState } from "react";

export default function UseWindowWidth() {
  const isClient = typeof window === "object";

  // ใช้ optional chaining operator เพื่อหลีกเลี่ยง ReferenceError
  const [windowWidth, setWindowWidth] = useState(
    isClient ? window?.innerWidth : 850
  );
  

  useEffect(() => {
    if (!isClient) {
      return () => false;
    }

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // ตั้งค่าความกว้างหน้าต่างเริ่มต้นเมื่อคอมโพเนนต์ถูกติดตั้ง
    setWindowWidth(window.innerWidth);

    // เพิ่ม event listener สำหรับการ resize หน้าต่าง
    window.addEventListener("resize", handleWindowResize);

    // นำ event listener ออกเมื่อ component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []); // ไม่ต้องใส่ dependency ใน array เนื่องจากเราใช้ window.innerWidth ที่ไม่ได้ถูก update จากการ re-render

  return windowWidth;
}
