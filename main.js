/********************
 * YOUR CODE BELOW! *
 ********************/

// More than 5
function moreThan5(num){
  return num > 5;
}

// Grade checker
function isNewTopScore(score, topScore){
  return score > topScore;
}
function isInDanger(grade){
  return 71 >= grade && grade >= 60;
}
function isCoasting(grade){
  return 83 >= grade && grade >= 72;
}
function isSucceeding(grade){
  return 92 >= grade && grade >= 84;
}
function isFailing(grade){
  return grade < 60;
}
function isAcing(grade){
  return grade > 92;
}

// Role checker
function isStudent(role){
  return role === 'student';
}
function isTeacher(role){
  return role === 'teacher';
}
function isAdmin(role){
  return role === 'admin';
}  

// School level checker
function isElementary(schoolLevel){
  return schoolLevel === 'elementary';
}

// Different people checker
function areDifferentPeople(name1, name2){
  return name1 !== name2;
}

// Teacher checker
function isMiddleSchoolTeacher(role, level){
  return role == 'teacher' && 8 >= level && level >= 6;
}

// Administrator checker
function notAnElementarySchoolAdministrator(schoolLevel, role){
  return schoolLevel !== 'elementary' || role !== 'admin'
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
