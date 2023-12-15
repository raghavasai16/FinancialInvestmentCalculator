const currentYear = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('start_year');
   

    for (let year = currentYear; year <= currentYear + 10; year++) {
        
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        select.add(option);
    }
});
let total=document.getElementById('total_amount');
let sub
function Zero(x)
{
    sub=x.value;
    if (sub > 0) {
        total.value= total.value-sub
    } 
   
     x.value="";
    
}

function add(y)
{
  
    
    const inputValue = y.value;
            // Check if the input value is a non-negative number
            if(inputValue.startsWith("0"))
            {
                y.value=y.value.slice(1)
            }
            if(!isNaN(parseInt(inputValue)))
            {
              
            
            if (inputValue < 0 ) {
                y.setCustomValidity('Negative values are not allowed.');
            } 
            else {
                total.value=parseInt(total.value)+parseInt(y.value); 
            }
        }
}
function year(z)
{
    let year=z.value
   
    if(parseInt(year)<=parseInt(currentYear))
    {
        z.value=""
       z.style.outline='2px solid red'
    }
    else
    {
        z.style.outline='2px solid black'
    }

    
}
function percentage(apprecation)
{
    const SelectedInvestmentType=apprecation.value;
    const apprecatedPercenatge=document.getElementById('Return_percentage');

    switch(SelectedInvestmentType)
    {
        case 'Equity':
            apprecatedPercenatge.value="12%";
            break;
        case 'Gold':
            apprecatedPercenatge.value="14%";
            break;
        case 'FD':
            apprecatedPercenatge.value="7%";
            break;
        case 'Select':
            apprecation.value="FD";
            apprecatedPercenatge.value="7%";
            break;
            

    }

}

function calculateCompoundInterest(D, G, C, C6) {
    return D / Math.pow((1 + G), (C - C6));
}
// Function to calculate the monthly loan payment
function calculateMonthlyInvestment(futureValue, rate, numberOfYears) {
    var monthlyInterestRate = rate / 12;
    var totalPayments = numberOfYears * 12;
    var denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
    var monthlyInvestment = futureValue * monthlyInterestRate / denominator;
    return monthlyInvestment;
}

// Example usage:



// Example usage:


function Submit()
{
    const monthly_table=document.getElementById('monthly_table');
    const yearly_table=document.getElementById('yearly_table');
    
    monthly_table.classList.remove('hidden')
    yearly_table.classList.remove('hidden')
    document.getElementById('submitButton').disabled = true;
    yearly_table.scrollIntoView()
    const ele=document.getElementsByClassName('percentage')
    const per=document.getElementById('Return_percentage');

    for(let i=0;i<ele.length;i++)
    {
        ele[i].value=per.value;
    }

    const select_year=document.getElementById('start_year')
    let apprecated;
    switch(per.value)
    {
        case "7%":
            apprecated=0.07;
            break;
        case "8%":
            apprecated=0.08;
            break;
        case "9%":
            apprecated=0.09;
            break;
        case "10%":
            apprecated=0.1;
            break;
        case "11%":
            apprecated=0.11;
            break;
        case "12%":
            apprecated=0.12;
            break;
        case "13%":
            apprecated=0.13;
            break;
        case "14%":
            apprecated=0.14;
            break;
        case "15%":
            apprecated=0.15;
            break; 
            
    }
    console.log(apprecated)
    const bussiness_year=document.getElementById('Business_year')
    const bussiness_amount=document.getElementById('Business_amount')
    const bussiness_yearly=document.getElementById('Business_yearly')
    const bussiness_monthly=document.getElementById('Business_Monthly')
    const prop_year=document.getElementById('House_year')
    const prop_amount=document.getElementById('House_amount')
    const prop_yearly=document.getElementById('Property_Buy_yearly')
    const prop_monthly=document.getElementById('Property_Buy_Monthly')
    const child_year=document.getElementById('child_year')
    const child_amount=document.getElementById('child_amount')
    const chlid_yearly=document.getElementById('Childern1_yearly')
    const child_monthly=document.getElementById('Childern1_Monthly')
    const child_higher_year=document.getElementById('child_higher_year')
    const child_higher_amount=document.getElementById('child_higher_amount')
    const chlid2_yearly=document.getElementById('Childern2_yearly')
    const child2_monthly=document.getElementById('Childern2_Monthly')
    const retierment_year=document.getElementById('Retirement_year')
    const retierment_amount=document.getElementById('Retirement_amount')
    const retierment_yearly=document.getElementById('Retirement_yearly')
    const retirement_monthly=document.getElementById('Retirement_Monthly')
    const others_year=document.getElementById('others_year')
    const others_amount=document.getElementById('others_amount')
    const others_yearly=document.getElementById('others_yearly')
    const others_monthly=document.getElementById('others_Monthly')
    console.log((bussiness_year.value))

    if(!isNaN(parseInt(bussiness_year.value)) && !isNaN(parseInt(bussiness_amount.value)))
    {
        const value_bussiness_year=calculateCompoundInterest(parseInt(bussiness_amount.value),apprecated,parseInt(bussiness_year.value),parseInt(select_year.value));
        let y=parseInt(bussiness_year.value)-parseInt(select_year.value);
        const value_bussiness_month=calculateMonthlyInvestment(parseInt(bussiness_amount.value),apprecated,y);
        bussiness_yearly.value=parseInt(value_bussiness_year)
        bussiness_monthly.value=parseInt(value_bussiness_month)
    }
    if(!isNaN(parseInt(prop_year.value)) && !isNaN(parseInt(prop_amount.value)))
    {
        const value_prop_year=calculateCompoundInterest(parseInt(prop_amount.value),apprecated,parseInt(prop_year.value),parseInt(select_year.value));
        let y=parseInt(prop_year.value)-parseInt(select_year.value);
        const value_prop_month=calculateMonthlyInvestment(parseInt(prop_amount.value),apprecated,y);
        prop_yearly.value=parseInt(value_prop_year)
        prop_monthly.value=parseInt(value_prop_month)
    }
    if(!isNaN(parseInt(child_year.value)) && !isNaN(parseInt(child_amount.value)))
    {
        const value_child_year=calculateCompoundInterest(parseInt(child_amount.value),apprecated,parseInt(child_year.value),parseInt(select_year.value));
        let y=parseInt(child_year.value)-parseInt(select_year.value);
        const value_child_year_month=calculateMonthlyInvestment(parseInt(child_amount.value),apprecated,y);
        chlid_yearly.value=parseInt(value_child_year)
        child_monthly.value=parseInt(value_child_year_month)
        
    }
    if(!isNaN(parseInt(child_higher_year.value)) && !isNaN(parseInt(child_higher_amount.value)))
    {
        const value_child_higher_year=calculateCompoundInterest(parseInt(child_higher_amount.value),apprecated,parseInt(child_higher_year.value),parseInt(select_year.value));
        let y=parseInt(child_higher_year.value)-parseInt(select_year.value);
        const value_child_higher_month=calculateMonthlyInvestment(parseInt(child_higher_amount.value),apprecated,y);
        chlid2_yearly.value=parseInt(value_child_higher_year)
        child2_monthly.value=parseInt(value_child_higher_month)
    }
    if(!isNaN(parseInt(retierment_year.value)) && !isNaN(parseInt(retierment_amount.value)))
    {
        const value_retierment_year=calculateCompoundInterest(parseInt(retierment_amount.value),apprecated,parseInt(retierment_year.value),parseInt(select_year.value));
        let y=parseInt(retierment_year.value)-parseInt(select_year.value);
        const value_retierment_month=calculateMonthlyInvestment(parseInt(retierment_amount.value),apprecated,y);
       retierment_yearly.value=parseInt(value_retierment_year);
       retirement_monthly.value=parseInt(value_retierment_month)
    }
    if(!isNaN(parseInt(others_year.value)) && !isNaN(parseInt(others_amount.value)))
    {
        const value_retierment_year=calculateCompoundInterest(parseInt(others_amount.value),apprecated,parseInt(others_year.value),parseInt(select_year.value));
        let y=parseInt(others_year.value)-parseInt(select_year.value);
        const value_retierment_month=calculateMonthlyInvestment(parseInt(others_amount.value),apprecated,y);
        others_yearly.value=parseInt(value_retierment_year)
        others_monthly.value=parseInt(value_retierment_month)
    }


}

document.getElementById('input_data').addEventListener('reset', function() {
    // Enable the submit button when the reset button is clicked
    document.getElementById('submitButton').disabled = false;
    const monthly_table=document.getElementById('monthly_table');
    const yearly_table=document.getElementById('yearly_table');
    monthly_table.classList.add('hidden')
    yearly_table.classList.add('hidden')
    const ele=document.getElementsByClassName('percentage')

    for(let i=0;i<ele.length;i++)
    {
        ele[i].value="";
    }
    const year=document.getElementsByClassName('Year_Amount')
    for(let i=0;i<year.length;i++)
    {
        year[i].value=""
    }
    const month=document.getElementsByClassName('Month_Amount')
    for(let i=0;i<year.length;i++)
    {
        month[i].value=""
    }

    
});
