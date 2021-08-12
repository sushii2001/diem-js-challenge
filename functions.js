function nameSelected() {
    if (document.getElementById('name').value == "") {
      document.getElementById("nameOutput").innerHTML = "Hello there! What's your name?";
    }
    else{
      document.getElementById("nameOutput").innerHTML = "Hi, " + document.getElementById('name').value + "!";
    }
  }
    
  function nameNotSelected() {
    if (document.getElementById('name').value == "") {
      document.getElementById("nameOutput").innerHTML = "Hello there! What's your name?";
    }
    else{
      document.getElementById("nameOutput").innerHTML = "Hi, " + document.getElementById('name').value + "!";
    }
  }

  function dateSelected() {
    if (document.getElementById('date').value == "") {
      document.getElementById("ageOutput").innerHTML = "Lemme guess, your age is...";
    }
    else{
      document.getElementById("ageOutput").innerHTML = "Your age is " + age + " years old!"
    }
    
  }

  function dateNotSelected() {
    if (document.getElementById('date').value == "") {
      document.getElementById("ageOutput").innerHTML = "Would you mind entering your birthday?";
    }
    else{
      // document.getElementById("ageOutput").innerHTML = "Your age is "+ (new Date().getFullYear() - (new Date(document.getElementById('date').value).getFullYear())) + " years old!";
      var dob = new Date(document.getElementById('date').value);  
      var month_diff = Date.now() - dob.getTime();  
      var age_dt = new Date(month_diff);   
      var year = age_dt.getUTCFullYear();  
      var age = Math.abs(year - 1970);  
      document.getElementById("ageOutput").innerHTML = "Your age is " + age + " years old!";
    }
  }
 
  const radios = document.getElementsByClassName("form-group");
  document.body.addEventListener('change', function (e) {
    let target = e.target;
    switch (target.id) {
        case "dark":
            darkmode();
            document.getElementById("themeOutput").innerHTML = "You choose Dark Mode!"
            break;
        case "light":
            lightmode();
            document.getElementById("themeOutput").innerHTML = "You choose Light Mode!"
            break;
    }
  });

  function darkmode() {
    document.getElementById("theme").className = "bg-dark text-white"
  }

  function lightmode() {
    document.getElementById("theme").className = "bg-light text-dark"
  }

  function button_hover1(){
    document.getElementById("html").className = "btn btn-danger btn-sm"
  }

  function button_hover2(){
    document.getElementById("css").className = "btn btn-danger btn-sm"
  }

  function button_hover3(){
    document.getElementById("javascript").className = "btn btn-danger btn-sm"
  }
  
  function button_out1(){
    document.getElementById("html").className = "btn btn-success btn-sm"
  }

  function button_out2(){
    document.getElementById("css").className = "btn btn-success btn-sm"
  }

  function button_out3(){
    document.getElementById("javascript").className = "btn btn-success btn-sm"
  }

  function skill_to1(){
    document.getElementById("html").className = "btn btn-success btn-sm"
  }

  function moveHTML() {
    var html = document.getElementById("html");
    html.style.marginRight = "5px";
    var output = document.getElementById("skillsOutput");
    var original = document.getElementById("source");
    if (output.contains(html)) {
      original.appendChild(html);
    }
    else {
      output.appendChild(html);
    }
  }

  function moveCSS() {
    var css = document.getElementById("css");
    css.style.marginRight = "5px";
    var output = document.getElementById("skillsOutput");
    var original = document.getElementById("source");
    if (output.contains(css)) {
      original.appendChild(css);
    }
    else {
      output.appendChild(css);
    }
  }

  function moveJS() {
    var js = document.getElementById("javascript");
    js.style.marginRight = "5px";
    var output = document.getElementById("skillsOutput");
    var original = document.getElementById("source");
    if (output.contains(js)) {
      original.appendChild(js);
    }
    else {
      output.appendChild(js);
    }
  }

