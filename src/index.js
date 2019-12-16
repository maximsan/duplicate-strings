// duplicate strings examples
function removeDuplStr(str) {
  // 1
  //     var strArray = str.split(/\s/)
  //     for(let i = 0; i < strArray.length; i++) {
  //         if(strArray[i + 1] === strArray[i]) {
  //             strArray.splice(i, 1);
  //             --i;
  //         }
  //     }
  //     return strArray;

  // 2
  //     var obj = {}
  //     for(let item of strArray) {
  //         if(!obj[item]) {
  //             obj[item] = 1;
  //         }
  //     }

  //     return Object.keys(obj).join(' ');

  // 3
  //     let temp;
  //     let result = [];
  //     [].forEach.call(str.split(/\s/), (item) => {
  //         if(temp !== item) {
  //            temp = item;
  //            result.push(item);
  //         }
  //     })

  //     return result.join(' ');

  // 4 the most shortest
  return [...new Set(str.split(/\s/))].join(" ");
}

removeDuplStr("This is is amasing view view of the world world");
