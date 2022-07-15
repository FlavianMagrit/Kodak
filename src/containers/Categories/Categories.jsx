export const Categories = () => (
  <div className="flex jcc aic">
    <div className="flex aic wrap">
      {CATEGORIES.map((category) => (
        <a
          key={category.id}
          href={category.route}
          className="mr-2 mb-2 mt-2 no-style bold black"
        >
          {category.title}
        </a>
      ))}
    </div>
  </div>
);

const CATEGORIES = [
  { id: 1, title: 'Categorie 1', route: '' },
  { id: 2, title: 'Categorie 2', route: '' },
  { id: 3, title: 'Categorie 3', route: '' },
  { id: 4, title: 'Categorie 4', route: '' },
  { id: 5, title: 'Categorie 5', route: '' },
  { id: 6, title: 'Categorie 6', route: '' },
  { id: 7, title: 'Categorie 7', route: '' },
  { id: 8, title: 'Categorie 8', route: '' },
];
