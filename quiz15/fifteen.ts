let editGuestList = ["Shakir bhai", "Shahzad", "Dr.Faraz", "Sheheryar", "Ejaz Abbasi"];

editGuestList.splice(2, 1, "Imran Bhai");

console.log(editGuestList);


console.log(`Asalam o alaikum my dear freind ${editGuestList[0]} as Dr.Faraz is not available beacause of an emergeny I have invited one of my old freind ${editGuestList[2]},other invited people are ${editGuestList[1]}, ${editGuestList[3]}, ${editGuestList[4]}`)
console.log(`Asalam o alaikum my dear freind ${editGuestList[1]} as Dr.Faraz is not available beacause of an emergeny I have invited one of my old freind ${editGuestList[2]},other invited people are ${editGuestList[0]}, ${editGuestList[3]}, ${editGuestList[4]}`)
console.log(`Asalam o alaikum my dear freind ${editGuestList[3]} as Dr.Faraz is not available beacause of an emergeny I have invited one of my old freind ${editGuestList[2]},other invited people are ${editGuestList[1]}, ${editGuestList[0]}, ${editGuestList[4]}`)
console.log(`Asalam o alaikum my dear freind ${editGuestList[4]} as Dr.Faraz is not available beacause of an emergeny I have invited one of my old freind ${editGuestList[2]},other invited people are ${editGuestList[1]}, ${editGuestList[3]}, ${editGuestList[0]}`)