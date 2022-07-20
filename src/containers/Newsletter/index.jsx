import { SectionTitle } from '../../components/SectionTitle';
import './Newsletter.scss';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="newsletter-container flex-column">
      <SectionTitle title="La Newsletter" pointColor="red-point" />
      <p className="white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
      </p>
      <div className="flex jcc mt-4">
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
