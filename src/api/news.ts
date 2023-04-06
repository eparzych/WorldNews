export const fetchNews = (country: string) => {
    return fetch(`https://gnews.io/api/v4/top-headlines?country=${country}&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`HTTP error ${response.status}`)
        }
    })
}
