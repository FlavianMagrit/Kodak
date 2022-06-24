export const Categories = () => {
  return (
    <div className="flex jcc aic">
      <div className="flex aic wrap">
        {CATEGORIES.map((category) => (
          <a href={category.route} className="mr-2 no-style bold black">
            {category.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const CATEGORIES = [
  {
    title: 'Categorie 1',
    route: '',
  },

  {
    title: 'Categorie 2',
    route: '',
  },
  {
    title: 'Categorie 3',
    route: '',
  },
  {
    title: 'Categorie 4',
    route: '',
  },
  {
    title: 'Categorie 5',
    route: '',
  },
  {
    title: 'Categorie 6',
    route: '',
  },
  {
    title: 'Categorie 7',
    route: '',
  },
  {
    title: 'Categorie 8',
    route: '',
  },
];
