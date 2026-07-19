# Exercise: Copilot in Action - Modern Trade Promotion Performance Review

## Exercise Overview

เราจะใช้ Copilot Chat วิเคราะห์ไฟล์ promotion performance แบบสมมติ เพื่อช่วยทีมธุรกิจ และ Trade Marketing สรุปผล promotion, ตรวจ anomaly, ตั้งคำถามกับทีมที่เกี่ยวข้อง และเตรียม PowerPoint-ready outline สำหรับผู้บริหาร

## Prerequisites

1. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร
2. ดาวน์โหลด [modern_trade_promotion_review.xlsx](https://github.com/teerasej/ai-for-everyone/raw/unilever-1/files/copilot-in-action/modern_trade_promotion_review.xlsx)
3. หากหน้าจอมีปุ่ม **Work IQ** ให้ปิดปุ่มนี้ เพื่อใช้ Web-grounded chat และไฟล์ที่เราแนบเอง

> Workbook นี้เป็นข้อมูลสมมติ มีข้อมูล Product, Category, Channel, Region, Month, Baseline Sales, Promotion Sales, Uplift %, Stock Issue Flag, Margin Impact และ Notes เท่านั้น อย่าเติมปี สกุลเงิน retailer จริง campaign จริง หรือสาเหตุที่ไม่มีในไฟล์

## Scenario 1: เตรียม Promotion Performance Brief

ทีมธุรกิจ ต้องสรุปผล promotion ให้ผู้บริหารและทีมที่เกี่ยวข้อง เราจะใช้ Copilot ช่วยอ่านไฟล์ สร้างข้อความ วิเคราะห์ประเด็น และเตรียม output หลายรูปแบบจากข้อมูลเดียวกัน

## Practice 1: สรุปภาพรวมจากไฟล์ promotion

#### Steps

1. เปิด Chat ใหม่
2. เลือกปุ่ม **+** แล้วเลือก **Upload images or files**
3. อัพโหลด `modern_trade_promotion_review.xlsx`
4. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ใช้เฉพาะข้อมูลจาก workbook ที่แนบมา
สรุป promotion performance ภาษาไทยสำหรับทีมธุรกิจ

โครงสร้าง:
1. Executive summary ไม่เกิน 4 bullets
2. ตาราง Channel | Total Promotion Sales | Average Uplift % | Key observation
3. Product หรือ channel ที่ควรตรวจสอบต่อ 3 รายการ

ห้ามระบุปี สกุลเงิน retailer จริง campaign จริง หรือสาเหตุที่ workbook ไม่ได้ให้ข้อมูล
แยก Fact | Interpretation | Information needed ให้ชัดเจน
```

5. ตรวจสอบผลการทำงานอย่างน้อย 2 ชุดกับ workbook เช่น Promotion Sales หรือ Uplift %


## Practice 2: ร่างข้อความให้ทีมตรวจสอบข้อมูล

#### Steps

1. ใช้ Chat เดิมเพื่อใช้ข้อมูลเดิม (context) จากไฟล์
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
ร่างข้อความภาษาไทยสำหรับส่งใน Microsoft Teams ถึงทีมธุรกิจ และ Trade Marketing
วัตถุประสงค์คือขอให้ทีมช่วยตรวจสอบ promotion performance ก่อนประชุมผู้บริหาร

โครงสร้าง:
1. หัวข้อ 1 บรรทัด
2. สรุปข้อสังเกตจากข้อมูล 3 bullets
3. คำถามที่ต้องการให้ทีมตรวจสอบ 3 ข้อ
4. Action items ในตาราง Owner | Action | Due

น้ำเสียงเป็นมืออาชีพ กระชับ
```

3. ตรวจว่า message มีคำถามที่ตรวจสอบได้จากไฟล์หรือทีมงานจริง
4. ขอให้ Copilot ปรับ tone ให้เหมาะกับ Teams อีก 1 รอบ

```text
ปรับข้อความให้สั้นลง เหมาะสำหรับส่งใน Microsoft Teams และคงเฉพาะข้อเท็จจริงที่ตรวจสอบจาก workbook ได้
```

## Practice 3: สร้างเนื้อหาให้เหมาะกับผู้รับ

#### Steps

1. เลือก 1 บทบาทจาก Sales, Trade Marketing หรือ Finance
2. วาง prompt ของบทบาทที่เลือก แล้วตรวจผลลัพธ์

### ตัวเลือก A: Sales

```text
จาก workbook ที่แนบมา สร้าง talking points 5 ข้อสำหรับหัวหน้าทีม Sales
เน้น channel หรือ product ที่ควรติดตาม และคำถามสำหรับตรวจสอบ execution หรือ stock issue เพิ่มเติม
แยก Facts | Questions | Next step และไม่คาดเดาสาเหตุของยอดที่เปลี่ยนแปลง
```

### ตัวเลือก B: Trade Marketing

```text
จาก workbook ที่แนบมา สร้าง brief สำหรับทีม Trade Marketing
จัดเป็น Promotion signals | Information gaps | Questions for channel owners | Next step
ห้ามสรุปว่า promotion mechanic ใดทำให้ยอดเปลี่ยน เพราะ workbook ไม่มีข้อมูล mechanic
```

### ตัวเลือก C: Finance

```text
จาก workbook ที่แนบมา สร้างประเด็นตรวจสอบสำหรับทีม Finance
เน้น margin impact, uplift และรายการที่ควรถามต่อก่อนตัดสินใจทำ promotion รอบถัดไป
จัดเป็น Facts | Risks to verify | Questions | Next step
ห้ามระบุสกุลเงินหรือข้อมูลต้นทุนที่ไม่มีใน workbook
```

3. ตรวจว่าผลลัพธ์เหมาะกับบทบาทที่เลือก
4. ตรวจว่าไม่มีข้อมูลเกินขอบเขต workbook

## Practice 4: วิเคราะห์ trend, anomaly, insight และ action item

#### Steps

1. เปิด Chat ใหม่ แล้วแนบ `modern_trade_promotion_review.xlsx` อีกครั้ง
2. วาง prompt ด้านล่าง แล้วกด **Send**

```text
วิเคราะห์ workbook ที่แนบมาแบบกระชับ โดยใช้เฉพาะข้อมูลในไฟล์

งานที่ต้องทำ:
1. สรุป Total Promotion Sales ตาม Channel
2. หา 3 products ที่มี Promotion Sales รวมสูงสุด
3. หา 3 รายการที่ควรตรวจสอบต่อจาก Uplift %, Stock Issue Flag หรือ Margin Impact
4. สรุป insight ที่ผู้บริหารควรรู้ 2 ข้อ
5. สร้าง action items 3 ข้อเพื่อให้ทีมตรวจสอบข้อมูลหรือหาสาเหตุเพิ่มเติม

จัดผลลัพธ์เป็นไม่เกิน 4 ตารางสั้น ๆ
แสดงวิธีคำนวณแบบ 1 บรรทัด
ห้ามระบุปี สกุลเงิน retailer จริง campaign จริง หรือสาเหตุที่ไม่มีใน workbook
แยก Fact | Interpretation | Information needed ให้ชัดเจน
```

3. ตรวจ product ที่ Copilot ระบุว่าเป็นค่าสูงสุด 1 รายการ
4. ตรวจ anomaly หรือรายการที่ควรตรวจสอบต่อ 1 รายการ
5. ถ้าพบจุดที่ไม่ตรงกับข้อมูล ให้ถามต่อเฉพาะจุดนั้น

```text
ตรวจเฉพาะรายการต่อไปนี้อีกครั้ง: [ใส่ product, channel หรือ metric ที่ต้องการตรวจ]
ระบุแถวหรือข้อมูลต้นทางที่ใช้คำนวณ
หากผลลัพธ์ก่อนหน้าผิด ให้แสดงค่าที่แก้ไขและอธิบายไม่เกิน 2 bullets
```

## Practice 5: เตรียม PowerPoint-ready outline สำหรับผู้บริหาร

#### Steps

1. ใช้ผลลัพธ์ที่ตรวจแล้วจาก Practice 1-4
2. วาง prompt ด้านล่างทีละช่องลงไปใน Chat ให้ครบทีละ 1 prompt จนครบ แล้วกด **Send**

```text
ใช้เฉพาะ workbook ที่แนบมาและผลลัพธ์ที่ตรวจแล้วจาก Chat นี้
สร้าง PowerPoint outline ภาษาไทยสำหรับ Promotion Performance Review เพื่อ brief ผู้บริหาร
```
```text
สร้าง slide outline slides:
1. Title และวัตถุประสงค์การนำเสนอ
2. Executive summary 1 slide
3. สรุปตารางทั้งหมด แยกเป็นตารางละ slide
```
```text
- ในแต่ละ slide ให้มี Slide title, Key message, 2-3 bullets และ Speaker notes ไม่เกิน 2 ประโยค
- ระบุ chart suggestion 1 จุดที่ใช้ข้อมูลจาก workbook ได้จริง
- ถ้าใน Copilot Chat มี PowerPoint agent ที่สร้างไฟล์ได้ ใหสร้างไฟล์ให้พร้อมดาวน์โหลดหรือบันทึก
- ถ้าไม่มี ให้จัดรูปแบบคำตอบให้พร้อมคัดลอกไปสร้างสไลด์ใน PowerPoint
- ห้ามเติมปี สกุลเงิน retailer จริง campaign จริง หรือสาเหตุที่ไม่มีใน workbook
```
### แบบเต็ม 
```text
ใช้เฉพาะ workbook ที่แนบมาและผลลัพธ์จาก Chat นี้

สร้าง PowerPoint outline ภาษาไทยสำหรับ Promotion Performance Review เพื่อ brief ผู้บริหาร

สร้าง slide outline slides:
1. Title และวัตถุประสงค์การนำเสนอ
2. Executive summary 1 slide
3. สรุปตารางทั้งหมด แยกเป็นตารางละ slide

- ในแต่ละ slide ให้มี Slide title, Key message, 2-3 bullets และ Speaker notes ไม่เกิน 2 ประโยค
- ระบุ chart suggestion 1 จุดที่ใช้ข้อมูลจาก workbook ได้จริง
- ถ้าไม่มี ให้จัดรูปแบบคำตอบให้พร้อมคัดลอกไปสร้างสไลด์ใน PowerPoint
- ห้ามเติมปี สกุลเงิน retailer จริง campaign จริง หรือสาเหตุที่ไม่มีใน workbook
```

3. ตรวจสอบ outline 
4. สั่งให้ Copilot สร้างไฟล์ PowerPoint โดยใช้ prompt ด้านล่าง
   
    ```text
    สร้างไฟล์ powerpoint ตาม outline ที่มี
    ```
5. ตรวจว่า slide มีเนื้อหาตรงกับ outline 

## Checkpoint

- สรุป promotion performance ได้จาก workbook ที่แนบมาเท่านั้น
- ข้อความ Teams มี tone, file context, questions และ action items ครบ
- เนื้อหาตามบทบาทเหมาะกับ Sales, Trade Marketing หรือ Finance
- ผลวิเคราะห์มี trend, anomaly หรือรายการที่ควรตรวจสอบ, insight และ action item ครบ
- PowerPoint-ready outline พร้อมนำไปใช้ต่อหรือคัดลอกไปสร้างสไลด์ได้
- ไม่มีการเติมปี สกุลเงิน retailer จริง campaign จริง หรือสาเหตุที่ไม่มีใน workbook

## Expected Output

- ข้อความ Microsoft Teams สำหรับทีมธุรกิจ และ Trade Marketing 1 ฉบับ
- เนื้อหาตามบทบาทที่เลือก 1 ชิ้น
- ตารางวิเคราะห์ promotion performance พร้อม insight และ action items 1 ชุด
- PowerPoint-ready outline สำหรับผู้บริหาร 1 ชุด
- บันทึกข้อจำกัดของข้อมูลและสิ่งที่ต้องตรวจสอบต่ออย่างน้อย 2 ข้อ
