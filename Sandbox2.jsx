import { useEffect, useState } from "react";

export const Sandbox2 = () => {

    function useDebounce(value, delay = 300) {
        const [debounced, setDebounced] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => setDebounced(value), delay);
            return () => clearTimeout(handler);
        }, [value, delay]);

        return debounced;
    }

    return (
        <div>sandbox2</div>
    );
}
