export const smilesCategories = new Map(
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