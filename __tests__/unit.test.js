// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


// Function 1

// Test 1 Good
test('isPhoneNumber Valid', () => {
    expect(functions.isPhoneNumber('916-815-6839')).toBe(true);
  });

  // Test 2 Good
test('isPhoneNumber Diff Format Valid', () => {
    expect(functions.isPhoneNumber('(858) 651-5050')).toBe(true);
  });
  // Test 3 Bad
test('isPhoneNumber Age InValid', () => {
    expect(functions.isPhoneNumber('20')).toBe(false);
  });

  // Test 4 Bad
test('isPhoneNumber Too Long InValid', () => {
    expect(functions.isPhoneNumber('+1-65330534413051244445')).toBe(false);
  });

// Functiom 2

// Test 1 Good
test('isEmail Valid', () => {
    expect(functions.isEmail('bob@gmail.com')).toBe(true);
  });

  // Test 2 Good
test('isEmail Company Valid', () => {
    expect(functions.isEmail('rjayanan@ucsd.edu')).toBe(true);
  });
  // Test 3 Bad
test('isEmail Age InValid', () => {
    expect(functions.isEmail('20')).toBe(false);
  });

  // Test 4 Bad

test('isEmail No @ InValid', () => {
    expect(functions.isEmail('rjayananucsd.edu')).toBe(false);
  });


// Function 3

// Test 1 Good
test('isStrongPassword Valid', () => {
    expect(functions.isStrongPassword('bob@gmail.com')).toBe(true);
  });

  // Test 2 Good
test('isStrongPassword Company Valid', () => {
    expect(functions.isStrongPassword('rjayanan@ucsd.edu')).toBe(true);
  });
  // Test 3 Bad
test('isStrongPassword Age InValid', () => {
    expect(functions.isStrongPassword('20')).toBe(false);
  });

  // Test 4 Bad

test('isStrongPassword Email InValid', () => {
    expect(functions.isStrongPassword('rjayananucsd.edu')).toBe(false);
  });




// Function 4


// Function 5


// TODO - Part 2