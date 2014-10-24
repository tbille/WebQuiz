/* TABLEAU DE BORD 
Fonction qui disable le bouton submit si aucun checkbox est pas checked
*/


$(function(){
	
var checkboxes = $("input[type='checkbox']");
    submitButt = $("input[type='submit']");

checkboxes.click(function() {
    submitButt.attr("disabled", !checkboxes.is(":checked")); 
});
	

});


/* Fonctions qui retourne un tableau avec le nombre de questions pour chaque domaine */

var getNumQuestions=function(tableauidDomaine){
	return getQuestionsFromDomaine(tableauidDomaine).length;
}
