type MenuItem = {
  href: string;
  title: string;
};

const MENUS: MenuItem[] = [
  { href: '/about-us', title: 'about-us' },
  { href: '/products', title: 'products' },
  { href: '/news', title: 'news' },
  { href: '/csr', title: 'csr' },
  { href: '/career', title: 'career' },
  { href: '/contact', title: 'contact' },
] as const;

export default MENUS;
