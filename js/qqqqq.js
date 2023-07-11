// const array = [1, 1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 6, 7, 7, 8, 9, 9, 9, 10];
// const abc = ["w", "q", "e", "w", "e", "t"];

// function withoutRepeat(array) {
//   const unique = [];

//   for (let i = 0; i < array.length; i++) {
//     const elI = array[i];
//     let count = 0;
//     for (let j = 0; j < array.length; j++) {
//       const elJ = array[j];
//       if (elI === elJ) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       unique.push(elI);
//     }
//   }
//   return unique;
// }
// function withoutRepeat(array) {
//   const unique = [];
//   const obj = {};

//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];
//     if (el in obj) {
//       obj[el] += 1;
//     } else {
//       obj[el] = 1;
//     }
//   }
//   console.log(obj);

//   const keys = Object.keys(obj);

//   keys.forEach((key) => {
//     if (obj[key] === 1) {
//       unique.push(key);
//     }
//   });
//   return unique;
// }

// console.log(withoutRepeat(abc));

// const obj = Object.create(Object.prototype, { name: { value: "qqq" } });
// console.log(obj);
// const obj1 = new Object({ name: "qqq" });
// console.log(obj1);

// function isUnique(str) {
//   return str.length === new Set(str).size;
// }
// function isUnique(str) {
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if (str.indexOf(letter) !== i) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isUnique("abcccdef")); // -> false
// console.log(isUnique("1234567")); // -> true
// console.log(isUnique("abcABC")); // -> true
// console.log(isUnique("abcadef")); // -> false

// function flatten(array) {
//   const arr = [];

//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];

//     if (Array.isArray(el)) {
//       const flat = flatten(el);

//       for (let j = 0; j < flat.length; j++) {
//         arr.push(flat[j]);
//       }
//     } else {
//       arr.push(el);
//     }
//   }

//   return arr;
// }

// console.log(flatten([[[[[[[[[[[1]]]]]]]]]], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

// function removeDupes(str) {
//   return str
//     .split("")
//     .filter((item, i, arr) => arr.indexOf(item) === i)
//     .join("");
// }
// console.log(removeDupes("abcd")); // -> 'abcd'
// console.log(removeDupes("aabbccdd")); // -> 'abcd'
// console.log(removeDupes("abcddbca")); // -> 'abcd'
// console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

// function highestFrequency(arr) {
//   const obj = {};
//   let max = 0;
//   let maxFr = array[0];

//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if (el in obj) {
//       obj[el] += 1;
//     } else {
//       obj[el] = 1;
//     }
//     if (obj[el] > max) {
//       max = obj[el];
//       maxFr = el;
//     }
//   }
//   console.log(obj);

//   return maxFr;
// }
// console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
// console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
// console.log(highestFrequency(["abc", "def"])); // -> abc
// console.log(
//   highestFrequency([
//     "abc",
//     "abc",
//     "def",
//     "def",
//     "def",
//     "ghi",
//     "ghi",
//     "ghi",
//     "ghi",
//   ])
// ); // -> ghi
const text =
  "The Tao gave birth to machine language. Machine language gave birth to the assembler.The assembler gave birth to the compiler. Now there are ten thousand languages.Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, 'The Tao of Programming'";

const text2 =
  "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";

function uniqueSymbol(str) {
  function arrayWithoutRepeat(array) {
    const unique = [];

    for (let i = 0; i < array.length; i++) {
      const elI = array[i];
      let count = 0;
      for (let j = 0; j < array.length; j++) {
        const elJ = array[j];
        if (elI === elJ) {
          count++;
        }
      }
      if (count === 1) {
        unique.push(elI);
      }
    }
    return unique;
  }
  function symbolsArrFromWordsArr(array) {
    return array.map((word) => {
      const lettersArray = word.split("");
      const uniqueLettersArray = [...new Set(lettersArray)];
      return uniqueLettersArray[0];
    });
  }

  const wordsArray = str.split(" ");

  const symbolsArray = symbolsArrFromWordsArr(wordsArray);

  const uniqueSymbol = arrayWithoutRepeat(symbolsArray)[0];

  return uniqueSymbol;
}
console.log(uniqueSymbol(text2));
