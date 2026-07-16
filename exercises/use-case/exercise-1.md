# Copilot Chat

## Scenario

แบบฝึกหัดนี้ให้ผู้เรียนฝึกใช้ Copilot Chat เพื่อสรุปสถานการณ์เชิงธุรกิจจากข้อมูลหน้างาน
โดยเป้าหมายคือได้สรุปที่พร้อมใช้ตัดสินใจ และต่อยอดเป็นภาพสื่อสารได้ทันที

## Prerequisites

1. เปิดใช้งานบัญชี Microsoft 365 ที่เข้าถึง Copilot ได้
2. เตรียมข้อมูลตัวอย่างในโจทย์ให้พร้อม copy/paste
3. เลือกโหมดให้ถูกต้องก่อนเริ่มแต่ละ Scenario

## Steps

## Scenario 1: สรุปสถานการณ์งานบริการลูกค้าและงานขาย ของ Tokio Marine Life Thailand ด้วย Copilot Chat

### Practice 1: เปิด Copilot Chat

1. เปิด [Copilot Chat](https://m365.cloud.microsoft/chat) หรือ[ที่นี่](https://office.com)
2. ด้านบนของหน้าจอ chat ให้กดเลือกโหมด **Work IQ** 

### Practice 2: ทดลองใช้ Prompt Engineering ด้วย prompt ต้นฉบับจากสไลด์อ้างอิง

เป้าหมายของ Practice นี้คือฝึกเทคนิคจากสไลด์ 19-22 แบบต่อเนื่อง โดยใช้ prompt แบบ exact text ตามต้นฉบับทุกบรรทัด

### Practice 2a: Zero-Shot Prompt (Default)

1. ก๊อปปี้ prompt ด้านล่างทีละ use case ไปวางในช่องแชท และกดส่ง
2. สังเกตรูปแบบคำตอบที่ได้จากแต่ละ use case
3. จดข้อสังเกตสั้นๆ ว่าโทนและผลลัพธ์ต่างกันอย่างไร

#### Translation (Business Context - Life Insurance)

```text
Translate the following customer greeting into French for international clients:'Welcome to Tokio Marine Life Insurance (Thailand). How may we assist you with your life insurance, protection, or savings needs today?'
```

#### Creative Writing (Brand Tone - Life Insurance Values)

```text
Write a short, professional poem about trust, protection, and lifelong security, reflecting the values of Tokio Marine Life Insurance and its long-term commitment to supporting customers and their families.
```

#### Summarization (Life Insurance Document)

```text
Summarize the main points of the following life insurance policy document, highlighting key coverage, benefits, exclusions, and value for policyholders:[Paste policy text here]
```

#### Informational (Customer Education - Life Insurance)

```text
What are the key benefits of having life insurance coverage for individuals and families in Thailand, including protection, savings, retirement planning, and long-term financial security?
```

#### Explanation (Industry Concept - Life Insurance & Risk Management)

```text
Explain the concept of risk management in the life insurance industry, and how Tokio Marine Life Insurance helps individuals and families manage life, health, and financial risks through protection and long-term planning solutions.
```

### Practice 2b: Few-Shot Prompt

1. ก๊อปปี้ prompt ด้านล่างไปวางในช่องแชท และกดส่ง
2. สังเกตว่าตัวอย่างที่ให้ไว้ใน prompt มีผลต่อรูปแบบคำตอบอย่างไร

```text
Here are two email subject lines for internal meetings at Tokio Marine Life Insurance:
- 'Reminder: Policy Administration Review Meeting at 3 PM Today'
- 'Don't Forget: New Life Insurance Product Kickoff Tomorrow at 10 AM'

Now, write a professional subject line for a budget review meeting scheduled for next Wednesday at 2 PM, ensuring it reflects a corporate life insurance context.
```

### Practice 2c: Chain-of-Thought (CoT) Prompt

1. ก๊อปปี้ prompt ด้านล่างไปวางในช่องแชท และกดส่ง
2. สังเกตการอธิบายแบบเป็นลำดับเหตุผลก่อนสรุปคำตอบ

```text
A company processes customer orders manually. Each order takes 15 minutes to verify, and an employee can process 30 orders per day. If automation reduces verification time by 50%, how many additional orders can an employee process daily? Explain your reasoning step by step.
```

### Practice 2d: Self-Refine Prompt

1. ก๊อปปี้ prompt ด้านล่างทีละ use case ไปวางในช่องแชท และกดส่ง
2. สังเกตความต่างระหว่างคำตอบรอบแรกกับคำตอบที่ถูกปรับปรุงโดยโมเดล
3. จดข้อสังเกตว่าการสั่งให้วิจารณ์และปรับคำตอบช่วยเพิ่มคุณภาพอย่างไร

#### Customer Education Content + Refinement (Life Insurance Context)

```text
Write a short paragraph about the benefits of having life insurance coverage for individuals and families, including financial protection, savings, and long-term security. Then, review your paragraph and suggest ways to improve its clarity and conciseness for Tokio Marine Life Insurance customers.
```

#### Marketing + Critique (Life Insurance Product)

```text
Generate a marketing slogan for a new life insurance product offered by Tokio Marine Life Insurance. Now, critique your slogan and propose three alternative slogans that are more impactful and better aligned with trust, protection, long-term security, and care for families.
```

#### Policy Summary + Improvement (Life Insurance Policy)

```text
Write a summary of the following life insurance policy document: [paste policy]. Then, identify any areas where your summary could be more accurate, clearer, or more comprehensive, and revise it accordingly for Tokio Marine Life Insurance stakeholders and policyholders.
```

#### Client Communication + Professional Rewrite (Life Insurance Customer)

```text
Compose an email to a client explaining an update to their life insurance policy, coverage, or claim status at Tokio Marine Life Insurance. Review your email for tone, clarity, and empathy, and rewrite it to be more professional, reassuring, and customer-friendly.
```


## Checkpoint

- รัน prompt ครบตามเทคนิค Zero-Shot, Few-Shot, Chain-of-Thought, และ Self-Refine
- ใช้ prompt ต้นฉบับจากสไลด์อ้างอิงแบบ exact text โดยไม่แก้ข้อความ
- มีบันทึกข้อสังเกตความแตกต่างของคำตอบจากแต่ละเทคนิคอย่างน้อย 1 จุดต่อเทคนิค

## Expected Output

- ผลลัพธ์จากการทดลอง prompt อย่างน้อย 1 คำตอบต่อเทคนิค
- บันทึกเปรียบเทียบคุณภาพคำตอบระหว่างเทคนิคทั้ง 4 แบบ
- ตัวอย่างคำตอบที่ผ่านการปรับปรุงจาก Self-Refine อย่างน้อย 1 ชิ้น
