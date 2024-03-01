import fs from 'fs'

let start = 1, year = 2024

for (; start <= 12; start++) {
    // 创建文件
    let content = ''
    // 追加内容
    const startData = new Date(year, start, 0)
    const date = startData.getDate()
    for (let j = 1; j <= date ; j++) {
        const _curDate = new Date(year, start - 1, j)
        const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        console.log(`${year}年${start}月${j}日 ${week[_curDate.getDay()]}`)
        content += `
## ${week[_curDate.getDay()]} (${year}-${start}-${j}) 

- [ ] 学习唱歌30分钟
- [ ] 运动30分钟
- [ ] 小红书运营
- [ ] 抖音运营
- [ ] 微信运营
- [ ] 学习

        `
    }

    fs.writeFile(`./${start}月.md`, content, (err, data) => {
        if (!err) {
            console.log('创建成功~')
        }
    })
}