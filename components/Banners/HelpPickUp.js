import Link from 'next/link'

const HelpPickUpMattress = () => {
    return (
        <div className="help-pick-up">
            <div className="help-pick-up__content">
                <div className="help-pick-up__title">Подбор матраса</div>
                <div className="help-pick-up__desc">
                    20 секунд и перед вами лучшие варианты!
                </div>
                <Link href="/">
                    <a>
                        <button className="help-pick-up__btn">Подобрать</button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default HelpPickUpMattress
