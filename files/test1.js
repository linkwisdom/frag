module.exports = {
    type: 'component',
    uiType: 'ReportForm',
    children: [
        {
            html: '<h2>hello html</h2>',
        },
        {
            text: 'hello word'
        },
        {
            tag: 'button',
            text: '查询',
            attrs:{
                "data-action": "query",
                class: 'button primary',
            },
            nativeOn: {
                'click': 'alert()'
            }
        },
        {
            tag: 'div',
            clazz: ['container'], // clazz 用来实现行为复用、扩展
            attrs: {
                class: 'container'
            },
            children: [
                {
                    tag: 'div',
                    class: 'block',
                    html: '<a href="http://www.baidu.com/">baidu</a>',
                    style: 'display: inline-block'
                },
                {
                    tag: 'div',
                    class:  'block',
                    style: 'display: inline-block',
                    children: [
                        {
                            tag: 'button',
                            text: '点击',
                            onClick: 'alert()'
                        },
                        {
                            type: 'component',
                            uiType: 'CityPicker',
                            config: {
                                show: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            tag: 'input',
            type: 'number',
            value: 12,
            step: 0.5,
            size: 5,
            min: 10,
            max: 50
        }
    ]
}
