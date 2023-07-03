# setup react-router-dom

- edit main.tsx
- import React from "react";

```ts
// HOC (Higher order component)
import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
  <App />
</BrowserRouter>;
```

- update App.tsx

```ts
export default function App({}: Props) {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="/page1" />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="\*" element={<Navigate to="/page2" />} />
      </Routes>
    </div>
  );
}
```
