// menu click interaction

function showItem(name){

document.getElementById("menu-description").innerText =
name + " is one of our bold flavor cookies loved by customers.";

}

// chart interaction

const ctx = document.getElementById('cookieChart');

if(ctx){

new Chart(ctx, {
type:'bar',

data:{
labels:['Chocolate Chip','Cookie Monster','Biscoff','S’mores'],

datasets:[{
label:'Customer Favorites',

data:[40,30,20,10]
}]
}

});

}

// form interaction

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("form-response").innerText =
"Thanks! We will contact you soon.";

});

}