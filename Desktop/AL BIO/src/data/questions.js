// Sample Questions for Quiz System - Sinhala

export const questions = {
    biology: [
        {
            id: 'bio-q-1',
            topic: 'bio-1-1',
            question: 'පහත සඳහන් දෑ අතුරින් ජීවී ජීවීන්ගේ ලක්ෂණයක් නොවන්නේ කුමක්ද?',
            type: 'mcq',
            options: [
                'වර්ධනය සහ විකසනය',
                'උත්තේජන වලට ප්‍රතිචාර දැක්වීම',
                'වර්ණය වෙනස් කිරීමේ හැකියාව',
                'ප්‍රජනනය'
            ],
            correct: 2,
            explanation: 'සමහර ජීවීන්ට වර්ණය වෙනස් කළ හැකි වුවද (උදා: කටුස්සා), එය සියලු ජීවීන්ගේ පොදු ලක්ෂණයක් නොවේ.'
        },
        {
            id: 'bio-q-2',
            topic: 'bio-2-2',
            question: 'සෛලයේ බලාගාරය ලෙස හඳුන්වනු ලබන්නේ කුමක්ද?',
            type: 'mcq',
            options: [
                'න්‍යෂ්ටිය',
                'මයිටොකොන්ඩ්‍රියා',
                'රයිබොසෝම',
                'ගොල්ගි දේහ'
            ],
            correct: 1,
            explanation: 'මයිටොකොන්ඩ්‍රියා තුළ සෛලීය ශ්වසනය මගින් ATP (ශක්තිය) නිපදවන බැවින් එය සෛලයේ බලාගාරය ලෙස හැඳින්වේ.'
        },
        {
            id: 'bio-q-3',
            topic: 'bio-2-5',
            question: 'එන්සයිම යනු කුමන ජෛව අණුවක විශේෂිත ආකාරයක්ද?',
            type: 'mcq',
            options: [
                'කාබෝහයිඩ්‍රේට',
                'ලිපිඩ',
                'ප්‍රෝටීන',
                'න්‍යෂ්ටික අම්ල'
            ],
            correct: 2,
            explanation: 'බොහෝ එන්සයිම ප්‍රෝටීන වේ. ඒවා ජීවී පද්ධතිවල ප්‍රතික්‍රියා වේගවත් කරයි.'
        },
        {
            id: 'bio-q-4',
            topic: 'bio-4-4',
            question: 'ප්‍රභාසංශ්ලේෂණය සිදුවන්නේ සෛලයේ කුමන කොටසෙහිද?',
            type: 'mcq',
            options: [
                'මයිටොකොන්ඩ්‍රියා',
                'ක්ලෝරොප්ලාස්ට්',
                'න්‍යෂ්ටිය',
                'එන්ඩොප්ලාස්මික් රෙටිකියුලම්'
            ],
            correct: 1,
            explanation: 'ශාක සෛලවල ප්‍රභාසංශ්ලේෂණය සිදු වන්නේ ක්ලෝරොප්ලාස්ට් තුළය. එහි ක්ලෝරොෆිල් අඩංගු වේ.'
        },
        {
            id: 'bio-q-5',
            topic: 'bio-6-1',
            question: 'මිනිස් දේහ සෛලයක සාමාන්‍යයෙන් කොපමණ ක්‍රොමෝසෝම සංඛ්‍යාවක් පවතීද?',
            type: 'mcq',
            options: [
                '23',
                '46',
                '92',
                '48'
            ],
            correct: 1,
            explanation: 'සාමාන්‍ය මිනිස් දේහ සෛලයක ක්‍රොමෝසෝම 46 ක් (යුගල 23 ක්) පවතී.'
        }
    ],

    chemistry: [
        {
            id: 'chem-q-1',
            topic: 'chem-1-2',
            question: 'තුන්වන කවචයේ (n=3) පැවතිය හැකි උපරිම ඉලෙක්ට්‍රෝන සංඛ්‍යාව කීයද?',
            type: 'mcq',
            options: [
                '8',
                '18',
                '32',
                '2'
            ],
            correct: 1,
            explanation: 'කවචයක උපරිම ඉලෙක්ට්‍රෝන සංඛ්‍යාව 2n² මගින් දෙනු ලැබේ. n=3 විට, 2(3)² = 18 වේ.'
        },
        {
            id: 'chem-q-2',
            topic: 'chem-2-1',
            question: 'අයනික බන්ධන සෑදෙන්නේ පහත කුමන මූලද්‍රව්‍ය අතරද?',
            type: 'mcq',
            options: [
                'ලෝහ දෙකක් අතර',
                'අලෝහ දෙකක් අතර',
                'ලෝහයක් සහ අලෝහයක් අතර',
                'අවක්‍රිය වායු අතර'
            ],
            correct: 2,
            explanation: 'අයනික බන්ධන සාමාන්‍යයෙන් සෑදෙන්නේ ඉලෙක්ට්‍රෝන පිට කරන ලෝහයක් සහ ඉලෙක්ට්‍රෝන ලබා ගන්නා අලෝහයක් අතරය.'
        },
        {
            id: 'chem-q-3',
            topic: 'chem-5-1',
            question: 'තාපදායක (exothermic) ප්‍රතික්‍රියාවකදී අනිවාර්යයෙන්ම සිදුවන්නේ කුමක්ද?',
            type: 'mcq',
            options: [
                'පරිසරයෙන් තාපය අවශෝෂණය කරයි',
                'පරිසරයට තාපය මුදා හරියි',
                'තාප හුවමාරුවක් සිදු නොවේ',
                'එය සිදු වන්නේ ඉහළ උෂ්ණත්වවලදී පමණි'
            ],
            correct: 1,
            explanation: 'තාපදායක ප්‍රතික්‍රියා වලදී පද්ධතියෙන් පරිසරයට ශක්තිය තාපය ලෙස මුදා හරිනු ලැබේ.'
        },
        {
            id: 'chem-q-4',
            topic: 'chem-7-1',
            question: 'ඇල්කේන (alkanes) සඳහා පොදු සූත්‍රය කුමක්ද?',
            type: 'mcq',
            options: [
                'CnH2n',
                'CnH2n+2',
                'CnH2n-2',
                'CnHn'
            ],
            correct: 1,
            explanation: 'සන්තෘප්ත හයිඩ්‍රොකාබන වන ඇල්කේන වල පොදු සූත්‍රය CnH2n+2 වේ.'
        },
        {
            id: 'chem-q-5',
            topic: 'chem-4-2',
            question: 'ආදර්ශ වායු සමීකරණය PV = nRT හි R යනු කුමක්ද?',
            type: 'mcq',
            options: [
                'පීඩනය',
                'පරිමාව',
                'සාර්වත්‍ර වායු නියතය',
                'උෂ්ණත්වය'
            ],
            correct: 2,
            explanation: 'R යනු සාර්වත්‍ර වායු නියතය වේ. එහි අගය ආසන්න වශයෙන් 8.314 J/(mol·K) වේ.'
        }
    ],

    physics: [
        {
            id: 'phy-q-1',
            topic: 'phy-2-1',
            question: 'ත්වරණය මනිනු ලබන SI ඒකකය කුමක්ද?',
            type: 'mcq',
            options: [
                'm/s',
                'm/s²',
                'kg·m/s',
                'N'
            ],
            correct: 1,
            explanation: 'ත්වරණය යනු ප්‍රවේගය වෙනස් වීමේ වේගයයි, එය තත්පර වර්ගයට මීටර් (m/s²) වලින් මනිනු ලැබේ.'
        },
        {
            id: 'phy-q-2',
            topic: 'phy-2-3',
            question: 'නිව්ටන්ගේ දෙවන නියමයට අනුව F = ma වේ. මෙහි අදහස කුමක්ද?',
            type: 'mcq',
            options: [
                'බලය = ස්කන්ධය × ත්වරණය',
                'බලය = ස්කන්ධය + ත්වරණය',
                'බලය = ස්කන්ධය ÷ ත්වරණය',
                'බලය = ස්කන්ධය - ත්වරණය'
            ],
            correct: 0,
            explanation: 'නිව්ටන්ගේ දෙවන නියමය පවසන්නේ වස්තුවක් මත යෙදෙන සම්ප්‍රයුක්ත බලය එහි ස්කන්ධය සහ ත්වරණයේ ගුණිතයට සමාන බවයි.'
        },
        {
            id: 'phy-q-3',
            topic: 'phy-3-4',
            question: 'රික්තයක් තුළ ආලෝකයේ වේගය ආසන්න වශයෙන් කොපමණද?',
            type: 'mcq',
            options: [
                '3 × 10⁶ m/s',
                '3 × 10⁸ m/s',
                '3 × 10¹⁰ m/s',
                '3 × 10⁴ m/s'
            ],
            correct: 1,
            explanation: 'රික්තයක් තුළ ආලෝකයේ වේගය ආසන්න වශයෙන් 3 × 10⁸ m/s (තත්පරයට මීටර් මිලියන 300 ක්) වේ.'
        },
        {
            id: 'phy-q-4',
            topic: 'phy-9-1',
            question: 'ඕම්ගේ නියමයෙන් සම්බන්ධ කරන්නේ කුමන රාශීන් ද?',
            type: 'mcq',
            options: [
                'විභව අන්තරය, ධාරාව, සහ ප්‍රතිරෝධය',
                'බලය, ස්කන්ධය, සහ ත්වරණය',
                'ශක්තිය, බලය, සහ කාලය',
                'පීඩනය, පරිමාව, සහ උෂ්ණත්වය'
            ],
            correct: 0,
            explanation: 'ඕම්ගේ නියමය V = IR ලෙස ප්‍රකාශ වන අතර, එය විභව අන්තරය (V), ධාරාව (I), සහ ප්‍රතිරෝධය (R) සම්බන්ධ කරයි.'
        },
        {
            id: 'phy-q-5',
            topic: 'phy-1-1',
            question: 'පරමාණුවක න්‍යෂ්ටිය තුළ අඩංගු වන්නේ මොනවාද?',
            type: 'mcq',
            options: [
                'ප්‍රෝටෝන සහ ඉලෙක්ට්‍රෝන',
                'නියුට්‍රෝන සහ ඉලෙක්ට්‍රෝන',
                'ප්‍රෝටෝන සහ නියුට්‍රෝන',
                'ප්‍රෝටෝන පමණි'
            ],
            correct: 2,
            explanation: 'පරමාණුක න්‍යෂ්ටිය සෑදී ඇත්තේ ප්‍රෝටෝන (ධන ආරෝපිත) සහ නියුට්‍රෝන (ආරෝපණයක් නැති) වලිනි.'
        }
    ]
};

// Get questions by subject
export function getQuestionsBySubject(subject) {
    return questions[subject] || [];
}

// Get questions by topic
export function getQuestionsByTopic(subject, topicId) {
    const subjectQuestions = questions[subject] || [];
    return subjectQuestions.filter(q => q.topic === topicId);
}

// Get random questions
export function getRandomQuestions(subject, count = 10) {
    const subjectQuestions = [...(questions[subject] || [])];
    const shuffled = subjectQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
