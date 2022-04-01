
var post = {firstName:" ", lastName:" ", job:" ", reviewText:" ", reviewDate:" "}; 

var postChecked = checkProperties(post);

thankUser;
submitReview(postChecked);

function checkProperties(post){
	postChecked.firstName = checkReview(post.firstName);
	postChecked.lastName = checkReview(post.lastName);
	postChecked.job = checkReview(post.job);
	postChecked.reviewText = checkReview(post.reviewText);
	postChecked.reviewDate = post.reviewDate;
	return postChecked;
}

/**
Checks the review for obcenities, code, and incompletion.
the function sends the review through checkCompletion, checkObcenities, and checkCode.
Each sub function returns a new version of post, except for checkCompletion which returns true or false.
If checkCompletion is true continue, else submissionFailedIncomplete.
 
else submitReview and thankUser. 

*/
function checkReview(x) {
	if checkCompletion(x) {
		continue;
	} else {
		submissionFailedIncomplete();
	}
	var x2 = checkObcenities(x);
	var x3 = checkCode(x2);
	return x3;
}
/**
Checks to make sure each property is not blank
If the form is incomplete, return false. 
else return true.
*/
function checkCompletion(x){
	if (x == ""){
		return false;
	}
	else{
		return true;
	}
}
/**
If obcenities are found they are censored and the post continues through review.
If any of the properties contains (insert bad words here) they are censored with astrisks.
return the new object
*/
function checkObcenities(){
	
}
/**
If code is found, the post is either scubbed of code or deleted and a submissionFailedCode message is sent.
If any of the properties contains symbols used in code, they are removed.
return the new object.
*/
function checkCode(){
	
}

/**
Posts the review on feedback.html
*/
function submitReview() {
	
}
/**
Thanks the user if the review has been submited succesfully.

*/
function thankUser() {
	document.getElementById("thankYou").
}
/**
An unused general submission failed message
*/
function submissionFailed() {
	
}
/**
A message that tells the user their post was deemed to contain code and was not posted
*/
function submissionFailedCode() {
	
}
/**
A message that tells the user "Please fill out all the boxes"
*/
function submissionFailedIncomplete() {
	
}