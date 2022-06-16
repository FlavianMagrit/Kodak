import './Navbar.scss';
export const Navbar = () => {

    return (
        <>
            <ul className={"top-navbar"}>
                <li><img src="" alt="Kodak"/></li>
                <li>Shop</li>
                <li>Collab</li>
                <li>App</li>
                <li>Abonnements</li>
                <li>Guides & conseils</li>
                <li><i>...</i></li>
                <li><i>Panier</i></li>
            </ul>
            <ul className={"bottom-navbar"}>
                <li>Catégorie 1</li>
                <li>Catégorie 2</li>
                <li>Catégorie 3</li>
                <li>Catégorie 4</li>
                <li>Catégorie 5</li>
                <li>Catégorie 6</li>
                <li>Catégorie 7</li>
                <li>Catégorie 8</li>
            </ul>
        </>
    )
}