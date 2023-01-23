let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let toss = document.getElementById("toss");
let result = document.getElementById("result");

let headsVal, tailsVal, ans;
let tossArr = ["Heads", "Tails"];
function getval() {
    ans = Math.floor(Math.random()*2);
    console.log(ans);
}

heads.addEventListener("click", function() {
    headsVal = heads.innerHTML;
    getval();
    toss.addEventListener("click", function() {
        if(tossArr[ans] == headsVal) {
            result.innerHTML = tossArr[ans] + " => You Won";
        } else {
            result.innerHTML = tossArr[ans] + " => You Lost";
        }
    })
});

tails.addEventListener("click", function() {
    tailsVal = tails.innerHTML;
    getval();
    toss.addEventListener("click", function() {
        if(tossArr[ans] == tailsVal) {
            result.innerHTML = tossArr[ans] + " => You Won";
        } else {
            result.innerHTML = tossArr[ans] + " => You Lost";
        }
    })
});