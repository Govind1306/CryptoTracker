const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableRes');
var updat;

form.addEventListener("submit",(a)=>{
    a.preventDefault();

    const ctype=form.elements.coinType.value;
   
    fetchPrice(ctype);
    if(updat)
    {
        clearTimeout(updat);
    }

});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log();
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base=r.data.coin.name;
    const target = 'USD'

    res.innerHTML=(` <tr>
    <td><b>PROPERTY</b></td>
    <td><b>VALUE</b></td>
</tr>
<tr>
    <td>Price</td>
    <td>${price} USD</td>
</tr>
<tr>
    <td>Volume</td>
    <td>${volume}</td>
</tr>
<tr>
    <td>Change</td>
    <td>${change} USD</td>
</tr>`);

 updat = setTimeout(()=>fetchPrice(ctype),10000);
}