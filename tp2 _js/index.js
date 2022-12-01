

function tableau1 (){
    document.write("<center><table border=2 width=30%;>");
    for (var i = 0; i <= 5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table></center>");
}

function tableau_2() {
    var line = prompt("Donner le nombre de ligne à afficher");
    document.write("<center><table border=2; width=30%;>");
        for (i=1; i <=line; i++)
        {
            document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>")
        }
        document.write("</table></center>");
}

function connexion_1() {
    var ident = prompt("Donnez votre nom d'utilisateur");
    var motp = prompt("Entrez votre mot de passe");
    
    if (ident == "admin" && motp == "admin") {
        document.write("<center><div style='margin: 0 auto; width:300px; border:4px solid grey; color:black; text-align:center; background-color: skyblue; z-index: 10; opacity: 100; margin-top:20%; font-weight: bold;'>"+ "Bienvenue:   " + ident +"<center>");
        
    }
    else {
        alert("acces refusée")
    }

}

function connexion_2() {
    var i = 0;

    do {
        var ident = prompt("Donnez votre nom d'utilisateur");
        var motp = prompt("Entrez votre mot de passe");

        if (ident == "admin" && motp == "admin")
        {
            document.write("<center><div style='margin: 0 auto; width:300px; border:4px solid grey; color:black; text-align:center; background-color: skyblue; z-index: 10; opacity: 100; margin-top:20%; font-weight: bold;'>"+"Bienvenue:    "+ ident+ "</center>");
            break;
        }

        else

        alert("Accès refusé");

        i+= 1;
    
         } while (i<3);
    if (i == 3)
    alert("Délai dépassé réesayer dans 1h");
}
function str() {
    {
        var chaine=prompt("Saisire un mot")
        document.write("<center><div style='margin: 0 auto; width:300px; border:4px solid grey; color:black; text-align:center; background-color: skyblue; z-index: 10; opacity: 100; margin-top:20%; font-weight: bold;'> " + chaine.toUpperCase()+"<br>");
        document.write(chaine.toLowerCase()+"<br>");
        document.write("la chaine contient    " + chaine.length+"   caractères   " + "<br>");
        document.write("la premiere lettre est    "+chaine.substring(0,1)+"<br><div></center>");
    }

}
 
function couleurs (){
    var color = prompt("entrez une couleur");

    switch(color)
    {
        case "vert": document.body.style.background = "green";;
        break;
        case "VERT": document.body.style.background = "green" ;;
        break;
        case "bleu" : document.body.style.background = "blue";;
        break;
        case "BLEU" : document.body.style.background = "blue" ;;
        break;
            default:alert("Couleur non définie");
    }
}

function Bonus() {
    var article
    var prix
    var quantité
    do {
        article = prompt("le nom de votre article");
        prix = prompt("donnez le prix par pièce");
        quantité = prompt("saisisez la quantité");
        total= prix * quantité
        
        alert("le total des " + article + "est " + total + "€");
        
        suite = prompt("vous avez d'autres article a saisire oui ou non ?")
    } 
    
    while (suite != "non");
        // document.write("<center><table border=2; width=30%;>");
    // for (article = 1;){
            
    //             }
    //     document.write("<tr><td>"+article+"</td><td>"+prix+"</td><td>"+total+"</td></tr>")
    
    //     document.write("</table></center>");

        //  document.write("vos article " + article + "et vont coutez "+ total )
}



 

