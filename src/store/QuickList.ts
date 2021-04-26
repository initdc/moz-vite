export interface Quick {
    "qid": number
    "icon": string
    "description": string
    "origin": string
    "sub": string | null
    "quick": string | null

}

export {getQuick, getAllQuick}

// const Domain = 'moz.one'
const QuickList: Quick[] = [
    {
        "qid": 1,
        "icon": "static/QuickIcon/github.svg",
        "description": "Github",
        "origin": "https://github.com",
        "sub": null,
        "quick": null
    },
    {
        "qid": 2,
        "icon": "static/QuickIcon/gitlab.svg",
        "description": "Gitlab",
        "origin": "https://gitlab.com",
        "sub": null,
        "quick": null
    },
    {
        "qid": 3,
        "icon": "static/QuickIcon/vue3.svg",
        "description": "Vue3 CN",
        "origin": "https://v3.cn.vuejs.org",
        "sub": "v3c",
        "quick": "v3c.moz.one"
    },
    {
        "qid": 4,
        "icon": "static/QuickIcon/jetbrains.svg",
        "description": "Jetbrains",
        "origin": "https://www.jetbrains.com/",
        "sub": "jet",
        "quick": "jet.moz.one"
    },
    {
        "qid": 5,
        "icon": "static/QuickIcon/vsc.svg",
        "description": "VSCode",
        "origin": "https://code.visualstudio.com/",
        "sub": "vsc",
        "quick": "vsc.moz.one"
    },
    {
        "qid": 6,
        "icon": "static/QuickIcon/cflare.svg",
        "description": "Cloudflare dashboard",
        "origin": "https://dash.cloudflare.com/",
        "sub": "dash",
        "quick": "dash.moz.one"
    },
    {
        "qid": 7,
        "icon": "static/QuickIcon/ns1.svg",
        "description": "NS1 dashboard",
        "origin": "https://my.nsone.net/",
        "sub": "my",
        "quick": "my.moz.one"
    },
    {
        "qid": 8,
        "icon": "static/QuickIcon/arvan.svg",
        "description": "ArvanCloud npanel",
        "origin": "https://npanel.arvancloud.com/",
        "sub": "npl",
        "quick": "npl.moz.one"
    },
    {
        "qid": 9,
        "icon": "static/QuickIcon/heroku.svg",
        "description": "Heroku login",
        "origin": "https://id.heroku.com/login",
        "sub": "id",
        "quick": "id.moz.one"
    },
    {
        "qid": 10,
        "icon": "static/QuickIcon/netlify.svg",
        "description": "Netlify overview",
        "origin": "https://app.netlify.com/",
        "sub": "app",
        "quick": "app.moz.one"
    },
    {
        "qid": 11,
        "icon": "static/QuickIcon/aws.svg",
        "description": "aws console",
        "origin": "http://console.aws.amazon.com",
        "sub": "aws",
        "quick": "aws.moz.one"
    },
    {
        "qid": 12,
        "icon": "static/QuickIcon/azure.svg",
        "description": "Azure Free resources",
        "origin": "https://portal.azure.com/#blade/Microsoft_Azure_Billing/FreeServicesBlade",
        "sub": "azure",
        "quick": "azure.moz.one"
    },
    {
        "qid": 13,
        "icon": "static/QuickIcon/gcp.svg",
        "description": "GCP console",
        "origin": "https://console.cloud.google.com/",
        "sub": "gcp",
        "quick": "gcp.moz.one"
    },
    {
        "qid": 14,
        "icon": "static/QuickIcon/ibm.svg",
        "description": "IBM Cloud",
        "origin": "https://cloud.ibm.com/login",
        "sub": "ibm",
        "quick": "ibm.moz.one"
    },
    {
        "qid": 15,
        "icon": "static/QuickIcon/vercel.svg",
        "description": "Vercel dashboard",
        "origin": "https://vercel.com/dashboard",
        "sub": null,
        "quick": "now.sh"
    },
    {
        "qid": 16,
        "icon": "static/QuickIcon/sololearn.svg",
        "description": "Sololearn",
        "origin": "https://www.sololearn.com/",
        "sub": "solo",
        "quick": "solo.moz.one"
    },
    {
        "qid": 17,
        "icon": "static/QuickIcon/mdn.svg",
        "description": "MDN documentation",
        "origin": "https://developer.mozilla.org/en-US/docs/Web",
        "sub": "mdn",
        "quick": "mdn.moz.one"
    },
    {
        "qid": 18,
        "icon": "static/QuickIcon/golang.svg",
        "description": "golang doc",
        "origin": "https://golang.org/doc/",
        "sub": "godoc",
        "quick": "godoc.moz.one"
    },
    {
        "qid": 19,
        "icon": "static/QuickIcon/tailwind.svg",
        "description": "Tailwind CSS",
        "origin": "https://tailwindcss.com/",
        "sub": "tcss",
        "quick": "tcss.moz.one"
    },
    {
        "qid": 20,
        "icon": "static/QuickIcon/dev.svg",
        "description": "IBM developer",
        "origin": "https://developer.ibm.com/technologies/",
        "sub": "dev",
        "quick": "dev.moz.one"
    },
    {
        "qid": 21,
        "icon": "static/QuickIcon/zoho.svg",
        "description": "ZOHO",
        "origin": "https://www.zoho.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 22,
        "icon": "static/QuickIcon/fworks.svg",
        "description": "freshping",
        "origin": "https://www.freshworks.com/website-monitoring/",
        "sub": "fresh",
        "quick": "fresh.moz.one"
    },
    {
        "qid": 23,
        "icon": "static/QuickIcon/divio.svg",
        "description": "DIVIO",
        "origin": "https://www.divio.com/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 24,
        "icon": "static/QuickIcon/fly.svg",
        "description": "Fly.io",
        "origin": "https://fly.io/",
        "sub": null,
        "quick": null
    },
    {
        "qid": 25,
        "icon": "static/QuickIcon/bitbucket.svg",
        "description": "Bitbucket",
        "origin": "https://bitbucket.org/",
        "sub": "bit",
        "quick": "bit.moz.one"
    },
    {
        "qid": 26,
        "icon": "static/QuickIcon/vite.svg",
        "description": "vite js",
        "origin": "https://vitejs.dev/",
        "sub": "vite",
        "quick": "vite.moz.one"
    },
    {
        "qid": 27,
        "icon": "static/QuickIcon/nuxt.svg",
        "description": "nuxt js",
        "origin": "https://nuxtjs.org/",
        "sub": "nuxt",
        "quick": "nuxt.moz.one"
    },
    {
        "qid": 28,
        "icon": "static/QuickIcon/fastly.svg",
        "description": "fastly",
        "origin": "https://manage.fastly.com/services/all",
        "sub": "fastly",
        "quick": "fastly.moz.one"
    },
    {
        "qid": 29,
        "icon": "static/NavIcon/zsh1.svg",
        "description": "zsh.one",
        "origin": "https://zsh.one",
        "sub": null,
        "quick": null
    },
    {
        "qid": 30,
        "icon": "static/NavIcon/1drv.svg",
        "description": "OneDrive Direct",
        "origin": "https://1drv.us",
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
