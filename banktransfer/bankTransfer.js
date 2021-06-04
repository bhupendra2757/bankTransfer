function test() {
    console.log('test');
    var name = document.getElementById('somename').innerHTML = "Mobile Number";
    var id = document.getElementById('userid');
    var id = document.getElementById('userid').placeholder = "9841424344";
    document.getElementById("userid").name = "phone";
}

function test1() {
    var name = document.getElementById('somename').innerHTML = "Account Number";
    var id = document.getElementById('userid').placeholder = "9999999999999999";
    document.getElementById("userid").name = "account";
    console.log(id);
}