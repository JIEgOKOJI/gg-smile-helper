console.info('Запуск модуля поиска по смайлам GG');

/**
 * Запускает модуль поиска по смайлам GG.
 *
 * @param {Number|undefined} iterations
 */

async function GoodGameSmileSearchInit(iterations) {
    await new Promise(r => setTimeout(r, 2000));
    const mainContainer = document.getElementById("smiles");

    if (!mainContainer) {
        GoodGameSmileSearchReInit(iterations);
        return;
    }

    console.info('Модуля поиска по смайлам GG запущен');
    
    GoodGameSmileSearchProccesing(mainContainer);
}

/**
 * Перезапускает инициализацию модуля в попытках найти нужные элементы.
 *
 * Перезапуск сработает не более 30 раз с ожиданием в 1 секунду.
 *
 * Это необходимо, так как вёрстка чата генерируется не сервером (не доступна сразу),
 * а с помощью Angular и доступна для изменения не сразу.
 *
 * @param {Number|undefined} iterations
 */
function GoodGameSmileSearchReInit(iterations) {
    iterations = iterations === undefined ? 0 : iterations;

    ++iterations;

    if (iterations === 120) {
        console.info('Поиск по смайлам не нашёл чат');
        return;
    }

    setTimeout(function () {
        GoodGameSmileSearchInit(iterations);
    }, 600);
}
let favActive = false;
let smilesTags = new Map([
    ['all', ''], //all
    ['fav', ':peka:,'], // favourites
    ['peka', ':peka:,:ohmypeka:,:scarypeka:,:pekaclap:,:comf:,:pled:,:gravitypeka:,:insanepeka:'], // peka
    ['rofl', ':rofl:,:omg:,:shocked:,:wonder:,:daun:,:panic:,:huh:,:sosp:,:notfunny:,:cry:,:cryalot:,:cool:,:sad:,:smilegasm:,:marvelous:,:happyface:,:wink:,:geek:,:sic:,:kiss:,:yazik:,:zzz:,:angry:,:rage:,:skull:'], //yellowface
    ['bvecher', ':damn:,:hug:,:chomander:,:boy:,:bvecher:,:sir:,:busted:,:bobrpirat:,:oneone:,:fsb:,:pun:,:bandages:,:winner:,:waiting:,:buggy:,:loot:,:megafon:,:snow:,:heal:,:pigeon:,:www:,:flowers:,:fight:,:darthbobr:,:nosound:,:nichobobr:,:jasonbobr:,:beverly:,:alwayshb:'],//beaver
    ['cat', ':cboring:,:buffering:,:cscare:,:cooper:,:mae:,:smudge:,:turbo:,:bravo:,:hey:,:sushicat:,:flashl:,:noted:,:catrain:,:giftcat:,:gta:,:nope:,:snow2:,:bodyb:,:runway:,:aweasome:,:whyyy:,:yoyo:,:selfie:,:search:,:plasma:,:cat:,:catyes:,:catno:,:catyuck:,:badumtss:,:bdbessa:,:bessa:,:catouh:,:grumpy:,:fuckoff:,:nofeels:,:whaat:,:vjuh:,:vjoh:,:getout:,:ufreddie:,:divan:'], //cats
    ['shenok', ':shenok:,:sif:,:goodboy:,:hacking:,:gosling:,:strelka:,:belka:,:doggie:,:master:,:chmis:,:detective:,:forespect:,:lagdog:,:myway:,:clear:,:mcomplete:,:sigh:,:thisisfine:,:sing:,:tactics:,:support:,:comfort:,:dog2:,:calc:'], //Dogs
    ['diablo',':deckard:,:tirael:,:diablo:,:gold:,:moo:,:mana:,:valla:'], // Diablo
    ['artas',':sorka:,:doornoloot:,:pitlord:,:jobagain:,:acolyte:,:archmage:,:artas:'], //Warcraft
    ['fotonka',':tire:,:pilon:,:toss:,:archon:,:dance:,:zerg:,:roach:,:overfan:,:kerrievil:,:muta:,:bane:,:kerrisad:,:goliath:,:marikbw:,:reynor:,:marik:'], //Starcraft
    ['pepoclown',':hmmm:,:pepcard:,:pepelaugh:,:pepehands:,:poggers:,:monkas:,:pepoclown:'], //PEPE
    ['fry',':slug:,:sospfry:,:fry:,:goodnews:,:bender:,:homerdonut:,:homer:,:respect:,:boring:,:whocares:'], //Mult
    ['kekw',':lynch:,:keanu:,:dicaprio:,:fp:,:kekw:,:gend:,:walter:,:kojima:,:gabe:,:joker:,:jackie:,:exorcism:,:think:,:badass:,:evil:,:karl:,:drake:,:bratok:,:bnews:,:slow:,:psyduck:,:verybad:,:dabgoose:,:worker:,:bearbush:,:gottafast:'], //meme
    ['fibo',':fibod:,:fffibo:,:fibo:,:fp:,:db:,:bratok:,:eer0:,:rat:,:crab:,:dno:,:kran:,:wow:,:sheep:,:expertm:,:lk:,:ledokol:'], //goodmeme
    ['bdance',':bdance:,:onelove:,:bshy:,:taunt:,:buff:,:charge:'], //squirrel
    ['bob',':bob:,:thup:,:charisma:,:muton:,:rocket:,:rail:,:shaft:'], //Othergames
    ['cherrypie',':cherrypie:,:salt:,:hlebushek:,:carrot:,:upvote:,:ban:,:orange:,:arbuzer:,:burger:,:bdcake:'], //Meal
    ['metal',':rsp:,:metal:,:lighter:,:hello:,:brofist:,:slap:,:sony:,:xbox:,:dendi:'] //hands
])
let smilesDesc = new Map([
    [':peka:', 'пека,йоба,колобок,peka'],
    [':ohmypeka:', 'пека,йоба,колобок,peka'],
    [':scarypeka:', 'пека,йоба,колобок,peka'],
    [':pekaclap:', 'пека,йоба,колобок,peka, браво, хлоп'],
    [':comf:', 'пека,йоба,колобок,peka, комфор, плед, погод'],
    [':pled:', 'пека,йоба,колобок,peka, комфор, плед, погод'],
    [':gravitypeka:', 'пека,йоба,колобок,яблоко,гравитация,падение,упал,peka'],
    [':insanepeka:', 'пека,йоба,колобок,peka'],
    [':rofl:', 'колобок,рофл,rofl'],
    [':omg:', 'колобок,omg,омг'],
    [':shocked:', 'колобок,шок,шокирован,шокед,shocked'],
    [':wonder:', 'интересно,колобок,хмм,wonder'],
    [':daun:', 'колобок,глупость,глуп,улыбка'],
    [':panic:', 'колобок,паника,panic'],
    [':huh:', 'колобок,хмм,huh'],
    [':sosp:', 'колобок,подозр,подозрительный,susp'],
    [':notfunny:', 'колобок,notfunny,несмешн,не'],
    [':cry:', 'колобок,cry,слез,плак,плач,грус'],
    [':cryalot:', 'колобок,cry,слез,плак,плач,грус'],
    [':cool:', 'колобок,cool,крут'],
    [':sad:', 'колобок,sad,грус,плак,плач'],
    [':smilegasm:', 'колобок,smilegasm,клас,нрав,оргазм,довол,счас'],
    [':marvelous:', 'колобок,marvelous,клас,нрав,оргазм,довол,счас'],
    [':happyface:', 'колобок,happyface,счаст,нрав,довол,счас,улыб'],
    [':geek:', 'колобок,geek,очки,ум,эксперт,учен,наука,ботан,гик'],
    [':sic:', 'колобок,sic,боль,здоров,блев,фу,тошн'],
    [':kiss:', 'колобок,kiss,поцел,цел,люб,чмок'],
    [':yazik:', 'колобок,yazik,дразн,язык,бе'],
    [':zzz:', 'колобок,zzz,устал,спать,уснул,сон,спит,скучно,интерес'],
    [':angry:', 'колобок,angry,злой,злость,бомб,ярость,гор'],
    [':rage:', 'колобок,rage,злой,злость,бомб,ярость,гор,пригор,подгор'],
    [':skull:', 'колобок,skull,умер,смер,помер,гуф,гг'],
    [':damn:', 'бобр, бобер, bobr, черт, злой, damn'],
    [':hug:', 'бобр, бобер, bobr, кот, cat, hug, обни, обня, объят'],
    [':merchant:', 'бобр, бобер, bobr, торг, мерч, resident, buy, купить'],
    [':chomander:', 'бобр, бобер, bobr, commander, чомандер, команд, xcom'],
    [':boy:', 'бобр, бобер, bobr, boy, gow, god, sony, playstation, щегол, пацан'],
    [':flamer:', 'бобр, бобер, bobr, flamer, огнемет, мерз, ужас, сжечь, ересь'],
    [':bvecher:', 'бобр, бобер, bobr, бобрый, добрый, привет, здаров, здравствуй, вечер'],
    [':sir:', 'бобр, бобер, bobr, сэр, sir, сноб, моноколь, господ, сарказм'],
    [':busted:', 'бобр, бобер, bobr, busted, полиция, караул, наруш, внимание, милиц, свист'],
    [':bobrpirat:', 'бобр, бобер, bobr, pirat, пират, торрент, аббордаж, хохо'],
    [':oneone:', 'бобр, бобер, bobr, первый, победа, топ, выигр, лучший'],
    [':fsb:', 'бобр, бобер, bobr, фсб, служб, слеж, следим, слушаем, мем'],
    [':pun:', 'бобр, бобер, bobr, сковорода, любл, пубг, pubg'],
    [':bandages:', 'бобр, бобер, bobr, бинт, хил, лечение, апте, здоров, пубг, pubg'],
    [':winner:', 'бобр, бобер, bobr, первый, победа, топ, выигр, лучший, пубг, pubg'],
    [':waiting:', 'бобр, бобер, bobr, снайпер, засада, жду, крыс, рыбалка, пубг, pubg'],
    [':buggy:', 'бобр, бобер, bobr, ехать, поехали, маши, выезж, еду, buggy, багги, пубг, pubg'],
    [':loot:', 'бобр, бобер, bobr, loot, лут, готов, пубг, pubg, хэд'],
    [':megafon:', 'бобр, бобер, bobr, внимание, объяв, мегафон, кри, громко'],
    [':toohot:', 'бобр, бобер, bobr, душ, дух, жарко, зануда'],
    [':snow:', 'бобр, бобер, bobr, снег, зима, новый, нг, погода'],
    [':heal:', 'бобр, бобер, bobr, хил, лечение, апте, здоров, лечи'],
    [':pigeon:', 'бобр, бобер, bobr, бабочка, наука'],
    [':www:', 'бобр, бобер, bobr, победа, топ, радость'],
    [':flowers:', 'бобр, бобер, bobr, цветы, любл, любо'],
    [':fight:', 'бобр, бобер, bobr, смешно, топ, победа, сраже, лучший, выигр'],
    [':darthbobr:', 'бобр, бобер, bobr, топ, победа, выигр, лучший, звездн'],
    [':nosound:', 'бобр, бобер, bobr, тихо, микр, слышно, выкл'],
    [':nichobobr:', 'бобр, бобер, bobr, смешно, ничоси, мем, wow'],
    [':jasonbobr:', 'бобр, бобер, bobr, мем, джейсон, jason, мясо'],
    [':beverly:', 'бобр, бобер, bobr, мем, ныть, вайн'],
    [':alwayshb:', 'бобр, бобер, bobr, мем, всегда, поворот'],
    [':cboring:', 'кот, cat, кош, современии, мяу, скучно, интересно'],
    [':buffering:', 'кот, cat, кош, современии, мяу, буф, загруз, понял, непонял, не понял'],
    [':cscare:', 'кот, cat, кош, современии, мяу, страх, страш, пистолет, огонь'],
    [':cooper:', 'кот, cat, кош, современии, мяу, радость, доволь, чай, кофе, пить, пье'],
    [':mae:', 'кот, cat, кош, современии, мяу, мое, жадн, чай, еда'],
    [':smudge:', 'кот, cat, кош, современии, мяу, мем, непонял'],
    [':turbo:', 'кот, cat, кош, современии, мяу, маши, выезж, еду, поехали, nfs, turbo'],
    [':bravo:', 'кот, cat, кош, современии, мяу, браво, радость, победа, топ, лучший, хлоп, апплодисменты, bravo'],
    [':hey:', 'кот, cat, кош, современии, мяу, hey, хэй, хей, привет, здаров, здравствуй, бобрый, добрый, вечер'],
    [':sushicat:', 'кот, cat, кош, современии, мяу, суши, рыб, еда, sushi'],
    [':flashl:', 'кот, cat, кош, современии, мяу, фото, вспышка, ярко, флеш, flash'],
    [':noted:', 'кот, cat, кош, современии, мяу, noted, понял, запис, пишу, блокнот, понят, помет'],
    [':catrain:', 'кот, cat, кош, современии, мяу, грусть, дождь, погода'],
    [':giftcat:', 'кот, cat, кош, современии, мяу, радость, подарок, гифт, gift, коробка, праздник'],
    [':gta:', 'кот, cat, кош, современии, мяу, мем, арстоцка, команд, чомандер'],
    [':nope:', 'кот, cat, кош, современии, мяу, нет, злой, nope'],
    [':snow2:', 'кот, cat, кош, современии, мяу, снег, нг, новый, погода'],
    [':bodyb:', 'кот, cat, кош, современии, мяу, кач, зал, тренаж, здоров, тяж'],
    [':runway:', 'кот, cat, кош, современии, мяу, бег, страш, страх, кач, здоров, тренаж, беж'],
    [':aweasome:', 'кот, cat, кош, современии, мяу, круто, wow, глаза'],
    [':whyyy:', 'кот, cat, кош, современии, мяу, whyy, мем, как, почему'],
    [':yoyo:', 'кот, cat, кош, современии, мяу, круто, wow, реп, рэп, музыка'],
    [':selfie:', 'кот, cat, кош, современии, мяу, фото, вспышка, фотк'],
    [':search:', 'кот, cat, кош, современии, мяу, подозр, ищу, поиск, лупа, найт, сыщик'],
    [':plasma:', 'кот, cat, кош, современии, мяу, plasma, мем, анклав, anclav'],
    [':cat:', 'кот, cat, кош, современии, мяу'],
    [':catyes:', 'кот, cat, кош, современии, мяу, да, yes, соглас, точн, музыка'],
    [':catno:', 'кот, cat, кош, современии, мяу, нет, no, соглас'],
    [':catyuck:', 'кот, cat, кош, современии, мяу, нет, ныть, фу'],
    [':badumtss:', 'кот, cat, кош, современии, мяу, радость, смешно, сарказм, мем, музыка'],
    [':bdbessa:', 'кот, cat, кош, современии, мяу, бэс, бес, черн'],
    [':bessa:', 'кот, cat, кош, современии, мяу, бэс, бес, черн, огонь'],
    [':catouh:', 'кот, cat, кош, современии, мяу, ухх, уф, хочу'],
    [':grumpy:', 'кот, cat, кош, современии, мяу, доволь, грусть, грумп, grumpy'],
    [':fuckoff:', 'кот, cat, кош, современии, мяу, злой, отстань, фак, fuck'],
    [':nofeels:', 'кот, cat, кош, современии, мяу, злой, отстань, любл, любо'],
    [':whaat:', 'кот, cat, кош, современии, мяу, че, что, чаво, мем, понял, непонял'],
    [':vjuh:', 'кот, cat, кош, современии, мяу, магия, колд, вжух, мем'],
    [':vjoh:', 'кот, cat, кош, современии, мяу, магия, колд, вжух, мем, бес, бэс'],
    [':getout:', 'кот, cat, кош, современии, мяу, уходи, мем, вали, у-'],
    [':ufreddie:', 'кот, cat, кош, современии, мяу, музыка, фред, мем'],
    [':shenok:', 'соб, пес, щенок, гаф, гав'],
    [':sif:', 'соб, пес, щенок, гаф, гав, босс, страх'],
    [':goodboy:', 'соб, пес, щенок, goodboy, хороший, довол, мальчик, лапки'],
    [':hacking:', 'соб, пес, щенок, hacking, ,гаф, гав, взлом, хак, чит, комп, гик, ботан, синт'],
    [':gosling:', 'соб, пес, щенок, gosling, гаф, гав, гослинг, погод, дождь, крут'],
    [':strelka:', 'соб, пес, щенок, гаф, гав, strelka, стрелка, косм, хорош'],
    [':belka:', 'соб, пес, щенок, гаф, гав, belka, белка, косм, хорош'],
    [':doggie:', 'соб, пес, щенок, гаф, гав, doggie, дог, мем, вау, wow'],
    [':master:', 'соб, пес, щенок, гаф, гав, master, мастер, самурай, меч, эксперт'],
    [':chmis:', 'соб, пес, щенок, гаф, гав, chmis, дог, мем, чимс, грус, плач, плак'],
    [':detective:', 'соб, пес, щенок, гаф, гав, detective, детектив, шерлок, расслед, трубк'],
    [':forespect:', 'соб, пес, щенок, гаф, гав, forespect, уваж, cod, мем, пресс, press, f, ф'],
    [':lagdog:', 'соб, пес, щенок, гаф, гав, lagdog, лаг, фриз, пинг'],
    [':myway:', 'соб, пес, щенок, гаф, гав, myway, поех, еде, маши, крут'],
    [':clear:', 'соб, пес, щенок, гаф, гав, clear, чисто, крут, про, экспер, побе, топ'],
    [':mcomplete:', 'соб, пес, щенок, гаф, гав, mcomplete, миссия, выполне, побе, топ'],
    [':sigh:', 'соб, пес, щенок, гаф, гав, sigh, внима, слуш, ага, рассказ'],
    [':thisisfine:', 'соб, пес, щенок, гаф, гав, thisisfine, мем, гор, огонь, подга, хорош, плох'],
    [':sing:', 'соб, пес, щенок, гаф, гав, sing, петь, пой, песнь, муз, слуш'],
    [':tactics:', 'соб, пес, щенок, гаф, гав, tactics, такти, страт, эксперт'],
    [':support:', 'соб, пес, щенок, гаф, гав, support, супорт, помо, слуш, важн'],
    [':comfort:', 'соб, пес, щенок, гаф, гав, comfort, комфорт, плед, погод, ден'],
    [':dog2:', 'соб, пес, щенок, гаф, гав, dog2'],
    [':calc:', 'соб, пес, щенок, гаф, гав, calc, кальк, просчита, расчита, точн'],
    [':hmmm:', 'пепе, жабка, pepe, hmmm, подозр, хмм'],
    [':pepcard:', 'пепе, жабка, pepe, pepcard, деньг, бабк, дона, бога, оплат'],
    [':pepelaugh:', 'пепе, жабка, pepe, мем, pepelaugh, смех, смешн, радос'],
    [':pepehands:', 'пепе, жабка, pepe, мем, pepehands, как, почему, плак, плач, грусть'],
    [':poggers:', 'пепе, жабка, pepe, мем, poggers, вау, wow, вов, ух'],
    [':monkas:', 'пепе, жабка, pepe, мем, monkas, страх, страш, ужас'],
    [':pepoclown:', 'пепе, жабка, pepe, мем, pepoclown, клоун, смешн'],
    [':sorka:', 'wc, вар, крафт, war, sorka, близ, blizz, не так, котик, сорка, альян'],
    [':doornoloot:', 'wc, вар, крафт, war, близ, blizz, doornoloot, двери, лут, не лут, звери, бист, beast, орк'],
    [':pitlord:', 'wc, вар, крафт, war, близ, blizz, pitlord, пит, пади, ниц'],
    [':jobagain:', 'wc, вар, крафт, war, близ, blizz, jobagain, раб, опять, пион, peon, орк'],
    [':archmage:', 'wc, вар, крафт, war, близ, blizz, archmage, маг, архи, арк, гей, колд, альян'],
    [':acolyte:', 'wc, вар, крафт, war, близ, blizz, acolyte, аколит, раб, happy, андед'],
    [':artas:', 'wc, вар, крафт, war, близ, blizz, artas, артас, альян, сжеч, пал'],
    [':tire:', 'sc, стар, крафт, star, ск, близ, blizz, tire, шин, зерг, протос, терран'],
    [':pilon:', 'sc, стар, крафт, star, ск, близ, blizz, pilon, пилон, протос'],
    [':toss:', 'sc, стар, крафт, star, ск, близ, blizz, toss, тосс, протос, зилот'],
    [':archon:', 'sc, стар, крафт, star, ск, близ, blizz, archon, тосс, протосс, архон'],
    [':dance:', 'sc, стар, крафт, star, ск, близ, blizz, dance, тане, танц, муз, бруд, зерг, имба'],
    [':zerg:', 'sc, стар, крафт, star, ск, близ, blizz, zerg, зерг, соб, линг'],
    [':roach:', 'sc, стар, крафт, star, ск, близ, blizz, roach, роач, роуч, таракан, зерг, имба'],
    [':overfan:', 'sc, стар, крафт, star, ск, близ, blizz, overfan, овер, топ, побед, gg, зерг, имба'],
    [':kerrievil:', 'sc, стар, крафт, star, ск, близ, blizz, kerrievil, зло, кери, керри, зерг, имба'],
    [':muta:', 'sc, стар, крафт, star, ск, muta, близ, blizz, мута, зерг, имба'],
    [':bane:', 'sc, стар, крафт, star, ск, bane, близ, blizz, бейн, линг, зерг, имба'],
    [':kerrisad:', 'sc, стар, крафт, star, ск, близ, blizz, kerrisad, грус, кери, керри, терран, имба, имба'],
    [':goliath:', 'sc, стар, крафт, star, ск, близ, blizz, goliath, голиф, терран, имба'],
    [':marikbw:', 'sc, стар, крафт, star, ск, близ, blizz, marikbw, марик, марин, терран, имба'],
    [':reynor:', 'sc, стар, крафт, star, ск, близ, blizz, reynor, рейнор, марик, марин, терран, имба'],
    [':marik:', 'sc, стар, крафт, star, ск, близ, blizz, марик, марин, терран, имба'],
    [':fibo:', 'фибо, и так, fibo, мем, дизай'],
    [':fibod:', 'фибо, и так, fibod, танец, мем, дизай'],
    [':fffibo:', 'фибо, и так, fffibo, мем, дизай'],
    [':ledokol:', 'ledokol, ледокол, лаг, мем, трактор'],
    [':lk:', 'ledokol, ледокол, лаг, мем, корабль, атом'],
    [':deckard:', 'diablo, диабло, близ, blizz, deckard, декард'],
    [':tirael:', 'diablo, диабло, близ, blizz, tirael, тираэль'],
    [':diablo:', 'diablo, диабло, близ, blizz'],
    [':gold:', 'diablo, диабло, близ, blizz, gold, голд, золот, богат'],
    [':moo:', 'diablo, диабло, близ, blizz, moo, коров'],
    [':mana:', 'diablo, диабло, близ, blizz, mana, мана'],
    [':valla:', 'diablo, диабло, близ, blizz, valla'],
    
]);
/**
 * Запуск основного функционала модуля.
 *
 * @param {Element} mainContainer
 */
function GoodGameSmileSearchProccesing(mainContainer) {
    const smileBtn = document.querySelector('[ng-click="vm.toggleSmiles()"]');
    const inputChat = document.querySelector('.textarea[chat-input]');
    const smileListFirst = mainContainer.querySelector(".smile-list");
    const smileBlocks = GoodGameSmileSearchGetSmileBlocks(mainContainer);
    const smileBlocks2 = mainContainer.querySelectorAll('.smiles-list-block');

    GoodGameSmilEventlistnerAll(smileBlocks);
    //загрузка избранного
    let favourites = localStorage.getItem('fav');
    if (favourites != undefined){
        smilesTags.set('fav', favourites);
    }
   
    //создание таб меню для паков
    const tab = document.createElement('div');
    tab.className = 'menu-tab';
    smileListFirst.prepend(tab);


    //загрузка паков смайлов стримеров
    smileBlocks2.forEach((el) => {
    let name = el.querySelectorAll('.streamer-name');
    let smlss = el.querySelectorAll('.smile-block');
    let premSmiles = ""
    let strmname
    let preview = ""
    name.forEach((el) =>{
        strmname = el.textContent
    });
    if (strmname != "Любимые" && strmname != "Общие"){
    smlss.forEach((el) =>{
        if (premSmiles == ""){
            premSmiles = el.querySelector("img").title + ",";
            preview = el.querySelector("img").title.replace(/\:/g,'');
        }else{
            premSmiles += el.querySelector("img").title + ",";
        }
        smilesDesc.set(el.querySelector("img").title, strmname + "," + el.querySelector("img").title.replace(/\:/g,''))
    });
   //console.log(strmname , premSmiles);
    smilesTags.set("https://static.goodgame.ru/images/smiles/"+strmname+"/"+preview+".png" , premSmiles);
    }
    });
    // создание кнопок выбора паков и ивентов для них
    for (let [key, value] of smilesTags) {
        let img = document.createElement('img');
        if (key.includes('https')){
            img.src = key;
        }else{
            img.src ='https://static.goodgame.ru/images/smiles/'+key+'.png';
        }
        const button = document.createElement("button");
        button.id = key;
        button.className = 'btn btn-blue'
        button.appendChild(img);
        tab.appendChild(button);
        if (key == "all"){
          img.src = "";
          img.className = 'icon icon-smilemenu-icon'
          const cssListActive = "search-smile-list-active";

          button.addEventListener('click', function(){
          mainContainer.classList.remove(cssListActive);
          GoodGameSmileSearchShowAll(smileBlocks);
          });
          continue;  
        }
        if (key == "fav"){
            img.src = "";
            img.className = 'icon icon-star';
        }
        button.addEventListener('click', function(){
            if (key == 'fav'){
                favActive = true;
            }else{
                favActive = false
            }
            let keycode = key;
            let smlscodes = smilesTags.get(key);//value;
            const cssListActive = "search-smile-list-active";
            mainContainer.classList.add(cssListActive);
            GoodGameSmileSelectFilterStart(smileBlocks, smlscodes);
        }) 
    }
    // Создаём поле для ввода поисковой фразы
    const boxSearch = document.createElement("input");
    boxSearch.type = "text";
    boxSearch.placeholder = "Поиск смайла";
    boxSearch.classList.add("search-smile");
    
    // Добавляет поле в вёрстку чата
    smileListFirst.prepend(boxSearch);

    // При вводе поисковой фразы фильтруем смайлы
    boxSearch.addEventListener('input', function () {
        const cssListActive = "search-smile-list-active";
        const smileBlocks = GoodGameSmileSearchGetSmileBlocks(mainContainer);
        favActive = false;
        if (this.value) {
            mainContainer.classList.add(cssListActive);
            GoodGameSmileSearchFilterStart(smileBlocks, this.value);
        } else {
            mainContainer.classList.remove(cssListActive);
            GoodGameSmileSearchShowAll(smileBlocks);
        }
    });

    // При нажатии Tab и Escape скрываем селектор смайлов и возвращаем фокус в поле ввода сообщения
    boxSearch.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            smileBtn.click();
            setTimeout(function () {
                inputChat.focus();
                inputChat.click();

                /*const range = document.createRange();
                range.selectNodeContents(inputChat);
                range.collapse(false);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);*/
            }, 100);
        }
    });

    // При отображении чата делаем фокус внутри поля поиска
    inputChat.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            GoodGameSmileSearchFocusInput(boxSearch);
        }
    });
    smileBtn.addEventListener('click', function () {
        GoodGameSmileSearchFocusInput(boxSearch);
    });
}

/**
 * Получает все доступные пользователю смайлы.
 *
 * Подобное получение (постоянный поиск в DOM) блоков не очень производительное,
 * но зато позволяет избежать ситуаций не пападания каких-то смайлов в список.
 *
 * @param {Element} mainContainer
 * @return {NodeList}
 */
function GoodGameSmileSearchGetSmileBlocks(mainContainer) {
    return mainContainer.querySelectorAll('.smile-block');
}

/**
 * Фокусирует указатель для набора тексте в поле поиска.
 * Задержка используется, так как открытие попапа со смайлами и нашим полем не мгновенное,
 * а поле может иметь фокус только, если оно отображено.
 *
 * @param {Element} boxSearch
 */
function GoodGameSmileSearchFocusInput(boxSearch) {
    setTimeout(function () {
        boxSearch.focus();
        boxSearch.select();
    }, 100);
}

/**
 * Отображает все смайлы.
 *
 * @param {NodeList} elements
 */
function GoodGameSmileSearchShowAll(elements) {
    elements.forEach((el) => {
        el.classList.remove("hide");
    });
}

/**
 * Скрывает все смайлы.
 *
 * @param {NodeList} elements
 */
function GoodGameSmileSearchHideAll(elements) {
    elements.forEach((el) => {
        el.classList.add("hide");
    });
}

//Добавляет слушателя всем смайлам
function GoodGameSmilEventlistnerAll(elements) {
    elements.forEach((el) => {
        if (el.addEventListener) {
            el.addEventListener('contextmenu', function(e) {
             let smilecode = el.querySelector("img").title;
              console.log("Add to favourites ", smilecode)
              let favourites = smilesTags.get('fav');
              console.log(favourites);
              if (favourites.indexOf(smilecode) == -1){
                console.log("add to favourites ", smilecode)
                favourites += smilecode + ",";
                localStorage.setItem('fav', favourites)
                smilesTags.set('fav', favourites);
              }else{
                if (favActive){
                favourites = favourites.replace(smilecode+",", '');
                localStorage.setItem('fav', favourites)
                smilesTags.set('fav', favourites);
                el.classList.add("hide");
                }
              }
              e.preventDefault();
            }, false);
          } else {
            el.attachEvent('oncontextmenu', function() {
              window.event.returnValue = false;
            });
          }
    });
}

/**
 * Проверяет, соответствует ли смайл поисковой фразе или нет.
 *
 * @param {string} key
 * @param {string} word
 * @return {boolean}
 */
function GoodGameSmileSearchIsShow(key, word) {
    let smileDesc = smilesDesc.get(key);

    if (smileDesc === undefined) {
        return false;
    }

    return -1 !== smileDesc.indexOf(word);
}

/**
 * Запускает процесс фильтрации смайлов.
 *
 * @param {NodeList} elements
 * @param {string} word
 */
function GoodGameSmileSearchFilterStart(elements, word) {
    GoodGameSmileSearchHideAll(elements);

    elements.forEach((el) => {
        let smileKey = el.querySelector("img").title;

        if (GoodGameSmileSearchIsShow(smileKey, word)) {
            el.classList.remove("hide");
        } else {
            el.classList.add("hide");
        }
    });
}

//функция отображения смайлов выбранного пака
function GoodGameSmileSelectFilterStart(elements, word) {
    GoodGameSmileSearchHideAll(elements);
    let smls = word.split(',');
    smls.forEach((elmnt)=> {
    word = elmnt;
    //console.log(word);
    elements.forEach((el) => {
        let smileKey = el.querySelector("img").title;
        if (smileKey === word){
            el.classList.remove("hide");
        }
    });
});

}

GoodGameSmileSearchInit();