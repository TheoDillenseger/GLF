var myHeaders = new Headers();
myHeaders.append("Authorization", "8yCPCvb3dDo1k");
myHeaders.append("accept", "application/json");
myHeaders.append("Glf-Api-Version", "2");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
  mode:'no-cors'
};


    console.log('entrer fonction')
    fetch("https://pos.globalfoodsoft.com/pos/order/pop", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));





