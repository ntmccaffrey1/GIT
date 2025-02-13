function n(price, qty, balance) {
    cons subtotal = price * qty;
    if (subtotal <= balance) {
        return "You have enough";
    }
    return "sorry loser";
}

n(50, 10, 300);