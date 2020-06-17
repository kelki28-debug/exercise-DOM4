let bahan = ['nasi', 'telur', 'bawang', 'kecap', 'ayam']

let ul = document.createElement('ul');




document.querySelector('div').appendChild(ul)

bahan.map(item =>{
let li = document.createElement('li');
let items = document.createTextNode(item)
li.appendChild(items);
ul.appendChild(li)
let div = document.querySelector('div').appendChild(ul)
})

document.querySelector('ul').style.textAlign = 'center';

let source = document.querySelector('img').setAttribute('src', 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg')

document.querySelector('.img').appendChild(source)





