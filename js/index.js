
function newQuot(){

    var displayQuoteIndex = Math.floor(Math.random() * quotesList.length )

    document.getElementById("text-Quot").innerHTML = `<p>${quotesList[displayQuoteIndex]}</p>`

}


var quotesList =[
`"Resentment is like drinking poison and waiting for your enemies to die." 

<p>--Nelson Mandela</p>` ,

 `"The best revenge is massive success."

<p>--Frank Sinatra</p>` ,

 `"You miss 100% of the shots you don't take."

<p>--Wayne Gretzy<p/>` ,

 `"It's not what happens to you, but how you react to it that matters."

<p>--Epictetus</p>` ,

 `"Do not take life too seriously. You will not get out alive."
<p>--Elbert Hubbard</p>`,

 `“Be yourself; everyone else is already taken.”
<p>― Oscar Wilde</p>` ,

 `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
<p>― Albert Einstein</p>` ,

`“You only live once, but if you do it right, once is enough.”
<p>― Mae West</p>` ,

`“Be the change that you wish to see in the world.”
<p>― Mahatma Gandhi</P>` ,

 `“If you tell the truth, you don't have to remember anything.”
<p>― Mark Twain</p>`]

