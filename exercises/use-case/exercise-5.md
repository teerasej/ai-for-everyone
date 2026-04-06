
# Daily Communication ด้วย Copilot in Outlook + Teams

## A) Outlook: สรุปและร่างอีเมลตอบกลับ

### Step 1: สรุปเนื้อหา Email (สำหรับผู้ใช้แบบ free และแบบมี license)

1. ทำการเปิดเข้าใช้งาน [https://outlook.com](https://outlook.com) ด้วยบัญชีของตัวเอง
2. เปิดอีเมล thread ที่ต้องการให้ Copilot ช่วยสรุป
3. คลิกที่ปุ่ม Summarize ที่ด้านบนของหน้าต่าง Email
4. ตรวจสอบผลลัพธ์ที่ Copilot สรุปมาให้


![alt text](../../images/copilot/2025-09-29_17-44-14.png)


### Step 2: ร่าง Email 

1. ทำการเปิดเข้าใช้งาน [https://outlook.com](https://outlook.com) ด้วยบัญชีของตัวเอง
2. กดสร้าง mail ใหม่
   ![alt text](../../images/copilot/2025-08-23_22-54-27.png)
3. กรอกหัวข้ออีเมลล์ 
    ```
    ปัญหาส่งมอบยาล่าช้า คลังราชเทวี วันที่ 19 มี.ค.
    ```
4. จากหน้าร่าง email กดที่ไอคอนด้านหน้า Draft with Copilot 
      ![alt text](../../images/copilot/2025-08-23_22-54-35.png)
5. เลือกคำสั่ง prompt 1 อย่างจากรายการต่อไปนี้ วางลงในกล่อง Prompt box และกดปุ่ม Generate

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
6. รอ Copilot แสดงแบบร่างให้ตรวจสอบ และเราสามารถใช้กล่องด้านล่าง เพื่อปรับแต่งแบบร่างได้ เช่น "write in thai" หรือ "ใช้คำสุภาพ และนัดเจอกันช่วงมื้ออาหารกลางวัน"
      ![alt text](../../images/copilot/2025-08-23_22-55-26.png)
7. กดปุ่ม **Keep it** เพื่อยืนยันการใช้ข้อความ
      ![alt text](../../images/copilot/2025-08-23_22-56-09.png)


## B) Teams: สรุปแชท/ประชุม + Action Items

### 1. การสร้าง Meeting ที่พร้อมถอดเทปการประชุม

1. เปิดโปรแกรม Microsoft Team > กดเปิด Calendar
2. กดสร้าง Meeting ใหม่ และตั้งชื่อให้เรียบร้อย
3. กดปุ่ม More option
   
    ![alt text](../../images/copilot/2025-09-29_17-56-01.png)

4. กดเปิด **Team meeting** และเลือกเปิด meeting option จากด้านบน

    ![alt text](../../images/copilot/2025-09-29_17-56-24.png)

5. เลื่อนลงมาด้านล่างของเมนู **Meeting option** > เลือก **Recording & transcription** > กดเปิด **Record and transcribe automatically** > เลือก **spoken language in this meeting** เป็นภาษาที่ต้องการ

    ![alt text](../../images/copilot/2025-09-29_17-56-52.png)
    > อาจจะไม่สามารถเปิด transcribe ได้ ถ้า admin เป็นห่วงเรา และ block เราเอาไว้

### 2. การสั่งถอดเทปการประชุม ระหว่างการ meeting

![alt text](../../images/copilot/2025-09-29_17-57-18.png)

1. กด Join เข้า Event ที่สร้างขึ้น
2. กดเปิดเมนู **more**
3. เลือก Record and transcribe
4. เลือก Start transcription
5. เลือกภาษาที่ต้องการ
6. กดปุ่ม ok 

### 3. การใช้งาน Copilot ระหว่างการประชุม

1. ในหน้าต่าง meeting กดเปิด Copilot
2. จากห้องแชท สามารถเลือก prompt สำเร็จรูปได้จาก more prompt


![alt text](../../images/copilot/2025-09-29_17-57-35.png)


> หลังการบันทึกเสร็จสิ้น เราสามารถเข้าไปดูการถอดเทป และการสรุปของ Copilot ได้จากใน chat ของ meeting นั้นๆ หรือจะถามจาก Copilot Chat ใน Work mode ก็ได้
> ![alt text](../../images/copilot/2025-09-29_18-14-59.png)


### Step 4: ใช้ Copilot สรุปการสนทนา

ใช้ Copilot สรุปประเด็นสำคัญจาก Meeting ที่ถูกบันทึกไว้ได้ เช่น

```
สรุปประเด็นสำคัญจากการประชุมนี้ โดยแยกเป็น
- Decisions (การตัดสินใจที่เกิดขึ้น)
- Action items (สิ่งที่ต้องทำ + Owner + Due date)
- Risks/Dependencies (ความเสี่ยงและสิ่งที่ต้องขึ้นต่อกัน)
```

### Step 5: ร่างข้อความประกาศให้ทีมปฏิบัติการ

```
ช่วยร่างข้อความประกาศให้ทีมคลังและทีมจัดส่งยา 5 บรรทัด โทนชัดเจน สุภาพ
```
