// JEST is a testing framework
// We use expect()
function concatStr(s1,s2){
    return s1+s2;
}
console.log(concatStr("abc","def"));
// expect(concatStr("abc","def")).toBe("abcdef")


//Testing types:
// e2e, Integration, Unit
// e2e end to end testing are slow testing methods to manual check systems
// Integration testing tests how parts of system interacts with each other
// Unit testing tests the smallest units of the system(self-contained codes to check subprocesses)

//Mocking: Sperating code from related dependencies during testing
//Snapshot testing: Used by web developers to verify that there are no regressions in the DOM


//TDD: Test Driven Development
// RED GREEN REFACTOR cycles
// Get requriements
// Write failing test code
// Write source code
// Refactor and optimise the implementations