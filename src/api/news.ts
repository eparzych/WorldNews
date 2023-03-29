export const fetchNews = (country: string) => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=${country}`, {
        headers: {
            "X-Api-Key": process.env.REACT_APP_API_KEY!
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`HTTP error ${response.status}`)
        }
    })
}
