var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","nithi");
	input1.classList.add("style");
	document.body.appendChild(input1);
	document.write('<br/>')
	document.write('<br/>')

var input2=document.createElement("INPUT");
		input2.setAttribute("type","text");
		input2.setAttribute("placeholder","Enter a number:");
		input2.setAttribute("id","aar");
		input2.classList.add("style");
		document.body.appendChild(input2);
		document.write('<br/>')
		document.write('<br/>')
		
		
		
var input3=document.createElement("INPUT");
			input3.setAttribute("type","text");
			input3.setAttribute("placeholder","Enter a operation:");
			input3.setAttribute("id","nathi");
			input3.classList.add("style");
			document.body.appendChild(input3);
			document.write('<br/>')
			document.write('<br/>')

	

	document.body.style.textAlign="center";

	
	button=document.createElement("button");
	button.setAttribute("onclick","operation()");
	button.innerText="Click";
	button.classList.add("box");
    document.body.appendChild(button)
	
	
	
	
	m=document.createElement("div")
	m.classList.add("n");
	document.body.appendChild(m) 
	
	
	function operation(){
	
	  function addition(a,b)
		{
			return(a+b);
		}
		function subtraction(a,b)
		{
			return(a-b);
		}
		function multiplication(a,b)
		{
			return(a*b);
		}
		function division(a,b)
		{
			return(a/b);
		}

		 var num1=document.getElementById("nithi").value;
		  var num2=document.getElementById("aar").value; 
		  var operation=document.getElementById("nathi").value;

		if(operation==1)
		{
			var add=addition(input1,input2);
			m.innerHTML="add";

		}

		else if(operation==2)
		{
			var sub=subtraction(input1,input2);
			m.innerHTML="sub";

		}
		else if(operation==3)
		{
			var mul=multiplication(input1,input2);
			m.innerHTML="mul";

		}
		else
		{
			var div=division(input1,input2);
			m.innerHTML="div";

		}
	}