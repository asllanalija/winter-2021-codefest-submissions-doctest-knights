function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginRight = "0px";
}

// Stack Overflow Answer
function toggleNav() {
    var sidenav = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    main.style.marginRight = main.style.marginRight === "250px" ? '0' : '250px';
}
function retrieveStudentData() {
    let Body = 23848083;
    console.log(Body);
    fetch("/transaction", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Body),
    }).then((resp) => {
        resp.json().then((data) => {
            return data;
        })
    });
}
// how to use data ^^^^^
// data = {'student_id': 123124, 'name': asdasif, 'credits', } data.student_id, data.name, data.credits
// functions courtsey of Hammad for getStudent and drop down menu

function getStudent() {
    var student = document.getElementById("emplid").value;
    document.getElementById("emplid").innerHTML = student;
    document.querySelector("body > table.toplevel.table_default > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table:nth-child(10) > tbody > tr:nth-child(3) > td > a");
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}