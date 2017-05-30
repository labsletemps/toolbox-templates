<?php
	//obligatoire: quelques infos sur la page!
	$titre ="Paléo 40+1";
	$image = "http://labs.letemps.ch/interactive/2016/syrie-5-ans/assets/0.jpg";
	$description = "En Syrie, plus de 260 000 personnes sont mortes depuis 2011. La moitié de la population a fui. Retour sur cinq années de guerre";
	$auteurs = "Jean Abbiateci, Catherine Frammery,Etienne Dubuis";
	$tags = "syrie, Djihad,assad,russie,homs,damas";

	//optional logo pour partenaire si contenu réalisé en collaboration avec un partenaire.
	//$partnerlogo = "img/logo_hebdo_2014.png";
	//$partnerlink = "http://www.hebdo.ch/";
	$partnerIntro = "";
	$displayFooter = false;
	$notLT = true;
	
	$JS = array(
    	'https://cdn.firebase.com/js/client/2.2.1/firebase.js',
		'js/handlebars-v4.0.4.js'
	);

	//optional: tu mets un fichier style.css dans ton dossier et s'il y en a un, il est utilisé. Sinon, pas de problème