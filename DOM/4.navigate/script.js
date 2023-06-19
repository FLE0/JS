
let ol = document.getElementsByTagName('ol')[0];
let last = ol.children[ol.children.length-1];

let secondsection = document.getElementsByTagName('section')[1];
let thirdsection = document.getElementsByTagName('section')[2];

let secondh = secondSection.getElementsByTagName('h2')[0];
let thirdh = thirdSection.getElementsByTagName('h2')[0];


ol.insertBefore(last,ol.children[0]);
secondsection.prepend(thirdh);
thirdsection.getElementsByTagName('div')[0].prepend(secondh);


let lastSection = document.getElementsByTagName('section')[document.getElementsByTagName('section').length-1];

lastsection.remove();