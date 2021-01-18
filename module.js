
// 純export時，倒出模塊變數名稱必須是一樣的
/*
export const a = 1
export const b = 2
export const c = {a:1,b:2}
export {a, b, c}
import時 import {a, b, c} from '' 可以用as語法改變 => a as aa

*/

class abc {
  aaa () {
    console.log(123)
  }

  static ajax (url, callback) {
    // var url = 'https://eddie605134.github.io/romon30/resume.json'
    var url = url
    var xmlhttp
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.發送請求
    xmlhttp.open('get', url, true)
    xmlhttp.send() 
  
    //3. 服務端響應
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        callback(obj);
      }
    }
  }
}

function ajax (url, callback) {
  // var url = 'https://eddie605134.github.io/romon30/resume.json'
  var url = url
  var xmlhttp
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //2.發送請求
  xmlhttp.open('get', url, true)
  xmlhttp.send() 

  //3. 服務端響應
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var obj = JSON.parse(xmlhttp.responseText);
      callback(obj);
    }
  }
}

// ajax('https://eddie605134.github.io/romon30/resume.json', res => {
//   console.log(res);
// })
export default abc // 用default時，import名稱可以隨意取
export const str = 1