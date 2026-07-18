# Exercise: สร้าง Sales Proposal Assistant ด้วย Agent Builder

## Exercise Overview

เราจะสร้าง Agent สำหรับช่วยร่าง Sales Proposal จากข้อมูลอ้างอิง ทดสอบคุณภาพคำตอบ และแชร์ให้เพื่อนร่วมทีมภายใน 50 นาที

## Prerequisites

1. มี Microsoft 365 Copilot license หรือ tenant ที่เปิด pay-as-you-go สำหรับ Agent Builder
2. อัพโหลด `Business Idea.docx` และ `Business presentation.pptx` ไปยัง OneDrive แล้ว
3. ใช้ข้อมูลตัวอย่างระหว่าง workshop และไม่นำข้อมูลลูกค้าที่เป็นความลับมาใส่ใน Agent

## Scenario 1: สร้าง Agent ช่วยเตรียมข้อเสนอการขาย

### Practice 1: อธิบายหน้าที่ของ Agent ด้วย Describe

#### Steps

1. เปิด [Microsoft 365 Copilot](https://m365copilot.com/)
2. เลือก **New agent** จากเมนูด้านซ้าย
3. ตรวจสอบว่าอยู่ที่แท็บ **Describe**

![หน้าจอ Agent Builder](<../../images/agent/2025-08-24_13-38-18 copy.png>)

4. วาง prompt ด้านล่าง แล้วกด **Send**

```text
Create a Sales Proposal Assistant for a sales team.
The agent should help draft customer-ready proposals from approved knowledge sources.
It should ask for the customer profile, business need, proposal objective, and expected timeline before drafting.
The output should include an executive summary, customer needs, proposed solution, expected benefits, implementation plan, risks, assumptions, and next steps.
Clearly separate facts from assumptions and never invent prices, commitments, or customer information.
```

5. สนทนากับ Agent Builder ต่อจน Name, Description และ Instructions ถูกสร้างครบ

### Practice 2: ตรวจ Configure และเพิ่ม Knowledge

#### Steps

1. เปิดแท็บ **Configure**
2. ตั้งชื่อ Agent ว่า `Sales Proposal Assistant`
3. ตรวจ Description และ Instructions ว่าตรงกับหน้าที่ที่กำหนด
4. ในส่วน **Knowledge** เพิ่ม `Business Idea.docx` และ `Business presentation.pptx` จาก OneDrive
5. เพิ่ม Starter Prompts อย่างน้อย 2 รายการ เช่น `Draft a proposal outline` และ `Review proposal risks`
6. ตรวจว่า Instructions ระบุให้ Agent ใช้ข้อมูลจาก Knowledge และแจ้งเมื่อข้อมูลไม่เพียงพอ

### Practice 3: ทดสอบ Agent ใน Try it

#### Steps

1. เปิดแท็บ **Try it**
2. ทดสอบด้วย prompt ด้านล่าง

```text
Draft a sales proposal outline for a property management company that is considering an office cleaning service.
The customer values service reliability, transparent operations, and a clear implementation timeline.
Use the added knowledge sources. Mark any missing information as "ต้องยืนยัน" and do not invent prices.
```

3. ตรวจว่า Agent ใช้โครงสร้าง Proposal ครบและแยกข้อมูลที่ต้องยืนยัน
4. ถ้าพบข้อมูลที่แต่งขึ้น ให้กลับไปแก้ Instructions แล้วทดสอบใหม่
5. ทดสอบกรณีข้อมูลไม่ครบด้วย prompt ต่อไปนี้

```text
Create a final price proposal for this customer now.
```

6. ตรวจว่า Agent ขอข้อมูลเพิ่มเติมหรือระบุว่าไม่สามารถยืนยันราคาได้

### Practice 4: Create และ Share Agent

#### Steps

1. เลือก **Create** เมื่อผลทดสอบผ่าน Checkpoint

![สร้าง Agent](../../images/agent/2025-08-24_13-42-19.png)

2. หลังสร้างเสร็จ เลือก **Share**
3. เลือก **Specific users in your organization** สำหรับการทดลองใน workshop
4. ระบุเพื่อนร่วมทีมที่ได้รับอนุญาต แล้วบันทึกการตั้งค่า
5. คัดลอก link และส่งให้ผู้รับผ่านช่องทางที่องค์กรอนุญาต

> ตัวเลือกการแชร์อาจถูกจำกัดด้วย policy ขององค์กร หากไม่มี **Share** ให้เก็บ Agent เป็น private และแจ้งผู้ดูแลระบบ

## Checkpoint

- Agent มี Name, Description, Instructions, Knowledge และ Starter Prompts ครบ
- คำตอบใช้โครงสร้าง Sales Proposal ตามที่กำหนด
- Agent ไม่สร้างราคา ข้อตกลง หรือข้อมูลลูกค้าที่ไม่มีใน Knowledge
- ทดสอบอย่างน้อย 2 กรณี ก่อนเลือก **Create**
- การแชร์จำกัดเฉพาะผู้รับที่ได้รับอนุญาต

## Expected Output

- Sales Proposal Assistant 1 Agent ที่ผ่านการทดสอบ
- Proposal outline 1 ชุด และผลทดสอบกรณีข้อมูลไม่ครบ 1 ชุด
- link สำหรับผู้รับที่ได้รับอนุญาต หรือ Agent แบบ private หาก policy ไม่อนุญาตให้แชร์