# Tokio Marine Life Thailand - Business Use Case Tuning Reference

เอกสารนี้ใช้เป็นคู่มือสำหรับปรับโจทย์ในเวิร์คชอป Microsoft 365 Copilot ให้สอดคล้องกับบริบทธุรกิจประกันชีวิตของ Tokio Marine Life ในประเทศไทย โดยคงโครงแบบฝึกหัดเดิมไว้ และเปลี่ยนเฉพาะ scenario, prompt, และผลลัพธ์ที่คาดหวัง

## ขอบเขตการใช้งานเอกสารนี้

- ครอบคลุมการ tune สำหรับ Exercise 1-5 และ Exercise 6 (Create First AI Agent)
- เน้นการใช้งานระดับ workshop/demo เพื่อให้ทีมเห็นภาพการนำไปใช้จริง
- ไม่ใช้ข้อมูลลูกค้าจริง หรือข้อมูลสุขภาพจริง (PII/PHI)

## Research Snapshot (Public Info)

จากข้อมูลสาธารณะที่เข้าถึงได้ ณ วันที่จัดทำเอกสาร:

- Tokio Marine Group เป็นกลุ่มธุรกิจประกันระดับสากล และระบุการดำเนินงานในหลายประเทศ/ภูมิภาค
- กลุ่มบริษัทมีพอร์ตทั้งธุรกิจ non-life และ life insurance
- เอกสาร At a Glance ของกลุ่มระบุการมี operating presence ในหลายประเทศ และมีการอ้างถึงประเทศไทยในภาพรวมตลาดของกลุ่ม
- ในบริบทเวิร์คชอปนี้ ให้ตีความ use case ของ Tokio Marine Life Thailand ในมุมงานประกันชีวิตที่พบบ่อย เช่น งานขายผ่านที่ปรึกษา, การบริการลูกค้า, งานพิจารณารับประกัน, งานเคลม, และงานรายงานผู้บริหาร

> หมายเหตุ: เว็บไซต์บางส่วนของเครือ Tokio Marine มีระบบป้องกัน bot ทำให้ดึงรายละเอียดแบบอัตโนมัติได้ไม่ครบ จึงควรให้ทีมธุรกิจตรวจทานรายละเอียดเชิงองค์กรภายในอีกครั้งก่อนใช้งานจริง

## Business Context ที่แนะนำให้ใช้ในเวิร์คชอป

### Personas หลัก

1. ผู้บริหารสายงาน (Head of Operations / Head of Distribution)
2. ผู้จัดการทีมขายและที่ปรึกษาประกันชีวิต
3. ทีม Operations และ Customer Service
4. ทีมพิจารณารับประกัน (Underwriting)
5. ทีมที่กำลังเริ่มสร้าง Agent ภายในองค์กร

### Pain Points ที่นำไปใช้กับ Copilot ได้ทันที

1. ข้อมูลกระจัดกระจายจากหลายทีม ทำให้สรุปสถานการณ์ช้า
2. รายงานผู้บริหารใช้เวลานาน และภาษายังไม่สม่ำเสมอ
3. การทำสไลด์จากรายงานต้องใช้แรง manual สูง
4. การวิเคราะห์ KPI ขาย/บริการลูกค้ามีหลายมิติและยากต่อการหา anomaly
5. อีเมลและ meeting follow-up ยังไม่เป็นระบบเดียวกัน

## Mapping: Existing Exercise -> Tokio Marine Scenario

| Existing Exercise | เป้าหมายเดิม | Scenario ที่ปรับเป็น Tokio Marine Life Thailand |
| --- | --- | --- |
| Exercise 1: Copilot Chat & Create | สรุปสถานการณ์จาก raw notes | สรุปสถานการณ์งานบริการลูกค้าและงานขายรายสัปดาห์ (What/Why/So what/Now what) |
| Exercise 2: Word | ร่างรายงานผู้บริหาร | ร่างรายงานผู้บริหารสายประกันชีวิต: KPI, ปัญหา, แผนแก้ไข 2 สัปดาห์ |
| Exercise 3: PowerPoint | สร้างสไลด์จากไฟล์รายงาน | สร้างสไลด์สำหรับ review กับผู้บริหารและหัวหน้าช่องทางขาย |
| Exercise 4: Excel | หา trend/anomaly | วิเคราะห์ KPI ด้าน New Business, Persistency, Claim TAT, Complaint |
| Exercise 5: Outlook + Teams | สรุป/ร่างการสื่อสาร | สรุป email/meeting และร่างการสื่อสารกับทีมที่ปรึกษา/ทีมบริการ |
| Exercise 6: Create First AI Agent | สร้าง agent จากแหล่งข้อมูล | สร้าง Internal Assistant Agent สำหรับค้นหา policy/process/FAQ ภายใน |

## Prompt Pack สำหรับการ Tune เวิร์คชอป

## Exercise 1 - Copilot Chat & Create (Tokio Marine version)

### Prompt: Executive Summary

```
จากข้อมูล operational note ด้านล่าง ช่วยสรุปสำหรับผู้บริหารในรูปแบบ:
1) What happened
2) Why
3) So what (ผลกระทบต่อลูกค้า/ยอดขาย/ต้นทุน/ความเสี่ยง)
4) Now what (ข้อเสนอแนะ 3 ข้อ พร้อม owner)

ตอบเป็นภาษาไทยแบบผู้บริหาร กระชับ ชัดเจน เป็น bullet
```

### ตัวอย่าง Raw Note สำหรับ Demo

```
- ช่วงวันที่: 1-28 เม.ย. 2026
- ช่องทางตัวแทน: ยอด new policy ต่ำกว่าเป้า 7% ใน 2 เขตขาย
- ช่องทางธนาคาร: มี lead เข้าระบบเพิ่ม 12% แต่ conversion ลดลง
- งานบริการลูกค้า: complaint เรื่องเอกสารเคลมไม่ครบเพิ่มขึ้น 18%
- เคลมสุขภาพ: median turnaround time เพิ่มจาก 4.2 วันเป็น 5.1 วัน
- ข้อเสนอเบื้องต้น: เพิ่ม checklist เอกสารก่อนส่งเคลม, ทำ playbook การ follow-up lead ภายใน 48 ชั่วโมง
```

### Prompt ต่อเนื่อง: เวอร์ชัน 5 ข้อสำหรับผู้บริหาร

```
ย่อให้เหลือ 5 ประเด็นที่ผู้บริหารใช้ตัดสินใจได้ทันที
และเพิ่มหัวข้อ "สิ่งที่ต้องอนุมัติ" ตอนท้ายอีก 1 บรรทัด
```

## Exercise 2 - Copilot in Word (Tokio Marine version)

### Prompt: ร่างรายงานผู้บริหาร

```
ร่างรายงานสรุปผู้บริหาร 1-2 หน้า สำหรับบริษัทประกันชีวิต
โครงต้องมี:
- Executive summary (5 bullets)
- KPI highlights (new policy, persistency, claim turnaround time, complaint)
- Issues & root causes
- 2-week action plan (owner + due date)
- Requests to leadership

ภาษาไทยทางการ กระชับ อ่านง่าย และ actionable
```

### Prompt: ปรับภาษารายงานให้คมขึ้น

```
ปรับรายงานให้เหมาะกับผู้บริหารมากขึ้น:
- ตัดคำซ้ำและคำฟุ่มเฟือย
- แต่ละ issue ต้องมี impact ชัดเจน
- action plan ต้องระบุเจ้าภาพและ due date ชัดเจน
```

## Exercise 3 - Copilot in PowerPoint (Tokio Marine version)

### Prompt: สร้างสไลด์จากรายงาน Word

```
Create an executive presentation from this report.
Audience: Head of Operations, Distribution, Customer Service.
Tone: formal, concise, business-focused.
Slides required:
1) Monthly performance summary
2) KPI trend highlights
3) Top issues and root causes
4) 2-week action plan with owners
5) Risks and decisions needed
```

### Prompt ต่อเนื่อง: ทำให้ presentation ตัดสินใจง่ายขึ้น

```
ช่วยปรับสไลด์ให้ผู้บริหารตัดสินใจง่ายขึ้น:
- ลดข้อความยาวให้เหลือ key takeaway ต่อสไลด์
- เพิ่มสไลด์สุดท้ายเป็น Decision Request 3 ข้อ
```

## Exercise 4 - Copilot in Excel (Tokio Marine version)

### Prompt: สรุปภาพรวม KPI

```
สรุปภาพรวมผลการดำเนินงานในช่วง 28 วันที่ผ่านมา
โดยดู KPI ต่อไปนี้:
- New policy count
- Persistency rate
- Claim turnaround time
- Complaint volume

ระบุ trend ที่น่าสังเกต และสาขา/ช่องทางที่ต้องติดตามใกล้ชิด
```

### Prompt: หา anomaly

```
ช่วยตรวจหา anomaly ที่สำคัญ:
1) วันที่ claim turnaround time สูงกว่าค่าเฉลี่ยอย่างมีนัยสำคัญ
2) ช่องทางขายที่ conversion ลดลงต่อเนื่อง
3) complaint เพิ่มขึ้นผิดปกติ

สรุปเป็นตารางสั้นๆ พร้อมข้อเสนอแนะเบื้องต้น
```

## Exercise 5 - Outlook + Teams (Tokio Marine version)

### Prompt: ร่างอีเมลภายใน

```
ช่วยร่างอีเมลถึงหัวหน้าทีมที่ปรึกษาเรื่อง conversion ลดลงใน 2 เขตขาย
โดยให้มี:
- สรุปสถานการณ์ 3 บรรทัด
- สิ่งที่ทีมต้องทำภายใน 7 วัน
- KPI ที่ต้องรายงานกลับ
โทนสุภาพ ชัดเจน และเป็นทางการ
```

### Prompt: สรุปประชุมทีม

```
สรุปการประชุมนี้เป็น:
- Decisions
- Action items (Owner + Due)
- Risks/Dependencies

และช่วยร่างข้อความประกาศใน Teams 5 บรรทัดให้ทีมปฏิบัติการ
```

## Exercise 6 - Create First AI Agent (Tokio Marine version)

### แนวคิด Agent

ชื่อแนะนำ: `TM Life Internal Assistant`

บทบาท:
- ตอบคำถามเกี่ยวกับ policy/process ภายใน
- สรุป guideline ให้ทีมขายและทีมบริการลูกค้า
- ช่วยค้นหาเอกสารที่เกี่ยวข้องก่อนตอบ

### Prompt สำหรับขั้นตอน Describe

```
Help our staff quickly find and understand internal life-insurance policy, claim process, and customer service guidelines in Thai.
Always answer with: summary, source reference, and next action.
If information is missing, ask clarifying questions first.
```

### Knowledge Source ที่ควรใช้

1. Internal SOP (PDF/Word)
2. Claim document checklist
3. Product FAQ สำหรับทีมขายและทีมบริการ
4. Internal announcement / updated process memo

> แนะนำเปิดโหมด Only use specified sources เพื่อควบคุมคุณภาพคำตอบในการใช้งานจริง

## Governance Checklist ก่อนใช้ในงานจริง

1. ลบหรือ mask ข้อมูลส่วนบุคคลทุกครั้งก่อนนำเข้า prompt
2. หลีกเลี่ยงข้อมูลสุขภาพที่ระบุตัวบุคคลได้
3. ตรวจทานคำตอบสำคัญโดยผู้รับผิดชอบงานก่อนส่งลูกค้า
4. เก็บ prompt template มาตรฐานให้ทีมใช้ร่วมกัน
5. กำหนด owner ของแต่ละ workflow ให้ชัดเจน (Sales/Ops/Service/Compliance)

## Suggested Workshop Flow (Tokio Marine Variant)

1. เริ่มจาก Exercise 1 เพื่อให้เห็นการสรุปสถานการณ์เร็ว
2. ต่อด้วย Exercise 2-3 เพื่อเปลี่ยน insight เป็นเอกสารและสไลด์ผู้บริหาร
3. ใช้ Exercise 4-5 ทำ daily operation และ communication loop
4. ปิดท้าย Exercise 6 เพื่อทำต้นแบบ agent ภายในทีม

## แหล่งข้อมูลสาธารณะที่ใช้ประกอบการอ้างอิง

1. Tokio Marine Holdings - Home: https://www.tokiomarinehd.com/en/
2. Tokio Marine Holdings - At a Glance: https://www.tokiomarinehd.com/en/company/about/
3. Tokio Marine Holdings - Group Companies: https://www.tokiomarinehd.com/en/company/about/group.html
4. OIC Thailand (regulator portal): https://www.oic.or.th/en/
5. OIC search portal (Thai): https://www.oic.or.th/th/search-page
6. Tokyo Marine overview (general background): https://en.wikipedia.org/wiki/Tokio_Marine
