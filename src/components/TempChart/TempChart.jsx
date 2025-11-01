import { Line } from "react-chartjs-2";

const a = (list) => {
    list.reduce((acc, curr) => {
        curr.dt_txt.split(' ');
    }, [])
}

export const TempChart = () => {
    const data = {
        labels: ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв"],
        datasets: [
            {
                label: "Продажі, грн",
                data: [300, 450, 400, 600, 550, 700],
                borderColor: "black",
                backgroundColor: "yellow",
                tension: 0.4,
                fill: true,
            },
            {
                label: "another chart",
                data: [-100, 350, 800, 650, 650, 450],
                borderColor: "green",
                backgroundColor: "red",
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
                beginAtZero: true,
                grid: { color: "darkcyan" },
            },
        },
    };

    return (
        <Line data={data} options={options} />
    )
};
