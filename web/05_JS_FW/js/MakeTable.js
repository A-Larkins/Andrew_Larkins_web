
function MakeTable(params) {
    "use strict";

    function my$(element) {
        return document.getElementById(element);
    }
    if (!params) {
        alert("parameter object required");
        return;
    }
    if (!params.id || !document.getElementById(params.id)) {
        alert("ID required");
        return;
    }
    if (!params.jsonFile) {
        alert("needs json file");
    }

    // invoke ajax function to read cars.json and if the call was successful, 
    // run function processJSON, otherwise, put an error message in the DOM element 
    // that has id "listHere".
    var pic = true;
    ajax(params.jsonFile, processJSON, params.id);

    function processJSON(httpRequest) {
       
        var cardList = JSON.parse(httpRequest.responseText);

        var htmlTable = MakeTable(cardList, params.id, "make"); 

        // Give this function more responsibility - to update the User Interface
        function MakeTable(list, id, sortProp) {

            var newTable = document.createElement("table");

            // Create a header for table and put a row in the header
            var tableHead = document.createElement("thead");
            newTable.appendChild(tableHead);
            var tableHeadRow = document.createElement("tr");
            tableHead.appendChild(tableHeadRow);
            
            var currentSort = localStorage.getItem('currentSort'+id);

            if(currentSort !== null) {
                sort(list, currentSort);
            } 
            else {
                sort(list, sortProp);
            }

            // Iterate over properties.
            var obj = cardList[0];
            for (var prop in obj) {
                var newHeader = addToRow("th", tableHeadRow, prop, "left");
                newHeader.onclick = function () {
                    var newOrder = this.innerHTML;
                    sort(list, prop);
                    pic = false;
                    MakeTable(list, id, newOrder);
                    localStorage.setItem('currentSort'+id, this.innerHTML); 
                };
            }

            // Add one row (to HTML table) per element in the array.
            // Each array element has a list of properties that will become 
            // td elements (Table Data, a cell) in the HTML table. 
            var tableBody = document.createElement("tbody");
            newTable.appendChild(tableBody);
            for (var i in list) {
                var tableRow = document.createElement("tr");
                tableBody.appendChild(tableRow);
                var obj = list[i];

                for (var prop in obj) {
                    if (!isNaN(obj[prop])) {
                        obj[prop] = formatCurrency(obj[prop]);
                        addToRow("td", tableRow, obj[prop], "right");
                    } else if ((obj[prop].includes("png")||obj[prop].includes("jpg")) && pic) {
                        obj[prop] = "<img src='" + obj[prop] + "'>";
                        addToRow("td", tableRow, obj[prop], "left");
                    } else {
                        addToRow("td", tableRow, obj[prop], "left");
                    }
                }
                var obj = list[i];
            }


            // Add th or td (based on eleType) to row of HTML table.
            function addToRow(eleType, row, data, alignment) {
                var ele = document.createElement(eleType);
                ele.innerHTML = data;
                ele.style.textAlign = alignment;
                row.appendChild(ele);
                return ele; 
            }

            function formatCurrency(num) {
                num = Number(num);
                return num.toLocaleString("en-US", 
                {style: "currency", currency: "USD", minimumFractionDigits: 2});
            }
            function sort(list, byProperty) {
                var size = list.length;
                console.log("size is " + size);
                for (var i = 0; i < size - 1; i++) {
                    var small = i;
                    console.log('i is ' + i);
                    for (var j = i; j < size; j++) {
                        console.log("j is " + j);
                        var listJ = list[j];
                        var listSmall = list[small];

                        if (convert(listJ[byProperty]) < convert(listSmall[byProperty])) {
                            small = j;
                            console.log("small is " + small);
                        }
                    }
                    var temp = list[i];
                    list[i] = list[small];
                    list[small] = temp;
                    console.log("swapped i " + i + " with small " + small);
                }

                function convert(s) {
                    if (isNaN(s)) {
                        return s;
                    } else {
                        return Number(s);
                    }
                }
            }

            document.getElementById(id).innerHTML = "";
            document.getElementById(id).appendChild(newTable);
        }
    }
}


