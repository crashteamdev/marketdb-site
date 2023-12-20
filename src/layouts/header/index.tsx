import { FC, useState } from 'react';
import { Link  } from "react-scroll";
import './style.scss';
import CloseIcon from '../../components/icons/close';
import { TelegramIcon } from '../../components/icons/socialIcons';
import clsx from 'clsx';


interface IProps {
    className?: string;
}

const Header: FC = ({ className }: IProps) => {
    const [burger, setBurger] = useState(false);
    const [topBar, closeTopBar] = useState(true);

    const handleClose = () => {
        closeTopBar(false);
        localStorage.setItem('topbar1', 'false');
    }

    return (
        <>
            {/* {(localStorage.getItem('topbar1') !== 'false' && topBar) &&
                <div className='top-bar'>
                    <span>«Что продавать на Маркетплейсе? Ищем прибыльные товары через сервис аналитики MarketDB» сегодня в 18:00!</span>
                    <div className='btn-group'>
                        <a className='btn btn-active' href="https://t.me/+NtOosCLh5d9jNmVi" rel='noreferrer' target='_blank' onClick={handleClose}>Записаться</a>
                        <div className='btn' onClick={handleClose}>Закрыть</div>
                    </div>
                </div>
            } */}
            <header className={clsx("header", className)}>
                <div className="container">
                    <div className="row header-row">
                        <div className='header-left'>
                            <a href="/" className="header-logo">
                                <img src="./images/logo.svg" alt="" />
                            </a>
                            <div className="header-menu">
                                <a className='active' href="/">Главная</a>
                                <Link
                                    activeClass="active"
                                    to="tariff"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Тарифы
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    О нас
                                </Link>
                                <a target='_blank' rel="noreferrer" href="https://vk.cc/coPhwU">
                                    Расширение
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <a className='header-phone' target='_blank' rel="noreferrer" href="https://t.me/marketdbru">
                                <TelegramIcon color="#fff" />
                                Напишите нам!
                            </a>
                            <a className='btn' href="https://space.marketdb.pro/">Войти</a>
                        </div>
                        <div className="header-burger" onClick={() => setBurger(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                {burger &&
                    <div className="header-mob-menu">
                        <div>
                            <div className="header-mob-menu-top">
                                <a href="/" className="header-logo">
                                    <img src="./images/logo-mob.svg" alt="" />
                                </a>
                                <div onClick={() => setBurger(false)}>
                                    <CloseIcon color='#1A1A1A' />
                                </div>
                            </div>
                            <div className="header-mob-menu-content">
                                <a href="/">Главная</a>
                                <a href="/">Тарифы</a>
                                <a href="/">О нас</a>
                            </div>
                        </div>
                        <div className="header-mob-menu-bottom">
                            <a target='_blank' rel="noreferrer" href="https://t.me/marketdbru" className='header-mob-menu-phone'>
                                <TelegramIcon color="#fff" />
                                Напишите нам!
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://space.marketdb.pro/" className="btn">Войти</a>
                        </div>
                    </div>
                }
            </header>
        </>
    )
};

export default Header;
