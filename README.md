# Project: Testing Practice

![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Project Status: Stable](https://img.shields.io/badge/status-stable-brightgreen)

A curated collection of essential JavaScript utility functions with complete test coverage—ideal for practicing JavaScript fundamentals and mastering Test-Driven Development (TDD).

## Features

- **Five Core Utility Functions:** Essential JavaScript functions for string manipulation, calculations, and data analysis
- **Comprehensive Test Coverage:** Jest-based tests for all functions with edge case handling
- **Modern JavaScript:** ES6+ syntax with proper module exports/imports
- **Input Validation:** Robust error handling and input validation utilities
- **ESLint Configuration:** Code quality and consistency enforcement

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 16 or higher recommended)
- npm (comes bundled with Node.js)

Verify your Node.js and npm installations:

```bash
node --version
npm --version
```

## Getting Started

Follow these steps to get started with the Testing Practice project:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
# HTTPS (recommended for beginners)
git clone https://github.com/krig6/testing-practice.git

# SSH (if you have SSH keys configured)
git clone git@github.com:krig6/testing-practice.git

cd testing-practice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

Execute all tests to verify functionality:

```bash
npm test
```

To run tests in watch mode during development:

```bash
npm run test:watch
```

## Project Structure

```
.
├── src/
│   ├── utils/
│   │   └── validateInput.js    # Input validation utilities
│   ├── analyzeArray.js         # Array analysis function
│   ├── caesarCipher.js         # Caesar cipher implementation
│   ├── calculator.js           # Calculator object with basic operations
│   ├── capitalize.js           # String capitalization function
│   └── reverseString.js        # String reversal function
├── tests/
│   ├── analyzeArray.test.js    # Tests for analyzeArray function
│   ├── caesarCipher.test.js    # Tests for caesarCipher function
│   ├── calculator.test.js      # Tests for calculator operations
│   ├── capitalize.test.js      # Tests for capitalize function
│   └── reverseString.test.js   # Tests for reverseString function
├── README.md                   # Project documentation
├── eslint.config.js            # ESLint configuration
└── package.json                # Project metadata and dependencies
```

## Functions

**`capitalize`**: Takes a string and returns it with the first character capitalized

**`reverseString`**: Takes a string and returns it reversed

**`calculator`**: An object containing functions for basic operations: *add*, *subtract*, *divide*, *multiply*

**`caesarCipher`**: Takes a string and a shift factor, returns the string with each character *shifted* using Caesar cipher encryption

**`analyzeArray`**: Takes an array of numbers and returns an object with *average*, *min*, *max*, and *length* properties

## Function Usage Examples

`capitalize`
```javascript
import { capitalize } from './src/capitalize.js';

capitalize('hello world'); // Returns: 'Hello world'
capitalize('JAVASCRIPT'); // Returns: 'JAVASCRIPT'
```

`reverseString`

```javascript
import { reverseString } from './src/reverseString.js';

reverseString('hello'); // Returns: 'olleh'
reverseString('JavaScript'); // Returns: 'tpircSavaJ'
```

`calculator`
```javascript
import { calculator } from './src/calculator.js';

calculator.add(5, 3); // Returns: 8
calculator.subtract(10, 4); // Returns: 6
calculator.multiply(3, 7); // Returns: 21
calculator.divide(15, 3); // Returns: 5
```

`caesarCipher`
```javascript
import { caesarCipher } from './src/caesarCipher.js';

caesarCipher('Hello World', 3); // Returns: 'Khoor Zruog'
caesarCipher('xyz', 1); // Returns: 'yza'
```

`analyzeArray`
```javascript
import { analyzeArray } from './src/analyzeArray.js';

analyzeArray([1, 8, 3, 4, 2, 6]);
// Returns: { average: 4, min: 1, max: 8, length: 6 }
```

## Testing

This project uses Jest for testing. Each function has comprehensive tests covering:

- **Basic functionality**
- **Edge cases**
- **Error handling**
- **Input validation**

Tests are located in the `tests/` directory and follow the naming convention `[functionName].test.js`.

## Contributing

Contributions, bug reports, and feature suggestions are welcome!

To contribute:

1. **Fork the repository**
2. **Create a feature branch**
3. **Write tests for new functionality**
4. **Ensure all tests pass**
5. **Follow the existing code style**
6. **Submit a pull request**
