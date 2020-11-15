var keyword="nature"
if(args.widgetParameter){
  keyword=args.widgetParameter
}
const result=await get({url:"https://api.unsplash.com/search/photos?page=2&per_page=20&query="+keyword+"",headers:{"Accept-Encoding": "gzip, deflate, br","Accept-Language": "en-us","Authorization": "Client-ID eY3FwfDR6jv_y3ZqvhoTq1Pwi-Z9MDJ4jlgilTxEBA0","Connection": "keep-alive","Cookie": "ugid=eepR6OBLTxB8d9TEOeE1","Host": "api.unsplash.com","User-Agent": "Unsplash/73 CFNetwork/1197 Darwin/20.0.0",}})

const total=result.results.length
const index=Math.floor(Math.random()*total) 
const imgUrl=result.results[index].urls.regular
const req = await new Request(imgUrl);
const img = await req.loadImage();
const w = new ListWidget()
w.backgroundImage=img
w.url=imgUrl
let widget = w
Script.setWidget(widget)
Script.complete()
w.presentMedium()
 
  async function get(opts) {
      const request = new Request(opts.url)
      request.headers = {
        ...opts.headers,
        ...this.defaultHeaders
      }
      var result=await request.loadJSON()
      console.log(result)
      return result
    
}