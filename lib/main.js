var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.info("Запуск модуля поиска по смайлам GG");
var smilesCategories = new Map([
    ["all", ""], //all
    ["fav", ":peka:"], // favourites
    [
        "peka",
        ":peka:,:ohmypeka:,:scarypeka:,:pekaclap:,:comf:,:pled:,:gravitypeka:,:insanepeka:",
    ], // peka
    [
        "rofl",
        ":rofl:,:omg:,:shocked:,:wonder:,:daun:,:panic:,:huh:,:sosp:,:notfunny:,:cry:,:cryalot:,:cool:,:sad:,:smilegasm:,:marvelous:,:happyface:,:wink:,:geek:,:sic:,:kiss:,:yazik:,:zzz:,:angry:,:rage:,:skull:",
    ], //yellowface
    [
        "bvecher",
        ":damn:,:hug:,:chomander:,:boy:,:bvecher:,:sir:,:busted:,:bobrpirat:,:oneone:,:fsb:,:pun:,:bandages:,:winner:,:waiting:,:buggy:,:loot:,:megafon:,:snow:,:heal:,:pigeon:,:www:,:flowers:,:fight:,:darthbobr:,:nosound:,:nichobobr:,:jasonbobr:,:beverly:,:alwayshb:",
    ], //beaver
    [
        "cat",
        ":cboring:,:buffering:,:cscare:,:cooper:,:mae:,:smudge:,:turbo:,:bravo:,:hey:,:sushicat:,:flashl:,:noted:,:catrain:,:giftcat:,:gta:,:nope:,:snow2:,:bodyb:,:runway:,:aweasome:,:whyyy:,:yoyo:,:selfie:,:search:,:plasma:,:cat:,:catyes:,:catno:,:catyuck:,:badumtss:,:bdbessa:,:bessa:,:catouh:,:grumpy:,:fuckoff:,:nofeels:,:whaat:,:vjuh:,:vjoh:,:getout:,:ufreddie:,:divan:",
    ], //cats
    [
        "shenok",
        ":shenok:,:sif:,:goodboy:,:hacking:,:gosling:,:strelka:,:belka:,:doggie:,:master:,:chmis:,:detective:,:forespect:,:lagdog:,:myway:,:clear:,:mcomplete:,:sigh:,:thisisfine:,:sing:,:tactics:,:support:,:comfort:,:dog2:,:calc:",
    ], //Dogs
    ["diablo", ":deckard:,:tirael:,:diablo:,:gold:,:moo:,:mana:,:valla:"], // Diablo
    [
        "artas",
        ":sorka:,:doornoloot:,:pitlord:,:jobagain:,:acolyte:,:archmage:,:artas:",
    ], //Warcraft
    [
        "fotonka",
        ":tire:,:pilon:,:toss:,:archon:,:dance:,:zerg:,:roach:,:overfan:,:kerrievil:,:muta:,:bane:,:kerrisad:,:goliath:,:marikbw:,:reynor:,:marik:",
    ], //Starcraft
    [
        "pepoclown",
        ":hmmm:,:pepcard:,:pepelaugh:,:pepehands:,:poggers:,:monkas:,:pepoclown:",
    ], //PEPE
    [
        "fry",
        ":slug:,:sospfry:,:fry:,:goodnews:,:bender:,:homerdonut:,:homer:,:respect:,:boring:,:whocares:",
    ], //Mult
    [
        "kekw",
        ":lynch:,:keanu:,:dicaprio:,:fp:,:kekw:,:gend:,:walter:,:kojima:,:gabe:,:joker:,:jackie:,:exorcism:,:think:,:badass:,:evil:,:karl:,:drake:,:bratok:,:bnews:,:slow:,:psyduck:,:verybad:,:dabgoose:,:worker:,:bearbush:,:gottafast:",
    ], //meme
    [
        "fibo",
        ":fibod:,:fffibo:,:fibo:,:fp:,:db:,:bratok:,:eer0:,:rat:,:crab:,:dno:,:kran:,:wow:,:sheep:,:expertm:,:lk:,:ledokol:",
    ], //goodmeme
    ["bdance", ":bdance:,:onelove:,:bshy:,:taunt:,:buff:,:charge:"], //squirrel
    ["bob", ":bob:,:thup:,:charisma:,:muton:,:rocket:,:rail:,:shaft:"], //Othergames
    [
        "cherrypie",
        ":cherrypie:,:salt:,:hlebushek:,:carrot:,:upvote:,:ban:,:orange:,:arbuzer:,:burger:,:bdcake:",
    ], //Meal
    [
        "metal",
        ":rsp:,:metal:,:lighter:,:hello:,:brofist:,:slap:,:sony:,:xbox:,:dendi:",
    ], //hands
].map(function (_a) {
    var k = _a[0], v = _a[1];
    return [k, v.split(",").filter(function (e) { return e !== ""; })];
}));
var smilesTags = new Map([
    [
        "пека",
        [
            ":peka:",
            ":ohmypeka:",
            ":scarypeka:",
            ":pekaclap:",
            ":comf:",
            ":pled:",
            ":gravitypeka:",
            ":insanepeka:",
        ],
    ],
    [
        "йоба",
        [
            ":peka:",
            ":ohmypeka:",
            ":scarypeka:",
            ":pekaclap:",
            ":comf:",
            ":pled:",
            ":gravitypeka:",
            ":insanepeka:",
        ],
    ],
    [
        "колобок",
        [
            ":peka:",
            ":ohmypeka:",
            ":scarypeka:",
            ":pekaclap:",
            ":comf:",
            ":pled:",
            ":gravitypeka:",
            ":insanepeka:",
            ":rofl:",
            ":omg:",
            ":shocked:",
            ":wonder:",
            ":daun:",
            ":panic:",
            ":huh:",
            ":sosp:",
            ":notfunny:",
            ":cry:",
            ":cryalot:",
            ":cool:",
            ":sad:",
            ":smilegasm:",
            ":marvelous:",
            ":happyface:",
            ":geek:",
            ":sic:",
            ":kiss:",
            ":yazik:",
            ":zzz:",
            ":angry:",
            ":rage:",
            ":skull:",
        ],
    ],
    [
        "peka",
        [
            ":peka:",
            ":ohmypeka:",
            ":scarypeka:",
            ":pekaclap:",
            ":comf:",
            ":pled:",
            ":gravitypeka:",
            ":insanepeka:",
        ],
    ],
    ["браво", [":pekaclap:", ":bravo:"]],
    ["хлоп", [":pekaclap:", ":bravo:"]],
    ["комфор", [":comf:", ":pled:"]],
    ["плед", [":comf:", ":pled:", ":comfort:"]],
    ["погод", [":comf:", ":pled:", ":gosling:", ":comfort:"]],
    ["яблоко", [":gravitypeka:"]],
    ["гравитация", [":gravitypeka:"]],
    ["падение", [":gravitypeka:"]],
    ["упал", [":gravitypeka:"]],
    ["рофл", [":rofl:"]],
    ["rofl", [":rofl:"]],
    ["omg", [":omg:"]],
    ["омг", [":omg:"]],
    ["шок", [":shocked:"]],
    ["шокирован", [":shocked:"]],
    ["шокед", [":shocked:"]],
    ["shocked", [":shocked:"]],
    ["интересно", [":wonder:", ":cboring:"]],
    ["хмм", [":wonder:", ":huh:", ":hmmm:"]],
    ["wonder", [":wonder:"]],
    ["глупость", [":daun:"]],
    ["глуп", [":daun:"]],
    ["улыбка", [":daun:"]],
    ["паника", [":panic:"]],
    ["panic", [":panic:"]],
    ["huh", [":huh:"]],
    ["подозр", [":sosp:", ":search:", ":hmmm:"]],
    ["подозрительный", [":sosp:"]],
    ["susp", [":sosp:"]],
    ["notfunny", [":notfunny:"]],
    ["несмешн", [":notfunny:"]],
    ["не", [":notfunny:"]],
    ["cry", [":cry:", ":cryalot:"]],
    ["слез", [":cry:", ":cryalot:"]],
    ["плак", [":cry:", ":cryalot:", ":sad:", ":chmis:", ":pepehands:"]],
    ["плач", [":cry:", ":cryalot:", ":sad:", ":chmis:", ":pepehands:"]],
    ["грус", [":cry:", ":cryalot:", ":sad:", ":chmis:", ":kerrisad:"]],
    ["cool", [":cool:"]],
    ["крут", [":cool:", ":gosling:", ":myway:", ":clear:"]],
    ["sad", [":sad:"]],
    ["smilegasm", [":smilegasm:"]],
    ["клас", [":smilegasm:", ":marvelous:"]],
    ["нрав", [":smilegasm:", ":marvelous:", ":happyface:"]],
    ["оргазм", [":smilegasm:", ":marvelous:"]],
    ["довол", [":smilegasm:", ":marvelous:", ":happyface:", ":goodboy:"]],
    ["счас", [":smilegasm:", ":marvelous:", ":happyface:"]],
    ["marvelous", [":marvelous:"]],
    ["happyface", [":happyface:"]],
    ["счаст", [":happyface:"]],
    ["улыб", [":happyface:"]],
    ["geek", [":geek:"]],
    ["очки", [":geek:"]],
    ["ум", [":geek:"]],
    ["эксперт", [":geek:", ":master:", ":tactics:"]],
    ["учен", [":geek:"]],
    ["наука", [":geek:", ":pigeon:"]],
    ["ботан", [":geek:", ":hacking:"]],
    ["гик", [":geek:", ":hacking:"]],
    ["sic", [":sic:"]],
    ["боль", [":sic:"]],
    ["здоров", [":sic:", ":bandages:", ":heal:", ":bodyb:", ":runway:"]],
    ["блев", [":sic:"]],
    ["фу", [":sic:", ":catyuck:"]],
    ["тошн", [":sic:"]],
    ["kiss", [":kiss:"]],
    ["поцел", [":kiss:"]],
    ["цел", [":kiss:"]],
    ["люб", [":kiss:"]],
    ["чмок", [":kiss:"]],
    ["yazik", [":yazik:"]],
    ["дразн", [":yazik:"]],
    ["язык", [":yazik:"]],
    ["бе", [":yazik:"]],
    ["zzz", [":zzz:"]],
    ["устал", [":zzz:"]],
    ["спать", [":zzz:"]],
    ["уснул", [":zzz:"]],
    ["сон", [":zzz:"]],
    ["спит", [":zzz:"]],
    ["скучно", [":zzz:", ":cboring:"]],
    ["интерес", [":zzz:"]],
    ["angry", [":angry:"]],
    [
        "злой",
        [":angry:", ":rage:", ":damn:", ":nope:", ":fuckoff:", ":nofeels:"],
    ],
    ["злость", [":angry:", ":rage:"]],
    ["бомб", [":angry:", ":rage:"]],
    ["ярость", [":angry:", ":rage:"]],
    ["гор", [":angry:", ":rage:", ":thisisfine:"]],
    ["rage", [":rage:"]],
    ["пригор", [":rage:"]],
    ["подгор", [":rage:"]],
    ["skull", [":skull:"]],
    ["умер", [":skull:"]],
    ["смер", [":skull:"]],
    ["помер", [":skull:"]],
    ["гуф", [":skull:"]],
    ["гг", [":skull:"]],
    [
        "бобр",
        [
            ":damn:",
            ":hug:",
            ":merchant:",
            ":chomander:",
            ":boy:",
            ":flamer:",
            ":bvecher:",
            ":sir:",
            ":busted:",
            ":bobrpirat:",
            ":oneone:",
            ":fsb:",
            ":pun:",
            ":bandages:",
            ":winner:",
            ":waiting:",
            ":buggy:",
            ":loot:",
            ":megafon:",
            ":toohot:",
            ":snow:",
            ":heal:",
            ":pigeon:",
            ":www:",
            ":flowers:",
            ":fight:",
            ":darthbobr:",
            ":nosound:",
            ":nichobobr:",
            ":jasonbobr:",
            ":beverly:",
            ":alwayshb:",
        ],
    ],
    [
        "бобер",
        [
            ":damn:",
            ":hug:",
            ":merchant:",
            ":chomander:",
            ":boy:",
            ":flamer:",
            ":bvecher:",
            ":sir:",
            ":busted:",
            ":bobrpirat:",
            ":oneone:",
            ":fsb:",
            ":pun:",
            ":bandages:",
            ":winner:",
            ":waiting:",
            ":buggy:",
            ":loot:",
            ":megafon:",
            ":toohot:",
            ":snow:",
            ":heal:",
            ":pigeon:",
            ":www:",
            ":flowers:",
            ":fight:",
            ":darthbobr:",
            ":nosound:",
            ":nichobobr:",
            ":jasonbobr:",
            ":beverly:",
            ":alwayshb:",
        ],
    ],
    [
        "bobr",
        [
            ":damn:",
            ":hug:",
            ":merchant:",
            ":chomander:",
            ":boy:",
            ":flamer:",
            ":bvecher:",
            ":sir:",
            ":busted:",
            ":bobrpirat:",
            ":oneone:",
            ":fsb:",
            ":pun:",
            ":bandages:",
            ":winner:",
            ":waiting:",
            ":buggy:",
            ":loot:",
            ":megafon:",
            ":toohot:",
            ":snow:",
            ":heal:",
            ":pigeon:",
            ":www:",
            ":flowers:",
            ":fight:",
            ":darthbobr:",
            ":nosound:",
            ":nichobobr:",
            ":jasonbobr:",
            ":beverly:",
            ":alwayshb:",
        ],
    ],
    ["черт", [":damn:"]],
    ["damn", [":damn:"]],
    [
        "кот",
        [
            ":hug:",
            ":cboring:",
            ":buffering:",
            ":cscare:",
            ":cooper:",
            ":mae:",
            ":smudge:",
            ":turbo:",
            ":bravo:",
            ":hey:",
            ":sushicat:",
            ":flashl:",
            ":noted:",
            ":catrain:",
            ":giftcat:",
            ":gta:",
            ":nope:",
            ":snow2:",
            ":bodyb:",
            ":runway:",
            ":aweasome:",
            ":whyyy:",
            ":yoyo:",
            ":selfie:",
            ":search:",
            ":plasma:",
            ":cat:",
            ":catyes:",
            ":catno:",
            ":catyuck:",
            ":badumtss:",
            ":bdbessa:",
            ":bessa:",
            ":catouh:",
            ":grumpy:",
            ":fuckoff:",
            ":nofeels:",
            ":whaat:",
            ":vjuh:",
            ":vjoh:",
            ":getout:",
            ":ufreddie:",
        ],
    ],
    [
        "cat",
        [
            ":hug:",
            ":cboring:",
            ":buffering:",
            ":cscare:",
            ":cooper:",
            ":mae:",
            ":smudge:",
            ":turbo:",
            ":bravo:",
            ":hey:",
            ":sushicat:",
            ":flashl:",
            ":noted:",
            ":catrain:",
            ":giftcat:",
            ":gta:",
            ":nope:",
            ":snow2:",
            ":bodyb:",
            ":runway:",
            ":aweasome:",
            ":whyyy:",
            ":yoyo:",
            ":selfie:",
            ":search:",
            ":plasma:",
            ":cat:",
            ":catyes:",
            ":catno:",
            ":catyuck:",
            ":badumtss:",
            ":bdbessa:",
            ":bessa:",
            ":catouh:",
            ":grumpy:",
            ":fuckoff:",
            ":nofeels:",
            ":whaat:",
            ":vjuh:",
            ":vjoh:",
            ":getout:",
            ":ufreddie:",
        ],
    ],
    ["hug", [":hug:"]],
    ["обни", [":hug:"]],
    ["обня", [":hug:"]],
    ["объят", [":hug:"]],
    ["торг", [":merchant:"]],
    ["мерч", [":merchant:"]],
    ["resident", [":merchant:"]],
    ["buy", [":merchant:"]],
    ["купить", [":merchant:"]],
    ["commander", [":chomander:"]],
    ["чомандер", [":chomander:", ":gta:"]],
    ["команд", [":chomander:", ":gta:"]],
    ["xcom", [":chomander:"]],
    ["boy", [":boy:"]],
    ["gow", [":boy:"]],
    ["god", [":boy:"]],
    ["sony", [":boy:"]],
    ["playstation", [":boy:"]],
    ["щегол", [":boy:"]],
    ["пацан", [":boy:"]],
    ["flamer", [":flamer:"]],
    ["огнемет", [":flamer:"]],
    ["мерз", [":flamer:"]],
    ["ужас", [":flamer:", ":monkas:"]],
    ["сжечь", [":flamer:"]],
    ["ересь", [":flamer:"]],
    ["бобрый", [":bvecher:", ":hey:"]],
    ["добрый", [":bvecher:", ":hey:"]],
    ["привет", [":bvecher:", ":hey:"]],
    ["здаров", [":bvecher:", ":hey:"]],
    ["здравствуй", [":bvecher:", ":hey:"]],
    ["вечер", [":bvecher:", ":hey:"]],
    ["сэр", [":sir:"]],
    ["sir", [":sir:"]],
    ["сноб", [":sir:"]],
    ["моноколь", [":sir:"]],
    ["господ", [":sir:"]],
    ["сарказм", [":sir:", ":badumtss:"]],
    ["busted", [":busted:"]],
    ["полиция", [":busted:"]],
    ["караул", [":busted:"]],
    ["наруш", [":busted:"]],
    ["внимание", [":busted:", ":megafon:"]],
    ["милиц", [":busted:"]],
    ["свист", [":busted:"]],
    ["pirat", [":bobrpirat:"]],
    ["пират", [":bobrpirat:"]],
    ["торрент", [":bobrpirat:"]],
    ["аббордаж", [":bobrpirat:"]],
    ["хохо", [":bobrpirat:"]],
    ["первый", [":oneone:", ":winner:"]],
    [
        "победа",
        [
            ":oneone:",
            ":winner:",
            ":www:",
            ":fight:",
            ":darthbobr:",
            ":bravo:",
        ],
    ],
    [
        "топ",
        [
            ":oneone:",
            ":winner:",
            ":www:",
            ":fight:",
            ":darthbobr:",
            ":bravo:",
            ":clear:",
            ":mcomplete:",
            ":overfan:",
        ],
    ],
    ["выигр", [":oneone:", ":winner:", ":fight:", ":darthbobr:"]],
    ["лучший", [":oneone:", ":winner:", ":fight:", ":darthbobr:", ":bravo:"]],
    ["фсб", [":fsb:"]],
    ["служб", [":fsb:"]],
    ["слеж", [":fsb:"]],
    ["следим", [":fsb:"]],
    ["слушаем", [":fsb:"]],
    [
        "мем",
        [
            ":fsb:",
            ":nichobobr:",
            ":jasonbobr:",
            ":beverly:",
            ":alwayshb:",
            ":smudge:",
            ":gta:",
            ":whyyy:",
            ":plasma:",
            ":badumtss:",
            ":whaat:",
            ":vjuh:",
            ":vjoh:",
            ":getout:",
            ":ufreddie:",
            ":doggie:",
            ":chmis:",
            ":forespect:",
            ":thisisfine:",
            ":pepelaugh:",
            ":pepehands:",
            ":poggers:",
            ":monkas:",
            ":pepoclown:",
            ":fibo:",
            ":fibod:",
            ":fffibo:",
            ":ledokol:",
            ":lk:",
        ],
    ],
    ["сковорода", [":pun:"]],
    ["любл", [":pun:", ":flowers:", ":nofeels:"]],
    [
        "пубг",
        [":pun:", ":bandages:", ":winner:", ":waiting:", ":buggy:", ":loot:"],
    ],
    [
        "pubg",
        [":pun:", ":bandages:", ":winner:", ":waiting:", ":buggy:", ":loot:"],
    ],
    ["бинт", [":bandages:"]],
    ["хил", [":bandages:", ":heal:"]],
    ["лечение", [":bandages:", ":heal:"]],
    ["апте", [":bandages:", ":heal:"]],
    ["снайпер", [":waiting:"]],
    ["засада", [":waiting:"]],
    ["жду", [":waiting:"]],
    ["крыс", [":waiting:"]],
    ["рыбалка", [":waiting:"]],
    ["ехать", [":buggy:"]],
    ["поехали", [":buggy:", ":turbo:"]],
    ["маши", [":buggy:", ":turbo:", ":myway:"]],
    ["выезж", [":buggy:", ":turbo:"]],
    ["еду", [":buggy:", ":turbo:"]],
    ["buggy", [":buggy:"]],
    ["багги", [":buggy:"]],
    ["loot", [":loot:"]],
    ["лут", [":loot:", ":doornoloot:"]],
    ["готов", [":loot:"]],
    ["хэд", [":loot:"]],
    ["объяв", [":megafon:"]],
    ["мегафон", [":megafon:"]],
    ["кри", [":megafon:"]],
    ["громко", [":megafon:"]],
    ["душ", [":toohot:"]],
    ["дух", [":toohot:"]],
    ["жарко", [":toohot:"]],
    ["зануда", [":toohot:"]],
    ["снег", [":snow:", ":snow2:"]],
    ["зима", [":snow:"]],
    ["новый", [":snow:", ":snow2:"]],
    ["нг", [":snow:", ":snow2:"]],
    ["погода", [":snow:", ":catrain:", ":snow2:"]],
    ["лечи", [":heal:"]],
    ["бабочка", [":pigeon:"]],
    ["радость", [":www:", ":cooper:", ":bravo:", ":giftcat:", ":badumtss:"]],
    ["цветы", [":flowers:"]],
    ["любо", [":flowers:", ":nofeels:"]],
    ["смешно", [":fight:", ":nichobobr:", ":badumtss:"]],
    ["сраже", [":fight:"]],
    ["звездн", [":darthbobr:"]],
    ["тихо", [":nosound:"]],
    ["микр", [":nosound:"]],
    ["слышно", [":nosound:"]],
    ["выкл", [":nosound:"]],
    ["ничоси", [":nichobobr:"]],
    ["wow", [":nichobobr:", ":aweasome:", ":yoyo:", ":doggie:", ":poggers:"]],
    ["джейсон", [":jasonbobr:"]],
    ["jason", [":jasonbobr:"]],
    ["мясо", [":jasonbobr:"]],
    ["ныть", [":beverly:", ":catyuck:"]],
    ["вайн", [":beverly:"]],
    ["всегда", [":alwayshb:"]],
    ["поворот", [":alwayshb:"]],
    [
        "кош",
        [
            ":cboring:",
            ":buffering:",
            ":cscare:",
            ":cooper:",
            ":mae:",
            ":smudge:",
            ":turbo:",
            ":bravo:",
            ":hey:",
            ":sushicat:",
            ":flashl:",
            ":noted:",
            ":catrain:",
            ":giftcat:",
            ":gta:",
            ":nope:",
            ":snow2:",
            ":bodyb:",
            ":runway:",
            ":aweasome:",
            ":whyyy:",
            ":yoyo:",
            ":selfie:",
            ":search:",
            ":plasma:",
            ":cat:",
            ":catyes:",
            ":catno:",
            ":catyuck:",
            ":badumtss:",
            ":bdbessa:",
            ":bessa:",
            ":catouh:",
            ":grumpy:",
            ":fuckoff:",
            ":nofeels:",
            ":whaat:",
            ":vjuh:",
            ":vjoh:",
            ":getout:",
            ":ufreddie:",
        ],
    ],
    [
        "современии",
        [
            ":cboring:",
            ":buffering:",
            ":cscare:",
            ":cooper:",
            ":mae:",
            ":smudge:",
            ":turbo:",
            ":bravo:",
            ":hey:",
            ":sushicat:",
            ":flashl:",
            ":noted:",
            ":catrain:",
            ":giftcat:",
            ":gta:",
            ":nope:",
            ":snow2:",
            ":bodyb:",
            ":runway:",
            ":aweasome:",
            ":whyyy:",
            ":yoyo:",
            ":selfie:",
            ":search:",
            ":plasma:",
            ":cat:",
            ":catyes:",
            ":catno:",
            ":catyuck:",
            ":badumtss:",
            ":bdbessa:",
            ":bessa:",
            ":catouh:",
            ":grumpy:",
            ":fuckoff:",
            ":nofeels:",
            ":whaat:",
            ":vjuh:",
            ":vjoh:",
            ":getout:",
            ":ufreddie:",
        ],
    ],
    [
        "мяу",
        [
            ":cboring:",
            ":buffering:",
            ":cscare:",
            ":cooper:",
            ":mae:",
            ":smudge:",
            ":turbo:",
            ":bravo:",
            ":hey:",
            ":sushicat:",
            ":flashl:",
            ":noted:",
            ":catrain:",
            ":giftcat:",
            ":gta:",
            ":nope:",
            ":snow2:",
            ":bodyb:",
            ":runway:",
            ":aweasome:",
            ":whyyy:",
            ":yoyo:",
            ":selfie:",
            ":search:",
            ":plasma:",
            ":cat:",
            ":catyes:",
            ":catno:",
            ":catyuck:",
            ":badumtss:",
            ":bdbessa:",
            ":bessa:",
            ":catouh:",
            ":grumpy:",
            ":fuckoff:",
            ":nofeels:",
            ":whaat:",
            ":vjuh:",
            ":vjoh:",
            ":getout:",
            ":ufreddie:",
        ],
    ],
    ["буф", [":buffering:"]],
    ["загруз", [":buffering:"]],
    ["понял", [":buffering:", ":noted:", ":whaat:"]],
    ["непонял", [":buffering:", ":smudge:", ":whaat:"]],
    ["не понял", [":buffering:"]],
    ["страх", [":cscare:", ":runway:", ":sif:", ":monkas:"]],
    ["страш", [":cscare:", ":runway:", ":monkas:"]],
    ["пистолет", [":cscare:"]],
    ["огонь", [":cscare:", ":bessa:", ":thisisfine:"]],
    ["доволь", [":cooper:", ":grumpy:"]],
    ["чай", [":cooper:", ":mae:"]],
    ["кофе", [":cooper:"]],
    ["пить", [":cooper:"]],
    ["пье", [":cooper:"]],
    ["мое", [":mae:"]],
    ["жадн", [":mae:"]],
    ["еда", [":mae:", ":sushicat:"]],
    ["nfs", [":turbo:"]],
    ["turbo", [":turbo:"]],
    ["апплодисменты", [":bravo:"]],
    ["bravo", [":bravo:"]],
    ["hey", [":hey:"]],
    ["хэй", [":hey:"]],
    ["хей", [":hey:"]],
    ["суши", [":sushicat:"]],
    ["рыб", [":sushicat:"]],
    ["sushi", [":sushicat:"]],
    ["фото", [":flashl:", ":selfie:"]],
    ["вспышка", [":flashl:", ":selfie:"]],
    ["ярко", [":flashl:"]],
    ["флеш", [":flashl:"]],
    ["flash", [":flashl:"]],
    ["noted", [":noted:"]],
    ["запис", [":noted:"]],
    ["пишу", [":noted:"]],
    ["блокнот", [":noted:"]],
    ["понят", [":noted:"]],
    ["помет", [":noted:"]],
    ["грусть", [":catrain:", ":grumpy:", ":pepehands:"]],
    ["дождь", [":catrain:", ":gosling:"]],
    ["подарок", [":giftcat:"]],
    ["гифт", [":giftcat:"]],
    ["gift", [":giftcat:"]],
    ["коробка", [":giftcat:"]],
    ["праздник", [":giftcat:"]],
    ["арстоцка", [":gta:"]],
    ["нет", [":nope:", ":catno:", ":catyuck:"]],
    ["nope", [":nope:"]],
    ["кач", [":bodyb:", ":runway:"]],
    ["зал", [":bodyb:"]],
    ["тренаж", [":bodyb:", ":runway:"]],
    ["тяж", [":bodyb:"]],
    ["бег", [":runway:"]],
    ["беж", [":runway:"]],
    ["круто", [":aweasome:", ":yoyo:"]],
    ["глаза", [":aweasome:"]],
    ["whyy", [":whyyy:"]],
    ["как", [":whyyy:", ":pepehands:"]],
    ["почему", [":whyyy:", ":pepehands:"]],
    ["реп", [":yoyo:"]],
    ["рэп", [":yoyo:"]],
    ["музыка", [":yoyo:", ":catyes:", ":badumtss:", ":ufreddie:"]],
    ["фотк", [":selfie:"]],
    ["ищу", [":search:"]],
    ["поиск", [":search:"]],
    ["лупа", [":search:"]],
    ["найт", [":search:"]],
    ["сыщик", [":search:"]],
    ["plasma", [":plasma:"]],
    ["анклав", [":plasma:"]],
    ["anclav", [":plasma:"]],
    ["да", [":catyes:"]],
    ["yes", [":catyes:"]],
    ["соглас", [":catyes:", ":catno:"]],
    ["точн", [":catyes:", ":calc:"]],
    ["no", [":catno:"]],
    ["бэс", [":bdbessa:", ":bessa:", ":vjoh:"]],
    ["бес", [":bdbessa:", ":bessa:", ":vjoh:"]],
    ["черн", [":bdbessa:", ":bessa:"]],
    ["ухх", [":catouh:"]],
    ["уф", [":catouh:"]],
    ["хочу", [":catouh:"]],
    ["грумп", [":grumpy:"]],
    ["grumpy", [":grumpy:"]],
    ["отстань", [":fuckoff:", ":nofeels:"]],
    ["фак", [":fuckoff:"]],
    ["fuck", [":fuckoff:"]],
    ["че", [":whaat:"]],
    ["что", [":whaat:"]],
    ["чаво", [":whaat:"]],
    ["магия", [":vjuh:", ":vjoh:"]],
    ["колд", [":vjuh:", ":vjoh:", ":archmage:"]],
    ["вжух", [":vjuh:", ":vjoh:"]],
    ["уходи", [":getout:"]],
    ["вали", [":getout:"]],
    ["у-", [":getout:"]],
    ["фред", [":ufreddie:"]],
    [
        "соб",
        [
            ":shenok:",
            ":sif:",
            ":goodboy:",
            ":hacking:",
            ":gosling:",
            ":strelka:",
            ":belka:",
            ":doggie:",
            ":master:",
            ":chmis:",
            ":detective:",
            ":forespect:",
            ":lagdog:",
            ":myway:",
            ":clear:",
            ":mcomplete:",
            ":sigh:",
            ":thisisfine:",
            ":sing:",
            ":tactics:",
            ":support:",
            ":comfort:",
            ":dog2:",
            ":calc:",
            ":zerg:",
        ],
    ],
    [
        "пес",
        [
            ":shenok:",
            ":sif:",
            ":goodboy:",
            ":hacking:",
            ":gosling:",
            ":strelka:",
            ":belka:",
            ":doggie:",
            ":master:",
            ":chmis:",
            ":detective:",
            ":forespect:",
            ":lagdog:",
            ":myway:",
            ":clear:",
            ":mcomplete:",
            ":sigh:",
            ":thisisfine:",
            ":sing:",
            ":tactics:",
            ":support:",
            ":comfort:",
            ":dog2:",
            ":calc:",
        ],
    ],
    [
        "щенок",
        [
            ":shenok:",
            ":sif:",
            ":goodboy:",
            ":hacking:",
            ":gosling:",
            ":strelka:",
            ":belka:",
            ":doggie:",
            ":master:",
            ":chmis:",
            ":detective:",
            ":forespect:",
            ":lagdog:",
            ":myway:",
            ":clear:",
            ":mcomplete:",
            ":sigh:",
            ":thisisfine:",
            ":sing:",
            ":tactics:",
            ":support:",
            ":comfort:",
            ":dog2:",
            ":calc:",
        ],
    ],
    [
        "гаф",
        [
            ":shenok:",
            ":sif:",
            ":hacking:",
            ":gosling:",
            ":strelka:",
            ":belka:",
            ":doggie:",
            ":master:",
            ":chmis:",
            ":detective:",
            ":forespect:",
            ":lagdog:",
            ":myway:",
            ":clear:",
            ":mcomplete:",
            ":sigh:",
            ":thisisfine:",
            ":sing:",
            ":tactics:",
            ":support:",
            ":comfort:",
            ":dog2:",
            ":calc:",
        ],
    ],
    [
        "гав",
        [
            ":shenok:",
            ":sif:",
            ":hacking:",
            ":gosling:",
            ":strelka:",
            ":belka:",
            ":doggie:",
            ":master:",
            ":chmis:",
            ":detective:",
            ":forespect:",
            ":lagdog:",
            ":myway:",
            ":clear:",
            ":mcomplete:",
            ":sigh:",
            ":thisisfine:",
            ":sing:",
            ":tactics:",
            ":support:",
            ":comfort:",
            ":dog2:",
            ":calc:",
        ],
    ],
    ["босс", [":sif:"]],
    ["goodboy", [":goodboy:"]],
    ["хороший", [":goodboy:"]],
    ["мальчик", [":goodboy:"]],
    ["лапки", [":goodboy:"]],
    ["hacking", [":hacking:"]],
    ["взлом", [":hacking:"]],
    ["хак", [":hacking:"]],
    ["чит", [":hacking:"]],
    ["комп", [":hacking:"]],
    ["синт", [":hacking:"]],
    ["gosling", [":gosling:"]],
    ["гослинг", [":gosling:"]],
    ["strelka", [":strelka:"]],
    ["стрелка", [":strelka:"]],
    ["косм", [":strelka:", ":belka:"]],
    ["хорош", [":strelka:", ":belka:", ":thisisfine:"]],
    ["belka", [":belka:"]],
    ["белка", [":belka:"]],
    ["doggie", [":doggie:"]],
    ["дог", [":doggie:", ":chmis:"]],
    ["вау", [":doggie:", ":poggers:"]],
    ["master", [":master:"]],
    ["мастер", [":master:"]],
    ["самурай", [":master:"]],
    ["меч", [":master:"]],
    ["chmis", [":chmis:"]],
    ["чимс", [":chmis:"]],
    ["detective", [":detective:"]],
    ["детектив", [":detective:"]],
    ["шерлок", [":detective:"]],
    ["расслед", [":detective:"]],
    ["трубк", [":detective:"]],
    ["forespect", [":forespect:"]],
    ["уваж", [":forespect:"]],
    ["cod", [":forespect:"]],
    ["пресс", [":forespect:"]],
    ["press", [":forespect:"]],
    ["f", [":forespect:"]],
    ["ф", [":forespect:"]],
    ["lagdog", [":lagdog:"]],
    ["лаг", [":lagdog:", ":ledokol:", ":lk:"]],
    ["фриз", [":lagdog:"]],
    ["пинг", [":lagdog:"]],
    ["myway", [":myway:"]],
    ["поех", [":myway:"]],
    ["еде", [":myway:"]],
    ["clear", [":clear:"]],
    ["чисто", [":clear:"]],
    ["про", [":clear:"]],
    ["экспер", [":clear:"]],
    ["побе", [":clear:", ":mcomplete:"]],
    ["mcomplete", [":mcomplete:"]],
    ["миссия", [":mcomplete:"]],
    ["выполне", [":mcomplete:"]],
    ["sigh", [":sigh:"]],
    ["внима", [":sigh:"]],
    ["слуш", [":sigh:", ":sing:", ":support:"]],
    ["ага", [":sigh:"]],
    ["рассказ", [":sigh:"]],
    ["thisisfine", [":thisisfine:"]],
    ["подга", [":thisisfine:"]],
    ["плох", [":thisisfine:"]],
    ["sing", [":sing:"]],
    ["петь", [":sing:"]],
    ["пой", [":sing:"]],
    ["песнь", [":sing:"]],
    ["муз", [":sing:", ":dance:"]],
    ["tactics", [":tactics:"]],
    ["такти", [":tactics:"]],
    ["страт", [":tactics:"]],
    ["support", [":support:"]],
    ["супорт", [":support:"]],
    ["помо", [":support:"]],
    ["важн", [":support:"]],
    ["comfort", [":comfort:"]],
    ["комфорт", [":comfort:"]],
    ["ден", [":comfort:"]],
    ["dog2", [":dog2:"]],
    ["calc", [":calc:"]],
    ["кальк", [":calc:"]],
    ["просчита", [":calc:"]],
    ["расчита", [":calc:"]],
    [
        "пепе",
        [
            ":hmmm:",
            ":pepcard:",
            ":pepelaugh:",
            ":pepehands:",
            ":poggers:",
            ":monkas:",
            ":pepoclown:",
        ],
    ],
    [
        "жабка",
        [
            ":hmmm:",
            ":pepcard:",
            ":pepelaugh:",
            ":pepehands:",
            ":poggers:",
            ":monkas:",
            ":pepoclown:",
        ],
    ],
    [
        "pepe",
        [
            ":hmmm:",
            ":pepcard:",
            ":pepelaugh:",
            ":pepehands:",
            ":poggers:",
            ":monkas:",
            ":pepoclown:",
        ],
    ],
    ["hmmm", [":hmmm:"]],
    ["pepcard", [":pepcard:"]],
    ["деньг", [":pepcard:"]],
    ["бабк", [":pepcard:"]],
    ["дона", [":pepcard:"]],
    ["бога", [":pepcard:"]],
    ["оплат", [":pepcard:"]],
    ["pepelaugh", [":pepelaugh:"]],
    ["смех", [":pepelaugh:"]],
    ["смешн", [":pepelaugh:", ":pepoclown:"]],
    ["радос", [":pepelaugh:"]],
    ["pepehands", [":pepehands:"]],
    ["poggers", [":poggers:"]],
    ["вов", [":poggers:"]],
    ["ух", [":poggers:"]],
    ["monkas", [":monkas:"]],
    ["pepoclown", [":pepoclown:"]],
    ["клоун", [":pepoclown:"]],
    [
        "wc",
        [
            ":sorka:",
            ":doornoloot:",
            ":pitlord:",
            ":jobagain:",
            ":archmage:",
            ":acolyte:",
            ":artas:",
        ],
    ],
    [
        "вар",
        [
            ":sorka:",
            ":doornoloot:",
            ":pitlord:",
            ":jobagain:",
            ":archmage:",
            ":acolyte:",
            ":artas:",
        ],
    ],
    [
        "крафт",
        [
            ":sorka:",
            ":doornoloot:",
            ":pitlord:",
            ":jobagain:",
            ":archmage:",
            ":acolyte:",
            ":artas:",
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    [
        "war",
        [
            ":sorka:",
            ":doornoloot:",
            ":pitlord:",
            ":jobagain:",
            ":archmage:",
            ":acolyte:",
            ":artas:",
        ],
    ],
    ["sorka", [":sorka:"]],
    [
        "близ",
        [
            ":sorka:",
            ":doornoloot:",
            ":pitlord:",
            ":jobagain:",
            ":archmage:",
            ":acolyte:",
            ":artas:",
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
            ":deckard:",
            ":tirael:",
            ":diablo:",
            ":gold:",
            ":moo:",
            ":mana:",
            ":valla:",
        ],
    ],
    [
        "blizz",
        [
            ":sorka:",
            ":doornoloot:",
            ":pitlord:",
            ":jobagain:",
            ":archmage:",
            ":acolyte:",
            ":artas:",
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
            ":deckard:",
            ":tirael:",
            ":diablo:",
            ":gold:",
            ":moo:",
            ":mana:",
            ":valla:",
        ],
    ],
    ["не так", [":sorka:"]],
    ["котик", [":sorka:"]],
    ["сорка", [":sorka:"]],
    ["альян", [":sorka:", ":archmage:", ":artas:"]],
    ["doornoloot", [":doornoloot:"]],
    ["двери", [":doornoloot:"]],
    ["не лут", [":doornoloot:"]],
    ["звери", [":doornoloot:"]],
    ["бист", [":doornoloot:"]],
    ["beast", [":doornoloot:"]],
    ["орк", [":doornoloot:", ":jobagain:"]],
    ["pitlord", [":pitlord:"]],
    ["пит", [":pitlord:"]],
    ["пади", [":pitlord:"]],
    ["ниц", [":pitlord:"]],
    ["jobagain", [":jobagain:"]],
    ["раб", [":jobagain:", ":acolyte:"]],
    ["опять", [":jobagain:"]],
    ["пион", [":jobagain:"]],
    ["peon", [":jobagain:"]],
    ["archmage", [":archmage:"]],
    ["маг", [":archmage:"]],
    ["архи", [":archmage:"]],
    ["арк", [":archmage:"]],
    ["гей", [":archmage:"]],
    ["acolyte", [":acolyte:"]],
    ["аколит", [":acolyte:"]],
    ["happy", [":acolyte:"]],
    ["андед", [":acolyte:"]],
    ["artas", [":artas:"]],
    ["артас", [":artas:"]],
    ["сжеч", [":artas:"]],
    ["пал", [":artas:"]],
    [
        "sc",
        [
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    [
        "стар",
        [
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    [
        "star",
        [
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    [
        "ск",
        [
            ":tire:",
            ":pilon:",
            ":toss:",
            ":archon:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    ["tire", [":tire:"]],
    ["шин", [":tire:"]],
    [
        "зерг",
        [
            ":tire:",
            ":dance:",
            ":zerg:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
        ],
    ],
    ["протос", [":tire:", ":pilon:", ":toss:"]],
    [
        "терран",
        [
            ":tire:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    ["pilon", [":pilon:"]],
    ["пилон", [":pilon:"]],
    ["toss", [":toss:"]],
    ["тосс", [":toss:", ":archon:"]],
    ["зилот", [":toss:"]],
    ["archon", [":archon:"]],
    ["протосс", [":archon:"]],
    ["архон", [":archon:"]],
    ["dance", [":dance:"]],
    ["тане", [":dance:"]],
    ["танц", [":dance:"]],
    ["бруд", [":dance:"]],
    [
        "имба",
        [
            ":dance:",
            ":roach:",
            ":overfan:",
            ":kerrievil:",
            ":muta:",
            ":bane:",
            ":kerrisad:",
            ":kerrisad:",
            ":goliath:",
            ":marikbw:",
            ":reynor:",
            ":marik:",
        ],
    ],
    ["zerg", [":zerg:"]],
    ["линг", [":zerg:", ":bane:"]],
    ["roach", [":roach:"]],
    ["роач", [":roach:"]],
    ["роуч", [":roach:"]],
    ["таракан", [":roach:"]],
    ["overfan", [":overfan:"]],
    ["овер", [":overfan:"]],
    ["побед", [":overfan:"]],
    ["gg", [":overfan:"]],
    ["kerrievil", [":kerrievil:"]],
    ["зло", [":kerrievil:"]],
    ["кери", [":kerrievil:", ":kerrisad:"]],
    ["керри", [":kerrievil:", ":kerrisad:"]],
    ["muta", [":muta:"]],
    ["мута", [":muta:"]],
    ["bane", [":bane:"]],
    ["бейн", [":bane:"]],
    ["kerrisad", [":kerrisad:"]],
    ["goliath", [":goliath:"]],
    ["голиф", [":goliath:"]],
    ["marikbw", [":marikbw:"]],
    ["марик", [":marikbw:", ":reynor:", ":marik:"]],
    ["марин", [":marikbw:", ":reynor:", ":marik:"]],
    ["reynor", [":reynor:"]],
    ["рейнор", [":reynor:"]],
    ["фибо", [":fibo:", ":fibod:", ":fffibo:"]],
    ["и так", [":fibo:", ":fibod:", ":fffibo:"]],
    ["fibo", [":fibo:"]],
    ["дизай", [":fibo:", ":fibod:", ":fffibo:"]],
    ["fibod", [":fibod:"]],
    ["танец", [":fibod:"]],
    ["fffibo", [":fffibo:"]],
    ["ledokol", [":ledokol:", ":lk:"]],
    ["ледокол", [":ledokol:", ":lk:"]],
    ["трактор", [":ledokol:"]],
    ["корабль", [":lk:"]],
    ["атом", [":lk:"]],
    [
        "diablo",
        [
            ":deckard:",
            ":tirael:",
            ":diablo:",
            ":gold:",
            ":moo:",
            ":mana:",
            ":valla:",
        ],
    ],
    [
        "диабло",
        [
            ":deckard:",
            ":tirael:",
            ":diablo:",
            ":gold:",
            ":moo:",
            ":mana:",
            ":valla:",
        ],
    ],
    ["deckard", [":deckard:"]],
    ["декард", [":deckard:"]],
    ["tirael", [":tirael:"]],
    ["тираэль", [":tirael:"]],
    ["gold", [":gold:"]],
    ["голд", [":gold:"]],
    ["золот", [":gold:"]],
    ["богат", [":gold:"]],
    ["moo", [":moo:"]],
    ["коров", [":moo:"]],
    ["mana", [":mana:"]],
    ["мана", [":mana:"]],
    ["valla", [":valla:"]],
]);
/**
 *
 * @param {string} tag
 * @param {Partial<HTMLElement>} props
 * @param  {...(HTMLElement|string)} children
 * @returns
 */
function createElement(tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var res = document.createElement(tag);
    if (props)
        Object.keys(props).forEach(function (prop) {
            var _a;
            if (prop === "classList" || prop === "className") {
                if (props[prop] === "" || props[prop] === null)
                    return;
                (_a = res.classList).add.apply(_a, props[prop].split(" "));
                return;
            }
            else if (prop === "style") {
                var style = props[prop];
                for (var key in style)
                    if (typeof res.style[key] === "undefined")
                        res.style.setProperty(key, style[key]);
                    else
                        res.style[key] = style[key];
                return;
            }
            else if (prop === "attributes") {
                var attributes = props[prop];
                for (var key in attributes)
                    if (attributes[key])
                        res.setAttribute(key, attributes[key]);
                return;
            }
            else if (res[prop.toLowerCase()] === null &&
                prop.toLowerCase().startsWith("on")) {
                res.addEventListener(prop.toLowerCase().replace("on", ""), props[prop]);
                return;
            }
            res[prop] = props[prop];
        });
    if (children)
        res.append.apply(res, children.flat().filter(function (child) { return child !== null; }));
    return res;
}
var GGSmileHelper = /** @class */ (function (_super) {
    __extends(GGSmileHelper, _super);
    function GGSmileHelper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @type {string?}
         */
        _this._category = null;
        _this._searchText = "";
        _this.smileBtn = document.querySelector('[ng-click="vm.toggleSmiles()"]');
        _this.chatInput = document.querySelector(".textarea[chat-input]");
        _this.searchInput = createElement("input", {
            className: "search-input",
            id: "smile-search",
            onkeydown: function (e) {
                if (e.key === "Escape") {
                    _this.searchInput.value = "";
                    _this.searchText = "";
                    return;
                }
                if (e.key === "Tab") {
                    _this.smileBtn.click();
                    setTimeout(function () {
                        _this.chatInput.focus();
                        _this.chatInput.click();
                    }, 100);
                }
                setTimeout(function () { return (_this.searchText = _this.searchInput.value); }, 0);
            },
            placeholder: "Поиск смайлов",
            type: "text",
        });
        _this.searchWrapper = createElement("div", { className: "search-block" }, createElement("form", {
            onsubmit: function (e) {
                e.preventDefault();
            },
        }, createElement("label", {
            className: "icon icon-search",
            for: "smile-search",
        }), createElement("span", {
            className: "icon icon-close2",
            onclick: function () {
                _this.searchInput.value = "";
                _this.searchText = "";
            },
        }), _this.searchInput));
        _this.tabsContainer = createElement("div", {
            className: "gg-smile-helper_tabs-container",
            onwheel: function (e) {
                e.preventDefault();
                if (e.deltaY > 0)
                    _this.tabsContainer.scrollLeft += 100;
                else
                    _this.tabsContainer.scrollLeft -= 100;
            },
        });
        _this.header = createElement("header", { className: "gg-smile-helper_header" }, _this.searchWrapper, _this.tabsContainer);
        _this.wasConnected = false;
        _this.focusInput = function () {
            return setTimeout(function () {
                _this.searchInput.focus();
                _this.searchInput.select();
            }, 100);
        };
        return _this;
    }
    Object.defineProperty(GGSmileHelper.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (v) {
            var _a, _b;
            if (v === this._category)
                return;
            (_a = this.tabsContainer
                .querySelector(".active")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
            (_b = this.tabsContainer
                .querySelector("[data-category=\"".concat(v !== null && v !== void 0 ? v : "all", "\"]"))) === null || _b === void 0 ? void 0 : _b.classList.add("active");
            this._category = v;
            this.filter();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GGSmileHelper.prototype, "searchText", {
        get: function () {
            return this._searchText;
        },
        set: function (v) {
            if (v === this._searchText)
                return;
            this.searchWrapper
                .querySelector("form")
                .classList.toggle("active", v !== "");
            this._searchText = v;
            this.filter();
        },
        enumerable: false,
        configurable: true
    });
    GGSmileHelper.prototype.connectedCallback = function () {
        var _a;
        var _this = this;
        if (this.wasConnected) {
            this.prepend(this.header);
            return;
        }
        this.wasConnected = true;
        console.info("Модуль поиска по смайлам GG запущен");
        var favouritesStr = localStorage.getItem("fav");
        if (favouritesStr !== null) {
            smilesCategories.set("fav", favouritesStr.split(","));
        }
        (_a = this.tabsContainer).append.apply(_a, Array.from(smilesCategories.keys())
            .sort(function (a, b) {
            if (a === "all" && b === "fav")
                return 0;
            else if (a === "fav" && b === "all")
                return 1;
            else if (a === "all" || a === "fav")
                return -1;
            else if (a.startsWith("https") &&
                b !== "all" &&
                b !== "fav") {
                if (b.startsWith("https"))
                    return 0;
                else
                    return -1;
            }
            else if (b.startsWith("https")) {
                if (a.startsWith("https"))
                    return 0;
                else
                    return 1;
            }
            else
                return 0;
        })
            .map(function (key) {
            var container = createElement("div", {
                attributes: { "data-category": key },
                className: "gg-smile-helper_tab" +
                    (key === "all" ? " active" : ""),
                onclick: function () {
                    _this.category = key === "all" ? null : key;
                },
            });
            if (key !== "all" && key !== "fav") {
                container.append(createElement("img", {
                    src: key.startsWith("https")
                        ? key
                        : "https://static.goodgame.ru/images/smiles/".concat(key, ".png"),
                }));
            }
            else {
                container.classList.add("icon", key === "all"
                    ? "icon-smilemenu-icon"
                    : "icon-star");
            }
            return container;
        }));
        this.prepend(this.header);
        this.chatInput.addEventListener("keydown", function (e) {
            if (e.key === "Tab") {
                _this.focusInput();
            }
        });
        this.smileBtn.addEventListener("click", function () {
            _this.focusInput();
        });
        this.smileBtn.addEventListener("click", function () { return _this.hookSmiles(); }, {
            once: true,
        });
    };
    GGSmileHelper.prototype.hookSmiles = function () {
        var _this = this;
        var favourites = smilesCategories.get("fav");
        var streamerSmiles = window['Utils'].rootScope().chat.smiles.ChannelSmiles;
        this.querySelectorAll(".smiles-list-block").forEach(function (e) {
            var name;
            try {
                name = e
                    .querySelector(".streamer-name").textContent;
                //.textContent.toLowerCase();
                //console.log(name);
            }
            catch (error) {
                return;
            }
            if (name === "любимые" || name === "общие")
                return;
            var smiles = Array.from(e.querySelectorAll(".smile-block>.smile")).map(function (s) { return s.title; });
            var categoryKey = streamerSmiles.find(function (s) { return s.name === smiles[0].replace(/:/g, ""); }).img;
            //console.log(streamerSmiles.find((s)=> s.name === smiles[0].replace(/:/g, "")).img);
            /*const categoryKey = streamerSmiles.find(
                (s) =>
                    s.channel.toLowerCase() === name &&
                    s.name.toLowerCase() ===
                        smiles[0].replace(/:/g, "").toLowerCase(),
            ).img;*/
            smilesCategories.set(categoryKey, smiles);
            smilesTags.set(name, smiles);
            if (_this.tabsContainer.querySelector("[data-category=\"".concat(categoryKey, "\"]")) === null) {
                var before = _this.tabsContainer.querySelector("[data-category='metal']").nextElementSibling;
                _this.tabsContainer.insertBefore(createElement("div", {
                    attributes: { "data-category": categoryKey },
                    className: "gg-smile-helper_tab",
                    onclick: function () {
                        _this.category = categoryKey;
                    },
                }, createElement("img", {
                    src: categoryKey,
                })), before);
            }
        });
        this.querySelectorAll(".smile-block").forEach(function (element) {
            element.append(createElement("div", {
                className: "gg-smile-helper_favourite-icon icon icon-star",
            }));
            var smile = element.querySelector(".smile").title;
            element.classList.toggle("favourite", favourites.includes(smile));
            element.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                _this.toggleFavourite(smile);
            });
        });
    };
    GGSmileHelper.prototype.toggleFavourite = function (smile) {
        var _a;
        var favourites = smilesCategories.get("fav");
        if (favourites.includes(smile))
            favourites.splice(favourites.indexOf(smile), 1);
        else
            favourites.push(smile);
        (_a = this.querySelector(".smile-block:has(.smile[title=\"".concat(smile, "\"])"))) === null || _a === void 0 ? void 0 : _a.classList.toggle("favourite", favourites.includes(smile));
        localStorage.setItem("fav", favourites.join(","));
    };
    GGSmileHelper.prototype.filterByCategory = function (smiles) {
        if (this.category === null) {
            return smiles;
        }
        else {
            return smilesCategories.get(this.category);
        }
    };
    GGSmileHelper.prototype.filterBySearch = function (smiles) {
        var _this = this;
        if (this.searchText === "")
            return smiles;
        var pass = [];
        var tags = Array.from(smilesTags.keys()).filter(function (t) {
            return t.toLowerCase().includes(_this.searchText.toLowerCase());
        });
        tags.forEach(function (t) {
            var taggedSmiles = smilesTags.get(t);
            taggedSmiles.forEach(function (s) {
                if (smiles.includes(s) && !pass.includes(s))
                    pass.push(s);
            });
        });
        smiles.forEach(function (s) {
            if (s.toLowerCase().includes(_this.searchText.toLowerCase()) &&
                !pass.includes(s))
                pass.push(s);
        });
        return pass;
    };
    GGSmileHelper.prototype.filter = function () {
        var elements = Array.from(this.querySelectorAll(".smile-block .smile"));
        var smiles = elements
            .map(function (e) { return e.title; })
            .filter(function (e, i, a) { return i === a.indexOf(e); });
        var ogLength = smiles.length;
        smiles = this.filterByCategory(smiles);
        smiles = this.filterBySearch(smiles);
        var wasFiltered = smiles.length !== ogLength;
        elements.forEach(function (e) {
            if (!wasFiltered)
                e.parentElement.classList.remove("hide");
            else if (smiles.includes(e.title))
                e.parentElement.classList.toggle("hide", false);
            else
                e.parentElement.classList.toggle("hide", true);
        });
        this.querySelectorAll(".smile-list").forEach(function (list) {
            Array.from(list.children).forEach(function (e) {
                return e.classList.toggle("hide", e.classList.contains("favorite-smiles")
                    ? wasFiltered
                    : e.querySelectorAll(".smile-block:not(.hide)")
                        .length === 0);
            });
        });
    };
    return GGSmileHelper;
}(HTMLElement));
customElements.define("gg-smiles2", GGSmileHelper);
/**
 * This is ported from Rangy's selection save and restore module and has no dependencies.
 * Copyright 2019, Tim Down
 * Licensed under the MIT license.
 *
 * Documentation: https://github.com/timdown/rangy/wiki/Selection-Save-Restore-Module
 * Use "rangeSelectionSaveRestore" instead of "rangy"
 */
var rangeSelectionSaveRestore = (function () {
    var markerTextChar = "\ufeff";
    var selectionHasExtend = (typeof window.getSelection().extend !== "undefined");
    function gEBI(id, doc) {
        return (doc || document).getElementById(id);
    }
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }
    // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
    // "forward" or "forwards") or a Boolean (true for backwards).
    function isDirectionBackward(dir) {
        return (typeof dir == "string") ? /^backward(?:s)?$/i.test(dir) : !!dir;
    }
    function isSelectionBackward(sel) {
        var backward = false;
        if (!sel.isCollapsed) {
            var range = document.createRange();
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);
            backward = range.collapsed;
        }
        return backward;
    }
    function selectRangeBackwards(sel, range) {
        if (selectionHasExtend) {
            var endRange = range.cloneRange();
            endRange.collapse(false);
            sel.removeAllRanges();
            sel.addRange(endRange);
            sel.extend(range.startContainer, range.startOffset);
            return true;
        }
        else {
            // Just select the range forwards
            sel.removeAllRanges();
            sel.addRange(range);
            return false;
        }
    }
    function insertRangeBoundaryMarker(range, atStart) {
        var markerId = "selectionBoundary_" + (+new Date()) + "_" + ("" + Math.random()).slice(2);
        var markerEl;
        var doc = range.startContainer.ownerDocument;
        // Clone the Range and collapse to the appropriate boundary point
        var boundaryRange = range.cloneRange();
        boundaryRange.collapse(atStart);
        // Create the marker element containing a single invisible character using DOM methods and insert it
        markerEl = doc.createElement("span");
        markerEl.id = markerId;
        markerEl.style.lineHeight = "0";
        markerEl.style.display = "none";
        markerEl.textContent = markerTextChar;
        boundaryRange.insertNode(markerEl);
        return markerEl;
    }
    function setRangeBoundary(doc, range, markerId, atStart) {
        var markerEl = gEBI(markerId, doc);
        if (markerEl) {
            range[atStart ? "setStartBefore" : "setEndBefore"](markerEl);
            removeNode(markerEl);
        }
        else {
            console.warn("Marker element has been removed. Cannot restore selection.");
        }
    }
    function compareRanges(r1, r2) {
        return r2.compareBoundaryPoints(r1.START_TO_START, r1);
    }
    function saveRange(range, direction) {
        var startEl, endEl, doc = range.startContainer.ownerDocument, text = range.toString();
        if (range.collapsed) {
            endEl = insertRangeBoundaryMarker(range, false);
            return {
                document: doc,
                markerId: endEl.id,
                collapsed: true
            };
        }
        else {
            endEl = insertRangeBoundaryMarker(range, false);
            startEl = insertRangeBoundaryMarker(range, true);
            return {
                document: doc,
                startMarkerId: startEl.id,
                endMarkerId: endEl.id,
                collapsed: false,
                backward: isDirectionBackward(direction),
                toString: function () {
                    return "original text: '" + text + "', new text: '" + range.toString() + "'";
                }
            };
        }
    }
    function restoreRange(rangeInfo) {
        var doc = rangeInfo.document;
        var normalize;
        if (typeof normalize == "undefined") {
            normalize = true;
        }
        var range = doc.createRange(doc);
        if (rangeInfo.collapsed) {
            var markerEl = gEBI(rangeInfo.markerId, doc);
            if (markerEl) {
                markerEl.style.display = "inline";
                var previousNode = markerEl.previousSibling;
                if (previousNode && previousNode.nodeType == 3) {
                    removeNode(markerEl);
                    range.setStart(previousNode, previousNode.length);
                    range.collapse(true);
                }
                else {
                    range.setEndBefore(markerEl);
                    range.collapse(false);
                    removeNode(markerEl);
                }
            }
            else {
                console.warn("Marker element has been removed. Cannot restore selection.");
            }
        }
        else {
            setRangeBoundary(doc, range, rangeInfo.startMarkerId, true);
            setRangeBoundary(doc, range, rangeInfo.endMarkerId, false);
        }
        return range;
    }
    function saveRanges(ranges, direction) {
        // Order the ranges by position within the DOM, latest first, cloning the array to leave the original untouched
        ranges = ranges.slice(0);
        ranges.sort(compareRanges);
        var backward = isDirectionBackward(direction);
        var rangeInfos = ranges.map(function (range) {
            return saveRange(range, backward);
        });
        // Now that all the markers are in place and DOM manipulation is over, adjust each range's boundaries to lie
        // between its markers
        for (var i = ranges.length - 1, range, doc; i >= 0; --i) {
            range = ranges[i];
            doc = range.startContainer.ownerDocument;
            if (range.collapsed) {
                range.setStartAfter(gEBI(rangeInfos[i].markerId, doc));
                range.collapse(true);
            }
            else {
                range.setEndBefore(gEBI(rangeInfos[i].endMarkerId, doc));
                range.setStartAfter(gEBI(rangeInfos[i].startMarkerId, doc));
            }
        }
        return rangeInfos;
    }
    function saveSelection(win) {
        win = win || window;
        var sel = win.getSelection();
        var ranges = [];
        for (var i = 0; i < sel.rangeCount; ++i) {
            ranges.push(sel.getRangeAt(i));
        }
        var backward = (ranges.length == 1 && isSelectionBackward(sel));
        var rangeInfos = saveRanges(ranges, backward);
        // Ensure current selection is unaffected
        sel.removeAllRanges();
        if (backward) {
            selectRangeBackwards(sel, ranges[0]);
        }
        else {
            ranges.forEach(function (range) {
                sel.addRange(range);
            });
        }
        return {
            win: win,
            rangeInfos: rangeInfos,
            restored: false
        };
    }
    function restoreRanges(rangeInfos) {
        var ranges = [];
        // Ranges are in reverse order of appearance in the DOM. We want to restore earliest first to avoid
        // normalization affecting previously restored ranges.
        var rangeCount = rangeInfos.length;
        for (var i = rangeCount - 1; i >= 0; i--) {
            ranges[i] = restoreRange(rangeInfos[i]);
        }
        return ranges;
    }
    function restoreSelection(savedSelection, preserveDirection) {
        if (!savedSelection.restored) {
            var rangeInfos = savedSelection.rangeInfos;
            var sel = savedSelection.win.getSelection();
            var ranges = restoreRanges(rangeInfos);
            var rangeCount = rangeInfos.length;
            sel.removeAllRanges();
            if (rangeCount == 1 && preserveDirection && selectionHasExtend && rangeInfos[0].backward) {
                selectRangeBackwards(sel, ranges[0]);
            }
            else {
                ranges.forEach(function (range) {
                    sel.addRange(range);
                });
            }
            savedSelection.restored = true;
        }
    }
    function removeMarkerElement(doc, markerId) {
        var markerEl = gEBI(markerId, doc);
        if (markerEl) {
            removeNode(markerEl);
        }
    }
    function removeMarkers(savedSelection) {
        savedSelection.rangeInfos.forEach(function (rangeInfo) {
            if (rangeInfo.collapsed) {
                removeMarkerElement(savedSelection.doc, rangeInfo.markerId);
            }
            else {
                removeMarkerElement(savedSelection.doc, rangeInfo.startMarkerId);
                removeMarkerElement(savedSelection.doc, rangeInfo.endMarkerId);
            }
        });
    }
    return {
        saveRange: saveRange,
        restoreRange: restoreRange,
        saveRanges: saveRanges,
        restoreRanges: restoreRanges,
        saveSelection: saveSelection,
        restoreSelection: restoreSelection,
        removeMarkerElement: removeMarkerElement,
        removeMarkers: removeMarkers
    };
})();
