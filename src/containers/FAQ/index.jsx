import { SectionTitle } from '../../components/SectionTitle';
import './FAQ.scss';
export const FAQ = () => (
  <div className="faq-container flex-column">
    <SectionTitle title="FAQ" pointColor="red-point" className="yellow" />
    <div className="faq-articles flex wrap jcsb">
      {FAQ_CONTENT.map((el) => (
        <div className="mb-2" key={el.title}>
          <b className="red">{el.title}</b>
          <p className="white">{el.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const FAQ_CONTENT = [
  {
    title: 'Pourquoi un nouveau site pour Kodak ? ',
    desc: 'Nous souhaitons rendre accessible facilement l’ensemble de nos produits en France.',
  },
  {
    title: 'Quels avantages ai-je droit en achetant sur votre site ?',
    desc: 'Tout au long de l’année, nous vous proposerons des remises exceptionnelles pour faire plaisir à vos proches, ou vous faire plaisir !',
  },
  {
    title: 'Quelle est la durée de garantie sur nos produits ? ',
    desc: 'Dès que vous effectuez un achat sur notre site internet, vous bénéficiez d’une garantie légale de 24 mois, à compter de la livraison de votre commande.',
  },
  {
    title: 'Comment contacter Kodak ? ',
    desc: 'Vous pouvez joindre le service client par téléphone, au 09 34 87 83 90 (appel gratuit), par mail à l’adresse serviceclients@kodak.fr ou encore sur les réseaux sociaux.',
  },
  {
    title: 'Comment faire si je ne suis pas satisfait de ma commande ? ',
    desc: 'Vous avez un droit de rétractation de 14 jours, à compter de la date de livraison de votre commande. Vous pouvez dans ce cas nous retourner votre produit en contactant notre service client. ',
  },
];
