new Vue({
    'el': '#container',
    data: {
        scalseNum: 1, //缩放比例
    },
    mounted() {
        //计算缩放比例
        this.resize_window();
        window.addEventListener('resize', () => {
            this.resize_window();
        });
    },
    methods: {
        //计算缩放比例
        resize_window() {
            let w_height = Number(document.documentElement.clientHeight / 1080);
            this.scalseNum = w_height;
        }
    },
})