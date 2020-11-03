let data = {
    tweets: [{
        id: 234234,
        tweeter: {
            name: 'Western Railway',
            id: '@WesternRly', 
            time: '43m'
        },
        content: 'Resheduling of 02953 on 2nd Nov, 2020. Due to Gurjar Agitation in Kota Division of WC Rly, Train No. 02953 Special AG Rajdhani Express (Mumbai Central-NZM, Scheduled Departure at 17.40 hrs) is Re-scheduled at 21.00 hrs on 02.11.2020.'
    },{
        id: 234232,
        tweeter: {
            name: 'Western Railway',
            id: '@WesternRly', 
            time: '43m'
        },
        content: 'Resheduling of 02953 on 2nd Nov, 2020. Due to Gurjar Agitation in Kota Division of WC Rly, Train No. 02953 Special AG Rajdhani Express (Mumbai Central-NZM, Scheduled Departure at 17.40 hrs) is Re-scheduled at 21.00 hrs on 02.11.2020.',
        image: {
            src: 'https://english.cdn.zeenews.com/sites/default/files/2020/08/16/879414-passenger-train.gif',
            descHeader: 'WR Achieves Best Ever Loading, 8 Million Tons, in October 2020',
            descContent: 'Western Railway has managed to achieve its best-ever monthly freight performance, with 8.14 million tons of goods loaded in October 2020',
            descOrigin: 'pesp.in'
        }
    },{
        id: 234233,
        tweeter: {
            name: 'Western Railway',
            id: '@WesternRly', 
            time: '43m'
        },
        content: 'Resheduling of 02953 on 2nd Nov, 2020. Due to Gurjar Agitation in Kota Division of WC Rly, Train No. 02953 Special AG Rajdhani Express (Mumbai Central-NZM, Scheduled Departure at 17.40 hrs) is Re-scheduled at 21.00 hrs on 02.11.2020.',
        image: {
            src: 'https://english.cdn.zeenews.com/sites/default/files/2020/08/16/879414-passenger-train.gif',
            descHeader: 'WR Achieves Best Ever Loading, 8 Million Tons, in October 2020',
            descContent: 'Western Railway has managed to achieve its best-ever monthly freight performance, with 8.14 million tons of goods loaded in October 2020',
            descOrigin: 'pesp.in'
        }
    }, {
        id: 234235,
        tweeter: {
            name: 'Western Railway',
            id: '@WesternRly', 
            time: '43m'
        },
        content: 'Resheduling of 02953 on 2nd Nov, 2020. Due to Gurjar Agitation in Kota Division of WC Rly, Train No. 02953 Special AG Rajdhani Express (Mumbai Central-NZM, Scheduled Departure at 17.40 hrs) is Re-scheduled at 21.00 hrs on 02.11.2020.'
    }, {
        id: 234236,
        tweeter: {
            name: 'Western Railway',
            id: '@WesternRly', 
            time: '43m'
        },
        content: 'Resheduling of 02953 on 2nd Nov, 2020. Due to Gurjar Agitation in Kota Division of WC Rly, Train No. 02953 Special AG Rajdhani Express (Mumbai Central-NZM, Scheduled Departure at 17.40 hrs) is Re-scheduled at 21.00 hrs on 02.11.2020.'
    }, {
        id: 234237,
        tweeter: {
            name: 'Western Railway',
            id: '@WesternRly', 
            time: '43m'
        },
        content: 'Resheduling of 02953 on 2nd Nov, 2020. Due to Gurjar Agitation in Kota Division of WC Rly, Train No. 02953 Special AG Rajdhani Express (Mumbai Central-NZM, Scheduled Departure at 17.40 hrs) is Re-scheduled at 21.00 hrs on 02.11.2020.'
    }]
}
export function getTweets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

export function getFollow() {
    return [{
        name: 'Michelle Obama',
        id: '@Michelle Obama'
    },{
        name: 'Michelle Obama',
        id: '@Michelle Obama'
    },{
        name: 'Michelle Obama',
        id: '@Michelle Obama'
    }]
}
export function getHappening() {
    return [{
        title: 'IPL 2020',
        time: 'LIVE',
        content: 'IPL: Kolkata Knight Riders win by 60 runs to keep their playoff hopes alive'
    },{
        title: 'IPL 2020',
        time: 'LIVE',
        content: 'IPL: Kolkata Knight Riders win by 60 runs to keep their playoff hopes alive'
    },{
        title: 'IPL 2020',
        time: 'LIVE',
        content: 'IPL: Kolkata Knight Riders win by 60 runs to keep their playoff hopes alive'
    }]
}