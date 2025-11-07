import data from './public/api/weatherList.json';

// console.log(data);
const { list } = data;
console.log(new Date("2025-10-31T03:00:00Z").toLocaleDateString("uk-UA", { weekday: "long" }))
console.log(new Date("2025-10-30T23:00:00Z").toLocaleDateString("uk-UA", { weekday: "long" }))
console.log(new Date("2025-10-31 14:00:00").getDay())

// https://www.reddit.com/r/MTB/comments/1g2gbip/muc_off_big_bore_valves_first_impressions/?tl=ru
// https://soda.zp.ua/misto/kosplei-kaver-dens-ta-iarmarok-v-zaporizhzhi-vidbuvsia-kokomi-fest/
