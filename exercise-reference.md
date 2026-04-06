# M365 Copilot Exercise Instructions — Reference File

ไฟล์นี้รวบรวมคำสั่งและขั้นตอนจากทุก Exercise เพื่อใช้เป็น reference สำหรับสั่ง M365 Copilot แก้ไขไฟล์ Excel, Word, และ PowerPoint สำหรับการฝึกปฏิบัติในเวิร์คชอป Microsoft 365 Copilot and Agent: "AI for Everyone — GPO Workshop" โดยมีรายละเอียดดังนี้:

---

## Exercise 1: Copilot Chat & Create

### Scenario 1 — สรุปสถานการณ์การผลิตและกระจายยา (Web mode)

**Prompt 1 — Executive Summary (What/Why/So what/Now what):**

```
จากข้อมูลนี้ ช่วยสรุปให้ผู้บริหารในรูปแบบ
1) What happened (เกิดอะไรขึ้น)
2) Why (สาเหตุที่เป็นไปได้)
3) So what (ผลกระทบต่อธุรกิจ/ลูกค้า/ต้นทุน)
4) Now what (ข้อเสนอแนะ 3 ข้อ + owner)
ให้ตอบเป็นภาษาไทย กระชับ เป็น bullet points

---
• ช่วงวันที่: 1–28 มี.ค. 2026 (ข้อมูลรวม 4 หน่วยงาน: โรงงานรังสิต, QA/QC กลาง, คลังราชเทวี, คลังขอนแก่น)
• ประเด็นหลัก: 1) การส่งมอบยากลุ่ม Antibiotic ล่าช้า 2 วัน (11 และ 19 มี.ค.) สาเหตุหลักคือการปล่อยล็อตจาก QA ช้ากว่าปกติ + รถควบคุมอุณหภูมิไม่พอช่วง peak
• OT ทีมคลังเพิ่มขึ้นในวันเดียวกัน เพื่อเร่งแพ็กและจัดส่ง
• อัตราเติมเต็มคำสั่งซื้อของคลังขอนแก่นลดลง 2 ครั้ง (8 และ 22 มี.ค.) จากวัตถุดิบเข้าสายการผลิตไม่ตามแผน + lead time ผู้ขายยืด
• เหตุการณ์ความปลอดภัย: near-miss 2 ครั้งในพื้นที่แพ็กยา และ incident 1 ครั้งจากการเคลื่อนย้ายพาเลต
• ข้อเสนอเบื้องต้น: จัดรอบปล่อยล็อต QA วันละ 2 รอบ, เพิ่มรถควบคุมอุณหภูมิสำรอง, และทำ 5S พื้นที่แพ็กยา
```

**Prompt 2 — ย่อสำหรับผู้บริหาร:**

```
ย่อคำตอบข้างต้นให้เหลือ 5 ข้อสั้นๆ ที่ผู้บริหารอ่านแล้วตัดสินใจได้ทันที
```

### Scenario 2 — สรุปงานสัปดาห์ที่แล้ว (Work mode)

**Prompt 1:**

```
สรุปความคืบหน้าของงานในสัปดาห์ที่แล้ว
```

**Prompt 2:**

```
มีนัดหมาย meeting อะไรบ้างในสัปดาห์นี้ 
แนะนำขั้นตอนที่จำเป็นต้องทำก่อนเข้าแต่ละ meeting
และแนะนำไฟล์ที่สามารถใช้เตรียมตัวสำหรับ meeting เหล่านั้น
```

### Scenario 3 — สร้าง Infographic ด้วย Copilot Create

**Image prompt (ใช้กับไฟล์ character.png เป็น reference image):**

```
Place the character from the reference image into an illustrated modern pharmaceutical laboratory or hospital setting, with the character confidently presenting a data chart to a group of healthcare professionals, in clean pastel colors.
```

---

## Exercise 2: Word — Auto Report Writing (`GPO_Lab_Word_OpsReport_Source.docx` → `GPO_OpsReport_ExecutiveSummary.docx`)

> **ไฟล์ต้นฉบับ:** `GPO_Lab_Word_OpsReport_Source.docx`
> **ไฟล์ผลลัพธ์:** `GPO_OpsReport_ExecutiveSummary.docx`

### Step 1 — ร่างรายงานฉบับแรก (ใน Word เปล่า)

**Prompt (พิมพ์ใน Draft with Copilot box จากนั้น attach ไฟล์ด้วย `/`):**

```
ใช้ข้อมูลในเอกสารนี้ (Raw Notes + Action Draft) [แนบไฟล์ GPO_Lab_Word_OpsReport_Source.docx]
ร่าง "รายงานสรุปผู้บริหาร" ความยาว 1–2 หน้า
โครงต้องมี: Executive summary (5 bullets) / KPI highlights / Issues & root causes / 2-week mitigation plan (owner+due) / Requests to leadership
ภาษาไทย ทางการ กระชับ อ่านง่าย เหมาะสำหรับผู้บริหารของ อภ.
```

**Checklist ผลลัพธ์ที่ต้องมีครบ:**
- Executive summary
- KPI highlights
- Issues & root cause
- 2-week plan
- Requests

### Step 2 — ปรับคุณภาพภาษา Executive Summary

**เลือกข้อความใน Executive Summary แล้วใช้ prompt:**

```
ปรับรายงานให้เหมาะกับผู้บริหาร:
- ตัดคำฟุ่มเฟือย
- ใช้หัวข้อสั้น ๆ
- ทำให้ข้อเสนอแนะ actionable มากขึ้น
- เพิ่มประโยค "ผลกระทบ" ให้ชัดเจนในแต่ละ issue
```

### Step 3 — สร้างตาราง Action Plan (ต่อท้ายเอกสาร)

**Prompt:**

```
สร้างตาราง Action plan โดยมีคอลัมน์: Action | Owner | Due | Expected outcome | Status
ใช้ข้อมูลจากส่วน "รายการ Action ที่ต้องทำ (Draft)" และจัดให้อ่านง่าย
```

**Expected Output:**
- รายงานพร้อมส่งผู้บริหาร 1–2 หน้า
- มีตารางแผน 2 สัปดาห์ชัดเจน
- โทนเป็นทางการ แบบองค์กร

---

## Exercise 3: PowerPoint — สร้าง Presentation จากรายงาน Word (`GPO_OpsReport_ExecutiveSummary.docx` → Presentation)

> **ไฟล์ต้นฉบับ:** `GPO_OpsReport_ExecutiveSummary.docx` (จาก Exercise 2)

**ขั้นตอน (ใน Copilot panel ของ PowerPoint):**

1. กดปุ่ม Copilot > เลือก **"Create a new presentation with file"**
2. ค้นหาและเลือกไฟล์ `GPO_OpsReport_ExecutiveSummary.docx`
3. กดปุ่มส่ง
4. เลือก template > เลือกรูปแบบรูปเป็น **Stock Image** > กดปุ่ม **Generate Slides**
5. ตรวจสอบผลลัพธ์

---

## Exercise 4: Excel — Data Exploration (`GPO_Lab_Excel_KPI_28days.xlsx`)

> **ไฟล์:** `GPO_Lab_Excel_KPI_28days.xlsx`

### Step 1 — ภาพรวมและแนวโน้ม (Sheet: Summary)

**Prompt:**

```
สรุปภาพรวมผลการดำเนินงานของหน่วยงานทั้ง 4 แห่ง (โรงงานรังสิต, QA/QC กลาง, คลังราชเทวี, คลังขอนแก่น)
ในช่วง 28 วันที่ผ่านมา
พร้อมบอกแนวโน้มที่น่าสังเกต
```

### Step 2 — Highlight Anomaly ด้วยสี (Sheet: KPI_Raw)

**Prompt 1 — ใส่สีพื้นหลัง:**

```
ใส่สีพื้นหลังของ cell ในส่วน column อัตราการผิดพลาดการหยิบ เป็น 3 เฉดสีแดง เป็นโทนอ่อน-กลาง-เข้ม ตามช่วงของข้อมูล
```

**Prompt 2 — ตรวจหา Anomaly และสร้าง Sheet ใหม่:**

```
ช่วยตรวจหาวันหรือหน่วยงานที่มี
1) อัตราส่งมอบยาตรงเวลา ลดลงผิดปกติ
2) ชั่วโมง OT สูงกว่าค่าเฉลี่ยอย่างมีนัยสำคัญ
3) เหตุการณ์ความปลอดภัยสูงผิดปกติ
ช่วยสรุปเป็นตารางสั้น ๆ เป็น sheet ชื่อ Anomaly 
```

### Step 3 — โฟกัสประเด็นสำคัญ

**Prompt:**

```
จากข้อมูลทั้งหมดนี้
เลือก 3 ประเด็นที่ผู้บริหารควรทราบมากที่สุด
พร้อมอธิบายสั้น ๆ ว่าทำไมประเด็นนี้จึงสำคัญ
```

**Expected Output:**
- รายการ trend
- รายการ anomaly (Sheet: Anomaly)
- Bullet insight เชิงข้อมูล

---

## Exercise 5: Outlook & Teams — Daily Communication

### A) Outlook — ร่าง Email ตอบกลับ

**หัวข้ออีเมล:**

```
ปัญหาส่งมอบยาล่าช้า คลังราชเทวี วันที่ 19 มี.ค.
```

**Prompt ร่าง Email (เลือก 1 จาก 3):**

```
ทีมโรงพยาบาลแจ้ง: ยามาถึงช้ากว่าปกติ 2 ชม. ทำให้จ่ายยาให้ผู้ป่วยไม่ทัน
```

```
ทีมขนส่งแจ้ง: รถควบคุมอุณหภูมิขาด 1 คัน + เส้นทางหลักติด
```

```
ทีม QA แจ้ง: การปล่อยล็อตยาล่าช้าเนื่องจากผลทดสอบอยู่ระหว่างรอ
ขอแนวทางแก้ไขและ timeline
```

### B) Teams — สรุปการประชุม

**Prompt สรุป Meeting:**

```
สรุปประเด็นสำคัญจากการประชุมนี้ โดยแยกเป็น
- Decisions (การตัดสินใจที่เกิดขึ้น)
- Action items (สิ่งที่ต้องทำ + Owner + Due date)
- Risks/Dependencies (ความเสี่ยงและสิ่งที่ต้องขึ้นต่อกัน)
```

---

## Exercise 6: Surveys Agent — สร้างแบบสำรวจด้วย Microsoft Forms

> ใช้ผ่าน [https://aka.ms/GetSurveysAgent](https://aka.ms/GetSurveysAgent) หรือค้นหา "Surveys" จาก Agent Store ใน M365 Copilot

**Prompt สร้างแบบสำรวจ:**

```
Help me create an employee satisfaction survey about workplace benefits and work environment
```

**Prompt เพิ่มคำถาม:**

```
Add 2 more questions about manager support and career growth opportunities
```

**Prompt ส่งแบบสำรวจ:**

```
Send the survey to [email address] 
```

---

## Exercise 7: Create First AI Agent

> เปิด Copilot Chat > เมนูด้านข้าง > **Chat > Agents > Create Agent** > โหมด Describe

**Prompt อธิบายหน้าที่ Agent:**

```
Help GPO staff quickly find and understand the latest press releases and announcements from GPO's official website
```

**Knowledge Source URL (เพิ่มใน Configure):**

```
https://www.gpo.or.th/press_release
```

> เปิด **Only use specified sources** เพื่อจำกัดแหล่งข้อมูล

**Prompt ทดสอบ Agent:**

```
ข่าวประชาสัมพันธ์ล่าสุดขององค์การเภสัชกรรมมีเรื่องอะไรบ้าง
```

---

## สรุปไฟล์ที่ต้องใช้ในแต่ละ Exercise

| Exercise | ไฟล์ที่ใช้ | ผลลัพธ์ |
|---|---|---|
| Exercise 2 (Word) | `GPO_Lab_Word_OpsReport_Source.docx` | `GPO_OpsReport_ExecutiveSummary.docx` |
| Exercise 3 (PowerPoint) | `GPO_OpsReport_ExecutiveSummary.docx` | Presentation ใหม่ |
| Exercise 4 (Excel) | `GPO_Lab_Excel_KPI_28days.xlsx` | Sheet: Anomaly + สีใน KPI_Raw |
