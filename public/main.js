console.log('我是main.js')



btn1.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')

    request.onreadystatechange = () =>{
        let state = request.readyState
        console.log(request.readyState)
        if(state === 4){
            console.log(`下载完成`)
            if (request.status>=200&&request.status<300){
                //创建style标签
                const style = document.createElement(`style`)
                //填写style内容
                style.innerText = request.response
                //插入到head中
                document.head.appendChild(style)
            }else {
                alert('加载CSS失败')
            }

        }
    }
    request.send()
}

btn2.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')

    request.onload = () =>{
        console.log(`request.response为`)
        console.log(request.response)

        //创建style标签
        const script = document.createElement(`script`)
        //填写style内容
        script.innerText = request.response
        //插入到head中
        document.body.appendChild(script)

        console.log('成功了')
    }

    request.onerror = () =>{
        console.log('失败了')
    }
    request.send()
}

btn3.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')

    request.onload = () =>{
        console.log(`request.response为`)
        console.log(request.response)

        //创建style标签
        const div = document.createElement('p')
        //填写style内容
        div.innerText = request.response
        console.log(`div为`)
        console.log(div)
        //插入到head中
        document.body.appendChild(div)

        console.log('成功了')
    }

    request.onerror = () =>{
        console.log('失败了')
    }
    request.send()
}

btn4.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET',"/4.xml")

    console.log(`4.xml被请求`)
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4 && request.status ===200){
            const dom =request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

btn5.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status ===200){
            const object = JSON.parse(request.response)
            myname.innerText = object.name
            // console.log(object)
            console.log(myname.innerText)
        }
    }
    request.send()
}
let n = 1
btn6.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET',`page${n+1}`)
    request.onreadystatechange = () =>{
        if (request.readyState ===4 && request.status===200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
            }
            )

            n+=1
        }
    }
    request.send()
}