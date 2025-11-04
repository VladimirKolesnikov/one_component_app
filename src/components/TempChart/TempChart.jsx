import { Line } from "react-chartjs-2";

export const TempChart = ({ weatherList }) => {
    console.log(weatherList.map(item => item.mainFeelsLike),)

    // const days = weatherList.map(item => item.dtObj.toLocaleDateString("uk-UA", { weekday: "short" }))
    // console.log(days)

    const data = {
        labels: weatherList.map(item => item.dtObj.getHours()),
        datasets: [
            {
                label: "feels like",
                data: weatherList.map(item => item.mainFeelsLike),
                borderColor: "black",
                // backgroundColor: "yellow",
                tension: 0.2,
                fill: false,
            },
            {
                label: "temperature",
                data: weatherList.map(item => item.mainTemp),
                borderColor: "green",
                // backgroundColor: "red",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            labels: {
                color: "white",           // колір тексту
                font: { size: 24 },
            },
            title: {
                display: true,
                text: "Продажі по місяцях",
                color: "#222",
                font: { size: 18, weight: "bold" },
                padding: 10,
            },
        },

        scales: {
            x: {
                grid: { color: "#ddd" },
            },
            y: {
                // beginAtZero: true,
                grid: { color: "darkcyan" },
            },
        },
    };

    return (
        <Line data={data} options={options} />
    )
};



    // const data = {
    //     labels: ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв"],
    //     datasets: [
    //         {
    //             label: "Продажі, грн",
    //             data: [30, 45, 40, 60, 55, 70],
    //             borderColor: "black",
    //             // backgroundColor: "yellow",
    //             tension: 0.2,
    //             fill: false,
    //         },
    //         {
    //             label: "another chart",
    //             data: [10, 35, 80, 65, 65, 45],
    //             borderColor: "green",
    //             backgroundColor: "red",
    //             tension: 0.4,
    //             fill: true,
    //         },
    //     ],
    // };