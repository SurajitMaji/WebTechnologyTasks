var content=[

[` Design a table in a web page using HTML.`,"table.html"],
[`Design a web page where the contents of the 
page containing two types of list using HTML.`,"listPage.html"], 
[` Design a registration form using HTML.`,"basicFormDesign.html"],
[` Design a Login form using HTML.`,"login.html"],
[` Design four webpage using HTML where every page has background color and heading text are same, the colors are
		<br>i. Red<br>ii. Blue <br>iii. Pink<br>iv. Orange<br> Make all the webpages within a single webpage.
`,"./iframe/colorFramingByTable.html"],
[`Design a Calculator using HTML and CSS.`,"calculator.html"],
[`Make Tribute page on Dr. APJ Abdul Kalam by using HTML and CSS`,"abjKalam.html"],
[`Make a resume on you by using HTML and CSS.`,"resume.html"],
[`Design a Portfolio website which show all the details about you.`,"portfolio.html"],
[`Find the largest from two given numbers and show the result as a alert of a webpage using HTML and Javascript.`,"largeFromTwo.html"],
[`Write a program to multiply three numbers and show the result in console log using  Javascript.`,"multiplication3numbers.html"],
[`Write a Javascript program to take your name and three charecteristics of you.Then show the details in a
 webpage as - name within h1 tag charecteristics with in list tag.`,"document_innerhtml.html"],
[`Write a program in javascript and html to show the given number is even or odd`,"even_odd.html"],
[`Write a program to take records from user for voter dentity card using javascript and HTML.<br>
Then show the records in webpage as Full Name,Age and country.<br>When you take reocords from users if age is less than 18 then show the alert and if 
country is not India then show the alert.`,"votterCard.html"],
[`Display the fibbonaci series upto the user defined number in webpage using Javascript programming language `,"fibbonacci.html"],
[`Display factorial value of a given number in a webpage using javascript progamming language.`,"factorial.html"],
[`Find the reverse number of a given number and show the input and output in a webpage using javascript progrmming language.(Hint:Input: 145, Output:541)`,"reverse.html"],
[`Write a program to display all element of the array and make a Insert and a Delete button for perform push() and pop() operation.`,"studentArray.html"],
[`Write a program in javascript to create initials of a given name.(Hind : Input:Amit Sen, Output:AM)`,"stringCreateInitials.html"],
[`Write a program in javascript to count number of vowels in a given string.`,"stringVowelCount.html"],

[`Create a webpage as Counter app where will be three option - increment, decrement, reset`,"counter.html"],
[`Create a webpage to Preview uploading image before submision a form.`,"upload.html"],
[`Design a registration form with the fields name, gender, date of birth,district, profile photo. By submitting the form the putting information show in the webpage.`,"registration.html"],
[`Design a login form with user id and password fields and make them authenticate on submitting the form. 
The authenticate values are stored in a 2-D arry.(Minimum 3 pair value)`,"login.html"],
[`Make a TO-DO Application.`,"todo.html"],
[`Make a traffic signal system using HTML, CSS and Javascript`,"traficLight.html"],
[`Develop a Simple calculator for addition, subtraction, multiplication and division operation
using JavaScript.`,"calculatorComplete.html"],
[`Design a webpage to a ship sailing handeler using HTML, CSS and Javascript.`,"sailing.html"]




];

let qs=document.getElementById("questions");

for(i=0;i<content.length;i++){
	qs.innerHTML+=
	`
	<div class="question" id="qsn" onclick="loadFrame(${i})">
	${i+1}. ${content[i][0]}
	</div>
	`;
}

function loadFrame(x){
	let frmbx=document.getElementById("frame_box");
	frmbx.innerHTML=`
		<div class="no">${x+1}</div>
		<div class="frame-box">
		<iframe src="${content[x][1]}"></iframe>
		</div>
		<div>
			<a href="${content[x][1]}" class="lv-btn">Live Preview</a>
		</div>
	`;
	
}