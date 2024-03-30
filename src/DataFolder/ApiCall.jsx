const apikey = process.env.REACT_APP_API_Key;
const baseurl = process.env.REACT_APP_BASE_URL;

export const currentweather = async (value) => {
    const url = `${baseurl}/data/2.5/weather?q=${value}&appid=${apikey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

export const getlocation = async (value) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${apikey}`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}


export const getforcast = async (value) => {
    const url = `${baseurl}/data/2.5/forecast?q=${value}&appid=${apikey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}