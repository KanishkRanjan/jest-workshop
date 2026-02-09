# Jest Workshop Submission

## Student Details
- Name: Kanishk Kumar Ranjan
- Roll Number: 2024-B-16022006A
- GitHub Username: KanishkRanjan

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. No Coupon Case
**What it protects against:** Ensures that the core logic calculates the correct total when no discount is applied, preventing regressions in basic arithmetic or unwanted default discounts.

---

### 2. SAVE10 Coupon Logic
**What it protects against:** Verifies that the 10% discount is applied correctly and, crucially, that it is **capped at 100**, preventing excessive discounts on high-value items (e.g., protecting revenue).

---

### 3. FLAT50 Coupon & Boundary
**What it protects against:** Ensures a flat 50 deduction works. Also checks that the total **never drops below 0**, preventing negative billing bugs where the system might owe the user money.

---

### 4. Input Validation (Invalid Coupon & Subtotal)
**What it protects against:** Prevents the system from processing invalid data (like negative prices or non-existent coupons), ensuring robust error handling and API stability.

---

### 5. Complex Business Logic (High Value + Coupon)
**What it protects against:** Verifies the interaction between the automatic 5% discount (for >1000) and coupon codes. This prevents logical errors in the order of operations for applying multiple discounts.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes.   
- GitHub Actions Run URL: (Will be generated upon push)

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

