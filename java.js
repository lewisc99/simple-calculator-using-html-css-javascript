var count = 0;
var numberString = "";
var number = 0;
var countview = "";
var keys = document.getElementsByClassName("div-keys");
var totalSum = document.getElementsByClassName("sum");
var result = "";
var stringCount = "";
var stringResult = "";

for (let i = 0; i <= keys.length -1;i++)
{

    keys[i].addEventListener("click",(target) =>
    {

           var first_value = keys[i].innerHTML;
           var isNumber = Number.parseInt(first_value)
           stringCount += first_value;
           
        if (!isNaN(isNumber))
        {
            numberString = "";
           numberString += isNumber;
           number = parseInt(numberString)
           totalSum[0].innerHTML += number;
           
        }
        if (isNaN(isNumber) && first_value != "=")
        {
            const lastChar =  stringCount.charAt(stringCount.length -1);
            const secondToLast = stringCount.charAt(stringCount.length -2);
            var lastCharIsNumber = Number.parseInt(lastChar);
            var secondToLastIsNumber = Number.parseInt(secondToLast);

            if (isNaN(lastCharIsNumber) && isNaN(secondToLastIsNumber))
            {
              stringResult =  stringCount.substring(0,stringCount.length -2);
              stringResult += first_value;

          
            }

        


           

                stringResult += totalSum[0].innerHTML;
                stringResult  += first_value;
                totalSum[0].innerHTML = "";
                console.log(result);
       

        }
        if (first_value == "=")
        {
            
            stringResult += totalSum[0].innerHTML;
            
            totalSum[0].innerHTML = eval(stringResult);
            console.log(eval(result))
            stringResult = "";
            
        }

    })
}