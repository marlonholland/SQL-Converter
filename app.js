// Input and output objects
var inputSQL = {
    host: "",
    port: "",
    user: "",
    pass: "",
    table: "",
    DDL: ""
};

var outputSQL = {
    host: "",
    port: "",
    user: "",
    pass: "",
    table: "",
    DDL: ""
};

// Handler functions
var handle = function() {

};



var func = function() {
    console.log('hi');
};

// Input pane

// 1. Get all inputs into inputSQL object on click on 'get' button

document.getElementById('get-button').addEventListener('click', function() {
    inputSQL.host = document.getElementById("in-host").value;
    inputSQL.port = document.getElementById("in-port").value;
    inputSQL.user = document.getElementById("in-user").value;
    inputSQL.pass = document.getElementById("in-pass").value;
    inputSQL.table = document.getElementById("in-table").value;
    console.log(inputSQL);
});

console.log(inputSQL);


// 2. Send to python script
// 3. Get DDL into inputSQL object
// 4. Display SQL for table in SQL pane
// 5. Send SQL to python script on click on 'transform button'


// Output pane

// 6. Add output SQL to output outputSQL object
// 7. Copy SQL to clipboard on click on 'copy' button
// 8. Get all inputs into outputSQL object on 'commit' button
// 9. Send to python script on 'commit' button