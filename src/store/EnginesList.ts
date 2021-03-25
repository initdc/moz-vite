export interface Engine {
    "eid": number
    'name': string
    'icon': string
    'query': string
}
export { getEngine, getAllEngines }
const EnginesList: Engine[] = [
    {
        "eid": 1,
        "name": "Google",
        "icon": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        "query": "https://www.google.com/search?q="
    },
    {
        "eid": 2,
        "name": "Bing",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Bing_logo_%282016%29.svg",
        "query": "https://www.bing.com/search?q="
    },
    {
        "eid": 3,
        "name": "Yandex",
        "icon": "https://yastatic.net/s3/home-static/_/Q/r/sx-Y7-1azG3UMxG55avAdgwbM.svg",
        "query": "https://yandex.com/search/?text="
    }
]

function getEngine(EngineID: number) {
    let eng: Engine[] = EnginesList.filter(e => e.eid === EngineID)
    if (eng.length < 1) {
        console.error('Not data found for querying "' + EngineID + '"')
        return undefined
    }
    return eng[0]
}

function getAllEngines() {
    let eng: Engine[] = EnginesList
    if (eng.length < 1) {
        console.error('Not data found for querying EnginesList')
        return undefined
    }
    return eng
}

