export interface Quick {
    "qid": number
    "icon": string
    "description": string
    "origin": string
    "sub": string | null
    "quick": string | null

}

export {getQuick, getAllQuick}

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
        "icon": "./src/static/QuickIcon/gitlab.svg",
        "description": "Gitlab",
        "origin": "https://gitlab.com",
        "sub": null,
        "quick": null
    },
    {
        "qid": 3,
        "icon": "./src/static/QuickIcon/vue3.svg",
        "description": "Vue3 CN",
        "origin": "https://v3.cn.vuejs.org",
        "sub": "v3c",
        "quick": "v3c.moz.one"
    },
    {
        "qid": 4,
        "icon": "./src/static/QuickIcon/jetbrains.svg",
        "description": "Jetbrains",
        "origin": "https://www.jetbrains.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 5,
        "icon": "./src/static/QuickIcon/vsc.svg",
        "description": "VSCode",
        "origin": "https://code.visualstudio.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 6,
        "icon": "./src/static/QuickIcon/cflare.svg",
        "description": "Cloudflare dashboard",
        "origin": "https://dash.cloudflare.com/",
        "sub": "dash",
        "quick": "dash.moz.one"
    },
    {
        "qid": 7,
        "icon": "./src/static/QuickIcon/ns1.svg",
        "description": "NS1 dashboard",
        "origin": "https://my.nsone.net/",
        "sub": "my",
        "quick": "my.moz.one"
    },
    {
        "qid": 8,
        "icon": "./src/static/QuickIcon/arvan.svg",
        "description": "ArvanCloud npanel",
        "origin": "https://npanel.arvancloud.com/",
        "sub": "npl",
        "quick": "npl.moz.one"
    },
    {
        "qid": 9,
        "icon": "./src/static/QuickIcon/heroku.svg",
        "description": "Heroku login",
        "origin": "https://id.heroku.com/login",
        "sub": null,
        "quick": null
    },
    {
        "qid": 10,
        "icon": "./src/static/QuickIcon/netlify.svg",
        "description": "Netlify overview",
        "origin": "https://app.netlify.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 11,
        "icon": "./src/static/QuickIcon/aws.svg",
        "description": "aws console",
        "origin": "http://console.aws.amazon.com",
        "sub": "aws",
        "quick": "aws.moz.one"
    },
    {
        "qid": 12,
        "icon": "./src/static/QuickIcon/azure.svg",
        "description": "Azure Free resources",
        "origin": "https://portal.azure.com/#blade/Microsoft_Azure_Billing/FreeServicesBlade",
        "sub": "azure",
        "quick": "azure.moz.one"
    },
    {
        "qid": 13,
        "icon": "./src/static/QuickIcon/gcp.svg",
        "description": "GCP console",
        "origin": "https://console.cloud.google.com/",
        "sub": "gcp",
        "quick": "gcp.moz.one"
    },
    {
        "qid": 14,
        "icon": "./src/static/QuickIcon/ibm.svg",
        "description": "IBM Cloud",
        "origin": "https://cloud.ibm.com/login",
        "sub": "ibm",
        "quick": "ibm.moz.one"
    },
    {
        "qid": 15,
        "icon": "./src/static/QuickIcon/qcloud.svg",
        "description": "Tencent Cloud domain",
        "origin": "https://console.cloud.tencent.com/domain",
        "sub": "qc",
        "quick": "qc.moz.one"
    },
    {
        "qid": 16,
        "icon": "./src/static/QuickIcon/sololearn.svg",
        "description": "Sololearn",
        "origin": "https://www.sololearn.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 17,
        "icon": "./src/static/QuickIcon/mdn.svg",
        "description": "MDN documentation",
        "origin": "https://developer.mozilla.org/en-US/docs/Web",
        "sub": "mdn",
        "quick": "mdn.moz.one"
    },
    {
        "qid": 18,
        "icon": "./src/static/QuickIcon/golang.svg",
        "description": "golang doc",
        "origin": "https://golang.org/doc/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 19,
        "icon": "./src/static/QuickIcon/tailwind.svg",
        "description": "Tailwind CSS",
        "origin": "https://tailwindcss.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 20,
        "icon": "./src/static/QuickIcon/dev.svg",
        "description": "IBM developer",
        "origin": "https://developer.ibm.com/technologies/",
        "sub": "dev",
        "quick": "dev.moz.one"
    },
    {
        "qid": 21,
        "icon": "./src/static/QuickIcon/zoho.svg",
        "description": "ZOHO",
        "origin": "https://www.zoho.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 22,
        "icon": "./src/static/QuickIcon/fworks.svg",
        "description": "freshping",
        "origin": "https://www.freshworks.com/website-monitoring/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 23,
        "icon": "./src/static/QuickIcon/divio.svg",
        "description": "DIVIO",
        "origin": "https://www.divio.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 24,
        "icon": "./src/static/QuickIcon/fly.svg",
        "description": "Fly.io",
        "origin": "https://fly.io/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 25,
        "icon": "./src/static/QuickIcon/ali.svg",
        "description": "Alibaba Cloud",
        "origin": "https://account.alibabacloud.com/login/login.htm",
        "sub": "ali",
        "quick": "ali.moz.one"
    },
    {
        "qid": 26,
        "icon": "./src/static/QuickIcon/nuxt.svg",
        "description": "nuxt js",
        "origin": "https://nuxtjs.org/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 27,
        "icon": "./src/static/QuickIcon/vite.svg",
        "description": "vite js",
        "origin": "https://vitejs.dev/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 28,
        "icon": "./src/static/NavIcon/zsh1.svg",
        "description": "zsh.one",
        "origin": "https://zsh.one",
        "sub": null,
        "quick": null
    },
    {
        "qid": 29,
        "icon": "./src/static/NavIcon/1drv.svg",
        "description": "OneDrive Direct",
        "origin": "https://1drv.us",
        "sub": null,
        "quick": null
    },
    {
        "qid": 30,
        "icon": "./src/static/NavIcon/fibone.svg",
        "description": "fibone",
        "origin": "https://fib.one",
        "sub": null,
        "quick": null
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
