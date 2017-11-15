$(document).ready(function () {
            $("#btn").click(function (e) {

                if (/\w+\s+\w+/.test($("#Full-Name").val()) && /^[A-Z]/.test($("#Full-Name").val())) {

                } else {
                    alert("Enter your Full name");
                }

                e.preventDefault();
            });
            $("#btn").click(function (e) {

                if (/^[a-zA-Z0-9\s,'-]*$/i.test($("#address").val()) {

                    } else {
                        alert("Enter your Full name");
                    }

                    e.preventDefault();
                }); $("#btn").click(function (e) {

                    if (/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/i.test($("#card").val()) {

                        } else {
                            alert("Enter your Full card No.");
                        }

                        e.preventDefault();
                    });

            });




            card
