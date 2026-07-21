# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Orders.spec.js >> Customer Management Workflow >> should successfully perform the complete customer workflow
- Location: tests\e2e\Orders.spec.js:16:3

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('tr').filter({ hasText: 'Playwright Customer 1784637689392' })
Expected: visible
Received: undefined

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - textbox "Search customers..." [ref=e6]
    - button "+ Add Customer" [ref=e7]
  - table [ref=e9]:
    - rowgroup [ref=e10]:
      - row "Customer Name Phone Email Address Notes Actions" [ref=e11]:
        - columnheader "Customer Name" [ref=e12]
        - columnheader "Phone" [ref=e13]
        - columnheader "Email" [ref=e14]
        - columnheader "Address" [ref=e15]
        - columnheader "Notes" [ref=e16]
        - columnheader "Actions" [ref=e17]
    - rowgroup [ref=e18]:
      - row "Playwright Customer 1784637689392 09637689392 playwright1784637689392@gmail.com Pooc, Balayan - Edit Delete" [ref=e19]:
        - cell "Playwright Customer 1784637689392" [ref=e20]
        - cell "09637689392" [ref=e21]
        - cell "playwright1784637689392@gmail.com" [ref=e22]
        - cell "Pooc, Balayan" [ref=e23]
        - cell "-" [ref=e24]
        - cell "Edit Delete" [ref=e25]:
          - generic [ref=e26]:
            - button "Edit" [ref=e27]
            - button "Delete" [ref=e28]
      - row "Playwright Customer 1784628456171 09628456171 playwright1784628456171@gmail.com Pooc, Balayan - Edit Delete" [ref=e29]:
        - cell "Playwright Customer 1784628456171" [ref=e30]
        - cell "09628456171" [ref=e31]
        - cell "playwright1784628456171@gmail.com" [ref=e32]
        - cell "Pooc, Balayan" [ref=e33]
        - cell "-" [ref=e34]
        - cell "Edit Delete" [ref=e35]:
          - generic [ref=e36]:
            - button "Edit" [ref=e37]
            - button "Delete" [ref=e38]
      - row "Playwright Customer 1784627929434 09627929434 playwright1784627929434@gmail.com - - Edit Delete" [ref=e39]:
        - cell "Playwright Customer 1784627929434" [ref=e40]
        - cell "09627929434" [ref=e41]
        - cell "playwright1784627929434@gmail.com" [ref=e42]
        - cell "-" [ref=e43]
        - cell "-" [ref=e44]
        - cell "Edit Delete" [ref=e45]:
          - generic [ref=e46]:
            - button "Edit" [ref=e47]
            - button "Delete" [ref=e48]
      - row "Playwright Customer 1784627468634 09627468634 playwright1784627468634@gmail.com - - Edit Delete" [ref=e49]:
        - cell "Playwright Customer 1784627468634" [ref=e50]
        - cell "09627468634" [ref=e51]
        - cell "playwright1784627468634@gmail.com" [ref=e52]
        - cell "-" [ref=e53]
        - cell "-" [ref=e54]
        - cell "Edit Delete" [ref=e55]:
          - generic [ref=e56]:
            - button "Edit" [ref=e57]
            - button "Delete" [ref=e58]
      - row "Playwright Customer 1784627155449 09627155449 playwright1784627155449@gmail.com - - Edit Delete" [ref=e59]:
        - cell "Playwright Customer 1784627155449" [ref=e60]
        - cell "09627155449" [ref=e61]
        - cell "playwright1784627155449@gmail.com" [ref=e62]
        - cell "-" [ref=e63]
        - cell "-" [ref=e64]
        - cell "Edit Delete" [ref=e65]:
          - generic [ref=e66]:
            - button "Edit" [ref=e67]
            - button "Delete" [ref=e68]
      - row "Playwright Customer 1784626907378 09626907378 playwright1784626907378@gmail.com - - Edit Delete" [ref=e69]:
        - cell "Playwright Customer 1784626907378" [ref=e70]
        - cell "09626907378" [ref=e71]
        - cell "playwright1784626907378@gmail.com" [ref=e72]
        - cell "-" [ref=e73]
        - cell "-" [ref=e74]
        - cell "Edit Delete" [ref=e75]:
          - generic [ref=e76]:
            - button "Edit" [ref=e77]
            - button "Delete" [ref=e78]
      - row "Playwright Customer 1784626300469 09626300469 playwright1784626300469@gmail.com - - Edit Delete" [ref=e79]:
        - cell "Playwright Customer 1784626300469" [ref=e80]
        - cell "09626300469" [ref=e81]
        - cell "playwright1784626300469@gmail.com" [ref=e82]
        - cell "-" [ref=e83]
        - cell "-" [ref=e84]
        - cell "Edit Delete" [ref=e85]:
          - generic [ref=e86]:
            - button "Edit" [ref=e87]
            - button "Delete" [ref=e88]
      - row "Playwright Customer 1784626214768 09626214768 playwright1784626214768@gmail.com - - Edit Delete" [ref=e89]:
        - cell "Playwright Customer 1784626214768" [ref=e90]
        - cell "09626214768" [ref=e91]
        - cell "playwright1784626214768@gmail.com" [ref=e92]
        - cell "-" [ref=e93]
        - cell "-" [ref=e94]
        - cell "Edit Delete" [ref=e95]:
          - generic [ref=e96]:
            - button "Edit" [ref=e97]
            - button "Delete" [ref=e98]
      - row "Playwright Customer 1784626135675 09626135675 playwright1784626135675@gmail.com - - Edit Delete" [ref=e99]:
        - cell "Playwright Customer 1784626135675" [ref=e100]
        - cell "09626135675" [ref=e101]
        - cell "playwright1784626135675@gmail.com" [ref=e102]
        - cell "-" [ref=e103]
        - cell "-" [ref=e104]
        - cell "Edit Delete" [ref=e105]:
          - generic [ref=e106]:
            - button "Edit" [ref=e107]
            - button "Delete" [ref=e108]
      - row "Playwright Customer 1784626097453 09626097453 playwright1784626097453@gmail.com - - Edit Delete" [ref=e109]:
        - cell "Playwright Customer 1784626097453" [ref=e110]
        - cell "09626097453" [ref=e111]
        - cell "playwright1784626097453@gmail.com" [ref=e112]
        - cell "-" [ref=e113]
        - cell "-" [ref=e114]
        - cell "Edit Delete" [ref=e115]:
          - generic [ref=e116]:
            - button "Edit" [ref=e117]
            - button "Delete" [ref=e118]
      - row "Playwright Customer 1784625743245 09625743245 playwright1784625743245@gmail.com - - Edit Delete" [ref=e119]:
        - cell "Playwright Customer 1784625743245" [ref=e120]
        - cell "09625743245" [ref=e121]
        - cell "playwright1784625743245@gmail.com" [ref=e122]
        - cell "-" [ref=e123]
        - cell "-" [ref=e124]
        - cell "Edit Delete" [ref=e125]:
          - generic [ref=e126]:
            - button "Edit" [ref=e127]
            - button "Delete" [ref=e128]
      - row "Playwright Customer 1784625655521 09625655521 playwright1784625655521@gmail.com - - Edit Delete" [ref=e129]:
        - cell "Playwright Customer 1784625655521" [ref=e130]
        - cell "09625655521" [ref=e131]
        - cell "playwright1784625655521@gmail.com" [ref=e132]
        - cell "-" [ref=e133]
        - cell "-" [ref=e134]
        - cell "Edit Delete" [ref=e135]:
          - generic [ref=e136]:
            - button "Edit" [ref=e137]
            - button "Delete" [ref=e138]
      - row "PW-LOCAL-1784625503907 09625503907 pw1784625503907@gmail.com Pooc, Balayan - Edit Delete" [ref=e139]:
        - cell "PW-LOCAL-1784625503907" [ref=e140]
        - cell "09625503907" [ref=e141]
        - cell "pw1784625503907@gmail.com" [ref=e142]
        - cell "Pooc, Balayan" [ref=e143]
        - cell "-" [ref=e144]
        - cell "Edit Delete" [ref=e145]:
          - generic [ref=e146]:
            - button "Edit" [ref=e147]
            - button "Delete" [ref=e148]
      - row "Playwright Customer 1784625315751 09625315751 playwright1784625315751@gmail.com - - Edit Delete" [ref=e149]:
        - cell "Playwright Customer 1784625315751" [ref=e150]
        - cell "09625315751" [ref=e151]
        - cell "playwright1784625315751@gmail.com" [ref=e152]
        - cell "-" [ref=e153]
        - cell "-" [ref=e154]
        - cell "Edit Delete" [ref=e155]:
          - generic [ref=e156]:
            - button "Edit" [ref=e157]
            - button "Delete" [ref=e158]
      - row "Playwright Customer 1784625185837 09625185837 playwright1784625185837@gmail.com - - Edit Delete" [ref=e159]:
        - cell "Playwright Customer 1784625185837" [ref=e160]
        - cell "09625185837" [ref=e161]
        - cell "playwright1784625185837@gmail.com" [ref=e162]
        - cell "-" [ref=e163]
        - cell "-" [ref=e164]
        - cell "Edit Delete" [ref=e165]:
          - generic [ref=e166]:
            - button "Edit" [ref=e167]
            - button "Delete" [ref=e168]
      - row "Playwright Customer 1784625064276 Updated 09625064276 playwright1784625064276@gmail.com Pooc, Balayan - Edit Delete" [ref=e169]:
        - cell "Playwright Customer 1784625064276 Updated" [ref=e170]
        - cell "09625064276" [ref=e171]
        - cell "playwright1784625064276@gmail.com" [ref=e172]
        - cell "Pooc, Balayan" [ref=e173]
        - cell "-" [ref=e174]
        - cell "Edit Delete" [ref=e175]:
          - generic [ref=e176]:
            - button "Edit" [ref=e177]
            - button "Delete" [ref=e178]
      - row "Playwright Customer 1784624984851 Updated 09624984851 playwright1784624984851@gmail.com Pooc, Balayan - Edit Delete" [ref=e179]:
        - cell "Playwright Customer 1784624984851 Updated" [ref=e180]
        - cell "09624984851" [ref=e181]
        - cell "playwright1784624984851@gmail.com" [ref=e182]
        - cell "Pooc, Balayan" [ref=e183]
        - cell "-" [ref=e184]
        - cell "Edit Delete" [ref=e185]:
          - generic [ref=e186]:
            - button "Edit" [ref=e187]
            - button "Delete" [ref=e188]
      - row "Playwright Customer 1784624735485 09624735485 playwright1784624735485@gmail.com - - Edit Delete" [ref=e189]:
        - cell "Playwright Customer 1784624735485" [ref=e190]
        - cell "09624735485" [ref=e191]
        - cell "playwright1784624735485@gmail.com" [ref=e192]
        - cell "-" [ref=e193]
        - cell "-" [ref=e194]
        - cell "Edit Delete" [ref=e195]:
          - generic [ref=e196]:
            - button "Edit" [ref=e197]
            - button "Delete" [ref=e198]
      - row "Playwright Customer 1784624706430 09624706430 playwright1784624706430@gmail.com - - Edit Delete" [ref=e199]:
        - cell "Playwright Customer 1784624706430" [ref=e200]
        - cell "09624706430" [ref=e201]
        - cell "playwright1784624706430@gmail.com" [ref=e202]
        - cell "-" [ref=e203]
        - cell "-" [ref=e204]
        - cell "Edit Delete" [ref=e205]:
          - generic [ref=e206]:
            - button "Edit" [ref=e207]
            - button "Delete" [ref=e208]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.describe.configure({
  4   |   mode: "serial",
  5   | });
  6   | 
  7   | /**
  8   |  * =====================================================
  9   |  * CUSTOMER MANAGEMENT WORKFLOW
  10  |  * =====================================================
  11  |  */
  12  | 
  13  | test.describe("Customer Management Workflow", () => {
  14  |   test.setTimeout(120000);
  15  | 
  16  |   test("should successfully perform the complete customer workflow", async ({
  17  |     page,
  18  |   }) => {
  19  |     const timestamp = Date.now();
  20  | 
  21  |     const customer = {
  22  |       name: `Playwright Customer ${timestamp}`,
  23  | 
  24  |       phone: `09${timestamp.toString().slice(-9)}`,
  25  | 
  26  |       email: `playwright${timestamp}@gmail.com`,
  27  | 
  28  |       address: "Pooc, Balayan",
  29  |     };
  30  | 
  31  |     const updatedName = `${customer.name} Updated`;
  32  | 
  33  |     await page.goto("/", {
  34  |       waitUntil: "networkidle",
  35  |     });
  36  | 
  37  |     await page
  38  |       .getByRole("button", {
  39  |         name: /customers/i,
  40  |       })
  41  |       .click();
  42  | 
  43  |     await page
  44  |       .getByRole("button", {
  45  |         name: /add customer/i,
  46  |       })
  47  |       .click();
  48  | 
  49  |     await page.getByLabel("Customer Name").fill(customer.name);
  50  | 
  51  |     await page.getByLabel("Phone Number").fill(customer.phone);
  52  | 
  53  |     await page.getByLabel("Email").fill(customer.email);
  54  | 
  55  |     await page.getByLabel("Address").fill(customer.address);
  56  | 
  57  |     await page
  58  |       .getByRole("button", {
  59  |         name: /create customer/i,
  60  |       })
  61  |       .click();
  62  | 
  63  |     await page.waitForTimeout(3000);
  64  | 
  65  |     await page.reload({
  66  |       waitUntil: "networkidle",
  67  |     });
  68  | 
  69  |     await page
  70  |       .getByRole("button", {
  71  |         name: /customers/i,
  72  |       })
  73  |       .click()
  74  |       .catch(() => {});
  75  | 
  76  |     const customerRow = page.locator("tr").filter({
  77  |       hasText: customer.name,
  78  |     });
  79  | 
> 80  |     await expect(customerRow).toBeVisible({
      |                               ^ Error: expect(locator).toBeVisible() failed
  81  |       timeout: 30000,
  82  |     });
  83  | 
  84  |     await customerRow
  85  |       .getByRole("button", {
  86  |         name: /edit/i,
  87  |       })
  88  |       .click();
  89  | 
  90  |     await page.getByLabel("Customer Name").fill(updatedName);
  91  | 
  92  |     await page
  93  |       .getByRole("button", {
  94  |         name: /update customer/i,
  95  |       })
  96  |       .click();
  97  | 
  98  |     await page.waitForTimeout(3000);
  99  | 
  100 |     await page.reload({
  101 |       waitUntil: "networkidle",
  102 |     });
  103 | 
  104 |     const updatedRow = page.locator("tr").filter({
  105 |       hasText: updatedName,
  106 |     });
  107 | 
  108 |     await expect(updatedRow).toBeVisible({
  109 |       timeout: 30000,
  110 |     });
  111 | 
  112 |     page.once("dialog", async (dialog) => {
  113 |       await dialog.accept();
  114 |     });
  115 | 
  116 |     await updatedRow
  117 |       .getByRole("button", {
  118 |         name: /delete/i,
  119 |       })
  120 |       .click();
  121 | 
  122 |     await expect(updatedRow).not.toBeVisible({
  123 |       timeout: 30000,
  124 |     });
  125 |   });
  126 | });
  127 | 
  128 | /**
  129 |  * =====================================================
  130 |  * ORDER MANAGEMENT END-TO-END TESTING
  131 |  * =====================================================
  132 |  */
  133 | 
  134 | test.describe("Order Management End-to-End Testing", () => {
  135 |   test.setTimeout(120000);
  136 | 
  137 |   const timestamp = Date.now();
  138 | 
  139 |   const customer = {
  140 |     name: `Playwright Customer ${timestamp}`,
  141 | 
  142 |     phone: `09${timestamp.toString().slice(-9)}`,
  143 | 
  144 |     email: `playwright${timestamp}@gmail.com`,
  145 |   };
  146 | 
  147 |   const getOrderRow = (page) =>
  148 |     page.locator("tbody tr").filter({
  149 |       hasText: customer.name,
  150 |     });
  151 | 
  152 |   test("should successfully complete the entire order workflow", async ({
  153 |     page,
  154 |   }) => {
  155 |     await page.goto("/", {
  156 |       waitUntil: "networkidle",
  157 |     });
  158 | 
  159 |     await page
  160 |       .getByRole("button", {
  161 |         name: /orders/i,
  162 |       })
  163 |       .click();
  164 | 
  165 |     await page
  166 |       .getByRole("button", {
  167 |         name: /new order/i,
  168 |       })
  169 |       .click();
  170 | 
  171 |     await page.getByPlaceholder("Client Name").fill(customer.name);
  172 | 
  173 |     await page.getByPlaceholder("Phone Number").fill(customer.phone);
  174 | 
  175 |     await page.getByPlaceholder("Email").fill(customer.email);
  176 | 
  177 |     await page.getByPlaceholder(/e\.g\. 3\.5/i).fill("20");
  178 | 
  179 |     const addon = page.locator(".addon-btn-add:not([disabled])").first();
  180 | 
```