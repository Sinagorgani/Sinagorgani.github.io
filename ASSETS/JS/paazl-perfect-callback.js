function paazlPerfectCallback (response) {
    if (!response) {
        alert('Er is een fout opgetreden');
    }

    if (response.deliveryType == 'servicePoint') {
        var option_id = 'paazl_sp_'+ response.servicePointCode;
    } else {
        var option_id = 'paazl_'+ response.option;
    }
    //console.log(option_id);
    //console.log(jQuery('.input-radio[value="'+ option_id +'"]'));
    jQuery('.input-radio[value="'+ option_id +'"]').prop("checked", true).trigger("change");
    //jQuery('.paazl_perfect_content div').html('<div class="paazl_perfect_loading">&nbsp;</div>');

    return true;
}
