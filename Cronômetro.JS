"use strict"
var name = window.prompt('Digite seu Nome')
window.alert('Seja bem vindo, ' + name + '!')

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cronômetro;
//
function start(){

  cronômetro= setInterval (() => { timer(); }, tempo);
}
 //
function pause() {
    clearInterval(cronômetro);
}
//
function stop() {
    clearInterval(cronômetro);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter').innerText = "00:00:00";

}
//
function timer() {
    ss++;

    if(ss == 60){
        ss = 0;
        mm ++

        if(nn == 60){
            nn = 0;
            hh++;
        }
    }
    var format = (hh < 10 ? '0' + hh : hh)+ ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
 document.getElementById('counter').innerText = format;
}