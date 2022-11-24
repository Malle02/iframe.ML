function calcule_moyenne ()
{
    var note1= prompt("saisissez la première note");
    var note2= prompt("saisissez la deuxième note");
    var note3= prompt("saisissez la troisième note ");

    var some= Number(note1) + Number(note2) + Number(note3);

    document.write ("voici la some ", + some + "<br>" );

    var moyenne= some/3;

    document.write ("voici votre moyenne ", + moyenne +"<br>" );
    if (moyenne<10)
    document.write("Desolé vous avez echouer a votre examen🥹🥹");
    else
    document.write("Felicitation vous avez réussi votre examen 🥳🥳");
}
function test_âge (){
    var age = prompt("saisissez votre âge");
    if(age<18){
        document.write("<div style='margin: 0 auto; width:300px; border:4px solid grey; color:black; text-align:center; background-color: skyblue; z-index: 10; opacity: 100;'>");
    document.write("Vous êtes mineur et n'avez rien a faire ici ");
    document.body.style.background="red";
       }   else {
        document.write("<div style='margin: 0 auto; width:300px; border:4px solid grey; color:black; text-align:center; background-color: skyblue; z-index: 10; opacity: 100;'>");
    document.write("Vous êtes majeur vous avez donc accès au site")
    document.body.style.background="green"}
}
function affichage (){
var nom=prompt("Quelle est votre nom ?");
var prenom=prompt("Quelle est votre prenom ?");
document.write("<div style='margin: 0 auto; width:300px; border:4px solid grey; color:red; text-align:center; background-color: skyblue; z-index: 10; opacity: 100;'>");
document.write("Hello  " +prenom + " " + nom );
document.write("</div>");
}

function test_couleur (){
    var c = prompt("Quelles couleurs voulez vous testez ?");
    document.write("<div style='margin: 0 auto; width:300px; border:4px solid grey; color:red; text-align:center; background-color: skyblue; z-index: 10; opacity: 100;'>");
    if  (c == "rouge" || c == "ROUGE" || c == "R")
    document.body.style.background= "red";

    else if (c == "bleu" || c == "BLEU" || c == "B")

    document.body.style.background= "blue";

    else 
    
    document.write("Desolé la couleur n'est pas prise en compte");
    


}
