var count = 0;
var numberString = "";
var number = 0;
var countview = "";
var keys = document.getElementsByClassName("div-keys")

for (let i = 0; i <= keys.length -1;i++)
{

    keys[i].addEventListener("click",(target) =>
    {

           var first_value = keys[i].innerHTML;
           var isNumber = Number.parseInt(first_value)

           
        if (!isNaN(isNumber))
        {
            numberString = "";
           numberString += isNumber;
           number = parseInt(numberString)
           console.log(number);
        }
        else
        {
            if (first_value == "+")
            {
                Soma();
            }



        }
        





       




         //  totalCount(first_value);



    })
}


function totalCount( value)
{
    count = count + Number.parseInt(value);
    console.log(count)
}

function Soma()
{
    count += number;
    number = 0;
    console.log(count);
}