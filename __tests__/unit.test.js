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
    expect(functions.isStrongPassword('Clk3l12d4')).toBe(true);
  });

  // Test 2 Good
test('isStrongPassword Company Valid', () => {
    expect(functions.isStrongPassword('Drt3e45r')).toBe(true);
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

// Test 1 Good
test('isDate Valid', () => {
    expect(functions.isDate('10/15/1990')).toBe(true);
  });

  // Test 2 Good
test('isDate Birthday Valid', () => {
    expect(functions.isDate('11/14/2002')).toBe(true);
  });
  // Test 3 Bad
test('isDate Age InValid', () => {
    expect(functions.isDate('20')).toBe(false);
  });

  // Test 4 Bad

test('isDate Email InValid', () => {
    expect(functions.isDate('rjayananucsd.edu')).toBe(false);
  });


// Function 5

// Test 1 Good
test('isHexColor White Valid', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
  });

  // Test 2 Good
test('isHexColor Black Valid', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
  });
  // Test 3 Bad
test('isHexColor Age InValid', () => {
    expect(functions.isHexColor('20')).toBe(false);
  });

  // Test 4 Bad

test('isHexColor Email InValid', () => {
    expect(functions.isHexColor('rjayananucsd.edu')).toBe(false);
  });
