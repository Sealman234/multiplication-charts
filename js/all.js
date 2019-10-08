// 宣告左側 Box
let leftBox = document.querySelectorAll('.item .leftBox');
let leftStr = ' ';
// 宣告右側 Box
let rightStr = ' ';
let rightBox = document.querySelectorAll('.item .rightBox');

for (let i = 2; i < 10; i++) {
    // 印出左側內容
    for (let j = 1; j < 4; j++) {
        let content = '<span class="sub-item">' + i + ' x ' + j + ' = ' + i * j + '</span>';
        leftStr += content;
    }
    leftBox[i-2].innerHTML = '<h3 class="sub-title">' + i + '</h3>' + leftStr;
    leftStr = ' ';
    // 印出右側內容
    for (let j = 4; j < 10; j++) {
        let content = '<span class="sub-item">' + i + ' x ' + j + ' = ' + i * j + '</span></div>';
        rightStr += content;
    }
    rightBox[i-2].innerHTML = rightStr;
    rightStr = '';
}