import { FilterProps } from "@/components/types/index";

export async function fetchCars(filters: FilterProps){
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY || '',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    });

    const result = await response.json();
    console.log(result)
    return result;

}

export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };