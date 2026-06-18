module.exports.productType = (function (name) {
    if (name.includes('Pokemon Center Elite Trainer Box')) return 'PC_ETB';
    if (name.includes('Elite Trainer Box')) return 'ETB';
    if (name.includes('Booster Box')) return 'BB';
    if (name.includes('Booster Bundle')) return 'BUNDLE';
    if (name.includes('Sleeved Booster Pack')) return 'SBP';
    if (name.includes('Booster Pack')) return 'BP';
    if (name.includes('Single Pack Blister')) return 'SPB';
    if (name.includes('3 Pack Blister')) return '3PB';
    if (name.includes('Mini Tin')) return 'MINI_TIN';
    if (name.includes('Tin')) return 'TIN';
    if (name.includes('Ultra Premium Collection')) return 'UPC';
    if (name.includes('Premium Collection')) return 'PC';
    if (name.includes('Poster Collection')) return 'POSTER';
    if (name.includes('Binder Collection')) return 'BINDER';
    if (name.includes('Box')) return 'BOX';

    return 'CARD';
});