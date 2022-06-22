const { BadRequestError} = require("../utils/errors")

class GiftExchange {
    static pairs(object) {
        let namesArr = object
        //if (!namesArr)
        //{
        //    throw new BadRequestError("Invalid input type")
        //}
        if(namesArr.length % 2 == 1)
        {
            throw new BadRequestError("The number of names cannot be odd")
        }
        
        let paired = []
        shuffle(namesArr)
       while(namesArr.length > 0)
       {
           let element = []
           element.push(namesArr.shift())
           element.push(namesArr.pop())
           paired.push(element)
       }

        return paired
    }

    static traditional(object) {
        let namesArr = object

        //if (!namesArr)
        //{
        //    throw new BadRequestError("Invalid input type")
        //}

        let traditional = []
        shuffle(namesArr)

        for(let i=0;i<namesArr.length;i++){
            if(i == namesArr.length-1)
            {
                traditional.push(namesArr[i] + " is giving a gift to " + namesArr[0])
            }
            else {
            traditional.push(namesArr[i] + " is giving a gift to " + namesArr[i+1])
            }
        }

        return traditional
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

module.exports = GiftExchange