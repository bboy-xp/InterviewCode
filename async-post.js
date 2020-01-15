function getData(urls) {
    return new Promise((resolve, reject) => {
        // 新建一个res数组用来储存请求返回的数据
        const res = [],
            len = urls.length;
            // 传入一个urls数组，遍历发送请求
        urls.forEach((url, i) => {
            fetch('http://localhost:8080' + url).then(data => data.json())
                .then(data => {
                    // 将数据放入缓存数组
                    res[i] = {
                        data,
                        printed: false
                    }; 
                    let flag = true;
                    for (let j = 0; j < len && flag; j += 1) {
                        if (res[j]) { // 如果标志为 j 的有返回值，则继续
                            if (!res[j].printed) {
                                console.log(res[j].data);
                                res[j].printed = true;
                                j === len - 1 && resolve(res.map(o => o.data))
                            }
                        } else { // 无返回值，则跳出
                            flag = false;
                        }
                    }
                }, reject);
        });
    })
}

const listPromise = getData(['/data.json', '/data2.json', '/data3.json', '/data4.json']);
listPromise.then(res => console.log(res));