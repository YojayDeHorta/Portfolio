var modal = new bootstrap.Modal(document.getElementById("modal"), {});
var btnPortfolio=  document.getElementById("btnPortfolio")
let data=[
    {
      name:'Hotel',
      tech:'javascript',

    },
];
btnPortfolio.onclick = function () {
    
    console.log(btnPortfolio.value);
    modal.show();
};