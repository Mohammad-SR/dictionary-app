let searchinput=document.getElementById("searchinput");
let searchbutton=document.getElementById("searchbutton");


const getdata= async (searchvalue)=>
{
    let data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchvalue}`);
    let jsondata=await data.json();


    let div=document.createElement("div");
    div.classList.add("detail");
    div.innerHTML=`
    
        <p>word : <span>${jsondata[0].word}</span></p>
        <p>Meaning : <span>${jsondata[0].meanings[0].definitions[0].definition}</span></p>            
        <p> Example : <span>${jsondata[0].meanings[0].example}</span></p>
        <p> PartOfSpeech : <span>${jsondata[0].meanings[0].partOfSpeech}</span></p>
        <p>Synonyms : <span>${jsondata[0].meanings[0].synonyms}</span></p>
        
        <a href=${jsondata[0].sourceUrls[0]} target="_blank">Read More</a>

    
    `
    document.querySelector(".text").appendChild(div);

    // console.log(jsondata);
    // console.log(jsondata[0].word);
    // console.log(jsondata[0].meanings[0].definitions[0].definition);

}

searchbutton.addEventListener('click', function()
{
    let searchvalue=searchinput.value;
    
    if(searchvalue==" ")
    {
        alert("Please Enter a word");
    }
    else{
        getdata(searchvalue);
    }
});