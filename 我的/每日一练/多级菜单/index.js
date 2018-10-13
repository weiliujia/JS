let province = document.getElementsByClassName('province')[0];
let data=null;



let xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', false);
xhr.onreadystatechange=function () {
    if (xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        data=JSON.parse(xhr.responseText);

    }
};
xhr.send();
console.log(data);

function bindHtml(data) {
    var str=``;



}
bindHtml(data);