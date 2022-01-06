import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import SocialNav from './SocialNav';

const Header = () => {

    useEffect(() => {
        (function () {

            class Menu {
                constructor(settings) {
                    this.menuRootNode = settings.menuRootNode;
                    this.isOpened = false;
                }

                changeMenuState(menuState) {
                    return this.isOpened = !menuState;
                }

                changeToggleHint(toggleHint, toggleNode) {
                    toggleNode.textContent = toggleHint;
                    return toggleHint;
                }
            }

            const menuClassesNames = {
                rootClass: 'menu',
                activeClass: 'menu_activated',
                toggleClass: 'menu__toggle',
                toggleHintClass: 'menu__toggle-hint'
            }

            const jsMenuNode = document.querySelector(`.${menuClassesNames.rootClass}`);
            const demoMenu = new Menu({
                menuRootNode: jsMenuNode
            });

            function getCurrentToggleHint(currentMenuState) {
                return (currentMenuState !== true) ? 'Open menu' : 'Close menu';
            }

            function toggleMenu(event) {

                let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
                let toggleHint = getCurrentToggleHint(currentMenuState);

                demoMenu.changeToggleHint(
                    toggleHint,
                    demoMenu.menuRootNode.querySelector(`.${menuClassesNames.toggleHintClass}`)
                );
                demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);

                return currentMenuState;
            }

            jsMenuNode.querySelector(`.${menuClassesNames.toggleClass}`).addEventListener('click', toggleMenu);

            jsMenuNode.querySelectorAll('.nav-list-item').forEach((item) => {
                item.addEventListener('click', () => {
                    demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);
                });
            })

        })();
    }, []);
    return (
        // Special thanks to Stas Melnikov for the hamburger menu
        // @ https://codepen.io/melnik909/pen/JpJPYp
        <header className='portfolio-header'>
            <div className="menu">
                <nav className='navbar main-nav menu__nav' role='navigation'>
                    <div className="nav-content">
                        <ul className="nav-list menu__list r-list">
                            <li className="nav-list-item menu__group">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-list-item menu__group">
                                <Link to="about">About</Link>
                            </li>
                            <li className="nav-list-item menu__group">
                                <Link to="projects">Projects</Link>
                            </li>
                            <li className="nav-list-item menu__group">
                                <SocialNav />
                            </li>
                        </ul>
                        {/* <ThemeSwitcher /> */}
                    </div>
                </nav>
                <button className="menu__toggle r-button" type="button">
                    <span className="menu__hamburger m-hamburger">
                        <span className="m-hamburger__label">
                            <span className="menu__toggle-hint screen-reader">Open menu</span>
                        </span>
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
