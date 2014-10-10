
/*
	QUESTIONS
*/
// FORMAT QUESTIONS : 
// id, domaine , question, reponse 1 à 4, bonne réponse
var question1 = new Array(1, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question2 = new Array(2, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question3 = new Array(3, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question4 = new Array(4, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question5 = new Array(5, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question6 = new Array(6, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question7 = new Array(7, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question8 = new Array(8, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question9 = new Array(9, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);
var question10 = new Array(10, 1,'METTRE QUESTION', 'REPONSE1','REPONSE2','REPONSE3','REPONSE4', 1);

var tableauQuestions = new Array(question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) ;

var tableauQuestions = [

{
	id:1,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:2,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:3,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:4,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:5,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:6,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:7,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:8,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:9,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
},
{
	id:10,
	domaine:1,
	question:'blalbal',
	reponse1:'',
	reponse2:'',
	reponse3:'',
	reponse4:'',
	bonneReponse:1
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
