  Results: [
    {
    "Name": "Frank Jones",
    "Department": "North America",
    "Sales": 2500 }, {
    "Name": "Sally Smith", "Department": "North America", "Sales": 2200
    }, {
    "Name": "Ed Kramer",
    "Department": "Europe",
    "Sales": 1700 }, {
    "Name": "Susan Johnson", "Department": "Asia", "Sales": 2000
    }
    ]



    let highSaleArray = []
    for (t = 0; t<Results.length; t++) {
        if (Results[t].Sales > 2000) {
            highSaleArray.push(Results[t].Name)
        } 
        else t++
    }
    console.log(highSaleArray)
