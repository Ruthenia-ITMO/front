import React, {useState} from 'react';
import Input from "../Components/UI/Input/Input";
import {useCameras} from "../hooks/useCameras";

const Cameras = () => {
    const cameras = [
        {id: 1, address: 'Тихорецкий пр. д. 228', url: 'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=965aa513-a27d-4078-92b4-3ff104bc0622'},
        {id: 2, address: 'Светлановский пр. д. 1488', url: 'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=965aa513-a27d-4078-92b4-3ff104bc0622'},
        {id: 3, address: 'Северный пр. д. 666', url: 'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=965aa513-a27d-4078-92b4-3ff104bc0622'},
    ]
    const [query, setQuery] = useState('')
    const searchCameras = useCameras(cameras, query)

    return (
        <main className="cameras">
            <div className="clm">
                <h2>Активные камеры</h2>
                <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Поиск" />
                {searchCameras.map((camera, index) =>
                    <div key={camera.id}>
                        <iframe
                            width="500"
                            height="400"
                            src={camera.url}>
                        </iframe>
                        <a href={camera.url} target="_blank">{camera.address}</a>
                    </div>
                )}
                {!searchCameras.length && <h3 className='empty'>Камер по этому адресу не найдено</h3>}
            </div>
        </main>
    );
};

export default Cameras;