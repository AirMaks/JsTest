var c = $('table .c');
c.css('color', 'green');

/*
***********************************************************
*/

var c = document.getElementsByClassName('c')[0];
var tr = document.getElementsByTagName('tr')[0];

tr.classList.add('a');
c.classList.add('c');


/*
***********************************************************
*/

var c = $('c');
$('tr').addClass('a');
$(c).css({'color': 'green'});

/*
***********************************************************
*/

var t = $('#t').children().children();
$('tr').addClass('a');
$(t).css('color', 'green');

/*
***********************************************************
*/

var t = document.getElementById('t');
var tr = document.getElementsByTagName('tr')[0];
tr.classList.add('a');
t.childNodes[1].style.color = 'green';