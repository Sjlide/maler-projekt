document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("#Formular01").addEventListener('click', ValiderForm);
}); 

function ValiderForm()
{
let AntalFejl = 0;
let FejlBesked1 = "";
let FejlBesked2 = "";
let FejlBesked3 = "";
	
	if( document.querySelector('#InputNavn').value == "" )
	{	
		AntalFejl += 1;
		FejlBesked1 = "Skriv dit navn!";
	}
	else
	{
		var regexpbogstaver = /^[a-zA-Z ]+$/;
		if( !regexpbogstaver.test(document.querySelector('#InputNavn').value ) )
		{
			AntalFejl += 1;
			FejlBesked1 = "Navn må kun indeholde bogstaver og mellemrum!";
		}
	}
	
	if( document.querySelector('#InputPostnummer').value == "" )
	{
		AntalFejl += 1;
		FejlBesked2 = "Skriv dit postnummer!";
	}
	else
	{
		var regexptal = /^[0-9]+$/;
		if( !regexptal.test( document.querySelector('#InputPostnummer').value ) )
		{
			AntalFejl += 1;
			FejlBesked2 += "Postnummer må kun indeholde tal!";
		}
	}
	
	if( document.querySelector('#InputMail').value == "" )
	{
		AntalFejl += 1;
		FejlBesked3 = "Skriv din mail!";
	}
	else
	{
		var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if( !regexpmail.test( document.querySelector('#InputMail').value ) )
		{
			AntalFejl += 1;
			FejlBesked3 = "Mail er ikke gyldig!";
		}
	}
	
	if( AntalFejl == 0 )
	{
		return true;
	}
	else
	{
		document.querySelector('#FejlBesked1').innerHTML = FejlBesked1;
		document.querySelector('#FejlBesked2').innerHTML = FejlBesked2;
		document.querySelector('#FejlBesked3').innerHTML = FejlBesked3;
		return false;
	}
}