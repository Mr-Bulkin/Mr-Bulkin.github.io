// Узнаём содержимое выбранного элемента
// $('селектор').html();

// $(function() {
//     alert($("h3").html()) // только текст с html
// })

// $(function() {
//     alert($("h3").text()) // только текст без html
// })


// Код для объяснения работы объекта события
$(function(){
    $("a").click(function(event) {
        alert(event.type)
        alert("Перейти нельзя")
        event.prevenDefault();
    })
})

// Всплытие событий
// $("div").click(function() {
//     let element = $(this).html()
//     alert(element)
// })

// Изменение выбранного элемента
// $('селектор').html('Новое содержимое');
$("#but1").click(function(event) {
    $(".active").removeClass("active")
    $(event.target).addClass("active")
    $(".article-text").html("Bla bla bla")
})

// Добавить класс к выбранному элементу
// $('селектор').addClass('имяКласса');
$("#but2").click(function(event) {
    $(".article-text").html("Смена класса")
    $(".active").removeClass("active")
    $(event.target).addClass("active")
})

// Удалить класс у выбранного элемента
// $('селектор').removeClass('имяКласса');

// При первом вызове класс будет добавлен, а втором - удалён
// $('селектор').toggleClass('имяКласса');
$("#but3").click(function(event) {
    // $(event.target).toggleClass("active")
    $("a").html(Date())
    $(".active").removeClass("active")
    $(event.target).addClass("active")
})

// Добавление текста после внутреннего содержимого элемента (добавление в конец)
// $('селектор').append('произвольныйТекст');
// $("h3").click(function(){
//     $("h3").append('<div style="font-weight: 200; font-size: 16px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam atque nihil magni ducimus, labore animi repudiandae voluptas aspernatur earum consectetur ipsam veniam aperiam, saepe obcaecati voluptate in voluptatibus maiores. Sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima aut odit, dignissimos impedit doloremque illo sit aliquam! Excepturi, odio omnis. Non deleniti nulla illo numquam officia minima, consequuntur dicta?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam atque nihil magni ducimus, labore animi repudiandae voluptas aspernatur earum consectetur ipsam veniam aperiam, saepe obcaecati voluptate in voluptatibus maiores. Sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima aut odit, dignissimos impedit doloremque illo sit aliquam! Excepturi, odio omnis. Non deleniti nulla illo numquam officia minima, consequuntur dicta ready().</div>')
// })

// Добавление текста перед внутренним содержимым элемента (добавление в начало)
// $('селектор').prepend('произвольныйТекст');
$("h3").click(function(){
    $("h3").prepend('<div style="font-weight: 200; font-size: 16px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam atque nihil magni ducimus, labore animi repudiandae voluptas aspernatur earum consectetur ipsam veniam aperiam, saepe obcaecati voluptate in voluptatibus maiores. Sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima aut odit, dignissimos impedit doloremque illo sit aliquam! Excepturi, odio omnis. Non deleniti nulla illo numquam officia minima, consequuntur dicta?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam atque nihil magni ducimus, labore animi repudiandae voluptas aspernatur earum consectetur ipsam veniam aperiam, saepe obcaecati voluptate in voluptatibus maiores. Sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima aut odit, dignissimos impedit doloremque illo sit aliquam! Excepturi, odio omnis. Non deleniti nulla illo numquam officia minima, consequuntur dicta ready().</div>')
})

// Узнать значение произвольного атрибута
// $('селектор').attr('атрибут');
$("#but4").click(function(event) {
    alert($('a').attr('href'))
    $(".active").removeClass("active")
    $(event.target).addClass("active")
})

// Установить новое значение произвольного атрибута
// $('селектор').attr('атрибут', 'новое значение');
$("#but4").click(function(event) {
    // alert($('a').attr('href'))
    $(".article-list").attr("type", "square")
})

// Удалить атрибут
// $('селектор').removeAttr('атрибут');
$("#but4").click(function(event) {
    $(".article-list").attr("type", "square")
    $('a').removeAttr('title')
})

// Обернуть элемент во что-то ещё
$(".article-list").click(function(event) {
    $(event.target).wrap("<del></del>")
})

$('a').click(function () {
    $('a').removeAttr('title');
    $('a').attr('href', 'https://maximumtest.ru/');
    $('a').html('Посетить сайт школы MAXIMUM Education');    
});