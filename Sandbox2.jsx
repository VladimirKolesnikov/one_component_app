// export const SearchBar = () => {
//     const [searchQuery, setSearchQuery] = useState('')
//     const [citiesList, setCitiesList] = useState([])
//     const [activeIndex, setActiveIndex] = useState(-1) // для стрілок

//     const debouncedSearchQuery = useDebounce(searchQuery, 400)

//     const changeInputHandler = (event) => {
//         setSearchQuery(event.target.value)
//         setActiveIndex(-1) // кожен новий ввод — скидаємо позицію
//     }

//     // пошук
//     useEffect(() => {
//         if (!debouncedSearchQuery.trim()) {
//             setCitiesList([])
//             return
//         }

//         getLocation(debouncedSearchQuery).then(setCitiesList)
//     }, [debouncedSearchQuery])

//     // обробка клавіш
//     const handleKeyDown = (e) => {
//         if (citiesList.length === 0) return

//         if (e.key === "ArrowDown") {
//             e.preventDefault()
//             setActiveIndex((prev) =>
//                 prev < citiesList.length - 1 ? prev + 1 : 0
//             )
//         }

//         if (e.key === "ArrowUp") {
//             e.preventDefault()
//             setActiveIndex((prev) =>
//                 prev > 0 ? prev - 1 : citiesList.length - 1
//             )
//         }

//         if (e.key === "Enter") {
//             e.preventDefault()
//             if (activeIndex >= 0) {
//                 const selected = citiesList[activeIndex]
//                 setSearchQuery(selected)      // підставляємо текст у інпут
//                 setCitiesList([])            // ховаємо список
//             }
//         }
//     }

//     return (
//         <div style={{ position: "relative", width: "300px" }}>
//             <form onSubmit={(e) => e.preventDefault()}>
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={changeInputHandler}
//                     onKeyDown={handleKeyDown}
//                 />
//                 <button type="submit">search</button>
//             </form>

//             {citiesList.length > 0 && (
//                 <ul className="autocomplete">
//                     {citiesList.map((city, index) => (
//                         <li
//                             key={index}
//                             className={index === activeIndex ? "active" : ""}
//                             onMouseEnter={() => setActiveIndex(index)}
//                             onClick={() => {
//                                 setSearchQuery(city)
//                                 setCitiesList([])
//                             }}
//                         >
//                             {city}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     )
// }

// ==========================================================

// import './LoginPage.scss';

// export const LoginPage = () => {
//     const handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     const handleReset = () => {
//         //
//     }

//     const handleEmailChange = (event) => {
//         //
//     }

//     return (
//         <form
//             onSubmit={handleSubmit}
//             onReset={handleReset}
//             className='login-form'
//         >
//             <label htmlFor='email-field'>email</label>
//             <input onChange={handleEmailChange} id='email-field' type='email' />

//             <label htmlFor='psw-field'>password</label>
//             <input id='psw-field' type='password' />

//             <div>
//                 <button type='submit'>sign up</button>
//                 <button type='reset'>cansel</button>
//             </div>

//         </form>
//     )
// }
