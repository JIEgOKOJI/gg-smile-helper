console.info("Запуск модуля поиска по смайлам GG");

const smilesCategories = new Map(
	[
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
	].map(([k, v]) => {
		return [k, v.split(",").filter((e) => e !== "")];
	}),
);
const smilesTags = new Map([
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
function createElement(tag, props, ...children) {
	const res = document.createElement(tag);
	if (props)
		Object.keys(props).forEach((prop) => {
			if (prop === "classList" || prop === "className") {
				if (props[prop] === "" || props[prop] === null) return;
				res.classList.add(...props[prop].split(" "));
				return;
			} else if (prop === "style") {
				const style = props[prop];
				for (const key in style)
					if (typeof res.style[key] === "undefined")
						res.style.setProperty(key, style[key]);
					else res.style[key] = style[key];

				return;
			} else if (prop === "attributes") {
				const attributes = props[prop];
				for (const key in attributes)
					if (attributes[key])
						res.setAttribute(key, attributes[key]);

				return;
			} else if (
				res[prop.toLowerCase()] === null &&
				prop.toLowerCase().startsWith("on")
			) {
				res.addEventListener(
					prop.toLowerCase().replace("on", ""),
					props[prop],
				);
				return;
			}
			res[prop] = props[prop];
		});
	if (children)
		res.append(...children.flat().filter((child) => child !== null));
	return res;
}

class GGSmileHelper extends HTMLElement {
	/**
	 * @type {string?}
	 */
	_category = null;
	get category() {
		return this._category;
	}
	set category(v) {
		if (v === this._category) return;
		this.tabsContainer
			.querySelector(".active")
			?.classList.remove("active");
		this.tabsContainer
			.querySelector(`[data-category="${v ?? "all"}"]`)
			?.classList.add("active");
		this._category = v;
		this.filter();
	}

	_searchText = "";
	get searchText() {
		return this._searchText;
	}
	set searchText(v) {
		if (v === this._searchText) return;
		this.searchWrapper
			.querySelector("form")
			.classList.toggle("active", v !== "");
		this._searchText = v;
		this.filter();
	}

	smileBtn = document.querySelector('[ng-click="vm.toggleSmiles()"]');
	chatInput = document.querySelector(".textarea[chat-input]");

	searchInput = createElement("input", {
		className: "search-input",
		id: "smile-search",
		onkeydown: (e) => {
			if (e.key === "Escape") {
				this.searchInput.value = "";
				this.searchText = "";
				return;
			}
			if (e.key === "Tab") {
				this.smileBtn.click();
				setTimeout(() => {
					this.chatInput.focus();
					this.chatInput.click();
				}, 100);
			}
			setTimeout(() => (this.searchText = this.searchInput.value), 0);
		},
		placeholder: "Поиск смайлов",
		type: "text",
	});

	searchWrapper = createElement(
		"div",
		{ className: "search-block" },
		createElement(
			"form",
			{
				onsubmit(e) {
					e.preventDefault();
				},
			},
			createElement("label", {
				className: "icon icon-search",
				for: "smile-search",
			}),
			createElement("span", {
				className: "icon icon-close2",
				onclick: () => {
					this.searchInput.value = "";
					this.searchText = "";
				},
			}),
			this.searchInput,
		),
	);

	tabsContainer = createElement("div", {
		className: "gg-smile-helper_tabs-container",
		onwheel: (e) => {
			e.preventDefault();
			if (e.deltaY > 0) this.tabsContainer.scrollLeft += 100;
			else this.tabsContainer.scrollLeft -= 100;
		},
	});

	header = createElement(
		"header",
		{ className: "gg-smile-helper_header" },
		this.searchWrapper,
		this.tabsContainer,
	);

	wasConnected = false;

	connectedCallback() {
		if (this.wasConnected) {
			this.prepend(this.header);
			return;
		}
		this.wasConnected = true;
		console.info("Модуль поиска по смайлам GG запущен");

		const favouritesStr = localStorage.getItem("fav");
		if (favouritesStr !== null) {
			smilesCategories.set("fav", favouritesStr.split(","));
		}

		this.tabsContainer.append(
			...Array.from(smilesCategories.keys())
				.sort((a, b) => {
					if (a === "all" && b === "fav") return 0;
					else if (a === "fav" && b === "all") return 1;
					else if (a === "all" || a === "fav") return -1;
					else if (
						a.startsWith("https") &&
						b !== "all" &&
						b !== "fav"
					) {
						if (b.startsWith("https")) return 0;
						else return -1;
					} else if (b.startsWith("https")) {
						if (a.startsWith("https")) return 0;
						else return 1;
					} else return 0;
				})
				.map((key) => {
					const container = createElement("div", {
						attributes: { "data-category": key },
						className:
							"gg-smile-helper_tab" +
							(key === "all" ? " active" : ""),
						onclick: () => {
							this.category = key === "all" ? null : key;
						},
					});
					if (key !== "all" && key !== "fav") {
						container.append(
							createElement("img", {
								src: key.startsWith("https")
									? key
									: `https://static.goodgame.ru/images/smiles/${key}.png`,
							}),
						);
					} else {
						container.classList.add(
							"icon",
							key === "all"
								? "icon-smilemenu-icon"
								: "icon-star",
						);
					}
					return container;
				}),
		);

		this.prepend(this.header);

		this.chatInput.addEventListener("keydown", (e) => {
			if (e.key === "Tab") {
				this.focusInput();
			}
		});
		this.smileBtn.addEventListener("click", () => {
			this.focusInput();
		});

		this.smileBtn.addEventListener("click", () => this.hookSmiles(), {
			once: true,
		});
	}

	hookSmiles() {
		const favourites = smilesCategories.get("fav");
		const streamerSmiles =
			window.Utils.rootScope().chat.smiles.ChannelSmiles;

		this.querySelectorAll(".smiles-list-block").forEach((e) => {
        try {
			const name = e
				.querySelector(".streamer-name").textContent;
				//.textContent.toLowerCase();
				//console.log(name);
        }catch(error){
	     return;
        }

			if (name === "любимые" || name === "общие") return;
			const smiles = Array.from(
				e.querySelectorAll(".smile-block>.smile"),
			).map((s) => s.title);
			const categoryKey = streamerSmiles.find((s)=> s.name === smiles[0].replace(/:/g, "")).img;
			//console.log(streamerSmiles.find((s)=> s.name === smiles[0].replace(/:/g, "")).img);
			/*const categoryKey = streamerSmiles.find(
				(s) =>
					s.channel.toLowerCase() === name &&
					s.name.toLowerCase() ===
						smiles[0].replace(/:/g, "").toLowerCase(),
			).img;*/
			smilesCategories.set(categoryKey, smiles);
			smilesTags.set(name, smiles);
			if (
				this.tabsContainer.querySelector(
					`[data-category="${categoryKey}"]`,
				) === null
			) {
				const before = this.tabsContainer.querySelector(
					"[data-category='metal']",
				).nextElementSibling;
				this.tabsContainer.insertBefore(
					createElement(
						"div",
						{
							attributes: { "data-category": categoryKey },
							className: "gg-smile-helper_tab",
							onclick: () => {
								this.category = categoryKey;
							},
						},
						createElement("img", {
							src: categoryKey,
						}),
					),
					before,
				);
			}
	});

		this.querySelectorAll(".smile-block").forEach((element) => {
			element.append(
				createElement("div", {
					className:
						"gg-smile-helper_favourite-icon icon icon-star",
				}),
			);
			const smile = element.querySelector(".smile").title;
			element.classList.toggle("favourite", favourites.includes(smile));
			element.addEventListener("contextmenu", (e) => {
				e.preventDefault();
				this.toggleFavourite(smile);
			});
		});
	}

	toggleFavourite(smile) {
		const favourites = smilesCategories.get("fav");
		if (favourites.includes(smile))
			favourites.splice(favourites.indexOf(smile), 1);
		else favourites.push(smile);
		this.querySelector(
			`.smile-block:has(.smile[title="${smile}"])`,
		)?.classList.toggle("favourite", favourites.includes(smile));
		localStorage.setItem("fav", favourites.join(","));
	}

	focusInput = () =>
		setTimeout(() => {
			this.searchInput.focus();
			this.searchInput.select();
		}, 100);

	filterByCategory(smiles) {
		if (this.category === null) {
			return smiles;
		} else {
			return smilesCategories.get(this.category);
		}
	}

	filterBySearch(smiles) {
		if (this.searchText === "") return smiles;
		const pass = [];
		const tags = Array.from(smilesTags.keys()).filter((t) =>
			t.toLowerCase().includes(this.searchText.toLowerCase()),
		);
		tags.forEach((t) => {
			const taggedSmiles = smilesTags.get(t);
			taggedSmiles.forEach((s) => {
				if (smiles.includes(s) && !pass.includes(s)) pass.push(s);
			});
		});
		smiles.forEach((s) => {
			if (
				s.toLowerCase().includes(this.searchText.toLowerCase()) &&
				!pass.includes(s)
			)
				pass.push(s);
		});
		return pass;
	}

	filter() {
		const elements = Array.from(
			this.querySelectorAll(".smile-block .smile"),
		);
		let smiles = elements
			.map((e) => e.title)
			.filter((e, i, a) => i === a.indexOf(e));
		const ogLength = smiles.length;
		smiles = this.filterByCategory(smiles);
		smiles = this.filterBySearch(smiles);
		const wasFiltered = smiles.length !== ogLength;
		elements.forEach((e) => {
			if (!wasFiltered) e.parentElement.classList.remove("hide");
			else if (smiles.includes(e.title))
				e.parentElement.classList.toggle("hide", false);
			else e.parentElement.classList.toggle("hide", true);
		});
		this.querySelectorAll(".smile-list").forEach((list) => {
			Array.from(list.children).forEach((e) =>
				e.classList.toggle(
					"hide",
					e.classList.contains("favorite-smiles")
						? wasFiltered
						: e.querySelectorAll(".smile-block:not(.hide)")
								.length === 0,
				),
			);
		});
	}
}
customElements.define("gg-smiles2", GGSmileHelper);
