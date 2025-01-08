export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NEW"] = "NUEVO";
    OrderStatus["PAYED"] = "PAGADO";
    OrderStatus["SHIPPED"] = "ENVIADO";
    OrderStatus["CANCELED"] = "CANCELADO";
    OrderStatus["REFUNDED"] = "REEMBOLSADO";
})(OrderStatus || (OrderStatus = {}));
