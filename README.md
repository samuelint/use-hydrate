<h1 align="center">useHydrate</h1>
<p>Simple Redux & NextJS 13 AppRouter hydration</p>

<pre>
pnpm add use-hydrate
yarn add use-hydrate
npm i use-hydrate
</pre>

<h2>Usage example</h2>

```typescript
import React, { ReactNode, use } from 'react';


interface Props {
  params: {
    id: string;
   },
  children: ReactNode;
}

export default async function Layout({
  params,
  children,
}: Props) {
  const data = use(listMyData({ id: params.id }))

  return (
    <div>
      <MyClientSideComponent existing={data} />
      { children }
    </div>
  );
}
```

```typescript
'use client';
import { useHydrate } from 'use-hydrate';

import { setData } from './redux/my.slice';
import { selectData } from './redux/data.selector';


interface Props {
  existing?: MyData[]
}


export default function MyClientSideComponent({ existing = [] }: Props) {
  const data = useHydrate({ initial: existing, action: setData, selector: selectData });

  return (
    <div className="flex">
      { data }
    </div>
  );
}
```

