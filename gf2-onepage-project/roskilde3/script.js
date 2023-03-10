document.addEventListener('DOMContentLoaded', function(){
    MenuPunktAktiv();
    });

function MenuPunktAktiv(){
 
let current = "" + window.location;
let anchors = document.querySelectorAll('a');
 
if( current.search( ".html" ) == -1 )
{
current = current + "index.html";
}
 
for ( let i = 0; i < anchors.length; i++ )
{
if( current.toLowerCase() == anchors[i].href.toLowerCase() )
{
anchors[i].className = "active";
}
}
}