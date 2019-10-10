# CareStore

The app is available at https://care-estore.herokuapp.com

### Funktionaalsed nõuded
#### Valmis
1. Toodete kuvamine esilehel (done)
1. Toote sisuleht (done)
1. Toote pildi suurelt avamine
1. Toodete sorteerimine nime põhjal (done)
1. Toodete sorteerimine hinna põhjal (done)
1. Toodete filtreerimine kategooriate põhjal (done)
1. Leitud toodete arvu kuvamine (done)
1. Kasutaja registeerimine
1. Kasutaja sisse logimine
1. Kasutaja välja logimine
1. Kasutaja profiili muutmine
1. Toodete ostukorvi lisamine
1. Toodete ostukovist eemaldamine
1. Ostukorvi vaatmine
1. Toodete otsimine märksõnade kaudu
1. Tarnekoha valimine
1. Tellimuse maksmine
1. Kasutaja parooli taastamine
1. Toodete lisamine
1. Toodete kustutamine
1. Toodete muutmine
1. Tellimuste vaatamine


### Tehniline küsimus
Kuidas teha route'i parameeter valikuliseks?

<details>
    <summary>Vastus</summary>

Lisa ? (küsimärk) parameetri lõppu.

Näiteks:
```javascript
app.get('/api/products/:category?', () => {});
```
</details>

### Meme (OLD)

```
┓┏┓┏┓┃
┛┗┛┗┛┃＼○／
┓┏┓┏┓┃ / Friday
┛┗┛┗┛┃ノ)
┓┏┓┏┓┃ Deploys
┛┗┛┗┛┃
┓┏┓┏┓┃
┛┗┛┗┛┃
┓┏┓┏┓┃
┃┃┃┃┃┃
┻┻┻┻┻┻
```