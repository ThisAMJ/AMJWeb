function unique(arr) {
    return [...new Set(arr)].join('');
}

alphabets = {
    alphalower: "abcdefghijklmnopqrstuvwxyz",
    alphaupper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alpha: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "1234567890",
    alphanumeric: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    asciisymbols: "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?",
    greek: "ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσςΤτΥυΦφΧχΨψΩω",
    runes: "ᚠᚢᚦᚩᚱᚳᚷᚹᚻᚾᛁᛄᛇᛈᛉᛋᛏᛒᛖᛗᛚᛝᛟᛞᚪᚫᚣᛡᛠ",
    armenian: "ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆև",
    cyrillic_slavic: "АА̀А̂А̄ӐӒБВГҐДЂЃЕЀЕ̂Е̄ЁЄЄ́ЖЗЗ́ЅИІІ́ЇꙆЍИ̂ӢЙӤЈКЛЉМНЊОО̀О̂О̄ӦПРСС́ТЋЌУУ̀У̂ӮЎӰФХЦЧЏШЩꙎЪЪ̀ЫЬѢЭЮЮ̀ЯЯ̀ʼˮ",
    cyrillic_nonslavic: "А̊А̃Ӓ̄ӔӘӘ́Ә̃ӚВ̌ԜГ̑Г̇Г̣Г̌Г̂Г̆Г̈Г̊ҔҒӺҒ̌Ғ̊ӶГ̡Д́Д̌Д̈Д̣Д̆ӖЕ̃Ё̄Є̈ԐԐ̈ҖӜӁЖ̣ҘӞЗ̌З̣З̆ӠИ̃ҊҚӃҠҞҜК̣К̊Қ̊ԚᴫЛ́ӅԮԒЛ̈ӍᵸН́ӉҢԨӇҤО̆О̃Ӧ̄ӨӨ̄Ө́Ө̆ӪԤП̈Р̌ҎС̌ҪС̣С̱Т́Т̈Т̌Т̇Т̣ҬᲉУ̃ӲУ̊Ӱ̄ҰҮҮ́Х̣Х̱Х̮Х̑Х̌ҲӼХ̊ӾӾ̊ҺҺ̈ԦЦ̌Ц̈ҴҶҶ̣ӴӋҸЧ̇Ч̣ҼҾШ̣ꚜЫ̆Ы̄ӸꚝҌҨЭ̆Э̄Э̇ӬӬ́Ӭ̄Ю̆Ю̈Ю̄Я̆Я̄Я̈Ӏ",
    cyrillic_archaic: "А̨Б̀Б̣Б̱В̀Г̀Г̧Г̄Г̓Г̆Ҕ̀Ҕ̆ԀД̓Д̀Д̨ԂꚀꙢЕ̇Е̨Ж̀Ж̑ꙂꙄЏ̆ꚄꚄ̆ꙀЗ̀З̑ԄԆꚈԪꚂꚔІ̂І̣І̨Ј̵Ј̃ꙈК̓К̀К̆Ӄ̆К̑К̇К̈К̄ԞК̂Л̀ԠꙤԈЛ̑Л̇ԔМ̀М̃ꙦН̀Н̄Н̧Н̃ԊԢН̡ѺꙨꙪꙬꙮꚘꚚП̓П̀П́ҦП̧П̑ҀԚ̆Р́Р̀Р̃ԖС̀С̈ԌҪ̓Т̓Т̀ԎТ̑ꚊТ̧ꚌꚌ̆ѸꙊУ̇У̨ꙋ́Ф̑Ф̓Х́Х̀Х̆Х̇Х̧Х̾Х̓һ̱ѠꙌѼѾꙠЦ̀Ц́Ц̓ꚎꚎ̆ꚐЧ́Ч̀Ч̆Ч̑Ч̓ԬꚒꚆꚆ̆Ҽ̆Ш̀Ш̆Ш̑Щ̆ꚖꚖ̆Ъ̄Ъ̈Ъ̈̄ꙐЫ̂Ы̃Ѣ́Ѣ̈Ѣ̆ꙒЭ̨Э̂ꙔЮ̂ꙖЯ̈Я̂Я̨ԘѤѦꙘѪꙚѨꙜѬѮѰѲѴѶꙞ",
    hebrew: "אבבגגדדהוזחטיככךךלמםנןסעפפףףצץקרששתת",
    katakana: "アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヰヱヲ"
    // gothic: "𐌰𐌱𐌲𐌳𐌴𐌵𐌶𐌷𐌸𐌹𐌺𐌻𐌼𐌽𐌾𐌿𐍀𐍁𐍂𐍃𐍄𐍅𐍆𐍇𐍈𐍉𐍊",
};
Object.keys(alphabets).forEach(key => alphabets[key] = unique(alphabets[key]));
alphabets.cyrillic = unique(alphabets.cyrillic_slavic + alphabets.cyrillic_nonslavic + alphabets.cyrillic_archaic);
alphabets.regular = unique(alphabets.alphalower + alphabets.alphaupper + alphabets.numeric + alphabets.asciisymbols);
alphabets.all = unique(Object.keys(alphabets).map(key => alphabets[key]).join(''));

function generate(length, alphabet, method = 'crypto') {
    switch (method) {
        case 'crypto':
        default:
            return crypto.getRandomValues(new Uint32Array(length)).reduce((acc, val) => acc + alphabet[val / 0xFFFFFFFF * alphabet.length | 0], '');
        case 'simple':
            return new Array(length).fill(0).map(() => alphabet[parseInt(Math.random() * alphabet.length)]).join('');
    }
}

console.log(generate(32, alphabets.regular));
