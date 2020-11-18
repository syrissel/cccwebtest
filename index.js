function load() {
    var pin = document.getElementById('code');

    $('#pin1').click(function() {
        $('#code').val($('#code').val() + '1');
        animate(this);
    })

    $('#pin2').click(function() {
        $('#code').val($('#code').val() + '2');
        animate(this);
    })
    
    $('#pin3').click(function() {
        $('#code').val($('#code').val() + '3');
        animate(this);
    })
    
    $('#pin4').click(function() {
        $('#code').val($('#code').val() + '4');
        animate(this);
    })

    $('#pin5').click(function() {
        $('#code').val($('#code').val() + '5');
        animate(this);
    })

    $('#pin6').click(function() {
        $('#code').val($('#code').val() + '6');
        animate(this);
    })

    $('#pin7').click(function() {
        $('#code').val($('#code').val() + '7');
        animate(this);
    })

    $('#pin8').click(function() {
        $('#code').val($('#code').val() + '8');
        animate(this);
    })

    $('#pin9').click(function() {
        $('#code').val($('#code').val() + '9');
        animate(this);
    })

    $('#pin0').click(function() {
        $('#code').val($('#code').val() + '0');
        animate(this);
    })

    $('#del').click(function() {
        $('#code').val($('#code').val().slice(0, -1));
        animate(this);
    })

    $('#add').click(function() {
        $('#code').val($('#code').val() + '+');
        animate(this);
    })

    $('#subtract').click(function() {
        $('#code').val($('#code').val() + '-');
        animate(this);
    })

    $('#multiply').click(function() {
        $('#code').val($('#code').val() + '*');
        animate(this);
    })

    $('#divide').click(function() {
        $('#code').val($('#code').val() + '/');
        animate(this);
    })

    $('#clear').click(function() {
        $('#code').val('');
        animate(this);
    })

    $('#go').click(function() {
        clearErrors()
        if (validate()) {
            var codeValue = eval($('#code').val())
            $('#code').val(codeValue)
        }
    })

    function validate() {
        var valid = true;
        var codeValue = $('#code').val()
        var firstChar = codeValue.substring(0, 1)
        var lastChar = codeValue.substring(codeValue.length -1, codeValue.length)
        var errors = []

        if (codeValue.length === 0) {
            errors.unshift('Cannot be blank.')
        }

        if (isNaN(firstChar)) {
            valid = false
            errors.unshift('First character cannot be an operand.')
        }

        if (isNaN(lastChar)) {
            valid = false
            errors.unshift('Last character cannot be an operand.')
        }

        errors.forEach(element => {
            $('#errors').append('<li class="text-danger">' + element + '</li>')
        });

        return valid
    }

    function clearErrors() {
        $('#errors').empty()
    }

    function animate(element) {
        element.firstElementChild.style.visibility = "hidden";
        setTimeout(function() {
            element.firstElementChild.style.visibility = "visible";
        }, 180);
    }

}


document.addEventListener("DOMContentLoaded", load, false);