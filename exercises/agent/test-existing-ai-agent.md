# Exercise: ทดลองใช้ Surveys Agent จาก Agent Store

## Exercise Overview

Agenda เรียกกิจกรรมนี้ว่า Form Agent ส่วนชื่อปัจจุบันใน Microsoft 365 Copilot คือ **Surveys Agent** เราจะเพิ่ม Agent จาก Agent Store สร้างแบบสำรวจ ตรวจคำถาม และดูแผนการส่งภายใน 15 นาที

## Prerequisites

1. มี Microsoft 365 Copilot license
2. องค์กรอนุญาตให้ติดตั้ง Surveys Agent
3. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร

> หากองค์กรปิดการติดตั้ง Agent ให้ดูการสาธิตจากผู้สอนและข้ามการกดส่งแบบสำรวจ

## Scenario 1: สร้างแบบสำรวจความพึงพอใจของพนักงาน

### Practice 1: เพิ่ม Surveys Agent จาก Agent Store

#### Steps

1. เลือก **All agents** จากเมนูด้านซ้าย
2. ค้นหา **Surveys Agent** ในหมวด **Built by Microsoft** หรือเปิด [ลิงก์ติดตั้ง Surveys Agent](https://aka.ms/GetSurveysAgent)
3. เลือก **Add agent**

![เพิ่ม Surveys Agent](2026-02-11_10-37-45.png)

4. ตรวจสอบว่า **Surveys** ปรากฏใต้หัวข้อ **Agents**

### Practice 2: สร้างและตรวจแบบสำรวจ

#### Steps

1. เลือก **Surveys** จากเมนู **Agents**
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
Help me create an employee satisfaction survey about workplace benefits and work environment.
Keep it to 8 questions and include a mix of rating, multiple-choice, and open-text questions.
```

3. ตรวจคำถามใน Preview แบบ side-by-side
4. ขอให้ Agent เพิ่มหัวข้อที่ยังขาด

```text
Add 2 questions about manager support and career growth opportunities.
Keep the total survey length suitable for completion within 5 minutes.
```

5. ตรวจว่าคำถามไม่ซ้ำ ไม่ชี้นำคำตอบ และไม่มีข้อมูลส่วนบุคคลที่ไม่จำเป็น

### Practice 3: ตรวจแผนการส่งแบบสำรวจ

#### Steps

1. ไปยังขั้นตอนการส่งแบบสำรวจ
2. ตรวจช่องทาง กลยุทธ์การเก็บคำตอบ และ timeline ที่ Agent แนะนำ
3. หยุดก่อนการส่งจริง และอธิบายว่าเราจะเลือกกลุ่มผู้ตอบอย่างไร

## Checkpoint

- Surveys Agent ถูกเพิ่มจากหมวด **Built by Microsoft**
- Preview มีคำถามครอบคลุม benefits, work environment, manager support และ career growth
- แผนการส่งระบุช่องทางและช่วงเวลาติดตามผล
- ไม่มีการส่งแบบสำรวจจริงระหว่าง workshop

## Expected Output

- แบบสำรวจฉบับ Preview 1 ชุด และแผนการส่ง 1 ชุด

## Optional Extension

- หลังมีคำตอบเพียงพอ Surveys Agent สามารถติดตามสถานะ ส่ง reminder ผ่าน Outlook สร้าง insight และ export ผลลัพธ์เป็น Excel ได้

> อ้างอิง: [Get started with Surveys Agent in Microsoft 365 Copilot](https://support.microsoft.com/en-us/topic/get-started-with-surveys-agent-in-microsoft-365-copilot-ddad28f2-386b-4f81-8a07-8ac4ee8f6bd8)

