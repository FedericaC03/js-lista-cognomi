// CHIEDO ALL'UTENTE IL SUO COGNOME
var cognome = prompt("Inserisci il tuo cognome");

//LISTA COGNOMI GIA' REGISTRATI
var listaCognomi = ['Bianchi' , 'Rossi' , 'Duzioni' , 'Balsano' , 'Verdi' , 'Cortese' ];


//METTO I COGNOMI IN ORDINE ALFABETICO
listaCognomi.push(cognome);
listaCognomi.sort();


while(cognome.length <= 2){
  cognome = prompt('Inserisci il tuo cognome');
}

for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById("lista").innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

document.getElementById("posizione").innerHTML = listaCognomi.indexOf(cognome) + 1;
