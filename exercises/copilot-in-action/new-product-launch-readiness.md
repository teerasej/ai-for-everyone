# Exercise: Copilot in Action - New Product Launch Readiness Brief

## Exercise Overview

เราจะใช้ Copilot Chat ช่วยทีม cross-functional เตรียม launch readiness brief จากไฟล์ tracker และ launch brief แบบสมมติ ตั้งแต่สรุปสถานะ หา risk, เขียนข้อความติดตามงาน ไปจนถึงเตรียม Excel-ready action tracker

## Prerequisites

1. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร
2. ดาวน์โหลด [new_product_launch_readiness.zip](https://github.com/teerasej/ai-for-everyone/raw/unilever-1-premium-basic-agenda-exercises/files/copilot-in-action/new_product_launch_readiness.zip)
3. แตกไฟล์ zip เพื่อใช้ `launch_readiness_tracker.xlsx` และ `product_launch_brief.docx`
4. หากหน้าจอมีปุ่ม **Work IQ** ให้ปิดปุ่มนี้ เพื่อใช้ Web-grounded chat และไฟล์ที่เราแนบเอง

> Sample files เป็นข้อมูลสมมติสำหรับ workshop เท่านั้น อย่าเติม brand จริง retailer จริง budget จริง launch date จริง หรือสาเหตุที่ไม่มีในไฟล์

## Scenario 1: เตรียม Launch Readiness Brief

ทีม Marketing ต้องประชุมกับ Sales, Supply Chain, Finance และ HR เพื่อดูความพร้อมก่อน launch เราจะใช้ Copilot ช่วยสรุปข้อมูลจาก tracker และ brief ให้พร้อมนำไปคุยกับทีม

## Practice 1: สรุป launch context จากไฟล์ brief

#### Steps

1. เปิด Chat ใหม่
2. เลือกปุ่ม **+** แล้วเลือก **Upload images or files**
3. อัพโหลด `product_launch_brief.docx`
4. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะข้อมูลจากไฟล์ Word ที่แนบมา
สรุป launch context ภาษาไทยสำหรับทีม cross-functional

โครงสร้าง:
1. Launch objective 2 bullets
2. Target audience 2 bullets
3. Channel plan 3 bullets
4. Known constraints 3 bullets
5. Open decisions 3 ข้อ

ห้ามเติม brand จริง budget จริง launch date จริง retailer จริง หรือสาเหตุที่ไฟล์ไม่ได้ให้ข้อมูล
```

5. ตรวจว่าสรุปตรงกับเนื้อหาในไฟล์ brief
6. ถ้าคำตอบเติมบริบทเกินไฟล์ ให้ถามต่อเพื่อแก้ไข

```text
ตรวจคำตอบก่อนหน้าอีกครั้ง
ลบข้อมูลที่ไฟล์ไม่ได้สนับสนุน และแยก Fact | Open decision | Information needed ให้ชัดเจน
```

## Practice 2: วิเคราะห์ readiness tracker

#### Steps

1. ใช้ Chat เดิม แล้วอัพโหลด `launch_readiness_tracker.xlsx` เพิ่ม
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะไฟล์ Word และ Excel ที่แนบมา
วิเคราะห์ launch readiness tracker แบบกระชับ

งานที่ต้องทำ:
1. สรุปจำนวน workstreams ตาม Status
2. ระบุ workstreams ที่เป็น High risk หรือ Blocked
3. ระบุ dependency ที่อาจกระทบการประชุมครั้งถัดไป
4. สร้าง questions for owners 5 ข้อ
5. สร้าง action items ตาราง Owner | Action | Due | Source

แยก Fact | Interpretation | Information needed ให้ชัดเจน
ห้ามเติมวันที่จริง budget จริง brand จริง retailer จริง หรือสาเหตุที่ไม่มีในไฟล์
```

3. ตรวจจำนวน workstreams ตาม Status กับ tracker
4. ตรวจรายการ High risk หรือ Blocked อย่างน้อย 1 รายการ

## Practice 3: ร่างข้อความติดตามงานตามบทบาท

#### Steps

1. เลือก 1 บทบาทจาก Marketing, Supply Chain หรือ Sales
2. วาง prompt ของบทบาทที่เลือก แล้วตรวจผลลัพธ์

### ตัวเลือก A: Marketing

```text
จากไฟล์ที่แนบมา ร่างข้อความ Microsoft Teams สำหรับ Marketing lead
ขอให้ owner แต่ละ workstream ตรวจ readiness, open decisions และ next action ก่อนประชุม
น้ำเสียงกระชับ เป็นมืออาชีพ และไม่ตำหนิทีม
ใช้ [ต้องระบุ] สำหรับ owner หรือ due date ที่ไฟล์ไม่ได้ระบุ
```

### ตัวเลือก B: Supply Chain

```text
จากไฟล์ที่แนบมา สร้างคำถาม 5 ข้อสำหรับทีม Supply Chain
เน้น dependency, risk, readiness gap และสิ่งที่ต้องยืนยันก่อน launch
แยก Facts | Questions | Next step และไม่คาดเดาสาเหตุของ delay
```

### ตัวเลือก C: Sales

```text
จากไฟล์ที่แนบมา สร้าง talking points 5 ข้อสำหรับทีม Sales
เน้น channel readiness, sales enablement, information gaps และ action ที่ต้องติดตาม
ห้ามเติม retailer จริง target จริง หรือ promotion detail ที่ไม่มีในไฟล์
```

3. ตรวจว่า output เหมาะกับบทบาทที่เลือก
4. ขอให้ Copilot ปรับ tone อีก 1 รอบให้เหมาะกับผู้รับ

## Practice 4: เตรียม meeting brief และ follow-up email

#### Steps

1. ใช้ผลลัพธ์ที่ตรวจแล้วจาก Practice 1-3
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะไฟล์ที่แนบมาและผลลัพธ์ที่ตรวจแล้วจาก Chat นี้
สร้าง meeting brief ภาษาไทยสำหรับประชุม Launch Readiness

โครงสร้าง:
1. Meeting objective 1 ย่อหน้า
2. Readiness summary 4 bullets
3. Key risks to verify 3 bullets
4. Open decisions 3 ข้อ
5. Follow-up email draft สำหรับส่งหลังประชุม

ห้ามเติมวันที่จริง budget จริง brand จริง retailer จริง หรือสาเหตุที่ไม่มีในไฟล์
```

3. ตรวจว่า meeting brief ใช้ข้อมูลจากทั้ง Word และ Excel
4. ตรวจว่า follow-up email มี owner, action และ due date เฉพาะเมื่อไฟล์มีข้อมูลรองรับ หรือใช้ [ต้องระบุ]

## Practice 5: เตรียม Excel-ready action tracker

#### Steps

1. ใช้ผลลัพธ์ที่ตรวจแล้วจาก Practice 1-4
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะไฟล์ที่แนบมาและผลลัพธ์ที่ตรวจแล้วจาก Chat นี้
สร้าง Excel-ready action tracker ภาษาไทยสำหรับ Launch Readiness Brief

ให้จัดเป็น 4 tables หรือ 4 sheets ดังนี้:
1. Readiness Summary: Status | Count | Key observation | Source
2. Risk Register: Workstream | Risk level | Dependency | What to verify | Owner
3. Decision Log: Open decision | Needed from | Impact if unresolved | Next step
4. Action Tracker: Workstream | Owner | Action | Due | Source data to check

แสดงวิธีคำนวณจำนวน workstreams ตาม Status แบบ 1 บรรทัด
ถ้าใน Copilot Chat มี Excel agent ที่สร้างไฟล์ได้ ให้สร้างไฟล์ให้พร้อมดาวน์โหลดหรือบันทึก
ถ้าไม่มี ให้จัดรูปแบบตารางให้พร้อมคัดลอกไปวางใน Excel
ห้ามเติมข้อมูลที่ไม่มีในไฟล์
```

3. ตรวจว่า Status count ตรงกับ tracker
4. ตรวจว่า action tracker ใช้ owner, due และ source เฉพาะข้อมูลที่ไฟล์รองรับ หรือใช้ [ต้องระบุ]

## Checkpoint

- สรุป launch context จาก Word brief ได้ถูกต้อง
- วิเคราะห์ readiness tracker และระบุ risk หรือ blocked workstream ได้
- ข้อความตามบทบาทเหมาะกับ Marketing, Supply Chain หรือ Sales
- Meeting brief และ follow-up email ใช้ข้อมูลจากไฟล์ที่แนบมาเท่านั้น
- Excel-ready action tracker พร้อมนำไปใช้ต่อหรือคัดลอกไปวางใน Excel ได้
- ไม่มีการเติม brand จริง retailer จริง budget จริง launch date จริง หรือสาเหตุที่ไม่มีในไฟล์

## Expected Output

- Launch context summary 1 ชุด
- Readiness analysis พร้อม questions และ action items 1 ชุด
- ข้อความตามบทบาทที่เลือก 1 ชิ้น
- Meeting brief และ follow-up email draft 1 ชุด
- Excel-ready action tracker 1 ชุด
