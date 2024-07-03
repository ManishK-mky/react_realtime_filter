## Real-Time Data Filtering in React

Enhance your app with real-time data filtering using `filter` and `map` in React for dynamic and responsive UI.

### Key Features
- **Dynamic Handling**: Manage large datasets from `data.js` in `assets`.
- **Responsive UI**: Instantly update displayed data based on user input.
- **Optimized Performance**: Efficient state changes and re-rendering.

### Example
```jsx
{data.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search);
            }).map((ele, index) => {
              return (
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td>{ele.first_name}</td>
                  <td>{ele.last_name}</td>
                  <td>{ele.city}</td>
                  <td>{ele.product}</td>
                  <td>{ele.movie}</td>
                </tr>
              )
            })}
```
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
