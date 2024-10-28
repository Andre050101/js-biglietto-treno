/*  Esercizio: 
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
        - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        - va applicato uno sconto del 20% per i minorenni
        - va applicato uno sconto del 40% per gli over 65.
        - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*Variabili*/

let nKm = parseInt(prompt("Quanti kilometri desidera percorrere?")); /*Numero km da percorrere*/
let eta = parseInt(prompt("Quanti anni ha? (Abbiamo uno sconto dedicato a minorenni ed un altro a over 65!)"))

/*Calcolo del prezzo */
let prezzo = 0.21 * nKm;
if(eta < 18 || eta > 65){
    if(eta < 18){
        prezzo = prezzo * 0.8;
    }
    else{
        prezzo = prezzo * 0.6;
    }
}

console.log("il prezzo del biglietto è "+prezzo+"€")
