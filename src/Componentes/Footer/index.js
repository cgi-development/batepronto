import footer from "./../../../public/imagens/footer.png";
import logoimagens from "./../../../public/imagens/logoimagens/footer.png";

const Footer = () => {
    return (
    <footer>
        <ul className="ulfooter">
            <li class="">
                <img src={footer} alt=""  width="10%" />
            </li>
            <li class="">
                <img src={logoimagens} alt=""  width="70%" />
            </li>
        </ul>
    </footer>
    )
}