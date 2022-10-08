import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';

function App() {
    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    };
    return (
        <div className="md:max-w-[1080px] my-10 mx-auto">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
}

export default App;
