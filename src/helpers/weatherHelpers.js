const normalizeWeatherItem = (item) => {
    return {
        dtObj: new Date(item.dt_txt),
        mainTemp: item.main.temp,
        mainFeelsLike: item.main.feels_like,
        windSpeed: item.wind.speed,
        pop: item.pop,
    }
}

const calcAverageNumber = (arr) => {
    const sum = arr.reduce((acc, item) => acc + item, 0)

    return Math.round((sum / arr.length) * 100) / 100
}

const makeWeeklyForecast = (rawWeatherList) => {
    const groupHourlyListByDay = (list) => {
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

    const aggregateDailyStats = (stats) => {
        return {
            // dtObj: item[0].dtObj.setHours(0),
            dtObj: stats[0].dtObj,
            mainTemp: calcAverageNumber(stats.map(item => item.mainTemp)),
            mainFeelsLike: calcAverageNumber(stats.map(item => item.mainTemp)),
            windSpeed: Math.max(...stats.map(item => item.windSpeed)),
            pop: Math.max(...stats.map(item => item.pop)),
        }
    }

    const setWeekDayLabels = (item) => ({
        ...item,
        dtObj: item.dtObj.toLocaleDateString("uk-UA", { weekday: "short" }),
    })

    const normalizedWeatherList = rawWeatherList.map(normalizeWeatherItem);
    const groupedWeatherList = groupHourlyListByDay(normalizedWeatherList);
    return groupedWeatherList
        .map(aggregateDailyStats)
        .map(setWeekDayLabels)
        .slice(0, 5);
}

const makeDailyForecast = (rawWeatherList) => {
    const setTimeLabels = (item) => ({
        ...item,
        dtObj: item.dtObj.getHours(),
    })

    return rawWeatherList
        .map(normalizeWeatherItem)
        .map(setTimeLabels)
        .slice(0, 5);
}

export { makeDailyForecast, makeWeeklyForecast }
