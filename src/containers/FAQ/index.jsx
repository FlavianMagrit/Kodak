import { SectionTitle } from '../../components/SectionTitle';
import './FAQ.scss';
export const FAQ = () => (
  <div className="faq-container flex-column">
    <SectionTitle title="FAQ" pointColor="red-point" className="yellow" />
    <div className="flex wrap aic jcsb w60 ml-13">
      {FAQ_CONTENT.map((el) => (
        <div className="w45 mb-2" key={el.title}>
          <b className="red">{el.title}</b>
          <p className="white">{el.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const FAQ_CONTENT = [
  {
    title: 'Cloud',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
  {
    title: 'Cloud',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
  {
    title: 'Cloud',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
  {
    title: 'Cloud',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      'since the 1500s, when an unknown printer took a galley of type and scrambled ' +
      'it to make a type specimenbook. It has survived not only five centuries, but also' +
      ' the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',
  },
];
