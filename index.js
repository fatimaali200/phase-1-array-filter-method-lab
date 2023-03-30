const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching=(array,name)=>{
   const listOfNames= array.filter(x => x.toLowerCase() === name.toLowerCase())
   return listOfNames;
}
console.log(findMatching(drivers,'bobby'));

////////////////////////////////////////////
const fuzzyMatch=(array,name)=>{
    const listOfNames= array.filter(x => x.toLowerCase().startsWith(name.toLowerCase()))
    return listOfNames;
}
console.log(fuzzyMatch(drivers,'Sa'));

//////////////////////////////////////////
const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];
const matchName=(array,name)=>{
    const listOfNames= array.filter(x => x.name ===name)
    return listOfNames;
}
console.log(matchName(driver,'Bobby'));
