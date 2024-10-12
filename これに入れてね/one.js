function zerobutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=zero.png width=100 height=100>"
    su = 0
}
function onebutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=one.png width=100 height=100>"
    su = 1
}
function twobutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=two.png width=100 height=100>"
    su = 2
}
function threebutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=three.png width=100 height=100>"
    su = 3
}
function fourbutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=four.png width=100 height=100>"
    su = 4
}
function fivebutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=five.png width=100 height=100>"
    su = 5
}
function sixbutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=six.png width=100 height=100>"
    su = 6
}
function sevenbutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=seven.png width=100 height=100>"
    su = 7
}
function eightbutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=eight.png width=100 height=100>"
    su = 8
}
function ninebutton() {
    document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
    document.getElementById("sen").innerHTML = "<img src=nine.png width=100 height=100>"
    su = 9
}
function modorubutton() {
    document.getElementById("ke").innerHTML = ""
    document.getElementById("sen").innerHTML = ""
}
random = Math.floor(Math.random()*10)
kai = 1
function ketteibutton() {
    if (kai == 1){
        document.getElementById("isu").textContent = su;
        if (su == random){
        document.getElementById("ihit").innerHTML = "1"
        document.getElementById("ibro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("ihit").innerHTML = "0"
        document.getElementById("ibro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 2){
        document.getElementById("nisu").textContent = su;
        if (su == random){
        document.getElementById("nihit").innerHTML = "1"
        document.getElementById("nibro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("nihit").innerHTML = "0"
        document.getElementById("nibro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 3){
        document.getElementById("sasu").textContent = su;
        if (su == random){
        document.getElementById("sahit").innerHTML = "1"
        document.getElementById("sabro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("sahit").innerHTML = "0"
        document.getElementById("sabro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 4){
        document.getElementById("yosu").textContent = su;
        if (su == random){
        document.getElementById("yohit").innerHTML = "1"
        document.getElementById("yobro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("yohit").innerHTML = "0"
        document.getElementById("yobro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 5){
        document.getElementById("gosu").textContent = su;
        if (su == random){
        document.getElementById("gohit").innerHTML = "1"
        document.getElementById("gobro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("gohit").innerHTML = "0"
        document.getElementById("gobro").innerHTML = "0"
        
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 6){
        document.getElementById("rosu").textContent = su;
        if (su == random){
        document.getElementById("rohit").innerHTML = "1"
        document.getElementById("robro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("rohit").innerHTML = "0"
        document.getElementById("robro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 7){
        document.getElementById("nasu").textContent = su;
        if (su == random){
        document.getElementById("nahit").innerHTML = "1"
        document.getElementById("nabro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("nahit").innerHTML = "0"
        document.getElementById("nabro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai ==8){
        document.getElementById("hasu").textContent = su;
        if (su == random){
        document.getElementById("hahit").innerHTML = "1"
        document.getElementById("habro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("hahit").innerHTML = "0"
        document.getElementById("habro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 9){
        document.getElementById("kyusu").textContent = su;
        if (su == random){
        document.getElementById("kyuhit").innerHTML = "1"
        document.getElementById("kyubro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("kyuhit").innerHTML = "0"
        document.getElementById("kyubro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }else if (kai == 10){
        document.getElementById("zyusu").textContent = su;
        if (su == random){
        document.getElementById("zyuhit").innerHTML = "1"
        document.getElementById("zyubro").innerHTML = "1"
        seikai()
        }else{
        document.getElementById("zyuhit").innerHTML = "0"
        document.getElementById("zyubro").innerHTML = "0"
        }
        kai = kai + 1
        modorubutton()
    }
}
function seikai(){
    document.getElementById("sare").textContent = "正解"
    document.getElementById("nyu").innerHTML = "<a href=sentaku.html><img src=sentaku.png width=200 hight=100>"

}


