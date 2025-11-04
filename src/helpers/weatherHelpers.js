const transformToDailyForecast = (normalizedWeatherList) => {
    const calcAverageNumber = (arr) => {
        const sum = arr.reduce((acc, item) => acc + item, 0)

        return Math.round((sum / arr.length) * 100) / 100
    }

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
    // return second.slice(0, 5);
    return second;
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

export {normalizeWeatherItem, transformToDailyForecast }
