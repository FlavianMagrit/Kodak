export const Menu = () => {
  return (
    <div className="mt-1">
      <h1>KODAK</h1>
    </div>
  );
};

const MenuItem = [
  {
    tab: 'Shop',
    route: '/shop',
  },
  {
    tab: 'Collab',
    route: '/collab',
  },
  {
    tab: 'Reconditionnés',
    route: '/repackaged',
  },
  {
    tab: 'Store Locator',
    route: '/store-locator',
  },
  {
    tab: 'Guides & Conseils',
    route: '/guides-and-advices',
  },
];
