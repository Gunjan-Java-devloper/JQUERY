$('h1').click(function(){
    alert('Click any button,you will get greetings message')
})
$('button:first').click(function()
{
     alert('Hello dont sleep')
     $ (this).css('background','orange')
})
$('button:nth-of-type(2)').click(function()
{
     alert('Hello dont sleep,i will beat you')
     $(this).css('background','lavender')
})
$('button:last').click(function()
{
     alert("hello dont sleep,i will kill you ")
     $(this).css('background','green')
})
