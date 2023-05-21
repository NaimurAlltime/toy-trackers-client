import { useEffect } from "react";

const useTitle = title => {
    useEffect( () => {
        document.title = `Toy Trackers | ${title}`
    } , [title])
}

export default useTitle;