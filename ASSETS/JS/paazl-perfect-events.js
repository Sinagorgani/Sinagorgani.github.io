jQuery(document).ready(function($) {
    $("body").on("click", ".paazl_perfect_item", function (e) {
       /* var option = $(this).find(":radio");

        if (option.is(":checked")) {
            return;
        }

        var option_id = option.attr("data-id");

        option.attr("checked", true);


        $(".paazl_perfect_item").removeClass("paazl_perfect_item_selected");
        $(this).addClass("paazl_perfect_item_selected");

        $('.input-radio[value="' + option_id + '"]').attr("checked", true).trigger("change");

        $(option).trigger('change');*/
    });

    $("body").on("click", "input[name='paazl_perfect']", function (e) {
        var option_id = $(this).attr("data-id");

        $('.input-radio[value="' + option_id + '"]').attr("checked", true).trigger("change");

       // $('.paazl_perfect_content div').html('<div class="paazl_perfect_loading">&nbsp;</div>');
    });

    $("body").on("click", ".paazl_perfect_module_trigger", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var data = {
            locale: $(".paazl_perfect_heading").attr("data-locale"),
            shipping_country: $('#ship-to-different-address-checkbox').is("checked") ? $("#shipping_country").val() : $("#billing_country").val(),
            shipping_postal_code: $('#ship-to-different-address-checkbox').is("checked") ? $("#shipping_postcode").val() : $("#billing_postcode").val(),
            delivery_type: $(this).parents(".paazl_perfect_item").attr("id") == 'paazl_perfect_item_servicepoint' ? 'servicePoint' : 'home',
            notification_email_address: $('#billing_email').val(),
            notification_phone_number: $('#billing_phone').val()
        };

        openPaazlPerfectModal(data);
    });
});
