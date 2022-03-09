module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },

    if_eq: (a, b, opts) => {
        if (a == b) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    }
};
