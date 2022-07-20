import { SectionTitle } from '../../components/SectionTitle';
import './FAQ.scss';
export const FAQ = () => (
  <div className="faq-container flex-column">
    <SectionTitle title="FAQ" pointColor="red-point" className="yellow" />
    <div className="faq-articles flex wrap aic jcsb">
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
    title: 'Cloud 1',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
  {
    title: 'Cloud 2',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
  {
    title: 'Cloud 3',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
  {
    title: 'Cloud 4',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
];
