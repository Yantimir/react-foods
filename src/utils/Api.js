const API_KEY = process.env.REACT_APP_API_KEY;
class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    // получение всех продуктов
    getAllCategories = async () => {
        const response = await fetch(`${this._baseUrl}/${API_KEY}/categories.php`)
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
    }

    // получение продукта по ID
    getMealById = async (mealId) => {
        const response = await fetch(`${this._baseUrl}/${API_KEY}/lookup.php?i=${mealId}`);
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
    }

    // поиск по категориям 
    getFilteredCategory = async (categoryName) => {
        const response = await fetch(`${this._baseUrl}/${API_KEY}/filter.php?c=${categoryName}`);
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
    }

}

const config = {
    baseUrl: "https://www.themealdb.com/api/json/v1",
}

const api = new Api(config);
export default api;