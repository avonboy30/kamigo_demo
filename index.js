//ar liffID = '1657009153-92GwV16y';


liff.init({
    liffId: '1657009153-92GwV16y'
  }) .then(() => {
    if (!liff.isLoggedIn()) {
     alert("用戶未登入");
     liff.login();
    } else {
     //alert("用戶已登入");
     liff.getProfile()
     .then(profile => {
      const context = liff.getContext();
      console.log(context);
      //const name = profile.displayName;
      document.querySelector('#userid').value= profile.userId;
      //document.querySelector('#userid').value= profile.pictureUrl;
      document.querySelector('#displayName').value= profile.displayName;
      /**/
        liff.sendMessages([{
          type: 'text',
          text: "You've successfully sent a message! Hooray!"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
     })
     .catch((err) => {
      console.log('error', err);
     });
    }
  }
  ).catch((err) => {
   console.log('初始化失敗')
  });

  /*
liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  console.log(liff.getVersion());
  var accessToken = liff.getAccessToken();
    console.log(accessToken);
  // 取得使用者類型資料
  var context = liff.getContext();
  console.log(context);
  alert(context);

  document.querySelector('#userid').value= context;

  liff.sendMessages([{
    type: 'text',
    text: 'Hello world'
  }]);

  //console.log(liff.getProfile());


  // 這邊開始寫使用其他功能
  
}).catch(function(error) {
  console.log(error);
});
*/

$.ajax({
  url: "https://ipinfo.io/json",
  
  success: function(response) {
    var s=[];
    s=response;
    document.querySelector('#userstrValue').value="hostname: "+s["hostname"];
  },
});



/*
var s=[]
$.get('http://ipinfo.io/json', function(data) {
    console.log(data)
	  s=data
});



let sendButton = document.querySelector('button');

function send() {

      



  let name = document.querySelector('#nameValue').value;
  document.querySelector('#nameValue').value="hostname: "+s["hostname"];

  let phone = document.querySelector('#phoneValue').value;
  //let demand = document.querySelector('#demandValue').value;
  let demand = document.querySelector('#txtMain').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzh5sHD3sEms5LqY_2nL_CQ_k1F65kPvo3FtydiehjuHRLGNbQOrIcH/exec",
    data: {
        "name": name,
        "phone": phone,
        "demand": demand,
        "userstr": "hostname: "+s["hostname"]
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功"+demand);
      }
    },
  });
};

sendButton.addEventListener('click', send);

*/
