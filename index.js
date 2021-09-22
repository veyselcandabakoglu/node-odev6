const koa = require('koa')
const koaRouter = require('koa-router')// importing Koa-Router

const app = new koa()
const router = new koaRouter()

router.get('index', '/', (context) => {
    context.body = "<h1>INDEX SAYFASINA HOSGELDINIZ.</h1>"
});

router.get('hakkimda', '/hakkimda', (context) => {
    context.body = "<h1>HAKKIMDA SAYFASINA HOSGELDINIZ.</h1>"
});

router.get('iletisim', '/iletisim', (context) => {
    context.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ.</h1>"
});





const port = 3000;
app.use(router.routes())
    .use(router.allowedMethods())// registering routes to the application

app.listen(port, () => console.log(`Sunucu ${port} portunda çalışmaya başladı...`));


