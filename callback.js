function explain_callback(name1, age, task ){
    task();
    console.log("hello ",name1);
    console.log("your age",age);

   // console.log(task);
   // washHand()
}
function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('scroll facebook but waste time')
}
explain_callback("sogir uddin", 17, washHand);
explain_callback("jogir uddin", 13, takeShower);
explain_callback('mugir Uddin', 21, scrollFacebook)