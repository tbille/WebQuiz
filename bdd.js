
/*
	QUESTIONS
*/
// FORMAT QUESTIONS : 
// id, domaine , question, reponse 1 à 4, bonne réponse

var tableauQuestions = [

{
	id:1,
	domaine:1,
	question:'Choisissez le bon tag HTML pour créer une liste non ordonnée',
	reponse1:'<li>',
	reponse2:'<ul>',
	reponse3:'<ol>',
	reponse4:'<br>',
	bonneReponse:2
},
{
	id:2,
	domaine:1,
	question:'Quelle est la version précédant le HTML5',
	reponse1:'HTML 4.01',
	reponse2:'HTML 4.1',
	reponse3:'HTML 4.9',
	reponse4:'HTML 4',
	bonneReponse:1
},
{
	id:3,
	domaine:1,
	question:'Quel est le bon doctype pour HTML5',
	reponse1:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">',
	reponse2:'<!DOCTYPE HTML5>',
	reponse3:'<!DOCTYPE html>',
	reponse4:'<!DOCTYPE PUBLIC html>',
	bonneReponse:3
},
{
	id:4,
	domaine:1,
	question:'Quel est le bon élément HTML5 pour la lecture des vidéos',
	reponse1:'<media>',
	reponse2:'<video>',
	reponse3:'<play>',
	reponse4:'<mediatype>',
	bonneReponse:2
},
{
	id:5,
	domaine:2,
	question:'Quel est le bon endroit dans un document HTML pour placer la référence à une feuille de style externe?',
	reponse1:'À la fin du document',
	reponse2:'Dans la section <body>',
	reponse3:'Dans la section <head>',
	reponse4:'En haut du document',
	bonneReponse:3
},
{
	id:6,
	domaine:2,
	question:'Lequel parmi les choix correspond à la bonne syntaxe?',
	reponse1:'body:color=black;',
	reponse2:'body {color: black;}',
	reponse3:'{body:color=black;}',
	reponse4:'{body;color:black;',
	bonneReponse:2
},
{
	id:7,
	domaine:2,
	question:'Comment insère-t-on un commentaire dans un fichier CSS?',
	reponse1:'/* ceci est un commentaire */',
	reponse2:'// ceci est un commentaire //',
	reponse3:'<--! ceci est un commenaire -->',
	reponse4:'$ ceci est un commentaire $',
	bonneReponse:1
},
{
	id:8,
	domaine:3,
	question:'Dans quel élément HTML met-on le Javascript?',
	reponse1:'<js>',
	reponse2:'<java>',
	reponse3:'<javascript>',
	reponse4:'<script>',
	bonneReponse:4
},
{
	id:9,
	domaine:3,
	question:'Quelle est la bonne syntaxe pour référer à un script externe nommé "xxx.js"?',
	reponse1:'<script src="xxx.js">',
	reponse2:'<script>xxx.js</script>',
	reponse3:'<js src="xxx.js">',
	reponse4:'<javascript:"xxx.js">',
	bonneReponse:1
},
{
	id:10,
	domaine:3,
	question:'Comment fait-on pour détecter le nom du navigateur du client?',
	reponse1:'navigator-name',
	reponse2:'nav.name',
	reponse3:'navigator.appName',
	reponse4:'what.is.the.navigator.name',
	bonneReponse:3
},
];


/*
	DOMAINES
*/
// FORMAT domaines
// id, nom domaine
var html = new Array(1,'html');
var css = new Array(2,'css');
var js = new Array(3,'javascript');

var tableauDomaines = new Array(html,css,js);


 var getNameDomaineFromID = function (id){
	var i = 0;
	while($.inArray(id, tableauDomaines[i])){
		i++;
	}
	return tableauDomaines[i];
}
