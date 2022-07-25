export const Categories = () => (
  <div className="categories flex jcc aic">
    <div className="flex aic wrap">
      {CATEGORIES.map((category) => (
        <a
          key={category.title}
          href={category.route}
          className="pl-1 pr-1 mb-2 mt-2 no-style bold black"
        >
          {category.title}
        </a>
      ))}
    </div>
  </div>
);

const CATEGORIES = [
  { title: 'Categorie 1', route: '' },
  { title: 'Categorie 2', route: '' },
  { title: 'Categorie 3', route: '' },
  { title: 'Categorie 4', route: '' },
  { title: 'Categorie 5', route: '' },
  { title: 'Categorie 6', route: '' },
  { title: 'Categorie 7', route: '' },
  { title: 'Categorie 8', route: '' },
];
