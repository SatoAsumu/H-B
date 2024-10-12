nisen = 0
array = []
function zerobutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=zero.png width=100 height=100>"
        array[0] = 0 
        nisen = 1
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=zero.png width=100 height=100>"
        array[1] = 0
        nisen = 2
    }
}
function onebutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=one.png width=100 height=100>"
        nisen = 1
        array[0] = 1
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=one.png width=100 height=100>"
        nisen = 2
        array[1] = 1
    }
}
function twobutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=two.png width=100 height=100>"
        nisen = 1
        array[0] = 2
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=two.png width=100 height=100>"
        nisen = 2
        array[1] = 2
    }
}
function threebutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=three.png width=100 height=100>"
        nisen = 1
        array[0] = 3
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=three.png width=100 height=100>"
        nisen = 2
        array[1] = 3
    }
}
function fourbutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=four.png width=100 height=100>"
        nisen = 1
        array[0] = 4
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=four.png width=100 height=100>"
        nisen = 2
        array[1] = 4
    }
}
function fivebutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=five.png width=100 height=100>"
        nisen = 1
        array[0] = 5
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=five.png width=100 height=100>"
        nisen = 2
        array[1] = 5
    }
}
function sixbutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=six.png width=100 height=100>"
        nisen = 1
        array[0] = 6
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=six.png width=100 height=100>"
        nisen = 2
        array[1] = 6
    }
}
function sevenbutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=seven.png width=100 height=100>"
        nisen = 1
        array[0] = 7
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=seven.png width=100 height=100>"
        nisen = 2 
        array[1] = 7
    }
}
function eightbutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=eight.png width=100 height=100>"
        nisen = 1
        array[0] = 8
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=eight.png width=100 height=100>"
        nisen = 2
        array[1] = 8
    }
}
function ninebutton() {
    if (nisen == 0 ){
        document.getElementById("sen").innerHTML = "<img src=nine.png width=100 height=100>"
        nisen = 1
        array[0] = 9
    }else if (nisen == 1) {
        document.getElementById("ke").innerHTML = "<button onclick=ketteibutton()><img src=kettei.png width=200 height=100></button>"
        document.getElementById("nisen").innerHTML = "<img src=nine.png width=100 height=100>"
        nisen = 2
        array[1] = 9
    }
}
function modorubutton(){
    if (nisen == 2){
        document.getElementById("nisen").innerHTML = ""
        nisen = 1
    }else if (nisen == 1){
        document.getElementById("sen").innerHTML = ""
        nisen = 0
    } 
}
random = []
random[0] = Math.floor(Math.random()*10)
random[1] = Math.floor(Math.random()*10)
kai = 1
B = 0
H = 0
i = 0
t = 0
function ketteibutton(){
    if (kai == 1){
        document.getElementById("isu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++)
                if (array[t] == random[i]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
    document.getElementById("ihit").textContent = H;
    document.getElementById("ibro").textContent = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 2
    }
    }else if (kai == 2){
        document.getElementById("nisu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[t] == random[1]){
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
        document.getElementById("nihit").textContent = H;
        document.getElementById("nibro").textContent = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 3
    }
    }else if (kai == 3){
        document.getElementById("sasu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[t] == random[1]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("sahit").textContent = H;
    document.getElementById("sabro").textContent = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 4
    }
    }else if (kai == 4){
        document.getElementById("yosu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[t] == random[i]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("yohit").textContent = H;
    document.getElementById("yobro").textContent = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 5
    }
    }else if (kai == 5){
        document.getElementById("gosu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[t] == random[1]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("gohit").textContent = H;
    document.getElementById("gobro").textContent = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 6
    }
    }else if (kai == 6){
        document.getElementById("rosu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[i] == random[t]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("rohit").innerHTML = H;
    document.getElementById("robro").innerHTML = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 7
    }
    }else if (kai == 7){
        document.getElementById("nasu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[i] == random[t]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("nahit").innerHTML = H;
    document.getElementById("nabro").innerHTML = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 8
    }
    }else if (kai ==8){
        document.getElementById("hasu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[i] == random[t]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("hahit").innerHTML = H;
    document.getElementById("habro").innerHTML = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 9
    }
    }
    else if (kai == 9){
        document.getElementById("kyusu").textContent = array;
        for (let i = 0; i < 2; i++) {
            for (let t = 0; t < 2; t++){
                if (array[i] == random[t]) {
                    B = B + 1
                    if (i = t) {
                        H = H + 1
                        B = B - 1
                    }
                }
            }
        }
    document.getElementById("kyuhit").innerHTML = H;
    document.getElementById("kyubro").innerHTML = B;
    if (H == 2){
        seikai()
    }else{
        modorubutton()
        modorubutton()
        kai = 10
    }
    }
document.getElementById("zyusu").textContent = random;
for(let n = 0; n < 2; n++) {
    if (n == 0){
    document.getElementById("zyuhit").textContent = n;    
    }else if (n == 1){
    document.getElementById("zyubro").textContent = n;
    }
}


}
function seikai(){
    document.getElementById("sare").textContent = "正解"
    document.getElementById("nyu").innerHTML = "<a href=sentaku.html><img src=sentaku.png width=200 hight=100>"
}