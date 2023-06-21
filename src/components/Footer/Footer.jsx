import './Footer.css'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p className={'footer__description'}>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className={'footer__flex'}>
                <p className={'footer__date'}>&copy;2023</p>
                <div className={'footer__sources'}>
                    <a target={"_blank"}
                          className={'footer__link'}
                          href={'https://practicum.yandex.ru'}
                    >
                        Яндекс.Практикум
                    </a>
                    <a
                        target={"_blank"}
                        className={'footer__link'}
                        href={'https://github.com/kemrankrm'}
                    >
                        Github
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
