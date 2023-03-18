import './Footer.css'

const Footer = () => {
    return (
        <section className={'footer'}>
            <p className={'footer__description'}>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className={'footer__flex'}>
                <p className={'footer__date'}>&copy;2023</p>
                <div className={'footer__sources'}>
                    <a className={'footer__link'} href={'#'}>Яндекс.Практикум</a>
                    <a className={'footer__link'} href={'#'}>Github</a>
                </div>
            </div>
        </section>
    )
}

export default Footer
