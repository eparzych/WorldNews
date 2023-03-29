import testData from "./testData.json"

export const fetchNews = (country: string) => {
    return new Promise<any>((resolve, reject) => {
        resolve(testData);
        // reject("złe api")
    });
}
