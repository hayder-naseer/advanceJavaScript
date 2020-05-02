  const datas = [
    { "label": 'username',
    "placeholder":'First '},
    { "label": 'emaiAdress',
    "placeholder":'Last'},
    { "label": 'confirmEmaiAdress',
    "placeholder":'Email'},
    { "label": 'confirmEmail',
    "placeholder":'Confirm'},
    { "label": 'password',
    "placeholder":'Password'},
    { "label": ''},
    { "label": 'confirmPassword',
    "placeholder":'Confirm'},
];
mapElements();



function mapElements() {
  var app = document.querySelector('#app');
  app.innerHTML = '<ul>' + datas.map(function (data) {
   var  id=data.label;
   var  placeholder=data.placeholder
    if(id == "")
    {
      return `<p>Password must be * character</p><br>`;
    }
    return `<input type="text" id=${id} placeholder=${placeholder}><br>`;
}).join('')+ '</ul>';
}
function Submit()
{
datas.map(function (data) {
    var  id=data.label;

     if(id != "")
    {
      var storeFromLogin =document.getElementById(id).value;
      console.log(storeFromLogin)
    }
}).join('');

}
/*************** Second Form **************/
  const loginForm = [
    { "placeholder":'Catagories' ,
     "functionality":"selected"},   
    { "label": 'BS-CS',
     "functionality":"option"},
    { "label": 'MSC',
     "functionality":"option"},
    { "label": 'PHD',
     "functionality":"option"},
      { "labelforCatch": 'Adress',
    "placeholder":'Adress* ',
     "functionality":"inputFeild",
     "id":'Adress'
     },
    { "labelforCatch": 'Adress2',
    "placeholder":'Adress2*',
    "functionality":"inputFeild"},
    { "labelforCatch": 'city',
    "placeholder":'city*',
    "functionality":"inputFeild"},
    

];
LoginForm();



function LoginForm() {
  var app = document.querySelector('#appOne');
  app.innerHTML = '<ul>' + loginForm.map(function (loginForm) {
   var  id=loginForm.label;
   var  id1=loginForm.labelforCatch
   var  placeholder=loginForm.placeholder
   var  functionality=loginForm.functionality
    if(functionality == "selected")
    {
      return `<select id="Catagories" name="Catagories"><br>`;
    }
    if(functionality == "option")
    {
      return `<option value=${id}>${id}</option><br>`;
    }
    if(functionality == "inputFeild")
    {
       return  `<br><input type="text" id=${id1} placeholder=${placeholder}><br>`;

    }
   
}).join('')+ '</ul>';
}
function SubmitLoginForm()
{
loginForm.map(function (loginForm) {
  var  id=loginForm.id;
  console.log(loginForm.id)
  var storeloginForm =document.getElementById(id).value;
  console.log(document.getElementById(id).value)
}).join('');

}