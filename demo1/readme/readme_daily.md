# Day1

- @ file readme.txt
- create react app (npx create-react-app <projectName> (js)
- create react app (npx create-react-app <projectName> --template typescript) (ts)
- js vs ts
- component == UI
- props == function's parameter
- state (side-effect variable) vs let/var (non-side-effect variable)
- Custom component
  - export function CMButton(){ return (<button></button>) }
  - <CMButton/>
- pass props
- import @ alias
- Events
  - onClick
  - onChange
- MUI.
  - https://mui.com/
  - component (Button, Paper), api (props in button, Paper)

# Day2

- Add Image
- Form
- Formik, react-hook-form
- <Formik initialValue, onSubmit> <form><input ..../> </form></Formik>
- MUI style (https://www.youtube.com/watch?v=F6J0-n6fRYc&list=PLjPfp4Ph3gBpbVPivsoIaOhfeNwmBskI8)
  - theme in app.tsx
  - style={{}}
  - sx
  - styled (styled component)
- axios
- http interception (Httpclient)
- tailwind

# Day3

- Redux
  - reducer, dispatch, useSelector, useAppDispatch, store,
  - fullfilled, reject, pending
  - https://www.youtube.com/watch?v=zBXf8GojEks
- react-rounter-dom (6)
  - const navigate = useNavigate()
  - navigate("/login")
  - navigate(-1)
  - navigate("/stock/edit/12")
  - pass parameter: useMatch() : const match = useMatch("/stock/edit/:id");
- Promise (async, await)
- typescript
  - types, interface
  - quicktype (json model) https://quicktype.io/

# Day4

- UI DataGrid
- styled component
- redux (extraReducer)
  - <Formik
    initialValues={initialValue}
    onSubmit={async (values, { setSubmitting }) => {
    const result = await dispatch(login(values));
    login.fulfilled.match(result) && navigate("/stock");
    }} >
- onClick={async () => {
  await dispatch(logout());
  navigate("/login");
  }}
- ChartJS

# Day5

- HOC (Higer order component)
- Complate shop
- Review DataGrid
- Box, Card, Paper, Grid (container | item)
- active class in Menu
- custom Font
- Create custom React Hook
- Test
  - testing-react-library (render, screen)
  - jest (test, it, expect, jest.onSpy)
  - sync test (getXXXX)
  - aysnc test (findXXX)
  - test under Redux
  - Mock api
- Review Redux
- Deployement
  - yarn build
  - cd build
  - npx serve .
  - fallback
  - npx serve -s .
  - run (jit - just in time (yarn start))
  - run (aot - ahead of time) (yarn build)
  - .env (dev, prod)
