import data from './public/api/weatherList.json';

// console.log(data);
const { list } = data;
console.log(new Date("2025-10-31T03:00:00Z").toLocaleDateString("uk-UA", { weekday: "long" }))
console.log(new Date("2025-10-30T23:00:00Z").toLocaleDateString("uk-UA", { weekday: "long" }))
console.log(new Date("2025-10-31 14:00:00").getDay())

const calcAverageNumber = (arr) => {
    const sum = arr.reduce((acc, item) => acc + item, 0)

    return Math.round((sum / arr.length) * 100) / 100
}

const transformToDailyForecast = (normalizedWeatherList) => {
    const groupByDay = (list) => {
        return list.reduce((acc, current) => {
            const lastItem = acc[acc.length - 1]
            if (!lastItem || lastItem[0].dtObj.getDay() !== current.dtObj.getDay()) {
                acc.push([current])
            } else {
                lastItem.push(current)
            }
            return acc
        }, [])
    }

    const calculateAverage = (arr) => {
        return arr.map((item) => {
            return {
                // dtObj: item[0].dtObj.setHours(0),
                dtObj: item[0].dtObj,
                mainTemp: calcAverageNumber(item.map(i => i.mainTemp)),
                mainFeelsLike: calcAverageNumber(item.map(i => i.mainTemp)),
                windSpeed: Math.max(...item.map(i => i.windSpeed)),
                pop: Math.max(...item.map(i => i.pop)),
            }
        })
    }

    const first = groupByDay(normalizedWeatherList);
    const second = calculateAverage(first);
    return second.slice(0, 3);
}

const normalizeWeatherItem = (item) => {
    return {
        dtObj: new Date(item.dt_txt),
        mainTemp: item.main.temp,
        mainFeelsLike: item.main.feels_like,
        windSpeed: item.wind.speed,
        pop: item.pop,
    }
}

const nwi = list.map(normalizeWeatherItem)
// console.log(list.map(normalizeWeatherItem));
const res = transformToDailyForecast(nwi)
console.log(res)
// console.log(new Date(res[0].dtObj))
// console.log(calcAverageNumber([2, 4, 6]))


// https://www.reddit.com/r/MTB/comments/1g2gbip/muc_off_big_bore_valves_first_impressions/?tl=ru