
// Data extracted from PDF (Dictionary) - Keeping this as is
const dictionaryData = [
    { term: "特定技能評価試験", kana: "とくていぎのうひょうかしけん", sinhala: "විශේෂිත කුසලතා ඇගයීම් විභාගය", meaning: "Tokutei Ginou Skill Evaluation Exam" },
    { term: "航空機", kana: "こうくうき", sinhala: "ගුවන් යානය", meaning: "Aircraft" },
    { term: "安全", kana: "あんぜん", sinhala: "ආරක්ෂාව", meaning: "Safety. The most important priority." },
    { term: "コクピット", kana: "こくぴっと", sinhala: "නියමු කුටිය", meaning: "Cockpit. Has many blind spots." },
    { term: "マーシャラ", kana: "まーしゃら", sinhala: "මාෂල් / සංඥාකරු", meaning: "Marshaller. Guides the aircraft." },
    { term: "アンチコリジョン・ライト", kana: "あんちこりじょん・らいと", sinhala: "ගැටුම් නාශක විදුලි පහන්", meaning: "Anti-collision Light (Red blinking light)" },
    { term: "翼端灯", kana: "よくたんとう", sinhala: "පියාපත් තුඩ විදුලි පහන්", meaning: "Wing Tip Lights (Right: Green, Left: Red)" },
    { term: "チョック", kana: "ちょっく", sinhala: "රෝද කුට්ටි", meaning: "Chocks (Wheel stoppers)" },
    { term: "ブラスト", kana: "ぶらすと", sinhala: "පිපිරුම් / පිටාර", meaning: "Blast (Engine Exhaust). Dangerous wind." },
    { term: "インテーク", kana: "いんてーく", sinhala: "ඉන්සට්ටක් / චූෂණ", meaning: "Intake (Engine Inlet). Suction danger." },
    { term: "危険物", kana: "きけんぶつ", sinhala: "අන්තරායකර භාණ්ඩ", meaning: "Dangerous Goods" },
    { term: "標準IDカード", kana: "ひょうじゅんIDかーど", sinhala: "සම්මත හැඳුනුම්පත", meaning: "Standard ID Card" },
    { term: "保護具", kana: "ほごぐ", sinhala: "ආරක්ෂක උපකරණ", meaning: "Protective Gear (PPE)" },
    { term: "ウエイト・アンド・バランス", kana: "うえいと・あんど・ばらんす", sinhala: "බර සහ සමබරතාවය", meaning: "Weight and Balance" },
    { term: "タラップ", kana: "たらっぷ", sinhala: "පඩි පෙළ", meaning: "Passenger Steps" },
    { term: "滑走路", kana: "かっそうろ", sinhala: "ගුවන් පථය", meaning: "Runway" },
    { term: "誘導路", kana: "ゆうどうろ", sinhala: "ටැක්සි මාර්ගය", meaning: "Taxiway" },
    { term: "エプロン", kana: "えぷろん", sinhala: "ගුවන් යානා අංගනය", meaning: "Apron/Ramp" },
    { term: "着眼点", kana: "ちゃくがんてん", sinhala: "අවධානය යොමු කළ යුතු කරුණු", meaning: "Points to observe" },
    { term: "指差呼称", kana: "ゆびさしこしょう", sinhala: "ඇඟිල්ල දිගු කර පෙන්වා දීම", meaning: "Pointing and Calling (Yubisashi Koshou)" },
    { term: "ヒヤリ・ハット", kana: "ひやり・はっと", sinhala: "අතපසුවීේ / අනූනවයෙන් බේරීම", meaning: "Near-miss / Hiyari Hatto" },
    { term: "火薬類", kana: "かやくるい", sinhala: "පුපුරණ ද්‍රවය", meaning: "Explosives" },
    { term: "高圧ガス", kana: "こうあつがす", sinhala: "අධි පීඩන්‍ වායු", meaning: "High Pressure Gas" },
    { term: "引火性液体", kana: "いんかせいえきたい", sinhala: "දැසවන්‍සුළු ියර", meaning: "Flammable Liquids" },
    { term: "腐食性物質", kana: "ふしょくせいぶっしつ", sinhala: "විඛාදන්‍ ද්‍රේය", meaning: "Corrosives" },
    { term: "車両", kana: "しゃりょう", sinhala: "වාහනය", meaning: "Vehicle" }
];

// Expanded Quiz Data: 10 Questions per Section
const quizData = {
    "section1": {
        title: "Paper 1: Grand Handling Test (Paper 1 - グラウンドハンドリング試験)",
        questions: [
            {
                q_jp: "ジェットエンジンの前方（吸気側）は、安全なので近づいてもよい。<br><span class='jp-sub'>じぇっとえんじん の ぜんぽう (きゅうきがわ) は、あんぜん なので ちかづいても よい</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "ජෙට් එන්ජිම ඉදිරිපස (Intake) ආරක්ෂිත නිසා ළං වුවාට කමක් නැත.", options_si: ["ඔව් (Yes)", "නැත (No) - එය ඉතා භයානකයි"] }
            },
            {
                q_jp: "作業中に帽子が飛ばされても、エンジンの前方に取りに行ってはいけない。<br><span class='jp-sub'>さぎょうちゅう に ぼうし が とばされても、えんじん の ぜんぽう に とりに いっては いけない</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "වැඩ කරන අතරතුර තොප්පිය ගැලවී ගියත්, එන්ජිම ඉදිරිපසට එය ගැනීමට යා නොයුතුය.", options_si: ["ඔව් (Yes) - අනිවාර්යයෙන්ම නොයා යුතුය", "නැත (No)"] }
            },
            {
                q_jp: "エンジンのブラスト（排気）のみが危険であり、吸気側は危険ではない。<br><span class='jp-sub'>えんじん の ぶらすと (はいき) のみ が きけん であり、きゅうきがわ は きけん では ない</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "එන්ජින් Blast (පිටුපස) පමණක් භයානක වන අතර, Intake (ඉදිරිපස) භයානක නැත.", options_si: ["ඔව් (Yes)", "නැත (No) - දෙපැත්තම භයානකයි"] }
            },
            {
                q_jp: "エンジン始動前に、吸い込まれるおそれのある物が周囲にないか確認しなければならない。<br><span class='jp-sub'>えんじん しどうまえ に、すいこまれる おそれ の ある もの が しゅうい に ないか かくにん しなければ ならない</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "එන්ජිම පණගැන්වීමට පෙර, ඇදී යා හැකි දේවල් අවට තිබේදැයි පරීක්ෂා කළ යුතුය.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "危険区域について十分な認識を持つことが大切である。<br><span class='jp-sub'>きけん くいき に ついて じゅうぶん な にんしき を もつ こと が たいせつ である</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "අනතුරුදායක කලාප (Danger Zones) ගැන හොඳ අවබෝධයක් තිබීම වැදගත්ය.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "エンジンの前方は、空気が強く吸い込まれる側である。<br><span class='jp-sub'>えんじん の ぜんぽう は、くうき が つよく すいこまれる がわ である</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "එන්ජිම ඉදිරිපස යනු හුළං තදින් ඇතුලට අදින පැත්තයි.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "エンジンの吸気側では、軽いものでも吸い込まれるおそれがある。<br><span class='jp-sub'>えんじん の きゅうきがわ では、かるい もの でも すいこまれる おそれ が ある</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "එන්ජින් Intake එක අසලදී, සැහැල්ලු දේවල් පවා ඇදී යාමේ අවදානමක් ඇත.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "吸気側は「INLET」と呼ばれる。<br><span class='jp-sub'>きゅうきがわ は「INLET」と よばれる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "Intake පැත්ත 'INLET' ලෙසද හැඳින්වේ.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "吸気側の危険を防ぐため、立入禁止区域が設定されている。<br><span class='jp-sub'>きゅうきがわ の きけん を ふせぐ ため、たちいり きんし くいき が せってい されている</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "Intake අනතුර වැළැක්වීමට, ඇතුළු වීම තහනම් කලාප (Restricted Areas) පිහිටුවා ඇත.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "エンジンが停止していても、吸気側に近づいても完全に安全である。<br><span class='jp-sub'>えんじん が ていし して いても、きゅうきがわ に ちかづいても かんぜん に あんぜん である</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "එන්ජිම නතර කර තිබුණත්, Intake එකට ළං වීම සම්පූර්ණයෙන්ම ආරක්ෂිතයි.", options_si: ["ඔව් (Yes)", "නැත (No) - යම් වෙලාවක් යනතුරු (Windmilling) එය භයානක විය හැක"] }
            },
            {
                q_jp: "爆破物や引火しやすいものを航空機に積むことは、法律で禁止されている。<br><span class='jp-sub'>ばくはぶつ や いんか しやすい もの を こうくうき に つむ こと は、ほうりつ で きんし されている</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "පුපුරණ ද්‍රව්‍ය හෝ ගිනිගන්නා සුළු දේවල් යානයට පැටවීම නීතියෙන් තහනම්ය.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "危険物を積むことが禁止されているのは、機体を損傷させるおそれがあるからである。<br><span class='jp-sub'>きけんぶつ を つむ こと が きんし されている の は、きたい を そんしょう させる おそれ が ある から である</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "අනතුරුදායක භාණ්ඩ පැටවීම තහනම් කර ඇත්තේ ඒවා මගින් යානයට හානි සිදුවිය හැකි නිසාය.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "特別な許可（特例）がある場合は、危険物を積むことができる場合もある。<br><span class='jp-sub'>とくべつ な きょか (とくれい) が ある ばあい は、きけんぶつ を つむ こと が できる ばあい も ある</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "විශේෂ අවසරයක් (Special Permission) ඇති විට, අනතුරුදායක භාණ්ඩ පැටවීමට හැකි අවස්ථාද ඇත.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "航空機運航において、保安検査（X線検査）は実施しなくてもよい。<br><span class='jp-sub'>こうくうき うんこう に おいて、ほあん けんさ (Xせん けんさ) は じっし しなくても よい</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "ගුවන් යානා මෙහෙයුම් වලදී, ආරක්ෂක පරීක්ෂණ (Security Check / X-Ray) සිදු කිරීම අවශ්‍ය නොවේ.", options_si: ["ඔව් (Yes)", "නැත (No) - අනිවාර්යයෙන් කළ යුතුයි"] }
            },
            {
                q_jp: "手荷物のみを運送することは禁止される場合がある。<br><span class='jp-sub'>てにもつ のみ を うんそう する こと は きんし される ばあい が ある</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "මගියා නොමැතිව, මගී බඩු (Hand Carry) පමණක් යැවීම තහනම් විය හැක.", options_si: ["ඔව් (Yes) - ආරක්ෂක හේතු මත", "නැත (No)"] }
            },
            {
                q_jp: "貨物輸送では、荷送人（送り主）との確認項目を義務づけている。<br><span class='jp-sub'>かもつ ゆそう では、におくりにん (おくりぬし) との かくにん こうもく を ぎむづけて いる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "බඩු ප්‍රවාහනයේදී, යවන්නා (Shipper) සමග තහවුරු කරගත යුතු කරුණු අනිවාර්ය කර ඇත.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "航空機の安全運航を保つために、危険物の取り扱いに関する規定がある。<br><span class='jp-sub'>こうくうき の あんぜん うんこう を たもつ ため に、きけんぶつ の とりあつかい に かんする きてい が ある</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "යානයේ ආරක්ෂාව සඳහා, Dangerous Goods හැසිරවීම පිළිබඳ නීති රීති ඇත.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "爆破物や銃砲刀剣類は、特別な検査を受けなくても積むことができる。<br><span class='jp-sub'>ばくはぶつ や じゅうほう とうけんるい は、とくべつ な けんさ を うけなくても つむ こと が できる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "පුපුරණ ද්‍රව්‍ය හෝ ආයුධ, විශේෂ පරීක්ෂාවකින් තොරව වුවද පැටවිය හැක.", options_si: ["ඔව් (Yes)", "නැත (No) - විශේෂ පරීක්ෂා අවශ්‍යයි"] }
            },
            {
                q_jp: "危険物を積むことは、航空機の安全運航に役立つ。<br><span class='jp-sub'>きけんぶつ を つむ こと は、こうくうき の あんぜん うんこう に やくだつ</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "Dangerous Goods පැටවීම යානයේ ආරක්ෂාවට උදව් වේ.", options_si: ["ඔව් (Yes)", "නැත (No) - එය අවදානමක් එකතු කරයි"] }
            },
            {
                q_jp: "安全運航を保つためには、保安検査の実施が重要である。<br><span class='jp-sub'>あんぜん うんこう を たもつ ため に は、ほあん けんさ の じっし が じゅうよう である</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "ආරක්ෂිත ගුවන් ගමනක් සඳහා, Security Check කිරීම ඉතා වැදගත් වේ.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "航空機の重量が超過すると、離着陸速度や距離が増える。<br><span class='jp-sub'>こうくうき の じゅうりょう が ちょうか する と、りちゃくりく そくど や きょり が ふえる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "ගුවන් යානයේ බර වැඩි වුවහොත් (Overweight), Takeoff/Landing සඳහා යන දුර සහ වේගය වැඩි වේ.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "重量超過は、燃料消費量の減少につながる。<br><span class='jp-sub'>じゅうりょう ちょうか は、ねんりょう しょうひりょう の げんしょう に つながる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "බර වැඩිවීම (Overweight), ඉන්ධන (Fuel) ඉතිරි වීමට හේතු වේ.", options_si: ["ඔව් (Yes)", "නැත (No) - ඉන්ධන දහනය වැඩි වේ"] }
            },
            {
                q_jp: "重量超過は、航空機の性能に悪影響を与える。<br><span class='jp-sub'>じゅうりょう ちょうか は、こうくうき の せいのう に あくえいきょう を あたえる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "Overweight (බර වැඩිවීම) ගුවන් යානයේ ක්‍රියාකාරිත්වයට අහිතකර ලෙස බලපායි.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "重量が規定値を超えていないか確認することは、航空法で義務づけられている。<br><span class='jp-sub'>じゅうりょう が きていち を こえて いない か かくにん する こと は、こうくうほう で ぎむづけられて いる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "බර සීමාව ඉක්මවා නැද්ද යන්න පරීක්ෂා කිරීම ගුවන් නීතියෙන් (Aviation Law) අනිවාර්ය කර ඇත.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "悪天候や強い向かい風の中では、燃料を余分に積む必要がある。<br><span class='jp-sub'>あくてんこう や つよい むかいかぜ の なか で は、ねんりょう を よぶん に つむ ひつよう が ある</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "අයහපත් කාලගුණයේදී හෝ තද හුළං ඇති විට, අමතර ඉන්ධන (Extra Fuel) පිරවීම අවශ්‍ය වේ.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "燃料を余分に積む場合、貨物や乗客を減らすことがある。<br><span class='jp-sub'>ねんりょう を よぶん に つむ ばあい、かもつ や じょうきゃく を へらす こと が ある</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "Extra Fuel පිරවීමට සිදුවුවහොත්, බඩු හෝ මගීන් සංඛ්‍යාව අඩු කිරීමට සිදුවිය හැක.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "航空機の重心を確認することは、フライトプラン作成に関係ない。<br><span class='jp-sub'>こうくうき の じゅうしん を かくにん する こと は、ふらいと ぷらん さくせい に かんけい ない</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "Center of Gravity (CG) පරීක්ෂා කිරීම Flight Plan සෑදීමට අදාළ නැත.", options_si: ["ඔව් (Yes)", "නැත (No) - එය ඉතා වැදගත් වේ"] }
            },
            {
                q_jp: "搭乗人数・手荷物・貨物の重量などは運航担当部署に報告しなければならない。<br><span class='jp-sub'>とうじょう にんずう・てにもつ・かもつ の じゅうりょう など は うんこう たんとう ぶしょ に ほうこく しなければ ならない</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "මගීන් ගණන, බෑග් සහ බඩු වල බර Operations අංශයට වාර්තා කළ යුතුය.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            },
            {
                q_jp: "燃料を多く積むほど、航続距離（飛べる距離）は短くなる。<br><span class='jp-sub'>ねんりょう を おおく つむ ほど、こうぞく きょり (とべる きょり) は みじかく なる</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 1,
                translation: { q_si: "තෙල් වැඩියෙන් පුරවන තරමට, යානයට යා හැකි දුර ප්‍රමාණය අඩු වේ.", options_si: ["ඔව් (Yes)", "නැත (No) - තෙල් වැඩි නම් දුර වැඩියෙන් යා හැක"] }
            },
            {
                q_jp: "ウエイト・アンド・バランスの管理は、安全運航の基本である。<br><span class='jp-sub'>うえいと・あんど・ばらんす の かんり は、あんぜん うんこう の きほん である</span>",
                options_jp: ["はい (Yes)<br><span class='jp-sub'>はい</span>", "いいえ (No)<br><span class='jp-sub'>いいえ</span>"],
                correct: 0,
                translation: { q_si: "Weight & Balance නිවැරදිව තබා ගැනීම ආරක්ෂිත ගුවන් ගමනක මූලික පදනමයි.", options_si: ["ඔව් (Yes)", "නැත (No)"] }
            }
        ]
    },
    "section2": {
        title: "Section 2: Accident Prevention (おもな事故・トラブルの防止)",
        questions: [
            {
                q_jp: "ヒヤリ・ハットの報告をする理由は？<br><span class='jp-sub'>ひやり・はっと の ほうこく を する りゆう は</span>",
                options_jp: ["上司に怒られるため<br><span class='jp-sub'>じょうし に おこられる ため</span>", "再発防止のため<br><span class='jp-sub'>さいはつ ぼうし の ため</span>", "ボーナスをもらうため<br><span class='jp-sub'>ぼーなす を もらう ため</span>", "同僚を責めるため<br><span class='jp-sub'>どうりょう を せめる ため</span>"],
                correct: 1,
                translation: { q_si: "Hiyari Hatto Report කරන්නේ ඇයි?", options_si: ["බැනුම් අහන්න", "නැවත සිදුවීම වැළැක්වීමට", "Bonus ලබාගන්න", "යහළුවන්ට දොස් කියන්න"] }
            },
            {
                q_jp: "指差呼称（ゆびさしこしょう）の正しいやり方は？<br><span class='jp-sub'>ゆびさし こしょう の ただしい やりかた は</span>",
                options_jp: ["目で見るだけ<br><span class='jp-sub'>め で みる だけ</span>", "指を差し、声に出す<br><span class='jp-sub'>ゆび を さし、こえ に だす</span>", "頭で考えるだけ<br><span class='jp-sub'>あたま で かんがえる だけ</span>", "手だけ動かす<br><span class='jp-sub'>て だけ うごかす</span>"],
                correct: 1,
                translation: { q_si: "Yubisashi Koshou නිවැරදිව කරන්නේ කෙසේද?", options_si: ["ඇසින් බැලීම පමණයි", "ඇඟිල්ල දිගු කර කටින් කීම", "සිතින් සිතීම පමණයි", "අත පමණක් සෙලවීම"] }
            },
            {
                q_jp: "ヒューマンエラー（人為的ミス）を防ぐには？<br><span class='jp-sub'>ひゅーまんえらー を ふせぐ に は</span>",
                options_jp: ["一人で悩む<br><span class='jp-sub'>ひとりで なやむ</span>", "ダブルチェック（二重確認）<br><span class='jp-sub'>だぶる ちぇっく</span>", "急いで終わらせる<br><span class='jp-sub'>いそいで おわらせる</span>", "何もしない<br><span class='jp-sub'>なにも しない</span>"],
                correct: 1,
                translation: { q_si: "Human Error (මිනිස් වැරදි) වළක්වා ගන්නේ කෙසේද?", options_si: ["තනිව කල්පනා කිරීම", "Double Check (දෙවරක් පරීක්ෂා කිරීම)", "ඉක්මනින් අවසන් කිරීම", "කිසිවක් නොකිරීම"] }
            },
            {
                q_jp: "強風のときに注意すべきことは？<br><span class='jp-sub'>きょうふう の とき に ちゅうい すべき こと は</span>",
                options_jp: ["ドアの開閉に注意する<br><span class='jp-sub'>どあ の かいへい に ちゅうい する</span>", "いつも通り作業する<br><span class='jp-sub'>いつも どおり さぎょう する</span>", "帽子を脱ぐ<br><span class='jp-sub'>ぼうし を ぬぐ</span>", "走って作業する<br><span class='jp-sub'>はしって さぎょう する</span>"],
                correct: 0,
                translation: { q_si: "තද සුළං (Strong Wind) ඇති විට සැලකිලිමත් විය යුත්තේ?", options_si: ["දොරවල් ඇරීම/වැසීම ගැන", "සාමාන්‍ය පරිදි වැඩ කිරීම", "තොප්පිය ගැලවීම", "දිව යමින් වැඩ කිරීම"] }
            },
            {
                q_jp: "夜間作業で重要なことは？<br><span class='jp-sub'>やかん さぎょう で じゅうよう な こと は</span>",
                options_jp: ["静かに行動する<br><span class='jp-sub'>しずか に こうどう する</span>", "視認性（見えること）の確保<br><span class='jp-sub'>しにんせい の かくほ</span>", "ライトを消す<br><span class='jp-sub'>らいと を けす</span>", "早く帰る<br><span class='jp-sub'>はやく かえる</span>"],
                correct: 1,
                translation: { q_si: "රාත්‍රී වැඩ මුරයේදී (Night Operation) වැදගත් වන්නේ?", options_si: [" නිශ්ශබ්දව සිටීම", "පෙනීම තහවුරු කර ගැනීම (Visibility)", "ලයිට් නිවා දැමීම", "ගෙදර යාම"] }
            },
            {
                q_jp: "基本動作（きほんどうさ）を守らないとどうなりますか？<br><span class='jp-sub'>きほん どうさ を まもらない と どう なります か</span>",
                options_jp: ["事故のリスクが高まる<br><span class='jp-sub'>じこ の りすく が たかまる</span>", "作業が早くなる<br><span class='jp-sub'>さぎょう が はやく なる</span>", "褒められる<br><span class='jp-sub'>ほめられる</span>", "給料が上がる<br><span class='jp-sub'>きゅうりょう が あがる</span>"],
                correct: 0,
                translation: { q_si: "මූලික පියවර (Basic Actions/SOP) නොපිළිපැදීමෙන් සිදුවන්නේ?", options_si: ["අනතුරු අවදානම වැඩි වේ", "වැඩ ඉක්මන් වේ", "ප්‍රශංසා ලැබේ", "වැටුප් වැඩි වේ"] }
            },
            {
                q_jp: "「だろう運転」は危険です。正しい心構えは？<br><span class='jp-sub'>だろう うんてん は きけん です。ただしい こころがまえ は</span>",
                options_jp: ["誰も来ないだろう<br><span class='jp-sub'>だれも こない だろう</span>", "止まるだろう<br><span class='jp-sub'>とまる だろう</span>", "かもしれない運転<br><span class='jp-sub'>かもしれない うんてん</span>", "大丈夫だろう<br><span class='jp-sub'>だいじょうぶ だろう</span>"],
                correct: 2,
                translation: { q_si: "'Darou Unmei' (වෙන්න පුළුවන් කියලා හිතාගෙන එලවීම) භයානකයි. නිවැරදි ක්‍රමය?", options_si: ["කවුරුත් එන එකක් නෑ", "එයා නවතීවි", "Kamoshirenai (සමහරවිට අනතුරක් වෙන්න පුළුවන් කියලා හිතාගෙන එලවීම)", "කමක් නැති වෙයි"] }
            },
            {
                q_jp: "雷（かみなり）が発生したときはどうしますか？<br><span class='jp-sub'>かみなり が はっせい した とき は どうしますか</span>",
                options_jp: ["木の下に隠れる<br><span class='jp-sub'>き の した に かくれる</span>", "作業を中断し安全な場所に避難<br><span class='jp-sub'>さぎょう を ちゅうだん し あんぜん な ばしょ に ひなん</span>", "傘をさす<br><span class='jp-sub'>かさ を さす</span>", "無視して続ける<br><span class='jp-sub'>むし して つづける</span>"],
                correct: 1,
                translation: { q_si: "අකුණු (Lightning) ඇති වූ විට කුමක් කළ යුතුද?", options_si: ["ගහක් යටට යාම", "වැඩ නවතා ආරක්ෂිත තැනකට යාම", " කුඩයක් ඉහළා ගැනීම", "ගණන් නොගෙන දිගටම වැඩ කිරීම"] }
            },
            {
                q_jp: "「三現主義（さんげんしゅぎ）」に含まれないものは？<br><span class='jp-sub'>さんげん しゅぎ に ふくまれない もの は</span>",
                options_jp: ["現場（げんば）<br><span class='jp-sub'>げんば</span>", "現物（げんぶつ）<br><span class='jp-sub'>げんぶつ</span>", "現実（げんじつ）<br><span class='jp-sub'>げんじつ</span>", "現金（げんきん）<br><span class='jp-sub'>げんきん</span>"],
                correct: 3,
                translation: { q_si: "Sangen Shugi (Three Actuals) ට අදාළ නොවන්නේ?", options_si: ["Genba (ස්ථානය)", "Genbutsu (ද්‍රව්‍ය/තත්වය)", "Genjitsu (ඇත්ත)", "Genkin (මුදල්)"] }
            },
            {
                q_jp: "事故が起きたとき、最初にすることは？<br><span class='jp-sub'>じこ が おきた とき、さいしょ に する こと は</span>",
                options_jp: ["逃げる<br><span class='jp-sub'>にげる</span>", "隠す<br><span class='jp-sub'>かくす</span>", "報告する<br><span class='jp-sub'>ほうこく する</span>", "写真を撮る<br><span class='jp-sub'>しゃしん を とる</span>"],
                correct: 2,
                translation: { q_si: "අනතුරක් වූ විට මුලින්ම කළ යුත්තේ?", options_si: ["පැන දුවනවා", "සඟවනවා", "වාර්තා කරනවා (Report)", "Photo ගන්නවා"] }
            }
        ]
    },
    // ... Additional sections expanded similarly ...
    "section3": {
        title: "Section 3: GSE Operations (機材の取り扱い)",
        questions: [
            {
                q_jp: "車両を航空機に近づける際、一旦停止しなければならない距離は？<br><span class='jp-sub'>しゃりょう を こうくうき に ちかづける さい、いったん ていし しなければならない きょり は</span>",
                options_jp: ["10メートル<br><span class='jp-sub'>10 めーとる</span>", "5メートル<br><span class='jp-sub'>5 めーとる</span>", "直前まで<br><span class='jp-sub'>ちょくぜん まで</span>", "1メートル<br><span class='jp-sub'>1 めーとる</span>"],
                correct: 1,
                translation: { q_si: "වාහනයක් යානයට ළං කරන විට නැවැත්විය යුතු දුර (Safety Stop)?", options_si: ["මීටර 10", "මීටර 5", "ළඟටම යනකම්", "මීටර 1"] }
            },
            {
                q_jp: "GSE車両の制限速度（エプロン内）は一般的に？<br><span class='jp-sub'>GSE しゃりょう の せいげん そくど (えぷろん ない) は いっぱんてき に</span>",
                options_jp: ["時速100km<br><span class='jp-sub'>じそく 100km</span>", "時速30km（場所による）<br><span class='jp-sub'>じそく 30km</span>", "制限なし<br><span class='jp-sub'>せいげん なし</span>", "時速5kmのみ<br><span class='jp-sub'>じそく 5km のみ</span>"],
                correct: 1,
                translation: { q_si: "Apron එක තුළ GSE වාහන වල වේග සීමාව සාමාන්‍යයෙන්?", options_si: ["100 km/h", "30 km/h (බොහෝ විට)", "සීමාවක් නෑ", "5 km/h පමණයි"] }
            },
            {
                q_jp: "パッセンジャーステップ車は何のために使われますか？<br><span class='jp-sub'>ぱっせんじゃーすてっぷ しゃ は なんのために つかわれますか</span>",
                options_jp: ["貨物の積み込み<br><span class='jp-sub'>かもつ の つみこみ</span>", "乗客の乗り降り<br><span class='jp-sub'>じょうきゃく の のりおり</span>", "燃料の給油<br><span class='jp-sub'>ねんりょう の きゅうゆ</span>", "機体の洗浄<br><span class='jp-sub'>きたい の せんじょう</span>"],
                correct: 1,
                translation: { q_si: "Passenger Step භාවිතා කරන්නේ?", options_si: ["බඩු පැටවීමට", "මගීන් නැගීමට/බැසීමට", "තෙල් ගැසීමට", "සේදීමට"] }
            },
            {
                q_jp: "ハイリフトローダーの主な用途は？<br><span class='jp-sub'>はいりふとろーだー の おもな ようと は</span>",
                options_jp: ["機内食を運ぶ<br><span class='jp-sub'>きないしょく を はこぶ</span>", "コンテナの積み下ろし<br><span class='jp-sub'>こんてな の つみおろし</span>", "乗客を運ぶ<br><span class='jp-sub'>じょうきゃく を はこぶ</span>", "飛行機を牽引する<br><span class='jp-sub'>ひこうき を けんいん する</span>"],
                correct: 1,
                translation: { q_si: "High Lift Loader හි ප්‍රධාන කාර්යය?", options_si: ["කෑම ගෙන යාම", "Container පැටවීම/බෑම", "මගීන් ගෙන යාම", "යානය ඇදගෙන යාම"] }
            },
            {
                q_jp: "トーイングトラクターは何をする車ですか？<br><span class='jp-sub'>とーいんぐ とらくたー は なにを する くるま ですか</span>",
                options_jp: ["コンテナドーリーを牽引する<br><span class='jp-sub'>こんてな どーりー を けんいん する</span>", "空を飛ぶ<br><span class='jp-sub'>そら を とぶ</span>", "水を撒く<br><span class='jp-sub'>みず を まく</span>", "客室乗務員を運ぶ<br><span class='jp-sub'>きゃくしつ じょうむいん を はこぶ</span>"],
                correct: 0,
                translation: { q_si: "Towing Tractor (TT) මගින් කරන්නේ?", options_si: ["Container Dolly ඇදගෙන යාම", "පියාසර කිරීම", "වතුර ඉසීම", "Crew එක ගෙන යාම"] }
            },
            {
                q_jp: "ベルトローダー車は主に何を運びますか？<br><span class='jp-sub'>べるとろーだー しゃ は おもに なにを はこびますか</span>",
                options_jp: ["バラ積み貨物（バルク）<br><span class='jp-sub'>ばらづみ かもつ (ばるく)</span>", "大型コンテナ<br><span class='jp-sub'>おおがた こんてな</span>", "人間<br><span class='jp-sub'>にんげん</span>", "燃料<br><span class='jp-sub'>ねんりょう</span>"],
                correct: 0,
                translation: { q_si: "Belt Loader එකෙන් ප්‍රධාන වශයෙන් පටවන්නේ?", options_si: ["Bulk Cargo (කුඩා බඩු/බෑග්)", "ලොකු Container", "මිනිසුන්", "තෙල්"] }
            },
            {
                q_jp: "車両を駐車するときに必ずすることは？<br><span class='jp-sub'>しゃりょう を ちゅうしゃ する とき に かならず する こと は</span>",
                options_jp: ["エンジンをかけたままにする<br><span class='jp-sub'>えんじん を かけたまま に する</span>", "サイドブレーキと輪止め（チョーク）<br><span class='jp-sub'>さいど ぶれーき と わどめ (ちょーく)</span>", "窓を開ける<br><span class='jp-sub'>まど を あける</span>", "ライトをつける<br><span class='jp-sub'>らいと を つける</span>"],
                correct: 1,
                translation: { q_si: "වාහනයක් Park කරන විට අනිවාර්යයෙන් කළ යුත්තේ?", options_si: ["Engine එක On එකේ තැබීම", "Hand Brake සහ Wheel Chocks (වඩමේ) දැමීම", "ජනෙල් ඇරීම", "ලයිට් දැමීම"] }
            },
            {
                q_jp: "ガイドマン（誘導員）が必要なのはいつですか？<br><span class='jp-sub'>がいどまん (ゆうどういん) が ひつような の は いつですか</span>",
                options_jp: ["天気が良いとき<br><span class='jp-sub'>てんき が よい とき</span>", "車両をバック（後退）させるとき<br><span class='jp-sub'>しゃりょう を ばっく (こうたい) させる とき</span>", "前進するとき<br><span class='jp-sub'>ぜんしん する とき</span>", "休憩するとき<br><span class='jp-sub'>きゅうけい する とき</span>"],
                correct: 1,
                translation: { q_si: "Guide Man කෙනෙක් අවශ්‍ය වෙන්නේ කවදාද?", options_si: ["කාලගුණය හොඳ විට", "වාහනය පසුපසට ගන්නා විට (Reverse)", "ඉදිරියට යන විට", "විවේක ගන්නා විට"] }
            },
            {
                q_jp: "給水車（Water Service Truck）は何をしますか？<br><span class='jp-sub'>きゅうすいしゃ は なにを しますか</span>",
                options_jp: ["飲料水を供給する<br><span class='jp-sub'>いんりょうすい を きょうきゅう する</span>", "汚水を回収する<br><span class='jp-sub'>おすい を かいしゅう する</span>", "機体を洗う<br><span class='jp-sub'>きたい を あらう</span>", "燃料を入れる<br><span class='jp-sub'>ねんりょう を いれる</span>"],
                correct: 0,
                translation: { q_si: "Water Service Truck එකෙන් කරන්නේ?", options_si: ["බීමට ජලය සැපයීම", "කිළිටි වතුර ඉවත් කිරීම", "යානය සේදීම", "තෙල් ගැසීම"] }
            },
            {
                q_jp: "LAV（ラバトリーカー）の役割は？<br><span class='jp-sub'>らばとりーかー の やくわり は</span>",
                options_jp: ["機内食を運ぶ<br><span class='jp-sub'>きないしょく を はこぶ</span>", "汚水（トイレ）の処理<br><span class='jp-sub'>おすい (といれ) の しょり</span>", "荷物を運ぶ<br><span class='jp-sub'>にもつ を はこぶ</span>", "乗客を運ぶ<br><span class='jp-sub'>じょうきゃく を はこぶ</span>"],
                correct: 1,
                translation: { q_si: "Lavatory Service Truck (LAV) එකේ කාර්යය?", options_si: ["කෑම ගෙන යෑම", "වැසිකිළි අපද්‍රව්‍ය ඉවත් කිරීම", "බඩු ගෙන යෑම", "මගීන් ගෙන යෑම"] }
            }
        ]
    },
    "section4": {
        title: "Section 4: Marshalling (マーシャリング)",
        questions: [
            {
                q_jp: "マーシャラーの合図とパイロットの操作が異なるときは？<br><span class='jp-sub'>あ いず と ぱいろっと の そうさ が ことなる とき は</span>",
                options_jp: ["パイロットに従う<br><span class='jp-sub'>ぱいろっと に したがう</span>", "誘導を中止する（エマージェンシーストップ）<br><span class='jp-sub'>ゆうどう を ちゅうしする</span>", "大声で叫ぶ<br><span class='jp-sub'>おおごえ で さけぶ</span>", "そのまま続ける<br><span class='jp-sub'>そのまま つづける</span>"],
                correct: 1,
                translation: { q_si: "Marshaller ගේ සංඥාව සහ Pilot ගේ ක්‍රියාව වෙනස් නම්?", options_si: ["Pilot ට ඉඩ දෙනවා", "මඟ පෙන්වීම නවත්වනවා (Emergency Stop)", "කෑගසනවා", "දිගටම කරනවා"] }
            },
            {
                q_jp: "アンチコリジョンライト（衝突防止灯）の色は？<br><span class='jp-sub'>あんちこりじょんらいと の いろ は</span>",
                options_jp: ["青<br><span class='jp-sub'>あお</span>", "赤（点滅）<br><span class='jp-sub'>あか (てんめつ)</span>", "緑<br><span class='jp-sub'>みどり</span>", "白<br><span class='jp-sub'>しろ</span>"],
                correct: 1,
                translation: { q_si: "Anti-Collision Light (ACL) වර්ණය?", options_si: ["නිල්", "රතු (නිවෙන දැල්වෙන)", "කොළ", "සුදු"] }
            },
            {
                q_jp: "翼端灯（Nav Light）の右側の色は？<br><span class='jp-sub'>よくたんとう (Nav Light) の みぎがわ の いろ は</span>",
                options_jp: ["赤<br><span class='jp-sub'>あか</span>", "緑<br><span class='jp-sub'>みどり</span>", "白<br><span class='jp-sub'>しろ</span>", "黄<br><span class='jp-sub'>き</span>"],
                correct: 1,
                translation: { q_si: "දකුණු පියාපත් තුඩේ (Right Wing) Navigation Light වර්ණය?", options_si: ["රතු", "කොළ", "සුදු", "කහ"] }
            },
            {
                q_jp: "翼端灯（Nav Light）の左側の色は？<br><span class='jp-sub'>よくたんとう (Nav Light) の ひだりがわ の いろ は</span>",
                options_jp: ["赤<br><span class='jp-sub'>あか</span>", "緑<br><span class='jp-sub'>みどり</span>", "白<br><span class='jp-sub'>しろ</span>", "黄<br><span class='jp-sub'>き</span>"],
                correct: 0,
                translation: { q_si: "වම් පියාපත් තුඩේ (Left Wing) Navigation Light වර්ණය?", options_si: ["රතු", "කොළ", "සුදු", "කහ"] }
            },
            {
                q_jp: "チョーク（輪止め）を外すタイミングは？<br><span class='jp-sub'>ちょーく (わどめ) を はずす たいみんぐ は</span>",
                options_jp: ["いつでも良い<br><span class='jp-sub'>いつでも よい</span>", "パイロットまたは管制の指示があった時<br><span class='jp-sub'>しじ が あった とき</span>", "乗客が乗ったらすぐ<br><span class='jp-sub'>じょうきゃく が のったら すぐ</span>", "エンジンがかかる前<br><span class='jp-sub'>えんじん が かかる まえ</span>"],
                correct: 1,
                translation: { q_si: "Wheel Chocks ඉවත් කරන වෙලාව?", options_si: ["ඕනෑම වෙලාවක", "Pilot හෝ ATC උපදෙස් දුන් විට", "මගීන් නැගූ වහාම", "Engine start කිරීමට පෙර"] }
            },
            {
                q_jp: "パドル（マーシャリング・ワンド）はいつ使いますか？<br><span class='jp-sub'>ぱどる (わんど) は いつ つかいますか</span>",
                options_jp: ["昼間<br><span class='jp-sub'>ひるま</span>", "夜間<br><span class='jp-sub'>やかん</span>", "雨の日だけ<br><span class='jp-sub'>あめ の ひ だけ</span>", "いつでも<br><span class='jp-sub'>いつでも</span>"],
                correct: 0,
                translation: { q_si: "Marshalling Wands/Paddles (වටකුරු) භාවිතා කරන්නේ?", options_si: ["දිවා කාලයේ", "රාත්‍රී කාලයේ (ලයිට් සහිත)", "වැසි දිනවල", "ඕනෑම විටක"] }
            },
            {
                q_jp: "夜間にマーシャリングで使う道具は？<br><span class='jp-sub'>やかん に まーしゃりんぐ で つかう どうぐ は</span>",
                options_jp: ["懐中電灯<br><span class='jp-sub'>かいちゅうでんとう</span>", "点灯するワンド（ライト付き）<br><span class='jp-sub'>てんとう する わんど</span>", "手旗<br><span class='jp-sub'>てばた</span>", "素手<br><span class='jp-sub'>すで</span>"],
                correct: 1,
                translation: { q_si: "රාත්‍රියට Marshalling සඳහා භාවිතා කරන්නේ?", options_si: ["ටෝච් එකක්", "දැල්වෙන Wands (Lighted)", "කොඩි", "නිකන් අතින්"] }
            },
            {
                q_jp: "「エマージェンシーストップ」の合図は？<br><span class='jp-sub'>えまーじぇんしー すとっぷ の あいず は</span>",
                options_jp: ["手を振る<br><span class='jp-sub'>て を ふる</span>", "頭上で腕を激しく交差させる<br><span class='jp-sub'>ずじょう で うで を はげしく こうさ させる</span>", "敬礼する<br><span class='jp-sub'>けいれい する</span>", "ジャンプする<br><span class='jp-sub'>じゃんぷ する</span>"],
                correct: 1,
                translation: { q_si: "Emergency Stop සංඥාව?", options_si: ["අත වැනීම", "හිසට උඩින් අත් වේගයෙන් කතිරයක්‌ ලෙස කිරීම", "ආචාර කිරීම", "පැනීම"] }
            },
            {
                q_jp: "ウィングウォーカーの役割は？<br><span class='jp-sub'>うぃんぐうぉーかー の やくわり は</span>",
                options_jp: ["翼端の監視（ぶつからないように見る）<br><span class='jp-sub'>よくたん の かんし</span>", "パイロットと話す<br><span class='jp-sub'>ぱいろっと と はなす</span>", "荷物を運ぶ<br><span class='jp-sub'>にもつ を はこぶ</span>", "走る<br><span class='jp-sub'>はしる</span>"],
                correct: 0,
                translation: { q_si: "Wing Walker ගේ රාජකාරිය?", options_si: ["පියාපත් තුඩ වැදේදැයි බැලීම (Watch)", "Pilot සමග කතා කිරීම", "බඩු ගෙන යාම", "දිවීම"] }
            },
            {
                q_jp: "エンジン始動（スタート）の前に行う合図は？<br><span class='jp-sub'>えんじん しどう (すたーと) の まえ に おこなう あいず は</span>",
                options_jp: ["サムアップ（親指を立てる）<br><span class='jp-sub'>さむあっぷ</span>", "手を振る<br><span class='jp-sub'>て を ふる</span>", "回る合図（エンジンスタート）<br><span class='jp-sub'>まわる あいず</span>", "お辞儀<br><span class='jp-sub'>おじぎ</span>"],
                correct: 2,
                translation: { q_si: "Engine Start කිරීමට දෙන සංඥාව?", options_si: ["Thumb Up", "අත වැනීම", "Engine Start Signal (රවුමට අත කරකැවීම 👆)", "හිස නැමීම"] }
            }
        ]
    },
    "section5": {
        title: "Section 5: Dangerous Goods (危険物)",
        questions: [
            {
                q_jp: "危険物ラベルの「クラス3」は何を表しますか？<br><span class='jp-sub'>きけんぶつ らべる の くらす3 は なに を あらわしますか</span>",
                options_jp: ["火薬類<br><span class='jp-sub'>かやくるい</span>", "引火性液体<br><span class='jp-sub'>いんかせい えきたい</span>", "放射性物質<br><span class='jp-sub'>ほうしゃせい ぶっしつ</span>", "ガス<br><span class='jp-sub'>がす</span>"],
                correct: 1,
                translation: { q_si: "Class 3 Dangerous Goods?", options_si: ["පුපුරණ ද්‍රව්‍ය", "ගිනිගන්නා සුළු දියර", "විකිරණශීලී", "වායු"] }
            },
            {
                q_jp: "旅客機に持ち込めないものは？<br><span class='jp-sub'>りょかくき に もちこめない もの は</span>",
                options_jp: ["服<br><span class='jp-sub'>ふく</span>", "花火<br><span class='jp-sub'>はなび</span>", "本<br><span class='jp-sub'>ほん</span>", "パソコン<br><span class='jp-sub'>ぱそこん</span>"],
                correct: 1,
                translation: { q_si: "යානයට ගෙන යා නොහැක්කේ?", options_si: ["ඇඳුම්", "ගිනිකෙළි", "පොත්", "Laptop"] }
            },
            {
                q_jp: "危険物ラベルはどのような形をしていますか？<br><span class='jp-sub'>きけんぶつ らべる は どのような かたち を していますか</span>",
                options_jp: ["丸（円形）<br><span class='jp-sub'>まる (えんけい)</span>", "ひし形（正方形を傾けた形）<br><span class='jp-sub'>ひしがた</span>", "三角形<br><span class='jp-sub'>さんかくけい</span>", "星形<br><span class='jp-sub'>ほしがた</span>"],
                correct: 1,
                translation: { q_si: "Danger Label එකේ හැඩය?", options_si: ["රවුම්", "දියමන්ති හැඩය (Diamond Shape)", "ත්‍රිකෝණ", "තරු හැඩය"] }
            },
            {
                q_jp: "「天地無用（This Way Up）」のラベルの意味は？<br><span class='jp-sub'>てんちむよう (This Way Up) の らべる の いみ は</span>",
                options_jp: ["逆さまにしても良い<br><span class='jp-sub'>さかさま に しても よい</span>", "この面を上にすること<br><span class='jp-sub'>このめん を うえ に する こと</span>", "横にする<br><span class='jp-sub'>よこ に する</span>", "投げる<br><span class='jp-sub'>なげる</span>"],
                correct: 1,
                translation: { q_si: "'This Way Up' (ඊතල දෙකක් උඩට) Label එකේ තේරුම?", options_si: ["අනිත් පැත්ත හැරෙව්වට කමක් නෑ", "මේ පැත්ත උඩට තබන්න", "පැත්තට තබන්න", "විසි කරන්න"] }
            },
            {
                q_jp: "危険物が漏れているのを見つけたら？<br><span class='jp-sub'>きけんぶつ が もれている の を みつけたら</span>",
                options_jp: ["手で触る<br><span class='jp-sub'>て で さわる</span>", "無視する<br><span class='jp-sub'>むし する</span>", "触らずにすぐに責任者に報告する<br><span class='jp-sub'>さわらずに すぐに せきにんしゃ に ほうこく する</span>", "水で洗う<br><span class='jp-sub'>みず で あらう</span>"],
                correct: 2,
                translation: { q_si: "Dangerous Goods කාන්දු (Spill) වී ඇත්නම්?", options_si: ["අතින් අල්ලනවා", "ගණන් ගන්නේ නෑ", "නොඅල්ලා වහාම වාර්තා කරනවා", "වතුර දානවා"] }
            },
            {
                q_jp: "ドライアイスは危険物ですか？<br><span class='jp-sub'>どらいあいす は きけんぶつ ですか</span>",
                options_jp: ["いいえ、ただの氷です<br><span class='jp-sub'>いいえ</span>", "はい、量によっては危険物です<br><span class='jp-sub'>はい、りょう によって は きけんぶつ です</span>", "食べ物です<br><span class='jp-sub'>たべもの です</span>", "おもちゃです<br><span class='jp-sub'>おもちゃ です</span>"],
                correct: 1,
                translation: { q_si: "Dry Ice අනතුරුදායකද?", options_si: ["නෑ, නිකන් අයිස්", "ඔව්, ප්‍රමාණය අනුව Dangerous Goods වේ", "කෑමක්", "සෙල්ලම් බඩුවක්"] }
            },
            {
                q_jp: "リチウムイオン電池（バッテリー）について正しいのは？<br><span class='jp-sub'>りちうむいおん でんち (ばってりー) に ついて ただしい の は</span>",
                options_jp: ["預け入れ荷物にできない場合がある<br><span class='jp-sub'>あずけいれ にもつ に できない ばあい が ある</span>", "どこに入れても良い<br><span class='jp-sub'>どこに いれても よい</span>", "危険物ではない<br><span class='jp-sub'>きけんぶつ では ない</span>", "水に入れると安全<br><span class='jp-sub'>みず に いれる と あんぜん</span>"],
                correct: 0,
                translation: { q_si: "Lithium Ion Battery ගැන නිවැරදි වන්නේ?", options_si: ["Checked Baggage (යට දාන බෑග්) වලට දාන්න බෑ", "ඕන තැනක දාන්න පුළුවන්", "අනතුරුදායක නෑ", "වතුරට දැම්මම ආරක්ෂිතයි"] }
            },
            {
                q_jp: "クラス1の危険物は何ですか？<br><span class='jp-sub'>くらす1 の きけんぶつ は なんですか</span>",
                options_jp: ["ガス<br><span class='jp-sub'>がす</span>", "火薬類（爆発物）<br><span class='jp-sub'>かやくるい (ばくはつぶつ)</span>", "液体<br><span class='jp-sub'>えきたい</span>", "放射能<br><span class='jp-sub'>ほうしゃのう</span>"],
                correct: 1,
                translation: { q_si: "Class 1 Dangerous Goods?", options_si: ["Gas", "Explosives (පුපුරණ ද්‍රව්‍ය)", "Liquids", "Radioactive"] }
            },
            {
                q_jp: "磁性物質（磁石）が危険な理由は？<br><span class='jp-sub'>じせい ぶっしつ (じしゃく) が きけん な りゆう は</span>",
                options_jp: ["計器（コンパス）を狂わせるから<br><span class='jp-sub'>けいき (こんぱす) を くるわせる から</span>", "重いから<br><span class='jp-sub'>おもい から</span>", "冷たいから<br><span class='jp-sub'>つめたい から</span>", "高いから<br><span class='jp-sub'>たかい から</span>"],
                correct: 0,
                translation: { q_si: "චුම්බක (Magnets) භයානක වෙන්නේ ඇයි?", options_si: ["Compass/Instruments අවුල් කරන නිසා", "බර නිසා", "සීතල නිසා", "ගණන් වැඩි නිසා"] }
            },
            {
                q_jp: "NOTOC（ノトック）とは何ですか？<br><span class='jp-sub'>のとっく とは なんですか</span>",
                options_jp: ["機長のへの危険物搭載情報<br><span class='jp-sub'>きちょう への きけんぶつ とうさい じょうほう</span>", "機内食のリスト<br><span class='jp-sub'>きないしょく の りすと</span>", "乗客名簿<br><span class='jp-sub'>じょうきゃく めいぼ</span>", "天気の情報<br><span class='jp-sub'>てんき の じょうほう</span>"],
                correct: 0,
                translation: { q_si: "NOTOC (Notification to Captain) යනු?", options_si: ["Captain ට දෙන Dangerous Goods තොරතුරු", "කෑම ලිස්ට් එක", "මගී ලැයිස්තුව", "කාලගුණ වාර්තාව"] }
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ... Same navigation and dictionary logic ...
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href.includes(currentLocation.split('/').pop())) {
            menuItem[i].className = "active";
        }
    }

    const dictionaryGrid = document.getElementById('dictionary-grid');
    const searchInput = document.getElementById('searchInput');

    if (dictionaryGrid && searchInput) {
        renderDictionary(dictionaryData);
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = dictionaryData.filter(item =>
                item.term.toLowerCase().includes(searchTerm) ||
                item.sinhala.includes(searchTerm) ||
                item.meaning.toLowerCase().includes(searchTerm) ||
                (item.kana && item.kana.includes(searchTerm))
            );
            renderDictionary(filtered);
        });
    }

    initTheme();
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

function renderDictionary(data) {
    const grid = document.getElementById('dictionary-grid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h3>${item.term}</h3>
                <button class="speaker-btn" onclick="playAudio('${item.kana || item.term}')" title="Listen">🔊</button>
            </div>
             <p style="font-size: 0.9rem; color: #555; margin-bottom: 0.5rem;">${item.kana || ''}</p>
            <p style="color: var(--primary-color); font-weight: bold;">${item.sinhala}</p>
            <p>${item.meaning}</p>
        `;
        grid.appendChild(card);
    });
}

function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
}

// --- QUIZ LOGIC SAME AS BEFORE BUT WITH NEW quizData VARIABLE NAME ---

let currentSectionKey = null;
let currentQuestions = [];
let currentQIndex = 0;
let currentScore = 0;

window.startMockTest = function () {
    const quizMenu = document.getElementById('quiz-menu');
    const quizContainer = document.getElementById('quiz-container');

    if (quizMenu) quizMenu.style.display = 'none';
    if (quizContainer) {
        quizContainer.style.display = 'block';
        showSectionSelection();
    }
}

function showSectionSelection() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <h3 style="text-align:center; margin-bottom: 20px;">Select a Topic (මාතෘකාවක් තෝරන්න)</h3>
        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="card" onclick="startSection('section1')" style="cursor:pointer">
                <div class="card-icon" style="background:#e3f2fd; color:#2196f3"><i class="fas fa-file-signature"></i></div>
                <h4>Paper 1</h4>
                <p>Ground Handling Test</p>
            </div>
            <div class="card" onclick="startSection('section2')" style="cursor:pointer">
                <div class="card-icon" style="background:#ffebee; color:#f44336"><i class="fas fa-exclamation-triangle"></i></div>
                <h4>Section 2</h4>
                <p>Accident Prevention</p>
            </div>
            <div class="card" onclick="startSection('section3')" style="cursor:pointer">
                <div class="card-icon" style="background:#e8f5e9; color:#4caf50"><i class="fas fa-truck-moving"></i></div>
                <h4>Section 3</h4>
                <p>GSE Operations</p>
            </div>
            <div class="card" onclick="startSection('section4')" style="cursor:pointer">
                <div class="card-icon" style="background:#fff3e0; color:#ff9800"><i class="fas fa-traffic-light"></i></div>
                <h4>Section 4</h4>
                <p>Marshalling</p>
            </div>
             <div class="card" onclick="startSection('section5')" style="cursor:pointer">
                <div class="card-icon" style="background:#f3e5f5; color:#9c27b0"><i class="fas fa-biohazard"></i></div>
                <h4>Section 5</h4>
                <p>Dangerous Goods</p>
            </div>
        </div>
        <button class="btn btn-secondary" onclick="location.reload()" style="margin-top: 30px; display:block; margin-left:auto; margin-right:auto;">Back to Menu</button>
    `;
}

window.startSection = function (sectionKey) {
    // Determine visibility for Paper Quiz direct access
    const quizMenu = document.getElementById('quiz-menu');
    const quizContainer = document.getElementById('quiz-container');

    if (quizMenu) quizMenu.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';

    currentSectionKey = sectionKey;
    currentQuestions = [...quizData[sectionKey].questions];
    // Shuffle
    currentQuestions.sort(() => Math.random() - 0.5);

    currentQIndex = 0;
    currentScore = 0;

    displayQuestion();
}

function displayQuestion() {
    const container = document.getElementById('quiz-container');

    if (currentQIndex >= currentQuestions.length) {
        showResults(container);
        return;
    }

    const q = currentQuestions[currentQIndex];

    container.innerHTML = `
        <div class="card" style="max-width: 700px; margin: 0 auto; text-align: left;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="jp-sub">Question ${currentQIndex + 1} / ${currentQuestions.length}</span>
                <span class="jp-main" style="color:var(--primary-color)">${quizData[currentSectionKey].title}</span>
            </div>
            
            <h3 class="" style="font-size: 1.3rem; margin-bottom: 20px; line-height: 1.6;">${q.q_jp}</h3>
            
            <div class="options-grid" style="display: grid; gap: 12px;">
                ${q.options_jp.map((opt, idx) => `
                    <button class="btn btn-secondary option-btn" onclick="checkAnswer(${idx})" style="text-align: left; padding: 15px; font-weight: 500;">
                        ${opt}
                    </button>
                `).join('')}
            </div>

            <div id="explanation-box" style="display:none; margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
                <h4 style="color:#666; font-size: 0.9em; margin-bottom:10px;">Sinhala Meaning:</h4>
                <p style="font-weight:bold; color:#2c3e50; margin-bottom:10px;">${q.translation.q_si}</p>
                 <ul style="list-style:none; padding:0; color:#555; font-size:0.9em;">
                    ${q.translation.options_si.map((opt, idx) =>
        `<li style="margin-bottom:5px; ${idx === q.correct ? 'color:green; font-weight:bold;' : ''}">${idx + 1}. ${opt}</li>`
    ).join('')}
                </ul>
                <div style="text-align: right; margin-top: 15px;">
                    <button class="btn btn-primary" onclick="nextQuestion()" style="border-radius: 50%; width: 50px; height: 50px; display: inline-flex; align-items: center; justify-content: center; padding: 0;">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

window.checkAnswer = function (selectedIndex) {
    const q = currentQuestions[currentQIndex];
    const options = document.querySelectorAll('.option-btn');
    const explanationBox = document.getElementById('explanation-box');

    options.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'default';
        btn.style.opacity = '0.7';
    });

    if (selectedIndex === q.correct) {
        currentScore++;
        options[selectedIndex].style.backgroundColor = '#d4edda';
        options[selectedIndex].style.borderColor = '#c3e6cb';
        options[selectedIndex].style.color = '#155724';
        options[selectedIndex].style.fontWeight = 'bold';
        options[selectedIndex].style.opacity = '1';
        options[selectedIndex].innerHTML += ' <i class="fas fa-check"></i>';
    } else {
        options[selectedIndex].style.backgroundColor = '#f8d7da';
        options[selectedIndex].style.borderColor = '#f5c6cb';
        options[selectedIndex].style.color = '#721c24';
        options[selectedIndex].style.fontWeight = 'bold';
        options[selectedIndex].style.opacity = '1';
        options[selectedIndex].innerHTML += ' <i class="fas fa-times"></i>';

        options[q.correct].style.backgroundColor = '#d4edda';
        options[q.correct].style.borderColor = '#c3e6cb';
        options[q.correct].style.color = '#155724';
        options[q.correct].style.fontWeight = 'bold';
        options[q.correct].style.opacity = '1';
        options[q.correct].innerHTML += ' <i class="fas fa-check"></i>';
    }

    explanationBox.style.display = 'block';
    setTimeout(() => {
        explanationBox.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

window.nextQuestion = function () {
    currentQIndex++;
    displayQuestion();
}

function showResults(container) {
    const percentage = Math.round((currentScore / currentQuestions.length) * 100);

    // Save Score based on Section
    if (currentSectionKey === 'section1') {
        // Paper 1
        const previousBest = localStorage.getItem('paper1Score') || 0;
        if (percentage > previousBest) {
            localStorage.setItem('paper1Score', percentage);
        }
    } else {
        // Assume default Mock Test logic for other sections or generic
        // Actually, if we want to track others separately, we should.
        // For now, let's keep 'quizBestScore' for general Mock Test (random mix) if we had one,
        // BUT currently 'startSection' is used for everything.
        // Let's change: Save specific section scores.

        const key = `${currentSectionKey}Score`; // e.g., section2Score
        const prev = localStorage.getItem(key) || 0;
        if (percentage > prev) {
            localStorage.setItem(key, percentage);
        }

        // Also keep 'quizBestScore' as a generic "Best Ever" for the main display if needed, 
        // OR just rely on specific scores.
        // Let's update 'quizBestScore' if this is the HIGHEST score seen across sections
        const globalBest = localStorage.getItem('quizBestScore') || 0;
        if (percentage > globalBest) {
            localStorage.setItem('quizBestScore', percentage);
        }
    }

    let message = percentage > 80 ? "Supiri! (Excellent!) 🌟" :
        percentage > 50 ? "Hodai! (Good Job!) 👍" :
            "Thawa padam karamu! (Study more!) 📚";

    container.innerHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto;" class="card">
            <h2 style="font-size: 3rem; color: var(--primary-color);">${currentScore} / ${currentQuestions.length}</h2>
            <h3>${message}</h3>
            <p style="font-size: 1.5rem; font-weight: bold;">${percentage}%</p>
            <br>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-primary" onclick="showSectionSelection()">Topics Menu</button>
                <button class="btn btn-secondary" onclick="location.reload()">Main Menu</button>
            </div>
        </div>
    `;
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}
