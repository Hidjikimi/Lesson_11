var numbers = new Array(5);
for (var c=0; c<5; c++) {
    numbers[c] = new Array(10);
    numbers[c].fill(0);
}

var d = document.querySelector('.tbl_div');
var t = document.createElement('table');
t.setAttribute('class', 'tbl');
var tab = d.appendChild(t);

function cellClick() {
    numbers[this.getAttribute('id')[1]][this.getAttribute('id')[2]]++;
    show();
}

for (var i=0; i<5; i++) {
    var tr = tab.appendChild(document.createElement('tr'));
    tr.setAttribute('class', 'trow');
    for (var j=0; j<10; j++) {
        var td = document.createElement('td');
        td.setAttribute('id', 'c' + i.toString() + j.toString());
        tr.appendChild(td);
        td.addEventListener('click', cellClick);
    }
}

function generate () {
    for (var i = 0; i<100; i++) {
        numbers[Math.floor(Math.random()*5)][Math.floor(Math.random()*10)]++
    }
}

function show () {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 10; j++) {
            var selector = '#c'+i.toString()+j.toString();
            var td = document.querySelector(selector);
            td.innerHTML=numbers[i][j]>0?numbers[i][j]:'';
            var cl;
            switch (true) {
                case numbers[i][j] > 100:
                    cl = 'range5';
                    break;
                case numbers[i][j] > 75:
                    cl = 'range4';
                    break;
                case numbers[i][j] > 50:
                    cl = 'range3';
                    break;
                case numbers[i][j] > 25:
                    cl = 'range2';
                    break;
                default:
                    cl = 'range1';
                    break;
            }
            td.setAttribute('class', cl);
        }
    }
}

function reset () {
    for (var c=0; c<5; c++) {
        numbers[c] = new Array(10);
        numbers[c].fill(0);
    }
    show();
}

document.querySelector('.btn_generate').addEventListener('click', generate);
document.querySelector('.btn_show').addEventListener('click', show);
document.querySelector('.btn_reset').addEventListener('click', reset);