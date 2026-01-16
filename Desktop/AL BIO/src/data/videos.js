// Teachers' Video Resources Database - Real Sri Lankan A/L Teachers

export const teachers = [
    {
        id: 'teacher-1',
        name: 'DP Education',
        nameSi: 'DP Education',
        subject: 'biology',
        description: 'ශ්‍රී ලංකාවේ ප්‍රමුඛ A/L Biology ඉගැන්වීම',
        channel: 'DP Education',
        subscribers: '100K+',
        avatar: '👨‍🏫',
        channelUrl: 'https://www.youtube.com/@DPEducation'
    },
    {
        id: 'teacher-2',
        name: 'Sinhala Medium Science',
        nameSi: 'සිංහල මාධ්‍ය විද්‍යාව',
        subject: 'chemistry',
        description: 'Chemistry සිංහලෙන් සරලව',
        channel: 'Sinhala Medium Science',
        subscribers: '80K+',
        avatar: '👩‍🏫',
        channelUrl: 'https://www.youtube.com/@SinhalaMediumScience'
    },
    {
        id: 'teacher-3',
        name: 'Physics Sinhala',
        nameSi: 'භෞතික විද්‍යාව සිංහලෙන්',
        subject: 'physics',
        description: 'A/L Physics සිංහල මාධ්‍යය',
        channel: 'Physics Sinhala',
        subscribers: '75K+',
        avatar: '👨‍🔬',
        channelUrl: 'https://www.youtube.com/@PhysicsSinhala'
    },
    {
        id: 'teacher-4',
        name: 'Hela Wedakama',
        nameSi: 'හෙළ වැඩකම',
        subject: 'biology',
        description: 'Biology සිංහල මාධ්‍යයෙන්',
        channel: 'Hela Wedakama',
        subscribers: '60K+',
        avatar: '👨‍🏫',
        channelUrl: 'https://www.youtube.com/@HelaWedakama'
    }
];

export const videos = [
    // Biology Videos - DP Education & Hela Wedakama
    {
        id: 'vid-bio-1',
        subject: 'biology',
        teacher: 'teacher-1',
        title: 'Cell Structure and Function',
        titleSi: 'සෛල ව්‍යුහය සහ ක්‍රියාකාරිත්වය',
        topic: 'bio-2-2',
        duration: '45:20',
        views: '125K',
        youtubeId: 'URUJD5NEXC8',
        description: 'සෛලයේ සම්පූර්ණ ව්‍යුහය සහ අවයව - සිංහලෙන්',
        thumbnail: 'https://img.youtube.com/vi/URUJD5NEXC8/mqdefault.jpg'
    },
    {
        id: 'vid-bio-2',
        subject: 'biology',
        teacher: 'teacher-1',
        title: 'Photosynthesis - Complete Lesson',
        titleSi: 'ප්‍රභාසංශ්ලේෂණය - සම්පූර්ණ පාඩම',
        topic: 'bio-4-3',
        duration: '52:15',
        views: '180K',
        youtubeId: 'uixA8ZXx0KU',
        description: 'ප්‍රභාසංශ්ලේෂණ ක්‍රියාවලිය විස්තරාත්මකව',
        thumbnail: 'https://img.youtube.com/vi/uixA8ZXx0KU/mqdefault.jpg'
    },
    {
        id: 'vid-bio-3',
        subject: 'biology',
        teacher: 'teacher-4',
        title: 'Mendelian Genetics',
        titleSi: 'මෙන්ඩලීය ජාන විද්‍යාව',
        topic: 'bio-6-3',
        duration: '38:45',
        views: '95K',
        youtubeId: 'Mehz7tCxjSE',
        description: 'මෙන්ඩල්ගේ නියම සහ උරුමය සිංහලෙන්',
        thumbnail: 'https://img.youtube.com/vi/Mehz7tCxjSE/mqdefault.jpg'
    },
    {
        id: 'vid-bio-4',
        subject: 'biology',
        teacher: 'teacher-1',
        title: 'DNA Structure and Replication',
        titleSi: 'DNA ව්‍යුහය සහ ප්‍රතිරූපණය',
        topic: 'bio-6-2',
        duration: '41:30',
        views: '110K',
        youtubeId: 'TNKWgcFPHqw',
        description: 'DNA අණුවේ ව්‍යුහය සහ ප්‍රතිරූපණ ක්‍රියාවලිය',
        thumbnail: 'https://img.youtube.com/vi/TNKWgcFPHqw/mqdefault.jpg'
    },
    {
        id: 'vid-bio-5',
        subject: 'biology',
        teacher: 'teacher-4',
        title: 'Respiration in Living Organisms',
        titleSi: 'ජීවීන්ගේ ශ්වසනය',
        topic: 'bio-5-2',
        duration: '35:20',
        views: '88K',
        youtubeId: 'moPJkCbKjBs',
        description: 'සෛලීය ශ්වසනය සහ ATP නිෂ්පාදනය',
        thumbnail: 'https://img.youtube.com/vi/moPJkCbKjBs/mqdefault.jpg'
    },
    {
        id: 'vid-bio-6',
        subject: 'biology',
        teacher: 'teacher-1',
        title: 'Enzymes and Their Functions',
        titleSi: 'එන්සයිම සහ ඒවායේ ක්‍රියාකාරිත්වය',
        topic: 'bio-2-4',
        duration: '28:15',
        views: '72K',
        youtubeId: '2_i0F_mBXpQ',
        description: 'එන්සයිම ක්‍රියාකාරිත්වය සහ සාධක',
        thumbnail: 'https://img.youtube.com/vi/2_i0F_mBXpQ/mqdefault.jpg'
    },

    // Chemistry Videos - Sinhala Medium Science
    {
        id: 'vid-chem-1',
        subject: 'chemistry',
        teacher: 'teacher-2',
        title: 'Atomic Structure - Complete',
        titleSi: 'පරමාණුක ව්‍යුහය - සම්පූර්ණ',
        topic: 'chem-1-1',
        duration: '42:20',
        views: '105K',
        youtubeId: 'AJ-X2Xfejns',
        description: 'පරමාණුවේ ව්‍යුහය සහ උප පරමාණුක අංශු',
        thumbnail: 'https://img.youtube.com/vi/AJ-X2Xfejns/mqdefault.jpg'
    },
    {
        id: 'vid-chem-2',
        subject: 'chemistry',
        teacher: 'teacher-2',
        title: 'Chemical Bonding',
        titleSi: 'රසායනික බන්ධන',
        topic: 'chem-2-1',
        duration: '48:10',
        views: '92K',
        youtubeId: 'QqjcCvzWwww',
        description: 'අයනික සහ සහසංයුජ බන්ධන සිංහලෙන්',
        thumbnail: 'https://img.youtube.com/vi/QqjcCvzWwww/mqdefault.jpg'
    },
    {
        id: 'vid-chem-3',
        subject: 'chemistry',
        teacher: 'teacher-2',
        title: 'Periodic Table Explained',
        titleSi: 'ආවර්තිතා වගුව විස්තරය',
        topic: 'chem-1-4',
        duration: '36:15',
        views: '78K',
        youtubeId: 'rz4Dd1I_fX0',
        description: 'ආවර්තිතා වගුවේ සංවිධානය සහ ප්‍රවණතා',
        thumbnail: 'https://img.youtube.com/vi/rz4Dd1I_fX0/mqdefault.jpg'
    },
    {
        id: 'vid-chem-4',
        subject: 'chemistry',
        teacher: 'teacher-2',
        title: 'Organic Chemistry Basics',
        titleSi: 'කාබනික රසායන විද්‍යාව මූලික',
        topic: 'chem-6-1',
        duration: '44:30',
        views: '85K',
        youtubeId: 'AWvJeRIF0II',
        description: 'හයිඩ්‍රොකාබන් සහ කාබනික සංයෝග',
        thumbnail: 'https://img.youtube.com/vi/AWvJeRIF0II/mqdefault.jpg'
    },

    // Physics Videos - Physics Sinhala
    {
        id: 'vid-phy-1',
        subject: 'physics',
        teacher: 'teacher-3',
        title: 'Newton\'s Laws of Motion',
        titleSi: 'නිව්ටන්ගේ චලිත නියම',
        topic: 'phy-1-2',
        duration: '39:30',
        views: '98K',
        youtubeId: 'kKKM8Y-u7ds',
        description: 'චලිතයේ නියම තුන සිංහලෙන්',
        thumbnail: 'https://img.youtube.com/vi/kKKM8Y-u7ds/mqdefault.jpg'
    },
    {
        id: 'vid-phy-2',
        subject: 'physics',
        teacher: 'teacher-3',
        title: 'Electricity and Circuits',
        titleSi: 'විදුලිය සහ පරිපථ',
        topic: 'phy-4-2',
        duration: '46:45',
        views: '112K',
        youtubeId: 'mc979OhitAg',
        description: 'විදුලි පරිපථ සහ ඕම්ගේ නියමය',
        thumbnail: 'https://img.youtube.com/vi/mc979OhitAg/mqdefault.jpg'
    },
    {
        id: 'vid-phy-3',
        subject: 'physics',
        teacher: 'teacher-3',
        title: 'Waves and Sound',
        titleSi: 'තරංග සහ ශබ්දය',
        topic: 'phy-3-3',
        duration: '41:00',
        views: '89K',
        youtubeId: '_PVjaT98kw8',
        description: 'තරංග චලිතය සහ ශබ්ද තරංග',
        thumbnail: 'https://img.youtube.com/vi/_PVjaT98kw8/mqdefault.jpg'
    },
    {
        id: 'vid-phy-4',
        subject: 'physics',
        teacher: 'teacher-3',
        title: 'Work, Energy and Power',
        titleSi: 'වැඩ, ශක්තිය සහ බලය',
        topic: 'phy-1-3',
        duration: '37:20',
        views: '76K',
        youtubeId: 'w4QFJb9a8vo',
        description: 'වැඩ, ශක්තිය සහ බලය සිංහලෙන්',
        thumbnail: 'https://img.youtube.com/vi/w4QFJb9a8vo/mqdefault.jpg'
    }
];

// Get videos by subject
export function getVideosBySubject(subject) {
    if (subject === 'all') return videos;
    return videos.filter(v => v.subject === subject);
}

// Get videos by teacher
export function getVideosByTeacher(teacherId) {
    if (teacherId === 'all') return videos;
    return videos.filter(v => v.teacher === teacherId);
}

// Get videos by topic
export function getVideosByTopic(topicId) {
    return videos.filter(v => v.topic === topicId);
}

// Get teacher by ID
export function getTeacherById(teacherId) {
    return teachers.find(t => t.id === teacherId);
}

// Get teachers by subject
export function getTeachersBySubject(subject) {
    if (subject === 'all') return teachers;
    return teachers.filter(t => t.subject === subject);
}

// Search videos
export function searchVideos(query) {
    const lowerQuery = query.toLowerCase();
    return videos.filter(v =>
        v.title.toLowerCase().includes(lowerQuery) ||
        v.titleSi.includes(query) ||
        v.description.toLowerCase().includes(lowerQuery)
    );
}
