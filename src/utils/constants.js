import movie_pic from '../images/movie_pic.png';
import movie_pic2 from '../images/movie_pic2.png';
import movie_pic3 from '../images/movie_pic3.png';
import movie_pic4 from '../images/movie_pic4.png';

export const navTabLinks = [
    {
        title: 'О проекте',
        url: '#',
        id: 'project'
    },
    {
        title: 'Технология',
        url: '#',
        id: 'tech',
    },
    {
        title: 'Студент',
        url: '#',
        id: 'student'
    }
];

export const aboutSectionTextContent = [
    {

    }
]

export const techList = [
    {
        title: 'HTML',
        id:'html'
    },
    {
        title: 'CSS',
        id:'css'
    },
    {
        title: 'JS',
        id:'js'
    },
    {
        title: 'React',
        id:'react'
    },
    {
        title: 'Git',
        id:'git'
    },
    {
        title: 'Express.js',
        id:'express'
    },
    {
        title: 'mongoDB',
        id:'mongo'
    }
]

export const portfolioList = [
    {
        title: 'Статичный сайт',
        url: 'https://github.com/kemrankrm/how-to-learn',
        id: 'static',
    },
    {
        title: 'Адаптивный сайт',
        url: 'https://github.com/kemrankrm/russian-travel',
        id: 'adaptive',
    },
    {
        title: 'Одностраничное приложение',
        url: 'https://github.com/kemrankrm/react-mesto-api-full',
        id: 'spa',
    },
]

export const moviesList = [
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic2,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic3,
        saved: true,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic4,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic2,
        saved: true,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic3,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic4,
        saved: true,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic2,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic3,
        saved: false,
    },
    {
        title: 'В погоне за Бенксли',
        duration: 27,
        image: movie_pic4,
        saved: false,
    }
]

export const SMALL_SCREEN_CARDS_NUMBER = 5;
export const MID_SCREEN_CARDS_NUMBER = 8;
export const LARGE_SCREEN_CARDS_NUMBER = 12;

export const MID_SCREEN_SIZE = 768;
export const LARGE_SCREEN_SIZE = 1280;

export const ONE_CARD_IN_ROW = 1;
export const TWO_CARD_IN_ROW = 2;
export const THREE_CARD_IN_ROW = 3;


export const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies';
export const baseUrl = 'https://api.nomoreparties.co'
export const mainApiUrl = 'https://api.kemrankrm-mesto.nomoredomains.work';

export const EMAIL_PATTERN = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}';
