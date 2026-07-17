function validateBank(data) {

    const errors = [];

    if (!data.code || data.code.trim() === '') {
        errors.push('Bank code is required');
    }

    if (!/^\d+$/.test(data.code)) {
        errors.push('Bank code must be numeric');
    }

    if (!data.short_name || data.short_name.trim() === '') {
        errors.push('Short name is required');
    }

    if (data.short_name && data.short_name.length > 20) {
        errors.push('Short name maximum 20 characters');
    }

    if (!data.name || data.name.trim() === '') {
        errors.push('Bank name is required');
    }

    if (data.name && data.name.length > 100) {
        errors.push('Bank name maximum 100 characters');
    }

    return errors;

}

module.exports = {
    validateBank
};