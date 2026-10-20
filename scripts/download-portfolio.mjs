import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'

const portfolioImages = [
  'p1a.jpg',
  'p2b.jpg',
  'p3b.jpg',
  'p1.jpg',
  'p2.jpg',
  'p3.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '12.jpg',
  '20.jpg',
  '30.jpg',
  '32.jpg',
  '33.jpg',
  'p7.jpg',
  '29.jpg',
  '31.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',
  '36.jpg',
  '34.jpg',
  'p9.jpg',
  '17.jpg',
  '18.jpg',
  'p8.jpg',
]

const targetDir = path.resolve('src/assets/portfolio')

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

function download(filename) {
  const url = `https://techpulse.com.br/assets/images/portfolio/${filename}`
  const dest = path.join(targetDir, filename)

  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(dest)
          res.pipe(file)
          file.on('finish', () => {
            file.close()
            console.log(`[OK] ${filename}`)
            resolve(true)
          })
        } else {
          console.warn(`[FAIL ${res.statusCode}] ${url}`)
          resolve(false)
        }
      })
      .on('error', (err) => {
        console.error(`[ERR] ${url}:`, err.message)
        resolve(false)
      })
  })
}

async function run() {
  console.log(`Baixando imagens para ${targetDir}...`)
  for (const img of portfolioImages) {
    await download(img)
  }
  console.log('Download concluído.')
}

run()
