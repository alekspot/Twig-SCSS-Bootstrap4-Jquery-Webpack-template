import { Doollar } from './jquery'

const body = Doollar('body');
const empty = Doollar('.empty');

const btn = Doollar('#btn');
btn.click(function(){
  // body.toggleClass('test') 
  // Doollar('p').html('dawdawdawdadaw111111111') 
    empty.append(btn)
})

//Импортируем все стили 
import "../style.scss";

// $('h1').css('color','red')
// $('.class1').css('color','green')
// $('div .class1').css('color', 'blue')

//Как находить элементы в JQuery
// $('h1')
// $('.class')
// $('#id')
// $('div h1')

// const btn = $('#btn');
// const body = $('body');

// btn.click(function(){
//     //  body.addClass('test')
//     //  body.toggleClass('test')
//     //  body.removeClass('test')
//     //  btn.toggleClass('active')
//     //  $('.empty').append(btn)
//     // console.log(btn.html())
//     // $('.empty').append($('.class1').html())
//     $('.empty').html('dawdawdawdawd')
// })