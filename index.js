var dob = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var checkLuckyNumber = document.querySelector("#check-number")
var luckyText = document.querySelector("#lucky-text")






function compareLuckyOrNot(sum)
{

    if((sum%(luckyNumber.value))===0)
    {
        luckyText.innerHTML = "Your BirthDay Is So Lucky"
    }
    else
    {
        luckyText.innerHTML= "Soory Its Not So Lucky"
    }

}


function checkSum(dateWithOutHypens)
{
    var sum =0;
    for(var i=0; i<=dateWithOutHypens.length-1; i++)
    {
        //other way of adding
        // sum = sum + Number(dateWithOutHypens[i])
        sum = sum+ Number(dateWithOutHypens.charAt(i))
        compareLuckyOrNot(sum)

    
    }

}



function removeHypens(dateOfBirth)
{
    //other way of doing this
    // var adder = dateOfBirth.slice(0,4)+dateOfBirth.slice(5,7)+dateOfBirth.slice(8,10);
    var dateWithOutHypens = dateOfBirth.replaceAll("-","")
    checkSum(dateWithOutHypens)

}





checkLuckyNumber.addEventListener("click", function getValues()
{
    
    removeHypens(dob.value);
})











