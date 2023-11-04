import { readFileSync, writeFile } from "fs";

const data = readFileSync('challenge_01.txt', 'utf8');

const arrayedData = data.toLowerCase().split(" ");

const dataObject = {};

arrayedData.forEach(el => {
  if(!dataObject[el]){
    dataObject[el]=1
    return
  }
  if(dataObject[el]){
    dataObject[el]+=1
  }

})

let stringedData = "";

Object.keys(dataObject).forEach(key => {
  stringedData += key.concat(dataObject[key])
});
console.log(stringedData)

console.log(Object.values(dataObject).reduce((a,b)=> a+b)===arrayedData.length)