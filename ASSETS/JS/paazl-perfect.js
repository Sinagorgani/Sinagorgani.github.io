function openPaazlPerfectModal(data) {
    if (typeof paazl_perfect_callback_function_name == 'undefined') {
        console.error('missing paazl perfect callback function name');

        return false;
    }

    if (typeof window[paazl_perfect_callback_function_name] == 'undefined') {
        console.error('missing paazl perfect callback');

        return false;
    }

    if (typeof PaazlCheckoutModuleLoader == "undefined") {
        console.error('missing paazl perfect loader');

        return false;
    }

    var paazlPerfectParams = {
        locale: data.locale,
        consigneeCountryCode: data.shipping_country,
        consigneePostalCode: data.shipping_postal_code,
        deliveryType: data.delivery_type,
        servicePointBasePostalCode: data.shipping_postal_code,
        notificationEmailAddress: data.notification_email_address,
        notificationPhoneNumber: data.notification_phone_number,
    };

    PaazlCheckoutModuleLoader.show(window[paazl_perfect_callback_function_name], paazlPerfectParams);
}
