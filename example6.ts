type Fruit_Date = number
type Fruit_Type = string
type Fruit_Spieces = string


type Fruit = {
  Date: Fruit_Date,
  type: Fruit_Type,
  spieces: Fruit_Spieces

}

const fruitDate: Fruit_Date = 24082024
const fruitType: Fruit_Type = "Banana"
const fruitSpieces: Fruit_Spieces = "plantain"


const fruit: Fruit = {
  Date: fruitDate,
  type: fruitType,
  spieces: fruitSpieces
  

};

console.log(fruit);
