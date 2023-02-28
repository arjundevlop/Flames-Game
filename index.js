
const button = document.getElementById("btn");

button.addEventListener("click",function(){
    const inputFirst = document.querySelector("#input-1").value;
    const inputSecond = document.getElementById("input-2").value;

    function flames(word1, word2) {
        // return the flames for word1 and word2
           var sameLetterCount = 0;
           var sameLetter = "";
           for(var i=0; i<word1.length; i++)
               {
                   if(word2.includes(word1.charAt(i)) && !(sameLetter.includes(word1.charAt(i))))
                   {
                       sameLetterCount++;
                       sameLetter += word1.charAt(i);
                   }
               }
           var word1NewLength = word1.length-sameLetterCount;
           var word2NewLength = word2.length-sameLetterCount;
           var actualLength = word1NewLength+word2NewLength;
           var ans = actualLength%6;
       
           if(ans===0)
           {
               return "Siblings";
           }
           else if(ans===1)
           {
               return "Friends";
           }
           else if(ans===2)
           {
               return "Love";
           }
           else if(ans===3)
           {
               return "Affection";
           }
           else if(ans===4)
           {
               return "Marriage";
           }
           else 
           {
               return "Enemy";
           }
       }
       const FirstName = inputFirst.toLowerCase();
       const SecondName = inputSecond.toLowerCase();
      
       const anwerFromFunc = flames(FirstName,SecondName);
       
    const answer = document.getElementById("result-span");
    answer.textContent = anwerFromFunc;

});
const clrBtn = document.getElementById("clr");
clrBtn.addEventListener("click", function(){
    document.querySelector("#input-1").value = "";
    document.getElementById("input-2").value = "";
    const answer = document.getElementById("result-span");
    answer.innerHTML = "";
})