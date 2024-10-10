declare module 'mfe_home_kuosel/*' {
  const value: any;
  export default value;
}

declare module 'mfe_ux_kuosel/*' {
  const value: any;
  export default value;
}

declare module 'mfe_ux_kuosel/providers/StylesProvider' {
  import React from 'react';

  interface StylesProviderProps {
    children: React.ReactNode;
  }

  const StylesProvider: React.FC<StylesProviderProps>;

  export default StylesProvider;
}

declare module 'mfe_ux_kuosel/layouts/HomeLayout' {
  import React from 'react';

  interface HomeLayoutProps {
    children?: React.ReactNode;
  }

  const HomeLayout: React.FC<HomeLayoutProps>;

  export default HomeLayout;
}
