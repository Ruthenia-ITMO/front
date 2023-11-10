import {useMemo} from "react";

export const useCameras = (cameras, query) => {
    const searchCameras = useMemo(() => {
        return cameras.filter(camera => camera.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, cameras])

    return searchCameras;
}