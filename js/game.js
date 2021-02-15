function catattack() {

    document.getElementById("dogbtn").disabled = false;
    document.getElementById("catbtn").disabled = true;

    let catrandomnum = Math.floor(Math.random() * 20);

    let doghealthvalue = document.getElementById("doghealth").value

    document.getElementById("doghealth").value = doghealthvalue - catrandomnum;

    if (doghealthvalue == 0) {
        document.getElementById("winnername").innerHTML = "Winner Is :Cat";
        document.getElementById("dogbtn").style.display = "none";
        document.getElementById("catbtn").style.display = "none";
        document.getElementById("rest-btn").style.display = "block";
    }

};


function dogattack() {

    document.getElementById("catbtn").disabled = false;
    document.getElementById("dogbtn").disabled = true;

    let dograndomnum = Math.floor(Math.random() * 20);

    let cathealthvalue = document.getElementById("cathealth").value

    document.getElementById("cathealth").value = cathealthvalue - dograndomnum;

    if (cathealthvalue == 0) {
        document.getElementById("winnername").innerHTML = "Winner Is : Dog";
        document.getElementById("dogbtn").style.display = "none";
        document.getElementById("catbtn").style.display = "none";
        document.getElementById("rest-btn").style.display = "block";
    }

}

function restgame() {
    document.getElementById("dogbtn").style.display = "block";
    document.getElementById("catbtn").style.display = "block";
    document.getElementById("rest-btn").style.display = "none";
    document.getElementById("winnername").innerHTML = "";
    document.getElementById("cathealth").value = 100;
    document.getElementById("doghealth").value = 100;
}