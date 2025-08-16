import { useGlobalContext } from './Context.jsx';

const App = () => {
	const { isSidebarOpen } = useGlobalContext();
	console.log(isSidebarOpen);

	return <h1>Strapi Submenus Clone</h1>;
};

export default App;
