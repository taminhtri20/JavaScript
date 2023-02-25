function c() {
    let A=Number(document.getElementById("AMOUNT").value);
    let F=document.getElementById("H").value;
    let T=document.getElementById("M").value;
    if (F=="VND" && T=="USD") {
        let B= A/23000;
        Result=("Result: "+B +"$");
    }
    if (F=="USD" && T=="VND") {
        let C= A*23000 ;
        Result=("Result: "+C +"VND");
    }
    if (F=="VND" && T=="VND") {
        let D= A;
        Result=("Result: "+D +"VND");
    }
    if (F=="USD" && T=="USD") {
        let E= 23000;
        Result=("Result: "+E +"$");
    }
    document.getElementById("Result").innerHTML=Result
}