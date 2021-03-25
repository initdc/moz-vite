export interface Quick {
    "qid": number
    "icon": string
    "description": string
    "origin": string
    "sub": string | null
    "quick": string | null

}
export { getQuick, getAllQuick}

const Domain = 'moz.one'
const QuickList: Quick[] = [
    {
        "qid": 1,
        "icon": "./src/static/QuickIcon/github.svg",
        "description": "Github",
        "origin": "https://github.com",
        "sub": null,
        "quick": null
    },
    {
        "qid": 2,
        "icon": "./src/static/QuickIcon/cflare.svg",
        "description": "Cloudflare Dashboard",
        "origin": "https://dash.cloudflare.com/",
        "sub": "dash",
        "quick": "dash.moz.one"
    },
    {
        "qid": 3,
        "icon": "./src/static/vue3.png",
        "description": "Vue3 CN",
        "origin": "https://v3.cn.vuejs.org",
        "sub": "v3c",
        "quick": "v3c.moz.one"
    }
]


function getQuick(QuickID: number) {
    let ql: Quick[] = QuickList.filter(q => q.qid === QuickID)
    if (ql.length < 1) {
        console.error('Not data found for querying "' + QuickID + '"')
        return undefined
    }
    return ql[0]
}

function getAllQuick() {
    let ql: Quick[] = QuickList
    if (ql.length < 1) {
        console.error('Not data found for querying QuickList')
        return undefined
    }
    return ql
}


// export default function getComm( name :string){
//     let comm: <T> = <T>.filter(c => c.props === name )
//     if (comm.length < 1) {
//         console.error('Not data found for querying "'+ name +'"')
//     }
//     return comm
// }
