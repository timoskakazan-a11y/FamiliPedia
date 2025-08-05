// --- МАССИВ С РОДСТВЕННИКАМИ ---
const relativesData = [
    {
        id: '1',
        name: 'Eleanora Vance',
        birthDate: 'March 15, 1928',
        deathDate: 'July 22, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1582593531622-1909a089d1f3?q=80&w=800&auto=format&fit=crop',
        content: `Eleanora Vance was the matriarch of our family, known for her incredible resilience and boundless kindness. Born in a small village, she dreamed of seeing the world, a dream she fulfilled by traveling to over 30 countries throughout her life.

## A Life of Passion
Her garden was her sanctuary, where she grew the most beautiful roses in the county.[^1] She taught us the value of patience, hard work, and that a home-cooked meal could solve almost any problem. Her stories, often told around the dinner table, are treasures we will carry with us forever.

She always recommended visiting the [Kew Gardens in London](https://www.kew.org/) for botanical inspiration.

[^1]: She even won the local "Best Rose" competition three years in a row, from 1988 to 1990.`,
        details: {
            'Родилась': '15 марта 1928 г.',
            'Умерла': '22 июля 2018 г.',
            'Род деятельности': 'Путешественница, садовник',
            'Увлечения': ['Выращивание роз', 'Кулинария', 'Рассказывание историй']
        },
        lockReason: '', 
        editingNotice: '', 
        neutralityBanner: 'Стиль этой статьи может быть не нейтральным.',
        unverifiedBanner: 'Информация в этой статье не проверялась с 15 августа 2024 года.'
    },
    {
        id: '2',
        name: 'Samuel "Sam" Thornton',
        birthDate: 'October 5, 1952',
        deathDate: '',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        content: `Samuel, or Sam as everyone knows him, is a master craftsman and storyteller. He can build anything from a sturdy bookshelf to an intricate birdhouse with his own two hands. His workshop is a magical place, filled with the smell of sawdust and the sound of his cheerful whistling.`,
        details: {
            'Родился': '5 октября 1952 г.',
            'Род деятельности': 'Мастер на все руки, Пожарный (в отставке)',
            'Увлечения': ['Рыбалка', 'Столярное дело', 'Барбекю']
        },
        lockReason: 'Статья временно заблокирована из-за споров о точности представленных фактов.',
        editingNotice: '', 
        neutralityBanner: '', 
        unverifiedBanner: ''
    },
    // ... другие родственники
];

// --- НОВЫЙ МАССИВ С СОБЫТИЯМИ ---
const eventsData = [
    {
        id: '1',
        name: 'Пожар в старом доме',
        date: '12 мая 1995 г.',
        imageUrl: 'https://images.unsplash.com/photo-1561332560-165512755554?q=80&w=800&auto=format&fit=crop',
        content: `Это было трагическое событие, которое сильно повлияло на всю семью. Старый дом, в котором выросло не одно поколение, был уничтожен огнем из-за неисправной проводки.

## Последствия
К счастью, никто не пострадал, но были утеряны многие семейные реликвии и фотографии. Это событие сплотило семью и заставило всех осознать ценность нематериальных вещей и взаимной поддержки. Сэмюэл Торнтон, будучи пожарным, координировал действия до приезда своей бригады, проявив настоящий героизм.`,
        details: {
            'Дата': '12 мая 1995 г.',
            'Место': 'г. Бруксвилл, ул. Вязовая, 14',
            'Ключевые участники': ['Семья Торнтон'],
            'Исход': 'Дом уничтожен, пострадавших нет'
        },
        lockReason: '',
        editingNotice: '',
        neutralityBanner: '',
        unverifiedBanner: 'Требуется уточнение деталей у очевидцев.'
    },
    {
        id: '2',
        name: 'Большое воссоединение семьи',
        date: '4-6 июля 2022 г.',
        imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
        content: `Впервые за почти 10 лет вся семья собралась вместе, чтобы отпраздновать 70-летие Сэмюэла Торнтона. Мероприятие проходило в загородном доме у озера и длилось три дня.

Было организовано множество мероприятий, включая совместную рыбалку, конкурс на лучший шашлык и вечер историй у костра, где каждый делился своими воспоминаниями. Элеонора Вэнс, даже будучи в преклонном возрасте, рассказала несколько своих знаменитых историй о путешествиях, которые слушали и взрослые, и дети.`,
        details: {
            'Дата': '4-6 июля 2022 г.',
            'Место': 'Загородный дом у озера "Чистое"',
            'Повод': '70-летие Сэмюэла Торнтона',
            'Присутствовало': '42 члена семьи'
        },
        lockReason: '',
        editingNotice: '',
        neutralityBanner: '',
        unverifiedBanner: ''
    }
];

// --- ЭКСПОРТИРУЕМ ОБА МАССИВА ---
export { relativesData, eventsData };
