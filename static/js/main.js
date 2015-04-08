$(function() {
//SIGN UP
    $('.form-signin').submit(function( e ) {
        e.preventDefault();
        var email = $( '#inputEmail' ).val();
        var password = $( '#inputPassword' ).val();
        var name = $( '#inputName' ).val();
        
        var signup = {
            'email': email,
            'password': password,
            'name': name
        };

        console.log(signup);

        $.ajax({
            type: 'POST',
            data: JSON.stringify(signup),
            contentType: 'application/json',
            url: '',
            success: function(response){
				console.log("efefe");
                //console.log(response);
            },
            error: function() {
                console.log('fuck');
            }
        });
    });

	//LOGIN
    $('.form-login').submit(function( e ) {
        e.preventDefault();
        var name = $( '#inputName' ).val();
        var password = $( '#inputPassword' ).val();
       
        
        var login = {
            'name': name,
            'password': password,
        };

        console.log(login);

        $.ajax({
            type: 'POST',
            data: JSON.stringify(login),
            contentType: 'application/json',
            url: 'login',
            success: function(data){

				if(data == 'success'){
				    console.log(data);
					var url = "http://localhost:3000/dashboard";    
					$(location).attr('href',url);
				}else{
					alert("Login Failed");
					console.log("Login Failed");
				}
              //  location.href='localhost:3000/';
            },
            error: function() {
                console.log('fuck');
            }
        });
    });

    $('.form-dash').submit(function( e ) {
        e.preventDefault();
        var light = $( '#light' ).is(':checked');
        var door = $( '#door' ).is(':checked');
        var music = $( '#music' ).is(':checked');
        
        var status = {
            'light': light,
            'door': door,
            'music': music
        };

        console.log(status);

        $.ajax({
            type: 'POST',
            data: JSON.stringify(status),
            contentType: 'application/json',
            url: 'settings',
            success: function(data){
                console.log(data);
            },
            error: function() {
                console.log('fuck');
            }
        });
    });



    //$('#lightOn').prop('checked', true);

    //var off = $( '#lightOff' ).val();
    //console.log(off);

});

function goToDash(){
    location.href='http://example.com';
}

function goToTwit(){
    location.href='http://twitter.com';
}