# Playwright JavaScript Learning Project

This repository is a hands-on learning project for mastering **Playwright** with **JavaScript**. It contains various test cases and examples that demonstrate how to use Playwright to automate UI testing for modern web applications.

---

## Project Structure

PLAYWRIGHT_PROJECT/
├── tests/ # All test scripts
│ ├── Alerts.spec.js
│ ├── Assertions.spec.js
│ ├── AutoSuggestDropDown.spec.js
│ ├── BootstrapDropDowns.spec.js
│ ├── CheckBoxes.spec.js
│ ├── CodeGen.spec.js
│ ├── DropDowns.spec.js
│ ├── example.spec.js
│ ├── Frames.spec.js
│ ├── HiddenDropDown.spec.js
│ ├── HomePageTest.spec.js
│ ├── InnerFrames.spec.js
│ ├── InputBoxes.spec.js
│ ├── Locators_Builtins.spec.js
│ ├── Locators_Multiple_Elements.spec.js
│ ├── Locators.spec.js
│ ├── MultiSelectDropDown.spec.js
│ ├── RadioButtons.spec.js
│ ├── SoftAssertions.spec.js
│ ├── test.js
│ ├── test.spec.js
│ └── WebTables.spec.js
├── playwright.config.js # Playwright configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # Lock file
├── .gitignore
├── README.md
└── test-results/ # Stores test result outputs

markdown
Copy
Edit

---

## What’s Covered

Each `.spec.js` file demonstrates a specific concept or feature of Playwright:

- **Alerts & Frames**
  - `Alerts.spec.js`, `Frames.spec.js`, `InnerFrames.spec.js`
- **Assertions**
  - `Assertions.spec.js`, `SoftAssertions.spec.js`
- **Forms & Inputs**
  - `InputBoxes.spec.js`, `RadioButtons.spec.js`, `CheckBoxes.spec.js`
- **Drop-downs & Selectors**
  - `DropDowns.spec.js`, `HiddenDropDown.spec.js`, `BootstrapDropDowns.spec.js`, `AutoSuggestDropDown.spec.js`, `MultiSelectDropDown.spec.js`
- **Locators**
  - `Locators.spec.js`, `Locators_Builtins.spec.js`, `Locators_Multiple_Elements.spec.js`
- **Web Tables**
  - `WebTables.spec.js`
- **Navigation & Homepage**
  - `HomePageTest.spec.js`
- **Code Generation**
  - `CodeGen.spec.js` - recorded via Playwright Codegen
- **Miscellaneous Examples**
  - `example.spec.js`, `test.spec.js`, `test.js`

---

## 🛠 Getting Started

### 📦 Install Dependencies

```bash
npm install
▶️ Run All Tests
bash
Copy
Edit
npx playwright test
🧪 Run Specific Test File
bash
Copy
Edit
npx playwright test tests/Alerts.spec.js
📊 Reports & Results
HTML Reports: Generated in playwright-report/

Raw Results: Stored in test-results/

Generate HTML report manually:

bash
Copy
Edit
npx playwright show-report
🧰 Tech Stack
Playwright

JavaScript (ES6+)

Node.js & NPM

📚 Learning Goal
This project is intended as a personal study resource to explore and master various features of Playwright, such as:

Working with locators

Handling alerts and frames

Managing drop-downs and form inputs

Automating UI scenarios and assertions

Executing tests across pages and frames

