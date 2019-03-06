## 1
SELECT SALES_AGENTS.AGENT_NAME, SALES_RECORDS.AMOUNT, DEPARTEMENTS.DEPARTEMENT_NAME FROM SALES_AGENTS INNER JOIN SALES_AGENTS ON SALES_AGENTS.AGENT_NAME=SALES_AGENTS.AGENT_NAME, SALES_AGENTS.AGENT_ID=SUM(SALES_RECORDS.AMOUNT), SALES_AGENTS.DEPARTEMENT_ID=DEPARTEMENTS.DEPARTEMENT_NAME  ORDER BY AMOUNT DESC
## 2
Attached picture in ./pictures/num2
## 3
let highSaleArray = []
let avgArray = []
for (t = 0; t<Results.length; t++) {
    if (Results[t].Sales > 2000) {
        highSaleArray.push(Results[t].Name)
        avgArray.push(Results[t].Sales)
    } 
    else
        avgArray.push(Results[t].Sales) 
        t++
}
let total = 0
for(i = 0; i < avgArray.length; i++) {
    total += avgArray[i]
}
let avg = total / avgArray.length

console.log(highSaleArray)
console.log(avg)
## 4 

<!-- the text might be off beacuse of the id selector. I apologize. -->
#num1 {
    color: rgb(255,0,0)
}

## 5 
GET: a get request is used to request information from the backend. This would be used when trying to display info such as a users name, current balance, collection of all transactions etc. This allows users to view their information as well as other things people may have posted(a tweet for example).
POST: A POST method is used to send information back to the database. The user is updating their password, submitting a transaction, or sending a message etc. Without submitting a POST request, all the information would be static. POST allows the user to create, update and delete info saved to the DB.

## 6
sort plain.txt | uniq
I honestly haven't worked with linux but a handfull of times, so I'm not entirely sure, but I used 'https://stackoverflow.com/questions/3382936/sort-uniq-in-linux-shell' as a reference. 