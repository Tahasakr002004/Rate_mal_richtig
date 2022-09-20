'use strict';


let meine_Num = Math.trunc( Math.random() * ( 20 - 1 + 1 ) + 1 );

let versuche = 20;
let punkt = 0;
let g_punkt = 0;

const MessRep = function (attrib,message) {
  document.querySelector( attrib ).textContent = message;
}
// console.log(  );

document.querySelector( '.los' ).addEventListener( 'click', function () {
  let rat_num = Number(document.querySelector( '.raten' ).value);
  
  if ( !(versuche > 1) )  {
//document.querySelector( '.nachricht' ).textContent = '☹ Spiel endet!, nochmal tippen';
    MessRep( '.nachricht', '☹ Spiel endet!' );
    document.querySelector( '.versuche' ).textContent = 0;
    document.querySelector( 'body' ).style.backgroundColor = '#777';

  } else {
    versuche--;
    document.querySelector( '.versuche' ).textContent = versuche;

    if ( ( 20 <= rat_num ) || ( rat_num <= 1 ) )
    {
      MessRep( '.nachricht', '⛔ Sorry,ungültige Nummer?!' );
      // document.querySelector( '.nachricht' ).textContent = '⛔ Sorry,ungültige Nummer?!';
      document.querySelector( 'body' ).style.backgroundColor = '#222';

    } else if ( rat_num === meine_Num ) {
      MessRep( '.nachricht', '✨ Richtig!!' );
      // document.querySelector( '.nachricht' ).textContent = '✨ Richtig!!';
      document.querySelector( '.nummer-box' ).textContent = rat_num;
      punkt = rat_num;
      document.querySelector( '.punkt' ).textContent = punkt;
          if ( g_punkt <= punkt ){ g_punkt +=punkt; document.querySelector( '.g_punkt' ).textContent = g_punkt;}
      document.querySelector( 'body' ).style.backgroundColor = '#00FFFF';
      document.querySelector( '.ueber_titel' ).textContent = '😎Gratulieren👌';
      document.querySelector( '.nummer-box' ).style.width = '30rem';

     
    }
    else if ( meine_Num < rat_num ) {
      MessRep( '.nachricht', '🤷‍♂️ Zu groß!!!' );
      // document.querySelector( '.nachricht' ).textContent = '🤷‍♂️ Zu groß!!!';
      document.querySelector( 'body' ).style.backgroundColor = '#222';

      }
    else if ( meine_Num > rat_num ) {
      MessRep( '.nachricht', '🤷‍♂️ Zu klein!!' );
      // document.querySelector( '.nachricht' ).textContent = '🤷‍♂️ Zu klein!!';
      document.querySelector( 'body' ).style.backgroundColor = '#222';


    }
  }
  
  
  
} );

document.querySelector( '.nochmal' ).addEventListener( 'click', function () {
  versuche = 20;
  punkt = 0;
  g_punkt = 0;
  document.querySelector( '.raten' ).value = ' ';
  document.querySelector( '.ueber_titel' ).textContent = 'Rate mal die richtige Nummer!';
  MessRep( '.nachricht', 'Starte zu raten...');

  // document.querySelector( '.nachricht' ).textContent = 'Starte zu raten...';
  document.querySelector( 'body' ).style.backgroundColor = '#222';
  document.querySelector( '.nummer-box' ).textContent = '?';
  document.querySelector( '.nummer-box' ).style.width = '15rem';
  document.querySelector( '.versuche' ).textContent = versuche;
  document.querySelector( '.punkt' ).textContent = punkt;
  document.querySelector( '.g_punkt' ).textContent = g_punkt;
  
} );
