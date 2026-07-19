# Exercise: Copilot in Action - Customer Feedback And Issue Response Summary

## Exercise Overview

เราจะใช้ Copilot Chat ช่วยทีม Branding, Customer Care และ Quality สรุป feedback และ issue log แบบสมมติ เพื่อจัดกลุ่มประเด็น เช็คระดับความสำคัญของเรื่อง ร่างข้อความสำหรับทีม และเตรียม issue response summary ใน Microsoft Word

## Prerequisites

1. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร
2. ดาวน์โหลด [customer_feedback_issue_response.zip](https://github.com/teerasej/ai-for-everyone/raw/unilever-1/files/copilot-in-action/customer_feedback_issue_response.zip)
3. แตกไฟล์ zip เพื่อใช้ `customer_feedback_log.xlsx` และ `issue_response_guideline.docx`
4. หากหน้าจอมีปุ่ม **Work IQ** ให้ปิดปุ่มนี้ เพื่อใช้ Web-grounded chat และไฟล์ที่เราแนบเอง

> Sample files เป็นข้อมูลสมมติ ไม่มีชื่อ เบอร์โทร อีเมล ที่อยู่ หรือข้อมูลส่วนบุคคลจริง ห้ามเติมข้อมูลส่วนบุคคลหรือสาเหตุที่ไม่มีในไฟล์

## Scenario 1: เตรียม Weekly Feedback And Issue Response Summary

ทีม Brand และ Customer Care ต้องสรุป feedback เพื่อประชุมประจำสัปดาห์ เราจะใช้ Copilot ช่วยจัดกลุ่มประเด็น ตรวจ issue ที่ควร escalate งานต่อ และร่างข้อความสำหรับสื่อสารกับทีมที่เกี่ยวข้อง

## Practice 1: สรุป feedback themes จาก log

#### Steps

1. เปิด Chat ใหม่
2. เลือกปุ่ม **+** แล้วเลือก **Upload images or files**
3. อัพโหลด `customer_feedback_log.xlsx`
4. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะ workbook ที่แนบมา
สรุป customer feedback themes ภาษาไทยแบบกระชับ

โครงสร้าง:
1. Top feedback themes 4 bullets
2. ตาราง Feedback Theme | Count | Severity signal | What to verify
3. Issues ที่ควร escalate 3 รายการ
4. Information needed 3 ข้อ

ห้ามเติมข้อมูลส่วนบุคคล สาเหตุ หรือ claim ที่ workbook ไม่ได้ให้ข้อมูล
แยก Fact | Interpretation | Information needed ให้ชัดเจน
```

5. ตรวจจำนวนรายการ feedback theme อย่างน้อย 1 theme กับ workbook

## Practice 2: ใช้ guideline เพื่อปรับ response approach

#### Steps

1. ใช้ Chat เดิม แล้วอัพโหลด `issue_response_guideline.docx` เพิ่ม
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะ workbook และ guideline ที่แนบมา
จับคู่ feedback themes กับ response approach ที่เหมาะสมจาก guideline

โครงสร้าง:
1. ตาราง Theme | Relevant guideline | Suggested response approach | Escalation needed
2. ประเด็นที่ต้องถาม Quality หรือ Brand เพิ่ม 4 ข้อ
3. ข้อควรระวังเรื่อง privacy และ responsible AI 3 bullets

ห้ามสร้างข้อความตอบลูกค้ารายบุคคล และห้ามเติมข้อมูลส่วนบุคคลหรือสาเหตุที่ไม่มีในไฟล์
```

3. ตรวจว่า response approach อ้างอิง guideline จริง
4. ตรวจว่า output ไม่สร้างคำตอบถึงลูกค้ารายบุคคล

## Practice 3: ร่างข้อความให้ทีมภายในตรวจสอบ

#### Steps

1. เลือก 1 บทบาทจาก Brand, Customer Care หรือ Quality
2. วาง prompt ของบทบาทที่เลือก แล้วตรวจผลลัพธ์

### ตัวเลือก A: Brand

```text
จากไฟล์ที่แนบมา ร่างข้อความ Microsoft Teams สำหรับทีม Brand
สรุป themes ที่ควรติดตาม, คำถามที่ต้องตรวจสอบ และ next step ก่อน weekly review
น้ำเสียงเป็นมืออาชีพ กระชับ และไม่สรุปสาเหตุที่ไม่มีหลักฐาน
```

### ตัวเลือก B: Customer Care

```text
จากไฟล์ที่แนบมา สร้าง talking points 5 ข้อสำหรับทีม Customer Care
เน้น response consistency, escalation criteria และข้อมูลที่ต้องเก็บเพิ่ม
ห้ามสร้างคำตอบถึงลูกค้ารายบุคคล
```

### ตัวเลือก C: Quality

```text
จากไฟล์ที่แนบมา สร้าง questions 5 ข้อสำหรับทีม Quality
เน้น issue ที่ควรตรวจสอบต่อ, source data ที่เกี่ยวข้อง และ information gaps
แยก Facts | Questions | Next step และไม่คาดเดาสาเหตุ
```

3. ตรวจว่า output เหมาะกับบทบาทที่เลือก
4. ตรวจว่าไม่มีข้อมูลส่วนบุคคลหรือ claim เกินไฟล์

## Practice 5: เตรียม Word-ready issue response summary

#### Steps

1. ใช้ผลลัพธ์ที่ตรวจแล้วจาก Practice 1-4
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะไฟล์ที่แนบมาและผลลัพธ์ที่ตรวจแล้วจาก Chat นี้
สร้าง Word-ready summary ภาษาไทยสำหรับ Weekly Feedback And Issue Response Summary

โครงสร้างเอกสาร:
1. Title 1 บรรทัด
2. Executive summary ไม่เกิน 4 bullets
3. Feedback themes จาก workbook 1 ตาราง
4. Response approach ที่อ้างอิง guideline 1 ตาราง
5. Escalation items และ action items
6. Privacy และ responsible AI reminder 3 bullets

ให้จัดรูปแบบคำตอบให้พร้อมคัดลอกไปวางใน Word
ห้ามเติมข้อมูลส่วนบุคคล สาเหตุ หรือ claim ที่ไม่มีในไฟล์
```

3. ตรวจว่า Word-ready summary มี privacy reminder หรือข้อจำกัดของข้อมูล
4. ตรวจว่าเอกสารไม่สร้างคำตอบถึงลูกค้ารายบุคคล
5. ใช้ prompt ต่อไปนี้เพื่อให้สร้างเอกสาร Microsoft Word

```text
สร้างเอกสาร Microsoft Word ตาม outline ที่มี
```

## Checkpoint

- สรุป feedback themes จาก workbook ได้
- ใช้ guideline เพื่อปรับ response approach ได้โดยไม่แต่งข้อมูลเพิ่ม
- ข้อความตามบทบาทเหมาะกับ Brand, Customer Care หรือ Quality
- ผลวิเคราะห์มี issue priority, escalation items และ action items ครบ
- Word-ready summary พร้อมนำไปใช้ต่อหรือคัดลอกไปวางใน Word ได้
- ไม่มีข้อมูลส่วนบุคคล สาเหตุ หรือ claim ที่ไม่มีในไฟล์

## Expected Output

- Feedback themes summary 1 ชุด
- Response approach ที่อ้างอิง guideline 1 ชุด
- ข้อความตามบทบาทที่เลือก 1 ชิ้น
- Word-ready issue response summary 1 ชุด
