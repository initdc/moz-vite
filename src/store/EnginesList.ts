export interface Engine {
    "eid": number
    'name': string
    'icon': string
    'index': string
    'query': string
}
export { getEngine, getAllEngines }
const EnginesList: Engine[] = [
    {
        "eid": 1,
        "name": "Google",
        "icon": "static/EngineIcon/google.svg",
        "index": "https://www.google.com",
        "query": "https://www.google.com/search?q="
    },
    {
        "eid": 2,
        "name": "Bing",
        "icon": "static/EngineIcon/bing.svg",
        "index": "https://www.bing.com",
        "query": "https://www.bing.com/search?q="
    },
    {
        "eid": 3,
        "name": "Yandex",
        "icon": "static/EngineIcon/yandex.svg",
        "index": "https://yandex.com",
        "query": "https://yandex.com/search/?text="
    },
    {
        "eid": 4,
        "name": "DuckDuckGo",
        "icon": "static/EngineIcon/duckgo.svg",
        "index": "https://duckduckgo.com",
        "query": "https://duckduckgo.com/?q="
    },
    {
        "eid": 5,
        "name": "Aol.",
        "icon": "static/EngineIcon/aol.svg",
        "index": "https://search.aol.com",
        "query": "https://search.aol.com/aol/search?q="
    },
    {
        "eid": 6,
        "name": "Qwant",
        "icon": "static/EngineIcon/qwant.svg",
        "index": "https://www.qwant.com",
        "query": "https://www.qwant.com/?q="
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

