import { SectionTitle } from '../../components/SectionTitle';
import './Newsletter.scss';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="newsletter-container flex-column">
      <SectionTitle title="La Newsletter" pointColor="red-point" />
      <p className="white">
        Vous souhaitez ne rien manquer de nos actualités ? Inscrivez-vous à notre
        newsletter et bénéficiez d’une remise de 5% sur votre première commande. Et ce
        n’est pas tout, nous vous réservons encore quelques autres surprises !
      </p>
      <div className="email-input flex jcc mt-4">
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button onClick={() => setEmail('')}>JE M'INSCRIS</button>
      </div>
    </div>
  );
};
